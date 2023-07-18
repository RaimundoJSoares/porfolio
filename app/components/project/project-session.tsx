import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className=" mb-20  sm:grid grid-cols-2 gap-6 0 rounded-lg relative m-4 sm:m-16 "
    >
      <div
        className="relative  mb-5 h-[200px] w-[350px] sm:w-auto sm:h-[350px]
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg  "
      >
        <div className="">
          <Image
            src="/images/personview.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10 group-hover:blur-sm "
            fill
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex items-center justify-center flex-wrap">
            <div className="absolute ">
              <h1 className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-8 font-bold text-lg text-center">
                Pearson Hardman
              </h1>
              <span className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-10 ">
                Vanilla JavaScript, Css, Html
              </span>
              <div className="flex items-center justify-center">
                <Link
                  href="https://pearsonhardman.vercel.app"
                  className=" bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
                  target="_blank"
                  about="person hardman"
                >
                  Visualize
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative  flex items center justify-center  mb-5 h-[200px] w-[350px] sm:w-auto sm:h-[350px]
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg "
      >
        <div className="">
          <Image
            src="/images/chat.png"
            alt="Visualize"
            className="rounded-xl sm:group-hover:opacity-10 sm:group-hover:blur-sm "
            fill
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex items-center justify-center flex-wrap">
            <div className="absolute ">
              <h1 className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-8 font-bold text-lg text-center">
                WebTalk
              </h1>
              <span className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-10 ">
                Next js, TypeScript, React JS , Sass, API, Firebase, Vercel
              </span>
              <div className="flex items-center justify-center">
                <Link
                  href="https://webtalk-19763.web.app"
                  className=" bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
                  target="_blank"
                  about="person hardman"
                >
                  Visualize
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative  flex items center justify-center  mb-5 h-[200px] w-[350px] sm:w-auto sm:h-[350px]
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg "
      >
        <div className="">
          <Image
            src="/images/feedback.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10 group-hover:blur-sm  "
            fill
          />
        </div>

        <div className="flex items-center justify-center flex-wrap">
          <div className="absolute ">
            <h1 className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-8 font-bold text-lg text-center">
              MyFeedback
            </h1>
            <span className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-10 ">
              Next js, Typescript, Phosphor-react, React JS , Css Module, Vercel
            </span>
            <div className="flex items-center justify-center">
              <Link
                href="https://fundamentos-react-six.vercel.app"
                className=" bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
                target="_blank"
                about="person hardman"
              >
                Visualize
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative  flex items center justify-center  mb-5 h-[200px] w-[350px] sm:w-auto sm:h-[350px]
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg  "
      >
        <div className="">
          <Image
            src="/images/blog.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10 group-hover:blur-sm  "
            fill
          />
        </div>

        <div className="flex items-center justify-center flex-wrap">
          <div className="absolute ">
            <h1 className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-8 font-bold text-lg text-center">
              MyBlog
            </h1>
            <span className=" text-blue-100 hidden hover:bg-opacity-90 group-hover:block delay-200 mb-10 ">
              React js, JavaScript, Css Module, Firebase, Reducer, vercel
            </span>
            <div className="flex items-center justify-center">
              <Link
                href="https://miniblog-eta.vercel.app"
                className=" bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
                target="_blank"
                about="person hardman"
              >
                Visualize
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
