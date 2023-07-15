import GetInTouch from './components/contact/GetinTouch'
import NavHeader from './components/header/navheader'
import HeroSection from './components/pages/home/hero-section'
import ProjectSection from './components/project/project-session'

export default async function Home() {
  return (
    <div>
      <NavHeader />
      <HeroSection />
      <ProjectSection />
      <GetInTouch />
    </div>
  )
}
