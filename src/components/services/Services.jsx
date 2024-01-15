import wave from "../../assets/img/wave Gif.gif";
import { ServiceData } from "../../utils/data";

const Services = () => {
      
      return (
            <div>
                  <div className="container">
                        <div className="min-h-[400px]">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                                    {
                                          ServiceData.map((service, index)=> (
                                                <div key={index}>
                                                      <h1 className="text-white">{service.title}</h1>
                                                      <p>{service.content}</p>
                                                      <p>{service.description}</p>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Services