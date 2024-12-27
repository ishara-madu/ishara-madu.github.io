import './App.css'
import Header from './components/Header'
import HeadOptions from './components/HeadOptions'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div className={`flex justify-center w-full h-auto font-semibold mb-10`}>
      <div className="flex justify-center h-auto w-full md:w-[1150px] flex-col px-5 overflow-hidden">
        <HeadOptions />
        <Header />
        <Home />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
