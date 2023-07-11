export default function GetInTouch() {
  return (
    <form className="flex items-center justify-center">
      <div
        className="flex items-center justify-center w-[900px] h-[620px] 
       bg-gray-200 mb-24 shadow-xl rounded-3xl"
      >
        <div className="">
          <input
            type="text"
            placeholder="Name"
            className="mb-6 flex items-center justify-center flex-wrap w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-6 flex items-center justify-center flex-wrap w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
          />
          <input
            type="text"
            placeholder="Subject"
            className="mb-6 flex items-center justify-center flex-wrap w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
          />

          <textarea
            placeholder="Message"
            className=" pl-4 pt-4 w-[500px] h-[200px] rounded-md resize-none bg-zinc-100  outline-gray-500 text-zinc-800 text-xl font-sans "
          />
        </div>
      </div>
    </form>
  )
}
