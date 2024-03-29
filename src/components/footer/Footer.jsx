import { Link } from "react-router-dom"
import { HiLocationMarker } from "react-icons/hi"
import { MdOutlineMail, MdCall } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white px-5 relative z-50">
            <section className="max-w-[1200px] mx-auto text-white">
                <div className="grid md:grid-cols-3 py-5">
                    {/* first col */}
                    <div className="py-8 px-4 flex flex-col gap-2" >
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">be Ready To Grow</h1>
                        <p>
                            Get Excluusive
                            <span className="font-bold"> straigt to your inbox</span>
                        </p>
                        <div className="flex items-center h-10">
                            <input
                                type="text"
                                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 bg-gray-800 border-gray-200 border-2 "
                                placeholder="Email"
                            />
                            <button className="primary-button">Enviar</button>
                        </div>
                    </div>
                    {/* second col */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="about" >About</Link>
                                    </li>
                                    <li>
                                        <Link to="services" >Services</Link>
                                    </li>
                                    <li>
                                        <Link to="login" >Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        <Link to="about" >About</Link>
                                    </li>
                                    <li>
                                        <Link to="services" >Services</Link>
                                    </li>
                                    <li>
                                        <Link to="login" >Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-2">Contact Us</h1>
                            </div>
                            <div className="space-y-3">
                                <div className=" flex items-center gap-2">
                                    <HiLocationMarker />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className=" flex items-center gap-3 mt-3">
                                    < MdOutlineMail />
                                    <p>figueroa@gmail.com</p>
                                </div>
                                <div className=" flex items-center gap-3 mt-3">
                                    <MdCall />
                                    <p>+34 641625278</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom section */}
                <div className="hidden sm:block ">
                    <div className="flex justify-between items-center py-6 border-t-2 border-gray-400 ">
                        <span className="text-sm text-gray-400">
                            copyright  &copy; 2024 by DF
                        </span>
                        <div className="flex justify-center items-center gap-4 pb-4">
                            <Link to="#"><FaInstagram className="text-4xl" /></Link>
                            <Link to="#"><FaFacebook className="text-4xl" /></Link>
                            <Link to="#"><FaLinkedin className="text-4xl" /></Link>
                        </div>
                        <span className="text-sm text-gray-400">
                            <ul className="flex gap-3">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer