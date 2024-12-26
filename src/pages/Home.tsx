import ImageCard from "../components/ImageCard";

export default function Home() {
    
    return (
        <div className={`flex h-auto md:h-[550px] flex-col-reverse md:flex-row w-full gap-y-5 md:gap-y-0 md:gap-x-5 justify-center md:justify-between`}>
            <div className="flex h-auto md:h-full w-full md:w-8/12 bg-slate-300 rounded-3xl animate-slide-up"></div>
            <ImageCard/>
        </div>
    )
}
