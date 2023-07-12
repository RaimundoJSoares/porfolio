export default function GetInTouch() {
  return (
    <form id="contact" className="flex items-center justify-center ">
      <div
        className="flex items-center justify-center w-[900px] h-[620px] 
       bg-gray-200 mb-24 shadow-xl rounded-3xl  "
      >
        <div className="max-w-[400px] sm:max-w-[450px] md:max-w-[700px]">
          <div className="flex items-center justify-center flex-wrap mb-8 font-semibold text-2xl">
            <h1>CONTACT</h1>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="mb-6 flex items-center justify-center flex-wrap w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="mb-6 flex items-center justify-center flex-wrap w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="mb-6 flex items-center justify-center flex-wrap w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
          />

          <textarea
            placeholder="Message"
            className=" pl-4 pt-4 w-[500px] h-[200px] rounded-md resize-none bg-zinc-100  outline-gray-500 text-zinc-800 text-xl font-sans "
          />

          <div
            className="flex items-center justify-center 
          "
          >
            <button
              className=" bg-green-500 mt-2 h-10 rounded-xl
          text-lg font-semibold text-gray-200 hover:bg-green-600 w-full delay-300 "
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
