import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { LuFolder, LuGitBranch, LuMessageSquare, LuCheck, LuGitPullRequest, LuPlus } from 'react-icons/lu';

interface GitHubIssue {
    id: number;
    title: string;
    body: string;
    html_url: string;
    created_at: string;
    user: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<GitHubIssue[]>([]);
    const [loading, setLoading] = useState(true);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const repoOwner = "ishara-madu";
    const repoName = "ishara-madu.github.io";
    
    // Fetch all open issues to support title-based filtering fallback
    const issuesApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=open`;
    const newIssueUrl = `https://github.com/ishara-madu/ishara-madu.github.io/issues/new?labels=testimonial&title=Testimonial+from+[Your+Name]&body=Write+your+recommendation+here.+You+can+also+specify+your+job+title/role.`;

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(issuesApiUrl);
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                
                // Filter issues: must not be a PR, and must have 'testimonial' in title or labels
                const filteredIssues = data.filter((issue: any) => {
                    if (issue.pull_request) return false;
                    const hasLabel = issue.labels && issue.labels.some((l: any) => l.name.toLowerCase() === 'testimonial');
                    const hasTitle = issue.title && issue.title.toLowerCase().includes('testimonial');
                    return hasLabel || hasTitle;
                }) as GitHubIssue[];
                
                setTestimonials(filteredIssues);
            } catch (err) {
                console.error("Failed to load testimonials from GitHub issues.", err);
                setTestimonials([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [issuesApiUrl]);

    // Format date string to display neatly (e.g. June 15, 2026)
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div
            id="testimonials"
            ref={ref}
            className={`flex h-auto w-full rounded-3xl overflow-hidden justify-center items-center mb-5 border border-slate-200 border-opacity-80 shadow-md bg-slate-50/70 transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
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
                      <span className="text-slate-700 font-semibold">testimonials</span>
                    </div>
                  </div>

                  {/* Git branch info */}
                  <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <LuGitBranch className="w-3.5 h-3.5 text-indigo-500" />
                      branch: main
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <span className="flex items-center gap-1 text-slate-500 font-semibold">
                      status: read-write
                    </span>
                  </div>
                </div>

                {/* Header block with Call-to-action button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex flex-col max-w-2xl">
                        <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold">
                            // testimonials.tsx - client recommendations & reviews
                        </span>
                        <h2 className="text-2xl md:text-5xl font-extrabold mb-3 text-slate-900 select-none">
                            &lt;Testimonials /&gt;
                        </h2>
                        <p className="text-base font-normal text-slate-650 leading-relaxed">
                            Kind words and technical feedback shared by clients, project managers, and peer developers. GitHub accounts are verified via API queries.
                        </p>
                    </div>

                    {/* Write testimonial action button */}
                    <a
                        href={newIssueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-950 text-white font-mono text-xs font-bold rounded-2xl shadow-md hover:shadow-lg border border-zinc-800/80 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 select-none flex-shrink-0"
                    >
                        <LuPlus className="w-4 h-4" />
                        <span>write_testimonial.sh</span>
                    </a>
                </div>

                {/* Testimonial List Grid */}
                {loading ? (
                    /* Terminal loading simulator state */
                    <div className="w-full bg-white/60 border border-slate-200/50 rounded-2xl p-6 font-mono text-xs text-slate-500 space-y-1.5 select-none shadow-inner">
                        <div>$ git log --grep="testimonial" --max-count=4</div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                            <span>Fetching verified reviews from GitHub repository api...</span>
                        </div>
                    </div>
                ) : testimonials.length === 0 ? (
                    /* Empty State - No testimonials found */
                    <div className="w-full bg-white/60 border border-slate-200/50 rounded-3xl p-8 font-mono text-xs text-slate-500 space-y-2 select-none shadow-inner text-center py-12">
                        <div className="text-slate-400">// no public recommendations registered on git yet</div>
                        <div className="text-slate-500 text-sm">Run 'write_testimonial.sh' to submit a client review!</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white/80 border border-slate-200/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative"
                            >
                                {/* Git Code Review Header */}
                                <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-200/60 select-none">
                                    <div className="flex items-center gap-2.5">
                                        <LuGitPullRequest className="w-4 h-4 text-purple-500" />
                                        <span className="font-mono text-[11px] font-bold text-slate-500">
                                            PR_REVIEW_APPROVAL
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded text-[10px] tracking-wide font-mono">
                                        <LuCheck className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>APPROVED</span>
                                    </div>
                                </div>

                                {/* Reviewer Credentials & Profile */}
                                <div className="p-5 flex flex-col justify-between flex-grow">
                                    <div>
                                        <div className="flex items-center gap-3.5 mb-4">
                                            {/* GitHub Avatar Profile Image */}
                                            <img
                                                src={item.user.avatar_url}
                                                alt={`${item.user.login} avatar`}
                                                className="w-10 h-10 rounded-full object-cover border border-slate-200/80 shadow-inner select-none pointer-events-none"
                                            />
                                            <div className="flex flex-col">
                                                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                                                    {item.title.replace(/^Testimonial from /i, "")}
                                                </h4>
                                                <a
                                                    href={item.user.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-xs text-indigo-650 hover:underline inline-block mt-0.5"
                                                >
                                                    @{item.user.login}
                                                </a>
                                            </div>
                                        </div>

                                        {/* Review Message Text */}
                                        <p className="text-xs sm:text-sm font-normal text-slate-650 leading-relaxed italic relative pl-4 border-l-2 border-indigo-200">
                                            "{item.body}"
                                        </p>
                                    </div>

                                    {/* Commit Date log footer */}
                                    <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-100 font-mono text-[10px] text-slate-400 select-none">
                                        <span className="flex items-center gap-1">
                                            <LuMessageSquare className="w-3.5 h-3.5 text-slate-350" />
                                            verified_comment
                                        </span>
                                        <span>{formatDate(item.created_at)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
