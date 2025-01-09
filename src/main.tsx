import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider, Helmet } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <>
    <HelmetProvider>
      <Helmet>
        <meta name="description" content="Ishara Madushanka Bandara's portfolio. I am a web and software developer specializing in React, Node.js, NeutralinoJS, Electron, and app development. Check out my projects and get in touch!" />
        <meta
          name="keywords"
          content="Ishara Madushanka Bandara, Ishara Madushanka, Ishara, Madushanka, Madhusanka, Bandara, portfolio, web developer, software developer, app developer, front-end developer, full-stack developer, freelance developer, Sri Lankan developer, React developer, JavaScript developer, Node.js developer, Vite, NeutralinoJS, Electron, Unity, Python, Sri Lanka developer"
        />
        <meta name="author" content="Ishara Madushanka Bandara" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Ishara Madushanka Bandara - Portfolio" />
        <meta
          property="og:description"
          content="Ishara Madushanka Bandara's portfolio showcasing web and software development projects. Specializing in React, Node.js, and app development."
        />
        <meta property="og:image" content="https://raw.githubusercontent.com/ishara-madu/ishara-madu.github.io/refs/heads/main/src/assets/images/userImages/ishara-madushanka-bandara-1.jpg" />
        <meta property="og:url" content="https://ishara-madu.github.io" />
        <meta property="og:type" content="website" />

        {/* Person Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ishara Madushanka Bandara",
      "url": "https://ishara-madu.github.io/",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczPUFeGOFAiqAkbdsD68xBo3m2A7EYRnTX_Si-8YnUS466LcoWO5HpR_elPp6cG_EdKYkEPDkadaiF3zallDgV9oOnQkc3UkW3PEEvcnsCjqYd3g0BZ9MzjLdTrNr-fMEw8PxK5YPs93O02a-F8t_eVN=w570-h704-s-no-gm?authuser=0",
      "jobTitle": "Web Developer, Software Developer, App Developer, UI/UX Designer",
      "sameAs": [
        "https://www.instagram.com/ishara_madhusanka_bandara",
        "https://www.linkedin.com/in/ishara-madu",
        "https://www.facebook.com/IsharaMadushankaBandara",
        "https://www.pinterest.com/pixel__eye",
        "https://www.tiktok.com/@pixel.eye",
        "https://github.com/ishara-madu"
      ]
    }
  `}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://ishara-madu.github.io/",
      "name": "Ishara Madushanka Bandara's Portfolio",
      "description": "A portfolio website showcasing the skills and projects of Ishara Madushanka Bandara.",
      "publisher": {
        "@type": "Person",
        "name": "Ishara Madushanka Bandara",
        "url": "https://ishara-madu.github.io/"
      }
    }
  `}
        </script>


      </Helmet>
      <App />
    </HelmetProvider>
  </>,
)
