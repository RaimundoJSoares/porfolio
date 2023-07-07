import Image from 'next/image'
import Link from 'next/link'
import SkillsPlay from '../../skills'

export default function HeroSection() {
  return (
    <section className=" h-screen flex items-center justify-center">
      <div>
        <div className="font-extrabold max-w-[400px] sm:max-w-[450px] md:max-w-[700px] ">
          <p className=" text-lg sm:text-xl md:text-2xl text-zinc-600 flex items-center gap-5 ">
            HELLO 👋 I AM RAIMUNDO SOARES
          </p>
          <h1 className="text-6xl md:text-9xl sm:text-7xl text-zinc-800">
            FRONTEND DEVELOPER
          </h1>
          <p className=" text-sm sm:text-base md:text-lg sm:ml-20 md:ml-60 text-zinc-600 mt-3 sm:mt-1 ">
            I am a Frontend developer with +3 years working with Freelancer
          </p>

          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-10">
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
            <Link href="https://github.com/RaimundoJSoares" target="_blank">
              <Image
                width={40}
                height={40}
                src="/images/github.svg"
                alt="Github"
              />
            </Link>
            <a
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
            </a>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 mt-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <SkillsPlay name="Next js" key="" />
            ))}
          </div>
          {/* <div className="text-green-500">
            using React JS, Next JS, TypeScript, JavaScript, API Rest, Node JS ,
            fastify ,express, PostgreSQL, UI/UX (figma), Context API, clean
            code.
          </div> */}
        </div>
      </div>
    </section>
  )
}
