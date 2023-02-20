import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const Section5 = () => {
  return (
    <div className='bg-blue-50 py-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-4xl font-bold mb-6'>
              Cargo Transportation Services
            </h2>
            <p className='text-lg mb-8'>
              We offer reliable and affordable cargo transportation services
              worldwide. Whether you need to ship your products by air, sea, or
              land, we have got you covered.
            </p>
            <Link href='/services/cargo-transportation'>
              <a className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3'>
                Learn More <FaChevronRight className='ml-2' />
              </a>
            </Link>
          </div>
          <div className='relative'>
            <div className='absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-lg'>
              <Image
                src='/cargo-transportation.jpg'
                alt='Cargo Transportation'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
