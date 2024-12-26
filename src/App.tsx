import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
    <div className={`flex justify-center w-full h-auto font-semibold`}>
      <div className="flex justify-center w-full md:w-[1086px] flex-col">
        <Header />
        <Home/>
      </div>
    </div>
  )
}

export default App
