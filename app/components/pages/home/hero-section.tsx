import Image from 'next/image'
import Link from 'next/link'
import SkillsPlay from '../../skills'

export default function HeroSection() {
  return (
    <section className="">
      <div className=" flex items-center justify-center flex-wrap  ">
        <div className="font-extrabold max-w-[400px] sm:max-w-[450px] md:max-w-[700px]  ">
          <p className=" text-lg sm:text-xl md:text-2xl text-zinc-600 flex items-center ">
            HELLO 👋 I AM RAIMUNDO SOARES
          </p>
          <div className="flex items-center justify-center">
            <h1 className="text-6xl md:text-9xl sm:text-7xl text-zinc-800 ">
              FRONTEND DEVELOPER
            </h1>
          </div>
          <p className=" text-sm sm:text-base md:text-lg sm:ml-20 md:ml-60 text-zinc-600 mt-3 sm:mt-1 ">
            I am a Frontend developer with +3 years working with Freelancer
          </p>

          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-10 ">
            <div className="shadow-lg shadow-gray-400 rounded-full  w-20 h-20 flex items-center justify-center text-gra">
              <Link
                href="https://www.linkedin.com/in/rjssoares001/"
                target="_blank"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/linkedin.svg"
                  alt="Linkedin"
                />
              </Link>
            </div>
            <div className="shadow-lg shadow-gray-400 rounded-full  w-20 h-20 flex items-center justify-center">
              <Link href="https://github.com/RaimundoJSoares" target="_blank">
                <Image
                  width={40}
                  height={40}
                  src="/images/github.svg"
                  alt="Github"
                  className="anima"
                />
              </Link>
            </div>
            <div className="shadow-lg shadow-gray-400 rounded-full  w-20 h-20 flex items-center justify-center">
              <Link
                href="./Resume_RaimundoJuniorSoares.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/pdf.svg"
                  alt="Resume"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[700px] ml-10">
        <SkillsPlay />
      </div>
    </section>
  )
}
