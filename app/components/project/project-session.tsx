import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="items-center justify-center  mb-20  sm:grid grid-cols-2 gap-6 0 rounded-lg relative  "
    >
      <div
        className="relative  flex items center justify-center h-auto mb-5
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg "
      >
        <div className="group-hover:blur-sm">
          <Image
            src="/images/personview.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10  "
            width={800}
            height={1}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <Link
            href="https://pearsonhardman.vercel.app"
            className="bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
            target="_blank"
            about="person hardman"
          >
            Visualize
          </Link>
        </div>
      </div>

      <div
        className="relative  flex items center justify-center h-auto
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg  mb-5"
      >
        <div className="group-hover:blur-sm">
          <Image
            src="/images/blog.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10 "
            width={800}
            height={600}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <Link
            href="https://miniblog-eta.vercel.app"
            className="bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
            target="_blank"
          >
            Visualize
          </Link>
        </div>
      </div>

      <div
        className="relative  flex items center justify-center h-auto
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg  "
      >
        <div className="group-hover:blur-sm">
          <Image
            src="/images/chat.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10 "
            width={800}
            height={600}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <Link
            href="https://webtalk-19763.web.app"
            className="bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
            target="_blank"
          >
            Visualize
          </Link>
        </div>
      </div>

      <div
        className="relative  flex items center justify-center h-auto
         shadow-xl shadow-gray-400 round-xl p-4 group hover:bg-gray-950 rounded-lg  "
      >
        <div className="group-hover:blur-sm">
          <Image
            src="/images/feedback.png"
            alt="Visualize"
            className="rounded-xl group-hover:opacity-10 "
            width={800}
            height={600}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center ">
          <Link
            href="https://fundamentos-react-six.vercel.app"
            className="bg-green-500 bg-opacity-50 text-white text-lg px-4 py-2 rounded-lg hidden hover:bg-opacity-90 group-hover:block delay-200 "
            target="_blank"
          >
            Visualize
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
