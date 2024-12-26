import './App.css'
import Header from './components/Header'
import HeadOptions from './components/HeadOptions'
import Home from './pages/Home'

function App() {

  return (
    <div className={`flex justify-center w-full h-auto font-semibold`}>
      <div className="flex justify-center w-full md:w-[1086px] flex-col px-2 relative overflow-hidden">
        <HeadOptions/>
        <Header />
        <Home/>
      </div>
    </div>
  )
}

export default App
