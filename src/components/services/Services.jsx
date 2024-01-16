import wave from "../../assets/img/wave Gif.gif";
import { ServiceData } from "../../utils/data";

const Services = () => {

    return (
        <div className="bg-black text-white relative z-50" >
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                        {
                            ServiceData.map((service, index) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={service.aosDelay}
                                    className="min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-xl bg-sky-900/60  backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto "
                                    key={index} >
                                    {service.icon}
                                    <h1 className="text-white">{service.title}</h1>
                                    <p>{service.content}</p>
                                    <p className="text-sm">{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <img
                        className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0] "
                        src={wave}
                        alt="gif" />
                </div>
            </div>
        </div>
    )
}

export default Services