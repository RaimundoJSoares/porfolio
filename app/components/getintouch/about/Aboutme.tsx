/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function AboutME() {
  return (
    <aside className="bg-slate-200 w-[400px] h-[620px] shadow-xl rounded-3xl flex items-center justify-center">
      <article className="col-span-4">
        <header>
          <figure>
            <Image
              className="rounded-md"
              alt=""
              src="/images/pcimage.jpg"
              width={300}
              height={300}
            />
          </figure>
          <div>
            <h1 className="font-bold text-2xl leading-10">
              Raimundo Junior Soares
            </h1>
            <span className="leading-5 text-lg">Sotfware Engineer</span>
            <p className="mt-6 w-[300px]">
              Working since 2019 as a developer, I am available for full-time or
              freelance positions, as Front-end or FullStack.
              <br /> Contact me, and let's talk.
            </p>
          </div>
        </header>
        <footer className="mt-28">
          <span className="flex items-center justify-center font-semibold">
            💻 CONNECT WITH ME
          </span>
          <section>
            <div className="gap-4 sm:gap-7 mt-5 flex items-center justify-center">
              <div className="shadow-lg shadow-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
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
              <div className="shadow-lg shadow-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
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
              <div className="shadow-lg shadow-gray-400 rounded-full w-12 h-12 flex items-center justify-center">
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
          </section>
        </footer>
      </article>
    </aside>
  )
}
