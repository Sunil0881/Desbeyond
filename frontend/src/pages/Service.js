import Navbar from "../components/Navbar";
import serviceimg from "../assets/service.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import book from '../assets/interiortypesetbook.webp';
import book2 from '../assets/Coverimage.jpeg';
import book3 from '../assets/ebook.jpeg';
import Footer from "../components/Footer";
AOS.init();

const Service = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-bold text-center my-24 text-gray-800" data-aos="fade-down">
        Services We Provide
      </h1>
      <div className="flex gap-7 mx-3 items-center flex-col md:flex-row">
        <h1 className="text-xl md:text-3xl font-bold md:w-8/12 leading-relaxed" data-aos="fade-right">
          Desbeyond is a Books & Magazine Design Firm based in Chennai, India assisting
          Books Publishing Firms, Magazine Companies across the World with its High
          Standards Deliverables. 
        </h1>
        <div>
          <img className="rounded-3xl" src={serviceimg} alt="serviceing" />
        </div>
      </div>
      <div className="text-xl md:text-3xl my-10 mx-10 text-justify">
          With our Team of Industry Design Experts, we pride
          ourselves on assisting our Clients with not just one service, but, many services.
          Our repeat business from some clients has been going for years.
          At Desbeyond, we offer a professional finish that you can be proud of.
          We take extra special care when it comes to designing our book
          interiors, covers & e-books. We provide an Complete end-to-end
          Package for Book & Magazine Creations with our wide range of Services.
      </div>
      <div>
        <div className="text-xl md:text-3xl text-center py-5 underline font-bold">
          OUR PRIMARY SERVICES
        </div>
        <div className="text-5xl my-5 font-semibold mx-5 list-none">
          <li className="my-20">1) Interior Typeset Book Designs</li>
          <li className="my-20">2) Book Cover Wrapper Design Services</li>
          <li className="my-20">3) E-Book Designs</li>
        </div>
      </div>
      <div>
        <div className="text-3xl text-center font-bold my-10 underline">
          INTERIOR TYPESET DESIGN
        </div>
        <div className="flex items-center mx-3">
          <div>
            <img src={book} className="rounded-xl" alt="interiortypesetbook"/>
          </div>
          <div className="mx-5 text-xl">
            The importance of book typeset design
            and font selection cannot be overstated
            in the world of publishing. These
            elements are the unsung heroes of any
            literary work, silently influencing our
            reading experience in profound ways.
            A well-crafted book design and an
            appropriate font are integral to the
            overall aesthetic and readability of a
            book.<br/><br />
            At Desbeyond, we make sure to deliver
            high standard Interior Typeset Designs
            for all kinds of Books - Academic,
            Fiction, No-Fiction, Comic Books & More.
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl text-center font-bold my-10 underline">
          COVER DESIGN
        </div>
        <div className="flex flex-row-reverse items-center mx-3">
          <div className="w-full">
            <img src={book2} className="rounded-xl" alt="interiortypesetbook"/>
          </div>
          <div className="mx-10 text-xl">
            Our book cover design service offers great
            flexibility as we can offer you a design
            service tailored to your individual project.
            So if you have just written a novel, history
            book or any other type of book and want a
            professional looking cover, we are here to
            help. We do also offer the complete design
            package which includes the inside layout
            of the pages so please contact us to find
            out more.<br/><br />
            At Desbeyond, we take extra special care
            when it comes to designing our book covers
            which suits for Paperback, Hardcase,
            e-Books.
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl text-center font-bold my-10 underline">
          E-BOOK DESIGN
        </div>
        <div className="flex items-center mx-3">
          <div className="w-full">
            <img src={book3} className="rounded-xl w-full" alt="interiortypesetbook"/>
          </div>
          <div className="mx-5 text-xl">
            eBooks are actually a great way to get
            your work in front of a wider audience.
            Kindles, iPads, and other devices are
            becoming an increasingly popular way
            for readers to access Books. With our
            wealth of experience, we know what
            works and, more importantly, what
            doesn't, when it comes to eBook design.<br/><br />
            At Desbeyond, let us create for you a fully
            navigable eBook via the table of
            contents, reflowable or fixed, with both
            Mobi and ePub formats supported.
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl text-center font-bold my-10 underline">
          OUR OTHER MAJOR SERVICES
        </div>
        <div className="flex justify-between mx-10">
          <div className="list-none text-2xl mx-10 my-10 font-semibold">
            <li className="my-5">
              * DTP Services
            </li>
            <li className="my-5">
              * Editing & Proof Reading Services
            </li>
            <li className="my-5">
              * Translation Services
            </li>
            <li className="my-5">
              * Transliteration Services
            </li>
            <li className="my-5">
              * Illustration Book Design
            </li>
            <li className="my-5">
              * Coffee Table Book Design
            </li>
          </div>
          <div className="list-none text-2xl mx-10 my-10 font-semibold ">
            <li className="my-5">
              * Video Book Trailer
            </li>
            <li className="my-5">
              * Media Promotion of Books
            </li>
            <li className="my-5">
              * Online Portals Listing Services
            </li>
            <li className="my-5">
              * Printing & Packaging Design
            </li>
            <li className="my-5">
              * Author Website Creation
            </li>
            <li className="my-5">
              * Audio Books Services
            </li>
          </div>
        </div>
      </div>
      {/* <div>
        <h1 className="text-2xl my-8 md:text-4xl font-bold text-center md:my-16 text-gray-800" data-aos="fade-left">
          Books Design Services
        </h1>
        <p className="text-lg mx-5 text-justify md:text-2xl md:mx-10 md:text-justify" data-aos="zoom-in">
          Book design is a multifaceted discipline that unites art and science
          to craft the visual and structural elements of a book, all with the
          overarching purpose of elevating the reader's experience and
          effectively communicating the content within its pages.This intricate
          process involves a meticulous and thoughtful orchestration of various
          design elements, each playing a pivotal role in the final product's
          aesthetic, functional, and communicative qualities.
        </p>
        <div className="px-4">
          <ServiceBookSlider />
        </div>
        <p className="text-lg mx-5 text-justify md:text-2xl md:mx-10 md:text-justify" data-aos="fade-right">
          At its core, book design seeks to engage the reader from the very
          first glance, beckoning them to explore the world contained within the
          pages. Typography, for instance, is one of the foundational pillars of
          book design. The choice of fonts, their sizes, line spacing, and
          margins may seem like subtle details, but they have a profound impact
          on readability. An ideal typographical selection should not only be
          legible but also harmonize with the book's subject matter and tone.
        </p>
      </div>
       */}
      <Footer />
    </div>
  );
};

export default Service;
