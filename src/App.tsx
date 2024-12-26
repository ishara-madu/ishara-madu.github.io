import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className={`flex justify-center w-full h-auto font-semibold`}>
      <div className="flex justify-center w-full md:w-[1086px]">
        <Header />
      </div>
    </div>
  )
}

export default App
