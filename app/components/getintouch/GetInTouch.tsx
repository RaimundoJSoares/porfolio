import AboutME from './about/Aboutme'
import FormContacts from './contact/FormContacts'

export default function GetInTouch() {
  return (
    <div className=" flex items-center justify-start gap-6 mb-20">
      <AboutME />
      <FormContacts />
    </div>
  )
}
