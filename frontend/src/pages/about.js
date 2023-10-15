import Navbar from "../components/Navbar";
import Slider from "../components/Slideabout";
import Team from "../components/Team";
import Footer from "../components/Footer";

const About = () => {
    return ( 
        <div className="overflow-x-hidden">
            <Navbar />
            <h1 className="text-2xl font-bold text-white pt-10 pl-7 md:pt-20">Hey!</h1>
            <p className="text-xl md:text-4xl font-bold text-white pt-2 pl-7">We Started From The Basement </p>
            <p className="text-xl md:text-4xl font-bold text-white  pl-7">Now We Here</p>
            <div className="md:pr-44">
                <p className="pl-7 text-lg text-white pt-5 pr-7 md:pt-16 md:-mr-96">It all began in 2011 when two friends, Mike Cleary and Jeff Gapinski, founded Huemor in a basement.</p>
                <p className="pl-7 text-lg text-white pt-5 pr-7 md:pt-16 md:mr-96">Fueled by a passion for design and the desire to work with amazing brands, they've poured countless hours into building both Huemor and its clients' businesses.</p>
                <p className="pl-7 hidden md:block text-lg text-white pt-5 pr-7 md:pt-16 md:mr-96">Fast forward to today, Huemor is renowned as a top service provider in the digital marketing space and has expanded with team members around the world.</p>
                <p className="pl-7 text-lg text-white pt-5 pr-7 md:pt-16 md:mr-96">Our mission: To be the number one agency to work with, and the number one agency to work for.</p>
            </div>
            <Slider />
            <Team />
            <Footer />
        </div>
     );
}
 
export default About;