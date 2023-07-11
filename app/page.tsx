import GetInTouch from './components/contact/GetinTouch'
import HeroSection from './components/pages/home/hero-section'
import ProjectSection from './components/project/project-session'

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <GetInTouch />
    </div>
  )
}
