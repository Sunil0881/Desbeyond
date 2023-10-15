import Navbar from "../components/navbar";
import logo from "../assets/ideas-creative-occupation-design_53876-61069.png";
import Move from "../components/MoveText";
import Slide from "../components/slide";
import Test from "../components/Test";
import Footer from "../components/Footer";
import '../components/MovingText.css'

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <div className="md:flex">
        <div className="md:flex mx-2">
          <div className="flex justify-center">
            <h1 className="text-5xl md:text-8xl md:font-bold mx-14 font-bold font-sans text-white mt-16">
              Designing <span className="bg-transparent title-line"> Beyond </span>
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
              className="rounded-full border-4 border-gray-400 hover:border-blue-400"
            />
          </div>
        </div>
      </div>
      <div className="text-white font-sans mt-20 md:mt-20 md:mx-20 mx-3 md:text-2xl font-semibold md:flex md:justify-start">
        <h1 className="uppercase text-white font-bold text-3xl">Our Story</h1>
      </div>
      <div className="text-white font-sans mt-10 md:mt-20 md:mx-20 mx-3 md:text-2xl font-semibold md:flex md:justify-start">
        <h1 className="text-left">
          It all began in the pursuit of design excellence, where two
          visionaries, Sarah Mitchell and Alex Turner, joined forces to
          establish Desbeyond, a cutting-edge design company.
        </h1>
      </div>
      <div className="text-white md:mx-20 mx-3">
        <p className="text-left my-5 mt-5">
          Fueled by an unwavering passion for design and the desire to transform
          creative visions into remarkable realities, Sarah and Alex embarked on
          a journey that has seen them craft captivating designs and elevate
          brands to new heights.
        </p>
        <p className="text-left my-5">
          Fast forward to today, Desbeyond has made its mark as a distinguished
          design powerhouse, serving clients from various industries and
          connecting with creatives worldwide.
        </p>
      </div>
      <div id="ourstory" className="text-white my-10">
        <p className="text-left mx-3 md:mx-20 font-bold text-2xl uppercase">
          Our Mission
        </p>
        <p className="text-left my-5 mx-3 md:mx-20">
          Desbeyond is committed to being a guiding light in innovative design,
          a dependable partner for brands seeking transformative solutions, and
          the ultimate destination for design professionals pushing the
          boundaries of creativity. Your vision is our inspiration.
        </p>
      </div>
      <Move />
      <div className="text-white mt-10">
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
      <div className="text-white">
        <h1 className="text-left md:text-4xl text-white mx-3 md:mx-20 font-bold text-2xl uppercase">
          Client Testimonials
        </h1>
        <p className="text-left mt-10 md:text-xl mx-3 md:mx-20">
        The satisfaction of our clients is our most prized accomplishment. Here's what some of them have
         to say about their experiences with Desbeyond:
        </p>
        <Test />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
