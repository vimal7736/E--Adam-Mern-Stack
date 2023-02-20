import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import CountryDropdown from './common/countries';
import ZipcodeDropdown from './common/zipcodeDropdown';
import author from './_child/author';
import Shippingprices from './dashboard/shipmentprice';
import LandingForm from './landingform';

export default function Register() {
  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/qwerty') no-repeat",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section onSubmit={submitForm} className='py-16' style={bg}>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'>
          Get the most affordable shipping rates for your products.
        </h1>

        <Swiper slidesPerView={1} autoplay={{ delay: 4000 }} loop={false}>
          {/* <SwiperSlide>{Registerform()}</SwiperSlide> */}
          <SwiperSlide>{LandingForm()}</SwiperSlide>
        </Swiper>
        {/* <div className='bg-white p-8 rounded-lg shadow-md'></div> */}
      </div>
    </section>
  );
}
