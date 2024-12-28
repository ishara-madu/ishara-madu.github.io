import homeData from '../data/home.json'
import placeholder from '../assets/images/placeholder.webp'

export default function ImageCard() {
    return (
        <div id='person' className={`flex w-full md:w-4/12 h-[300px] md:h-full bg-slate-200 hover:scale-[1.01] duration-150 rounded-3xl overflow-hidden`}>
            <img src={homeData.image || placeholder} alt={`${homeData.name[2]}'s image`} className={`w-full h-full overflow-hidden object-cover object-center`}/>
        </div>
    )
}
