/* eslint-disable prefer-const */
'use client'

import react from 'react'

export default function FormContacts() {
  const [name, setName] = react.useState('')
  const [email, setEmail] = react.useState('')
  const [subject, setSubject] = react.useState('')
  const [message, setMessage] = react.useState('')
  const [submitted, SetSubmitted] = react.useState(false)

  const handleChangesAtTexts = (setState: any) => (event: any) => {
    setState(event.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (submitted) {
      return
    }
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')

    SetSubmitted(true)
    console.log(name, email, subject, message)

    await fetch('/api/emailcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    }).then((res) => {
      if (res.status === 200) console.log('送信に成功しました')
    })
  }

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      id="contact"
      className="flex items-center justify-center "
    >
      <div className="flex items-center justify-center w-[400px] sm:w-[900px] sm:h-[620px] bg-gray-200  shadow-xl rounded-3xl">
        <div>
          <div className="flex items-center justify-center flex-wrap mb-8 font-bold font-mono text-2xl">
            <h1>CONTACT</h1>
          </div>
          <div>
            <label className="font-semibold text-xl" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="text"
              name="name"
              id="name"
              required
              className="mb-6 flex items-center justify-center flex-wrap sm:w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
            />
          </div>
          <div>
            <label className="font-semibold text-xl " htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="text"
              name="email"
              id="email"
              required
              className="mb-6 flex items-center justify-center flex-wrap sm:w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
            />
          </div>
          <div>
            <label className="font-semibold text-xl" htmlFor="subject">
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
              type="text"
              name="subject"
              id="subject"
              required
              className="mb-6 flex items-center justify-center flex-wrap sm:w-[500px] h-12 rounded-lg pl-4 bg-zinc-100 outline-gray-500 text-zinc-800 text-xl font-sans"
            />
          </div>
          <div className="flex flex-wrap">
            <textarea
              id="message"
              required
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              placeholder="Message"
              className="mb-2 pl-4 pt-4 w-full sm:w-[500px] h-[200px] rounded-md resize-none bg-zinc-100  outline-gray-500 text-zinc-800 text-xl font-sans "
            />
          </div>
          <div
            className="flex items-center justify-center 
          "
          >
            <button
              type="submit"
              className={
                submitted
                  ? 'bg-green-200 rounded-xl p-5 flex items-center justify-center gap-5 text-green-600'
                  : ' bg-green-500 mt-2 h-10 rounded-xl text-lg font-semibold text-gray-200 hover:bg-green-600 w-full delay-300 '
              }
            >
              {submitted ? 'Successfully Submitted' : ' SEND MESSAGE'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}