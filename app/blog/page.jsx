"use client"
import React from 'react';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import axios from 'axios';

const cardData = [
  {
    category: 'Science',
    image: '/assets/science.jpg',
    link: '/blog/Science',
  },
  {
    category: 'Health',
    image: '/assets/Health.jpg',
    link: '/blog/Health',
  },
  {
    category: 'Environment',
    image: '/assets/ENVIROMENT.jpg',
    link: '/blog/Environment',
  },
  {
    category: 'Politics',
    image: '/assets/Politics.jpg',
    link: '/blog/Politics',
  },
  {
    category: 'Technology',
    image: '/assets/Technology.jpg',
    link: '/blog/Technology',
  },
  {
    category: 'Business',
    image: '/assets/Business.jpg',
    link: '/blog/Business',
  },
];

export default function Blog() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get('http://localhost:3000/api/categories/')
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          console.error('Empty data received from the API');
          setData([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div style={{ backgroundImage: `url('/assets/websitebg.jpg')`, height: '100vh', backgroundSize: 'cover', overflow: 'hidden' }} className='h-fit'>
        <div className="p-16 " style={{ overflowY: 'scroll', height: '100vh' }}>
          <Header />

          <div className='bg-white'>
            <div className="flex flex-wrap justify-center p-3 md:p-5">
              {data.map((card, index) => (
                <div className="w-full sm:w-1/2 md:w-1/3 p-3" key={index}>
                  <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
                    <Link href="#">
                      <img className="rounded-t-lg w-full h-96 object-cover" src={card.image} alt={card.title} />
                    </Link>
                    <div className="p-4 flex flex-col items-center justify-center h-40">
                    <div>
                      <Link href="#">
                        <h5 className="text-center mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                      </Link>
                      </div>
                      <div className='self-end  mt-4'>
                      <Link href={`blog/${card.title}`} className="self-end mt-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md">
                        View Details
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
