import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgSrc from '../assets/coverimg.jpeg';
import arrow from '../assets/down-arrow.png';
import { CustomPrevArrow, CustomNextArrow } from './Customarrow';
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

const BookCard = ({ name, author, imgSrc, voters, summary }) => (
  <div className="book-card bg-gradient-to-t from-green-300 via-blue-500 to-purple-600 mx-8 p-4 shadow-lg rounded-lg">
    <img src={imgSrc} alt={name} className="w-64 h-80 mx-auto my-4" />
    <div className="card-content">
      <div className="book-name text-xl font-semibold mb-2">{name}</div>
      <div className="book-author text-gray-600">{author}</div>
      <div className="rate flex items-center text-yellow-500 mb-2">
        <span className="book-voters text-gray-500">{voters} voters</span>
      </div>
      <div className="book-summary text-gray-700">{summary}</div>
    </div>
  </div>
);

const BookCarousel = ({ books }) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow arrowImage={arrow} />,
    nextArrow: <CustomNextArrow arrowImage={arrow} />,
  };

  if (window.innerWidth <= 768) {
    settings.slidesToShow = 1; // Show only one slide on medium-sized screens (md: max-width: 768px)
  }

  return (
    <div className="book-carousel mt-8" data-aos="fade-left">
      <Slider {...settings}>
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </Slider>
    </div>
  );
};

  

const ServiceBookSlider = () => {
  // Sample book data
  const books = [
    {
      name: 'Book 1',
      author: 'Author 1',
      imgSrc: `${imgSrc}`,
      voters: 1200,
      summary: 'This is the summary of Book 1.',
    },
    {
      name: 'Book 2',
      author: 'Author 2',
      imgSrc: `${imgSrc}`,
      voters: 3000,
      summary: 'This is the summary of Book 2.',
    },
    {
      name: 'Book 3',
      author: 'Author 3',
      imgSrc: `${imgSrc}`,
      voters: 4200,
      summary: 'This is the summary of Book 3.',
    },
    {
      name: 'Book 4',
      author: 'Author 4',
      imgSrc: `${imgSrc}`,
      voters: 4700,
      summary: 'This is the summary of Book 4.',
    },
  ];

  return (
    <div className="book-store container mx-auto py-8">
      <BookCarousel books={books} />
    </div>
  );
};

export default ServiceBookSlider;
