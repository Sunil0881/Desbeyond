import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer'
import "../components/MovingText.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from '../components/Navbar';
AOS.init();


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akt6h9j', 'template_bs48k17', form.current, 'dHqWDQSysc65dG5Uv')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent');
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    
       
      <div>
        <Navbar/>
        <section class="">
          <div class="flex flex-wrap">
            <div class=" w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 md:pt-20">
              <h2 class="mb-6 text-3xl font-bold text-white">Contact us</h2>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                      Desbeyond is a Books & Magazine Design Firm based in Chennai, India assisting
                      Books Publishing Firms, Magazine Companies across the World with its High
                      Standards Deliverables. With our Team of Industry Design Experts, we pride
                      ourselves on assisting our Clients with not just one service, but, many services.
                      Our repeat business from some clients has been going for years.
                                    </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                Chennai : No.2, GK Moopanar Road, Srinivasa Nagar,
                New Perungalathur, Chennai - 63.<br></br>
                Our Other Locations : Coimbatore, Pondicherry
              </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
              +91 95517 58115 | +91 87540 66170 | +91 80155 31319
              </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
              desbeyondglobal@gmail.com
              </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
              www.desbeyond.com
              </p>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 md:pt-24">
              <form ref={form} onSubmit={sendEmail}>
                <div class=" mb-6" data-te-input-wrapper-init>
                <label
                    class="pointer-events-none  top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    for="exampleInput90">Name
                  </label>
                  <input type="text" name="user_name"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                     placeholder="Name" /> 
                </div>
                <div class=" mb-6" data-te-input-wrapper-init>
                  <label
                    class="pointer-events-none  top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    for="exampleInput91">Email address
                  </label>
                  <input type="email" name="user_email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                     placeholder="Email address" />
                </div>
                <div class=" mb-6" data-te-input-wrapper-init>
                  <label for="exampleFormControlTextarea1"
                    class="pointer-events-none  top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                    <textarea name="message"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                </div>
               
                <button type="submit" value="Send" data-te-ripple-init data-te-ripple-color="light"
                  class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>

   
   
  )
}


export default Contact
