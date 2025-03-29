import Image from "next/image";
import hero from "../../public/hero/hero.png";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { FaHospital } from "react-icons/fa";
import medicalTeam from "../../public/icons/medicalTeam.png";
import appointment from "../../public/icons/appointment.png";
import healthCare from "../../public/icons/healthCare.png";
import consultation from "../../public/icons/consultation.png";
import maleDoc from "../../public/images/maleDoc.png";
import femaleDoc from "../../public/images/femaleDoc.png"


export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col relative bg-white">
      {/* Hero Section */}
      <section className="w-full relative flex flex-col">
        {/* Hero Image */}
        <Image
          src={hero}
          alt="hero"
          className="object-cover object-center w-full max-h-9/12"
        />

        {/* Hero Text Section */}
        <div
          className="absolute flex flex-col gap-2 md:gap-4 sm:gap-3 lg:gap-6 
      top-8 left-6 min-[460px]:top-12 min-[460px]:left-8 sm:top-16 sm:left-10 
      lg:left-20 xl:top-28 xl:left-28 2xl:top-32 2xl:left-32"
        >
          {/* Hero Title */}
          <h3
            className="text-sm text-black w-28 text-left font-bold leading-none 
        min-[460px]:text-lg min-[460px]:w-36 min-[540px]:text-2xl min-[540px]:w-48 
        md:text-4xl md:w-68 lg:text-5xl lg:w-96 xl:text-6xl xl:w-5/12 2xl:text-7xl"
          >
            Serving Your Health Needs Is Our Priority.
          </h3>

          {/* Hero Description */}
          <p
            className="text-slate-400 w-36 text-left text-[6px] leading-tight 
        min-[460px]:text-[7px] min-[460px]:w-36 min-[540px]:text-[10px] min-[540px]:w-52 
        md:text-xs md:w-68 lg:text-base lg:w-96 xl:text-lg xl:w-5/12 2xl:text-xl"
          >
            There’s nothing more important than our good health, because that’s
            our principal capital asset for our good future.
          </p>

          {/* Appointment Button */}
          <button
            className="text-white py-1.5 px-1 lg:py-3 cursor-pointer bg-blue-700 hover:bg-blue-500 
        w-16 text-[6px] leading-tight min-[540px]:text-[7px] min-[540px]:w-20 rounded-sm 
        md:text-[10px] md:w-24 lg:w-32 lg:text-xs xl:text-sm xl:w-36 xl:py-3.5"
          >
            Make Appointment
          </button>
        </div>

        {/* Doctor Information Section */}
        <div className="w-full flex justify-around items-center py-2 lg:py-3 bg-white rounded-lg relative bottom-5">
          {/* Doctor Icon */}
          <FaUserDoctor className="text-green-700 text-lg md:text-2xl lg:text-3xl xl:text-5xl" />

          {/* Doctor Name & Role */}
          <div className="flex gap-2 items-center">
            <FaStethoscope className="text-blue-700 text-xs lg:text-xl md:text-lg xl:text-2xl" />
            <div className="flex flex-col">
              <h1 className="text-[8px] md:text-xs lg:text-base xl:text-xl font-bold text-black">
                Dr. Anna Lindemann
              </h1>
              <h3 className="text-[8px] md:text-xs lg:text-base xl:text-xl text-slate-500">
                General Practitioners
              </h3>
            </div>
          </div>

          {/* Experience */}
          <div className="flex gap-2 items-center">
            <BsClipboard2PlusFill className="text-blue-700 text-xs md:text-lg lg:text-xl xl:text-2xl" />
            <div className="flex flex-col">
              <h1 className="text-[8px] md:text-xs lg:text-base xl:text-xl font-bold text-black">7+ Years</h1>
              <h3 className="text-[8px] md:text-xs lg:text-base xl:text-xl text-slate-500">Experience</h3>
            </div>
          </div>

          {/* Hospital Information */}
          <div className="flex gap-2 items-center">
            <FaHospital className="text-blue-700 text-xs md:text-lg lg:text-xl xl:text-2xl" />
            <div className="flex flex-col">
              <h1 className="text-[8px] md:text-xs lg:text-base xl:text-xl font-bold text-black">
                Waraso Hospital
              </h1>
              <h3 className="text-[8px] md:text-xs lg:text-base xl:text-xl text-slate-500">Place of Service</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Health Services Section */}
      <section className="w-full flex flex-col items-center justify-center">
        {/* Section Title */}
        <h2 className="text-black text-base font-bold sm:text-lg md:text-xl lg:text-3xl xl:text-5xl">Health Services</h2>

        {/* Section Description */}
        <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xl text-slate-400">
          We are always here to listen and understand.
        </p>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-4 px-3 place-items-center items-center mt-5 md:mt-8 lg:mt-12">
          {/* Medical Team */}
          <div className="flex flex-col items-center text-center px-1.5">
            <Image
              src={medicalTeam}
              alt="medical team"
              className="object-cover object-center w-6 sm:w-8 md:w-10 lg:w-16 xl:w-24"
            />
            <h3 className="text-black text-[7px] sm:text-[9px] md:text-[11px] lg:text-base xl:text-xl font-bold mt-2 mb-1">
              Medical Team
            </h3>
            <p className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-lg text-slate-400 leading-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolore perspiciatis voluptatibus.
            </p>
          </div>

          {/* Health Care */}
          <div className="flex flex-col items-center text-center px-1.5">
            <Image
              src={healthCare}
              alt="Health Care"
              className="object-cover object-center w-6 sm:w-8 md:w-10 lg:w-16 xl:w-24"
            />
            <h3 className="text-black text-[7px] sm:text-[9px] md:text-[11px] lg:text-base xl:text-xl font-bold mt-2 mb-1">
              Health Care
            </h3>
            <p className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-lg text-slate-400 leading-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolore perspiciatis voluptatibus.
            </p>
          </div>

          {/* Consultation */}
          <div className="flex flex-col items-center text-center px-1.5">
            <Image
              src={consultation}
              alt="consultation"
              className="object-cover object-center w-6 sm:w-8 md:w-10 lg:w-16 xl:w-24"
            />
            <h3 className="text-black text-[7px] sm:text-[9px] md:text-[11px] lg:text-base xl:text-xl font-bold mt-2 mb-1">
              Consultation
            </h3>
            <p className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-lg text-slate-400 leading-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolore perspiciatis voluptatibus.
            </p>
          </div>

          {/* Appointment */}
          <div className="flex flex-col items-center text-center px-1.5">
            <Image
              src={appointment}
              alt="appointment"
              className="object-cover object-center w-6 sm:w-8 md:w-10 lg:w-16 xl:w-24"
            />
            <h3 className="text-black text-[7px] sm:text-[9px] md:text-[11px] lg:text-base xl:text-xl font-bold mt-2 mb-1">
              Appointment
            </h3>
            <p className="text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-lg text-slate-400 leading-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolore perspiciatis voluptatibus.
            </p>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="w-full grid grid-cols-2 my-12 sm:my-16 lg:my-24 px-2 md:px-8 lg:px-12 xl:mt-40">
        <div className="w-full px-3 md:px-5 mt-6">
          <div className="bg-blue-700 text-white flex p-3 xl:mx-16 rounded-md">
            <div className="w-28 lg:w-36 xl:w-60"></div>
            <div className="w-28 md:w-36 lg:w-48 xl:w-60 bg-blue-700 text-white flex flex-col gap-1">
              <h2 className="text-[9px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl font-bold">Dr. Justin Subejo</h2>
              <p className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-base"><span className="font-bold">Psychaitry . </span> 9 years Experience</p>
              <p className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum suscipit impedit blanditiis distinctio autem alias omnis libero eaque eligendi. Repellat incidunt ratione reiciendis nisi harum  </p>
            </div>
          </div>
            <Image src={maleDoc} 
              alt="medical team" className="object-cover object-center w-28 md:w-40 lg:w-44 xl:w-68 relative right-5 bottom-32 md:bottom-44 lg:bottom-52 xl:bottom-80 md:right-7 xl:right-0"></Image>
        </div>
        <div className="w-full px-3 md:px-5">
          <div className="mb-20 lg:mb-32 xl:mx-16 xl:mb-48">
            <h3 className="text-black font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-right">Our Doctors</h3>
            <p className="text-slate-400 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-base text-right">We are always here to listening and understanding</p>
          </div>
          <div className="bg-blue-700 text-white flex p-3 lg:mx-7 xl:mx-16 rounded-md">
            <div className="w-28 lg:w-36 xl:w-60"></div>
            <div className="w-28 md:w-36 lg:w-48 xl:w-60 bg-blue-700 text-white flex flex-col gap-1">
              <h2 className="text-[9px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl font-bold">Dr. Justin Subejo</h2>
              <p className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-xs xl:text-base"><span className="font-bold">Psychaitry . </span> 9 years Experience</p>
              <p className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum suscipit impedit blanditiis distinctio autem alias omnis libero eaque eligendi. Repellat incidunt ratione reiciendis nisi harum</p>
            </div>
          </div>
            <Image src={femaleDoc} 
              alt="medical team" className="object-cover object-center w-36 md:w-48 lg:w-52 xl:w-80 relative right-16 lg:right-12 bottom-36 md:bottom-48 lg:bottom-52 xl:bottom-80"></Image>
        </div>
      </section>
    </div>
  );
}
