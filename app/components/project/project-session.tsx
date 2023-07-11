import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <div className="flex  items-center justify-center  mb-32 ">
      <div
        className="relative flex items-center justify-center
       h-auto shadow-xl rounded-3xl shadow-gray-400 round-xl p-4 
       group hover:bg-sky-900
     
       "
      >
        <Image
          src="/images/smartphone.png"
          alt="Visualização em smartphone"
          className="rounded "
          width={360}
          height={900}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/seu-site-smartphone"
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-lg px-4 py-2 rounded"
          >
            Ver no smartphone
          </Link>
        </div>
      </div>
      <div
        className="relative  flex items center justify-center h-auto
        w-full shadow-xl rounded-ss-3xl shadow-gray-400 round-xl p-4 group hover:bg-sky-900"
      >
        <Image
          src="/images/pearson1.png"
          alt="Visualização em pc"
          className="rounded-xl group-hover:opacity-10"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="https://pearsonhardman.vercel.app"
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-lg px-4 py-2 rounded"
            target="_blank"
          >
            Ver no computador
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
