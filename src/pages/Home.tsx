import ImageCard from "../components/ImageCard";
import homeData from '../data/home.json'
import placeholder from '../assets/images/gradient.png'
import ContactLinks from "../components/ContactLinks";
export default function Home() {

    return (
        <div id="home" className={`flex h-auto md:h-[520px] flex-col-reverse md:flex-row w-full gap-y-5 md:gap-y-0 md:gap-x-5 justify-center md:justify-between pb-2`}>
            <div className="flex h-auto md:h-full w-full md:w-8/12 rounded-3xl animate-slide-up overflow-hidden justify-center items-center z-[-1]">
                <div className={`w-full h-full object-cover absolute`}>
                    <img src={homeData.customGradientImage || placeholder} className={`w-full h-full object-cover animate-halfRotate z-0`} style={{ transformOrigin: "center center", scale: "1.5" }} />
                </div>
                <div className="flex h-[500px] md:h-full w-full bg-slate-500 bg-opacity-10 p-10 flex-col justify-between z-10">
                    <div className="flex flex-col">
                        <h1 className={`text-2xl md:text-5xl`}>{homeData.title}</h1>
                        <p className={`text-base font-normal my-10`}>{homeData.description}</p>
                    </div>
                    <ContactLinks />
                </div>
            </div>
            <ImageCard />
        </div>
    )
}
