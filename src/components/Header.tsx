import Navbar from "./Navbar";
export default function Header() {
  return (
    <div
      className={`flex justify-start md:justify-between w-full h-14 items-center text-sm px-2 animate-slide-down`}>
      <div className={`items-center flex gap-2`}>
        <div className="flex animate-pulse bg-green-500 rounded-full w-5 h-5" />
        ISHARA
      </div>
      <Navbar />
    </div>
  )
}
