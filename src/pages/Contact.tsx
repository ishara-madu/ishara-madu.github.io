import ContactLinks from "../components/ContactLinks";
import placeholder from '../assets/images/gradient.png'
import homeData from '../data/home.json'
import contactData from '../data/contacts.json'

export default function Contact() {
  return (
    <div id="contact" className="flex h-[420px] md:h-[300px] w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center">
      <div className={`flex w-[800px] md:w-full h-[420px] md:h-[300px] object-cover absolute`}>
        <img src={homeData.customGradientImage || placeholder} className={`w-[800px] md:w-full h-[800px] object-cover animate-halfRotate z-0`} style={{ transformOrigin: "center center", scale: "1.5" }} />
      </div>
      <div className="flex h-[420px] md:h-[300px] w-full bg-slate-500 bg-opacity-10 p-10 flex-col justify-between z-10">
        <div className="flex flex-col">
          <h1 className={`text-2xl md:text-5xl`}>Want to work together?</h1>
          <p className={`text-base font-normal my-4`}>Feel free to reach out for collaborations or just a friendly hello</p>
          <a className={`text-base font-normal`} href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </div>
        <ContactLinks />
      </div>
    </div>
  )
}
