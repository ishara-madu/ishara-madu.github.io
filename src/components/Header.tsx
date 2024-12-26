import Navbar from "./Navbar";
import homeData from "../data/home.json"
export default function Header() {
  return (
    <div
      className={`flex justify-between w-full h-14 items-center text-sm animate-slide-down`}>
      <div className={`items-center flex gap-2 pl-5 md:pl-0`}>
        <div className={`flex animate-pulse rounded-full w-5 h-5`} title="Available for hire" style={{backgroundColor:homeData.color}}/>
        <a href="/">{homeData.name}</a>
      </div>
      <Navbar />
    </div>
  )
}
