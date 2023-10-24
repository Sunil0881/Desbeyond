import Navbar from "../components/Navbar";
import Slider from "../components/Slideabout";
import Team from "../components/Team";
import Footer from "../components/Footer"
import "../components/MovingText.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();


const About = () => {
    return ( 
        <div className="overflow-x-hidden font-poppins">
            <Navbar />
            <h1 className="text-2xl md:text-6xl font-bold text-white pt-10 pl-7 md:pt-20" data-aos="fade-right">Hey!</h1>
            <p className="text-xl md:text-7xl font-bold text-white pt-2 pl-7" data-aos="fade-right">We Started From The Basement </p>
            <p className="text-xl md:text-7xl font-bold text-white  pl-7" data-aos="fade-right">Now We Here</p>
            <div className="md:pr-44 font-montserrat">
                <p className="pl-7 text-2xl text-white pt-5 pr-7 md:pt-16 md:-mr-96" data-aos="fade-up">It all began in 2011 when two friends, Mike Cleary and Jeff Gapinski, founded Huemor in a basement.</p>
                <p className="pl-7 text-2xl text-white pt-5 pr-7 md:pt-16 md:mr-96" data-aos="fade-up">Fueled by a passion for design and the desire to work with amazing brands, they've poured countless hours into building both Huemor and its clients' businesses.</p>
                <p className="pl-7 hidden md:block text-2xl text-white pt-5 pr-7 md:pt-16 md:mr-96" data-aos="fade-up">Fast forward to today, Huemor is renowned as a top service provider in the digital marketing space and has expanded with team members around the world.</p>
                <p className="pl-7 text-2xl text-white pt-5 pr-7 md:pt-16 md:mr-96" data-aos="fade-up"> <span className="font-bold uppercase"> our mission:</span> To be the number one agency to work with, and the number one agency to work for.</p>
            </div>
            <Slider />
            <Team />
            <Footer />
        </div>
     );
}
 
export default About;
