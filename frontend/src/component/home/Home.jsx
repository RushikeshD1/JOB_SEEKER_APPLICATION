import { useContext } from "react"
import { Context } from "../../main"
import HeroSection from "./HeroSection"
import HowItWork from "./HowItWork"
import PopularCategore from "./PopularCategore"
import PopularCompany from "./PopularCompany"
import { Navigate } from "react-router-dom"


const Home = () => {
  const { isAuthorized } = useContext(Context)

  if(!isAuthorized){
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWork />
        <PopularCategore />
        <PopularCompany />
      </section>
    </>
  )
}

export default Home