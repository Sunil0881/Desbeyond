import Navbar from "../components/Navbar";
import logo from "../assets/ideas-creative-occupation-design_53876-61069.png";
import Slideabout from "../components/Slideabout"
import Slide from "../components/Slide";
import Test from "../components/Test";
import Footer from "../components/Footer";
import "../components/MovingText.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();


const Home = () => {
  <div>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
  AOS.init();
</script>
  </div>
  return (
    <div className=" overflow-x-hidden font-ubuntu">
      <Navbar />
      <div className="md:flex ">
        <div className="md:flex mx-2">
          <div className="flex justify-center">
            <h1 className="text-5xl md:text-9xl scale-100 md:font-bold mx-14 lg:mx-40 font-bold font-sans text-white my-4 mt-10">
              Designing
              <span className="bg-transparent title-line"> Beyond </span>
              Today, for <span className="title-line">Tomorrow</span>
            </h1>
            <h1 className="text-3xl md:text-8xl md:font-bold mx-16 font-bold font-sans text-white mt-16 hidden">
              Designing <span className="bg-transparent"> Beyond </span>
              Today, for <span className="title-line">Tomorrow</span>
            </h1>
              
          </div>
          <div className=" mt-16 md:ml-15 ml-6 flex h-72 w-72 md:h-96 md:w-96">
            <img
              src={logo}
              alt="logo"
              className="rounded-full border-8 drop-shadow-2xl md:mx-10 md:mt-14 border-gray-400 hover:border-blue-400 md:scale-125"
            />
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center md:justify-start my-5 mt-5">
        <a
          className="md:text-left text-xl my-5 mx-3 md:mx-52 scale-75 hover:scale-100 px-1 py-2 rounded-full" href="/Contact"
        >
          <button class="bg-gradient-to-r from-violet-600  via-purple-800 to-violet-800 hover:bg-none hover:border-2 hover:border-white text-white hover:text-white font-bold py-2 px-4 rounded-full">
  Contact Us
</button>
        </a>
      </div>
      <div className="text-white font-sans mt-20 md:mt-40 lg:mx-20 mx-3 md:text-2xl font-semibold md:flex md:justify-start">
        <h1 className="uppercase text-white font-bold text-3xl" data-aos="fade-right">
          What Makes Us Stand Out?
        </h1>
      </div>
      <div className="text-white font-sans mt-10 md:mt-20 md:mx-20 mx-3 md:text-2xl font-semibold md:flex md:justify-start">
        <h1 className="text-left" data-aos="fade-up">
          We take the extra time to inspect every Digital Image supplied,
          ensuring optimal details, and color-correcting / enhancing as needed.
        </h1>
      </div>
      <div className="text-white md:mx-20 mx-3" data-aos="zoom-out">
        <p className="text-left my-5 mt-5 font-poppins">
          We provide 100% problem-free files for printing
        </p>
        <p className="text-left my-5">
          We are not just print Designers; we are production artists who know
          the intricacies of the commercial printing industry.
        </p>
        <p className="text-left my-5">
          <p className="my-3">
          <span className="font-bold">Punctuality:</span> "We have consistently met all project deadlines without
          exception." <br/>
          </p>
          <p className="my-3">
          <span className="font-bold my-3">Tailored Service:</span> "We provide highly personalized and
          customized services tailored to each client's specific needs."  <br/>
          </p>
          <p className="my-3">
          <span className="font-bold my-3"> On-Time and On-Budget Delivery:</span>  "Our commitment to delivering projects
          promptly and within the agreed budget is unwavering."  <br/>
          </p>
          <p className="my-3">
          <span className="font-bold my-3">Efficiency and Reliability:</span> "Our team excels in efficiency, professionalism, and
          collaboration, ensuring a seamless and reliable working relationship." <br/>
          </p>
          <p className="my-3">
          <span className="font-bold my-3">Dedication to Your Success:</span> "Our primary objective is to partner with
          you to ensure your success and achievements."
          </p>
        </p>
      </div>
      <div id="ourstory" className="text-white my-10" data-aos="fade-right">
        <p className="text-left mx-3 md:mx-20 font-bold text-2xl uppercase">
          Our Mission
        </p>
        <p className="text-left my-5 mx-3 md:mx-20" data-aos="fade-left">
          Desbeyond is committed to being a guiding light in innovative design,
          a dependable partner for brands seeking transformative solutions, and
          the ultimate destination for design professionals pushing the
          boundaries of creativity. Your vision is our inspiration.
        </p>
      </div>
      <Slideabout />
      <div className="text-white mt-10" data-aos="fade-up">
        <p className="text-left mx-3 md:mx-20 font-bold text-2xl md:text-4xl uppercase">
          Design Solutions: Crafting innovative and visually striking designs.
        </p>
        <p className="text-left mt-5 mx-3 md:mx-20">
          Our expertise lies in crafting innovative and visually striking
          designs that leave a lasting impact, helping your brand stand out from
          the crowd and capture your audience's attention
        </p>
      </div>
      <div>
        <Slide />
      </div>
      <div className="text-white my-5">
        <h1 className="text-center md:text-4xl text-white mx-3 md:mx-20 font-bold text-2xl uppercase" data-aos="fade-left">
          Client Testimonials
        </h1>
        <p className="text-left mt-10 md:text-xl mx-3 md:mx-20" data-aos="fade-right">
          The satisfaction of our clients is our most prized accomplishment.
          Here's what some of them have to say about their experiences with
          Desbeyond:
        </p>
        <Test />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
