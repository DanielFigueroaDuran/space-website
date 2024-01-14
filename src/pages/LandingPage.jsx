import bgVideo from "../assets/video/earth-bg.mp4";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <div className="h-[700px] relative">
            <video 
            autoPlay 
            loop 
            muted
            className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]" 
            >
                  <source src={bgVideo} typeof="video/mp4" />
            </video>
            <Navbar/>
      </div>
    </div>
  )
}

export default LandingPage