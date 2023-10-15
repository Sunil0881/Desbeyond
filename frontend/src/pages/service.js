import Navbar from "../components/navbar";
import serviceimg from "../assets/service.jpg"

const Service = () => {
    return ( 
        <div className="text-white"> 
            <Navbar />
            <h1 className="text-5xl font-bold text-center my-24 text-yellow-500">
                Services We Provide
            </h1>
            <div className="flex gap-7 mx-3 items-center">
                <h1 className="text-3xl font-bold w-8/12 leading-relaxed">
                    We are a Design Agency based in India, offering high quality & exclusive end to end Design services to top companies across the World.
                </h1>
                <div> 
                    <img src={serviceimg} alt="serviceing"/>
                </div>
            </div>
            <div>
            Books Design Services
            </div>
        </div>
     );
}
 
export default Service;