import { useEffect, useState } from 'react';
import ProjectCard, { ProjectType } from '../components/ProjectCard';
import projectData from '../data/projects.json';
import { LuFolder, LuGitBranch, LuBox, LuActivity } from 'react-icons/lu';

const CACHE_KEY = 'portfolio_github_projects';
const CACHE_TIMESTAMP_KEY = 'portfolio_github_projects_timestamp';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  // Map local JSON data to match ProjectType structure as a reliable fallback
  const getLocalFallback = (): ProjectType[] => {
    return (projectData as any[]).map((p, idx) => {
      let formattedTitle = p.title.replace(/[-_]/g, ' ');
      formattedTitle = formattedTitle.replace(/([a-z])([A-Z])/g, '$1 $2');
      formattedTitle = formattedTitle.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
      formattedTitle = formattedTitle.replace(/(\d+G)([A-Z])/g, '$1 $2');
      const title = formattedTitle.replace(/\b\w/g, (c: string) => c.toUpperCase());
      
      return {
        id: p.id || idx + 1,
        title,
        description: p.description,
        image: p.image,
        images: p.images || [p.image],
        homepage: p.homepage,
        textColor: p.textColor || "#ffffff",
        tags: p.tags || [],
        github: p.github,
        playstore: p.playstore,
        website: p.website
      };
    });
  };

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const forceRefresh = urlParams.get('refresh') === 'true' || urlParams.get('nocache') === 'true';

        if (forceRefresh) {
          const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
          window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
        }

        // 1. Check local storage cache first to avoid rate-limiting
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        
        if (cachedData && cachedTimestamp && !forceRefresh) {
          const age = Date.now() - parseInt(cachedTimestamp, 10);
          if (age < CACHE_DURATION) {
            setProjects(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }

        // 2. Fetch public repositories from GitHub
        const res = await fetch('https://api.github.com/users/ishara-madu/repos?per_page=100&sort=updated');
        if (!res.ok) throw new Error("Failed to fetch repositories from GitHub");
        
        const repos = await res.json();
        if (!Array.isArray(repos)) throw new Error("Invalid response format");

        // 3. Filter repos: stargazers_count >= 2 OR contains 'portfolio' topic
        const filteredRepos = repos.filter((repo: any) => {
          const hasStars = repo.stargazers_count && repo.stargazers_count >= 2;
          const hasTopics = repo.topics && (
            repo.topics.includes('portfolio') || 
            repo.topics.includes('portfolio-project')
          );
          return hasStars || hasTopics;
        });

        if (filteredRepos.length === 0) {
          // If no repos match, use local fallback
          setProjects(getLocalFallback());
          setLoading(false);
          return;
        }

        // 4. Resolve details (images and readmes) concurrently for filtered repos
        const parsedProjects = await Promise.all(
          filteredRepos.map(async (repo: any) => {
            const owner = repo.owner.login;
            const name = repo.name;
            
            // Format title neatly (e.g. 4GLTEOnlyApp -> 4G LTE Only App, hireme-web -> Hireme Web)
            let formattedTitle = name.replace(/[-_]/g, ' ');
            formattedTitle = formattedTitle.replace(/([a-z])([A-Z])/g, '$1 $2');
            formattedTitle = formattedTitle.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
            formattedTitle = formattedTitle.replace(/(\d+G)([A-Z])/g, '$1 $2');
            const title = formattedTitle.replace(/\b\w/g, (c: string) => c.toUpperCase());
            const description = repo.description || "A public repository developed by ishara-madu.";
            const tags = repo.topics && repo.topics.length > 0 
                ? repo.topics.map((t: string) => t.toUpperCase()) 
                : ["GITHUB", "REPOSITORY"];
                
            let github = repo.html_url;
            let website = repo.homepage || undefined;
            let playstore = undefined;
            
            // Parse Google Play Store links from repo homepage if any
            if (website && website.includes("play.google.com")) {
                playstore = website;
                website = undefined;
            }
            
            // Query image folder 'portfolio_images' in the root
            let image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"; // generic banner
            let images: string[] = [];
            try {
                const contentsUrl = `https://api.github.com/repos/${owner}/${name}/contents/portfolio_images`;
                const contentsRes = await fetch(contentsUrl);
                if (contentsRes.ok) {
                    const files = await contentsRes.json();
                    if (Array.isArray(files)) {
                        const imgFiles = files.filter(f => {
                            const fname = f.name.toLowerCase();
                            return fname.endsWith(".png") || fname.endsWith(".jpg") || fname.endsWith(".jpeg") || fname.endsWith(".webp") || fname.endsWith(".gif");
                        });
                        if (imgFiles.length > 0) {
                            // Sort alphabetically to maintain order
                            imgFiles.sort((a, b) => a.name.localeCompare(b.name));
                            image = imgFiles[0].download_url;
                            images = imgFiles.map(f => f.download_url);
                        }
                    }
                }
            } catch (e) {
                // No folder or error, skip
            }
            
            // Query README.md for extra links
            try {
                const readmeUrl = `https://raw.githubusercontent.com/${owner}/${name}/${repo.default_branch || 'main'}/README.md`;
                const readmeRes = await fetch(readmeUrl);
                if (readmeRes.ok) {
                    const text = await readmeRes.text();
                    
                    const playStoreRegex = /(https:\/\/play\.google\.com\/store\/apps\/details\?id=[a-zA-Z0-9._]+)/i;
                    const playMatch = text.match(playStoreRegex);
                    if (playMatch && !playstore) {
                        playstore = playMatch[1];
                    }
                    
                    const websiteRegex = /\[(?:Live Demo|Website)\]\((https?:\/\/[^\s)]+)\)/i;
                    const webMatch = text.match(websiteRegex);
                    if (webMatch && !website) {
                        website = webMatch[1];
                    }
                }
            } catch (e) {
                // Readme parsing failed, skip
            }

            return {
                id: repo.id,
                title,
                description,
                image,
                images: images.length > 0 ? images : [image],
                homepage: repo.homepage || repo.html_url,
                textColor: "#ffffff",
                tags,
                github,
                playstore,
                website
            };
          })
        );

        // 5. Save to state and update cache
        setProjects(parsedProjects);
        localStorage.setItem(CACHE_KEY, JSON.stringify(parsedProjects));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());

      } catch (err) {
        console.warn("GitHub fetch failed, attempting cache fallback first.", err);
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          try {
            setProjects(JSON.parse(cachedData));
            console.log("Successfully loaded expired cached GitHub projects as fallback.");
            return;
          } catch (e) {
            // Cached parse failed, fall through to local fallback
          }
        }
        setProjects(getLocalFallback());
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <div
      id="projects"
      className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5 border border-slate-200 border-opacity-80 shadow-md bg-slate-50/70"
    >
      <div className="flex h-auto w-full p-6 md:p-10 flex-col bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_16px]">
        
        {/* macOS Window Controls & Navigation Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200/80 select-none">
          <div className="flex items-center gap-4">
            {/* macOS Window Controls */}
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/90 shadow-sm" />
            </div>
            
            {/* Folder breadcrumb path */}
            <div className="flex items-center gap-1 font-mono text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/40">
              <LuFolder className="w-3.5 h-3.5 text-slate-400" />
              <span>root</span>
              <span>/</span>
              <span>src</span>
              <span>/</span>
              <span className="text-slate-700 font-semibold">projects</span>
            </div>
          </div>

          {/* Repository Branch Specs */}
          <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <LuGitBranch className="w-3.5 h-3.5 text-indigo-500" />
              branch: main
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              active deploys
            </span>
          </div>
        </div>

        {/* Header Block with Quick Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="flex flex-col max-w-2xl">
            <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold">
              // projects.tsx - selected repositories & works
            </span>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-3 text-slate-900 select-none">
              &lt;MyProjects /&gt;
            </h2>
            <p className="text-base font-normal text-slate-650 leading-relaxed">
              A curated showcase of applications and systems I have developed, focusing on functional design and technical depth.
            </p>
          </div>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-2 gap-4 bg-white/60 border border-slate-200/70 rounded-2xl p-4 shadow-sm min-w-[220px] select-none font-mono">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Repos</span>
              <span className="text-lg font-bold text-slate-800 flex items-center gap-1.5">
                <LuBox className="w-4.5 h-4.5 text-indigo-500" />
                {projects.length}
              </span>
            </div>
            <div className="flex flex-col border-l border-slate-200/50 pl-4">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Status</span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 h-7">
                <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
                {loading ? "SYNCING" : "STABLE"}
              </span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {loading && projects.length === 0 ? (
          /* Sleek loader animation */
          <div className="w-full bg-white/60 border border-slate-200/50 rounded-2xl p-6 font-mono text-xs text-slate-500 space-y-1.5 select-none shadow-inner">
            <div>$ git log --grep="portfolio" --max-count=4</div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
              <span>Fetching dynamic repository specifications from GitHub...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 w-full">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
