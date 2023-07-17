import Image from 'next/image'
import Link from 'next/link'

export default function AboutME() {
  return (
    <div className=" bg-slate-200 max-w-[400px] h-[620px] shadow-xl rounded-3xl">
      <div className="flex items-center justify-center flex-wrap ">
        <div>
          <Image
            className="mt-5"
            alt=""
            src="/images/pcimage.jpg"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <h1 className="font-bold text-2xl  leading-10">
            Raimundo Junior Soares
          </h1>
          <span className=" leading-5 ">Front-end Developer</span>
          <div className="mt-6 text-sm text-center text">
            Working since 2019 as a developer, I am available for full-time or
            freelance positions, as a Front-end or FullStack developer.
            <br /> Contact me and lets talk.
          </div>
        </div>
        <div className="mt-28 ">
          <span className="flex items-center justify-center font-semibold">
            💻 CONNECT WITH ME
          </span>
          <div>
            <div className=" gap-4 sm:gap-7 mt-5 flex items-center justify-center ">
              <div className="shadow-lg shadow-gray-400 rounded-full  w-12 h-12 flex items-center justify-center ">
                <Link
                  href="https://www.linkedin.com/in/rjssoares001/"
                  target="_blank"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/images/linkedin.svg"
                    alt="Linkedin"
                  />
                </Link>
              </div>
              <div className="shadow-lg shadow-gray-400 rounded-full   w-12 h-12 flex items-center justify-center">
                <Link href="https://github.com/RaimundoJSoares" target="_blank">
                  <Image
                    width={20}
                    height={20}
                    src="/images/github.svg"
                    alt="Github"
                    className="anima"
                  />
                </Link>
              </div>
              <div className="shadow-lg shadow-gray-400 rounded-full  w-12 h-12 flex items-center justify-center">
                <Link
                  href="./Resume_RaimundoJuniorSoares.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/images/pdf.svg"
                    alt="Resume"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
