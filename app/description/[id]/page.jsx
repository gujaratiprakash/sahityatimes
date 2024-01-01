"use client"
import React,{useState, useEffect} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';


const scienceNews = [
    {
        id: 1,
        title: 'Galaxy Cluster With Billion Stars',
        imageUrl: '/assets/science-1.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=IWRRgqlC8mU',
        description: 'Scientists have made an astonishing leap forward in their understanding of quantum entanglement, a phenomenon once described by Einstein as "spooky action at a distance." This groundbreaking discovery sheds light on the intricate connections between particles and the fundamental principles governing the quantum world.Researchers, employing cutting-edge experiments and theoretical frameworks, have unraveled the complexities of entangled particles, revealing unprecedented insights into their behavior and interactions. By deciphering this mysterious phenomenon, scientists are paving the way for revolutionary advancements in quantum computing, secure communication, and our comprehension of the fabric of reality at its most fundamental level. This discovery not only deepens our understanding of quantum mechanics but also holds the potential to revolutionize technology and reshape our perception of the universe.',
    }
];

export default function Description({ params }) {
    
    const { id } = params;
    const [data, setData] = useState([]);

  function getData() {
    axios
      .get(`http://localhost:3000/api/articles/${id}`)
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
                
                    <div className=" p-16 bg-white">

                            <div key={data._id} className="bg-white rounded-lg overflow-hidden">

                                <div className="sm:p-4">
                                    <h1 className='sm:text-4xl text-2xl font-bold sm:p-5'>{data.title}</h1>
                                    <p className="text-gray-600 mb-4 sm:mt-0 mt-5">{data.description}</p>
                                    
                                </div>
                                <img className="w-full sm:h-96 object-cover" style={{ backgroundSize: 'cover' }} src={data.image} alt={data.title} />

                            </div>
                   
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
