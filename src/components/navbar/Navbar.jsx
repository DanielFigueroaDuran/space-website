import  {Link}  from "react-router-dom";
import Logo from "../../assets/img/logo.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4 ">
      <div className="container">
          <div className="flex">
            <div className="flex items-center gap-4 text-white font-bold">
              <img src={Logo} alt="logo" className="w-10" />
              <span>TCJ-SPACE</span>
            </div>
            <div className="text-white">
              <ul className="flex items-center gap-6 text-xl py-4">
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Technology</Link>
                </li>
                <li>
                  <Link to="#">Galaxy</Link>
                </li>
                <li>
                  <Link to="#">Satelite</Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar