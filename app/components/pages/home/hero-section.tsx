import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className=" h-screen flex items-center justify-center">
      <div>
        <div className="font-extrabold max-w-[700px] ">
          <p className="text-2xl text-zinc-600 flex items-center gap-5 ">
            HELLO 👋 I AM RAIMUNDO SOARES
          </p>
          <h1 className="text-5xl md:text-9xl sm:text-7xl text-zinc-800">
            FRONTEND DEVELOPER
          </h1>
          <p className="  text-lg ml-60 text-zinc-600">
            I am a Frontend developer with +3 years working with Freelancer{' '}
          </p>

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
