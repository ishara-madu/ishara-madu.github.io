import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider, Helmet } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <>
    <HelmetProvider>
      <Helmet>
      <meta name="description" content="Welcome to Ishara Madushanka Bandara's official portfolio. Explore my projects, skills, and achievements." />
      <meta name="keywords" content="Ishara Madushanka, portfolio, web development, developer" />
      <meta name="author" content="Ishara Madushanka Bandara" />
      </Helmet>
      <App />
    </HelmetProvider>
    <App />
  </>,
)
