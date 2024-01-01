import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
    const menuItems = [
        { text: 'Home', link: '#' },
        { text: 'Contact Us', link: '#' },
        { text: 'Features', link: '#' },
        { text: 'First Test Page', link: '#' },
        { text: 'Home', link: '#' },
        { text: 'Literature', link: '#' },
        { text: 'Live TV', link: '#' },
        { text: 'Shows', link: '#' },
        { text: 'अक्टूबर मूवी रिव्यू', link: '#' },
        { text: 'कलम, आज उनकी जय बोल | कविता', link: '#' },
        { text: 'गैलरी', link: '#' },
        { text: 'जानकारी', link: '#' },
        { text: 'परमाणु : द स्टोरी ऑफ पोखरण मूवी रिव्यू', link: '#' },
        { text: 'हिचकी मूवी रिव्यू', link: '#' },
        { text: 'हिचकी मूवी रिव्यू', link: '#' },
        { text: 'हैदराबाद पहुंचे रणवीर सिंह और सारा अली खान, आज से शुरू करेंगे ‘सिम्बा’ की शूटिंग', link: '#' },
    ];

    return (
        <div style={{ backgroundImage: `url('/assets/websitebg.jpg')`, height: '100vh', backgroundSize: 'cover', overflow: 'hidden' }} className='h-fit'>
            <div className="p-16 " style={{ overflowY: 'scroll', height: '100vh' }}>

                <Header />
                <div className="carousel">
                    <div className="carousel-item w-full">
                        <img src='/assets/slider1.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/dance.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/poem.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/R_1200x340_recipes.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/songs.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/website.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/clints.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src='/assets/R_2.jpg' className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
                <div className='bg-white p-6 sm:p-12'>
                    <div className="flex flex-col md:flex-row mb-4 md:mb-0 md:space-x-4 sm:p-10">
                        <div className="w-full md:w-1/3 w-36 sm:ms-0 ms-28 mb-4 md:mb-0 md:flex md:items-center">
                            <img src='/assets/homepage_left.jpg' className='w-1/2 md:w-1/2 sm:mx-auto' alt='Left' />
                        </div>
                        <div className="w-full md:w-1/3 md:ms-64">
                            <p className='text-2xl text-center font-bold text-gray-600'>Live TV</p>
                            <div className="mt-4 sm:mt-64 mx-auto w-full md:w-fit h-fit">
                                <video className='w-full h-full' controls>
                                    <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 w-36 sm:ms-0 ms-28 sm:mt-0 mt-5 md:ms-60 md:flex md:items-center">
                            <img src='/assets/homepage_right.jpg' className='w-1/2 md:w-1/2 sm:mx-auto' alt='Right' />
                        </div>
                    </div>
                    <div className="w-full">
                        <img src='/assets/homepage_footer.jpg' className='sm:w-full w-full sm:h-auto h-52 object-cover' alt='Footer' />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

