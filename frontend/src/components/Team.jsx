import person1 from "../assets/person1.jpeg"
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

const Team = () => {
    return (
        <div>
            <div className="md:grid md:grid-cols-4">
                <h1 className=" text-xl md:text-4xl font-bold text-white pl-7 flex justify-center pr-7" data-aos="fade-up">
                    Team That Make It Happen
                </h1>
                <p></p>
                <p className="text-white hidden md:block text-lg md:text-xl col-span-2 pr-7" data-aos="fade-left">
                    Meet the mega-talented crew on a mission to help brands create memorable websites that sell. Our people are Huemor’s rocket fuel. They make it possible to build award-winning websites that lead the industry and convert more customers. Oh, and they’re great to work with.
                </p>
            </div>

            <div className=" md:flex md:gap-20 pt-5 md:justify-end md:mr-7" data-aos="fade-left">
                <div className="">
                    <div className="flex justify-center md:pt-2 pt-6">
                        <img src={person1} alt="img"></img>
                    </div>
                    <h1 className="font-bold text-xl text-white flex justify-center pt-3">Name</h1>
                    <p className="font-normal text-xl text-white flex justify-center">Role</p>
                </div>
                <div>
                    <div className="flex justify-center md:pt-2 pt-6">
                        <img src={person1} alt="img"></img>
                    </div>
                    <h1 className="font-bold text-xl text-white flex justify-center pt-3">Name</h1>
                    <p className="font-normal text-xl text-white flex justify-center">Role</p>
                </div>
                <div>
                    <div className="flex justify-center md:pt-2 pt-6">
                        <img src={person1} alt="img"></img>
                    </div>
                    <h1 className="font-bold text-xl text-white flex justify-center pt-3">Name</h1>
                    <p className="font-normal text-xl text-white flex justify-center">Role</p>
                </div>
            </div>

            <div className=" md:flex md:gap-20 pt-5 md:justify-end md:mr-7" data-aos="fade-left">
                <div className="">
                    <div className="flex justify-center md:pt-2 pt-6">
                        <img src={person1} alt="img"></img>
                    </div>
                    <h1 className="font-bold text-xl text-white flex justify-center pt-3">Name</h1>
                    <p className="font-normal text-xl text-white flex justify-center">Role</p>
                </div>
                <div>
                    <div className="flex justify-center md:pt-2 pt-6">
                        <img src={person1} alt="img"></img>
                    </div>
                    <h1 className="font-bold text-xl text-white flex justify-center pt-3">Name</h1>
                    <p className="font-normal text-xl text-white flex justify-center">Role</p>
                </div>
                <div>
                    <div className="flex justify-center md:pt-2 pt-6">
                        <img src={person1} alt="img"></img>
                    </div>
                    <h1 className="font-bold text-xl text-white flex justify-center pt-3">Name</h1>
                    <p className="font-normal text-xl text-white flex justify-center">Role</p>
                </div>
            </div>
        </div>
    );
}

export default Team;