import AboutME from './about/Aboutme'
import FormContacts from '../contact/FormContacts'

export default function GetInTouch() {
  return (
    <div
      id="contact"
      className=" flex items-center justify-center gap-4 mb-20 mr-10 ml-10 flex-wrap "
    >
      <AboutME />

      <FormContacts />
    </div>
  )
}
