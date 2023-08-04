import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  console.log(body)

  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'raimundojssoares@gmail.com',
      pass: 'qkqyqlqiceefhics',
    },
  })

  const mailOPtions = {
    from: body.email,
    to: 'raimundojssoares@gmail.com',
    subject: body.subject,
    text:
      'Name: ' +
      body.name +
      '\nEmail: ' +
      body.email +
      '\nSubject: ' +
      body.subject +
      '\nMessage: ' +
      body.message,
  }
  transporter.sendMail(mailOPtions, function (error: any, info: any) {
    if (error) {
      console.log(error)
    } else {
      console.log(info)
    }
  })
  return NextResponse.json({ message: 'Email sent successfully' })
}
