import HeroMolecule from "../components/HeroMolecule"
import SocialLinks from "../components/SocialLinks"

function Home() {
  return (
    <div>
      <HeroMolecule
        title="Daniel Agu"
        subText1="Web & Mobile Software Engineer"
        subText2="Building responsive websites and emails"
        button1="Hire Me"
        button2="View GitHub"
      />
      <SocialLinks />
    </div>
  )
}

export default Home