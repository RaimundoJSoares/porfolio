import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <div className="flex space-x-4  items-center justify-center max-w-[900px] mb-96">
      <div className="relative w-1/2">
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/seu-site-tablet"
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-lg px-4 py-2 rounded"
          >
            Ver no tablet
          </Link>
        </div>
        <Image
          src="/images/pearson1.png"
          alt="Visualização em tablet"
          className="rounded"
          width={360}
          height={740}
        />
      </div>
      <div
        className="relative  flex items center justify-center h-auto
        w-full shadow-xl rounded-ss-3xl shadow-gray-400 round-xl p-4 group hover:bg-sky-900"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="https://pearsonhardman.vercel.app"
            className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-lg px-4 py-2 rounded"
            target="_blank"
          >
            Ver no smartphone
          </Link>
        </div>
        <Image
          src="/images/pearson1.png"
          alt="Visualização em smartphone"
          className="rounded-xl group-hover:opacity-10"
          width={800}
          height={600}
        />
      </div>
    </div>
  )
}

export default ProjectSection
