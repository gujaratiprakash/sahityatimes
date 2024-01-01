import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className='p-4 md:p-6' style={{ backgroundImage: `url('/assets/footer-bg.jpg')` }}>
                <div className="flex flex-col md:flex-row mb-4 md:space-x-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <div className="max-w-md mx-auto p-4 border">
                            <div className="flex mb-4">
                                <div>
                                    <p className='bg-blue-600 text-2xl mt-5 text-white p-5'><i><FaLocationDot /></i></p>
                                </div>
                                <div className="text-white text-sm ms-5">
                                    <p className='text-gray-400 text-lg font-bold'>Address:-</p>
                                    <p>Bolai Kutir 23A/1B Justice Dwarkanath Road, Ground Floor, Bhowanipore, Kolkata: 700 020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="max-w-md mx-auto p-4 border">
                            <div className="flex mb-4">
                                <div>
                                    <p className='bg-blue-600 text-2xl mt-5 text-white p-5'><i><FaPhoneAlt /></i></p>
                                </div>
                                <div className="text-white text-sm ms-5 mt-5">
                                    <p className='text-gray-400 text-lg font-bold'>या हमारे इस नंबर पर संपर्क कीजिये</p>
                                    <p>9903862424 / 9331852424</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="max-w-md mx-auto p-4 border">
                            <div className="flex mb-4">
                                <div>
                                    <p className='bg-blue-600 text-2xl mt-5 text-white p-5'><i><IoMdMail /></i></p>
                                </div>
                                <div className="text-white text-sm ms-5 mt-5">
                                    <p className='text-gray-400 text-lg font-bold'>Email Us:-</p>
                                    <p>loksanskruti1@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mt-6 md:mt-10' />

                <div className="flex flex-col md:flex-row mb-4 md:mt-10 text-white">
                    <div className="w-full md:w-1/2 p-5">
                        <p className='font-bold text-xl'>ABOUT US</p>
                        <div className='mt-5 text-md'>
                            <p className='mt-5 text-md'>
                                પ્રથમ વાર કોલકાતાના ગુજરાતી કાર્યક્રમો દરરોજ, હરરોજ , હરહમેશ બધા માટે ….. આપણા કોલકાતાના ગુજરાતીઓના સમાચાર, લોક નૃત્ય,રાસ ગરબા,નાટિકા,લોક ગીત, સુગમ સંગીત, દોહા ,મુક્તક છંદ નાટક સ્કીટ,પ્રેરક પ્રસંગો સ્ટેન્ડ અપ કોમેડી,ભવાઈ,જોકસ વાનગી રેસીપી, સ્વાસ્થ ,ચિકિત્સા કાવ્ય,શેરો-શાયરી પઠન , ચર્ચા-વિચારણા-વક્તવ્ય-મંતવ્ય .પ્રાચીન–અર્વાચીન-શ્રુતિ-મૌલિક <br /> ઈતિહાસ,ધાર્મિક,સાંસ્કૃતિક,સામાજિક મનોરંજક તથા ઘણા વિવિધ ગુજરાતીઓને ગર્વ અપાવે એવા કાર્યક્રમો …..આપણી વાતો – આપણા માટે – આપણા દ્વારા આપણા કોલકાતાના સ્થાનિક TV ચેનલમાં..
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-5">
                        <p className='font-bold text-xl'>OUR SERVICES</p>
                        <p className='mt-5'><a href='#' className=' text-md text-orange-400 hover:text-orange-400'>Home</a></p>
                        <p className='mt-2'><a href='#' className=' text-md  hover:text-orange-400'>Contact Us</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>Features</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>First Test Page</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>Home</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>Literature</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>Live TV</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>Shows</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>अक्टूबर मूवी रिव्यू</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>कलम, आज उनकी जय बोल | कविता</a></p>
                        <p className='mt-2'><a href='#' className=' text-md hover:text-orange-400'>गैलरी</a></p>
                    </div>
                    <div className="w-full md:w-1/2 p-5">
                        <p className='font-bold text-xl'>LATEST POSTS</p>
                        <div className='mt-7 flex '>
                            <img src='/assets/img_404.png' width={'16%'} />
                            <p className='ms-12'> मेरे सर्वस्व की पहचान अपने आँचल की दे छाँव ममता की वो लोरी गाती मेरे सपनों को सहलाती गाती रहती, मुस्कराती जो वो है मेरी माँ। प्यार […] <a href='#' className='text-pink-600'>Raad more</a></p>
                        </div>
                        <p className='border-b border-dotted mt-6' />
                        <div className='mt-7 flex'>
                            <img src='/assets/DSC_0072-Copy.jpg' width={'16%'} />
                            <p className='ms-12'> हिंदी कराओके सिंगिंग लीग के दुसरे सीजन का हुआ आगाज <a href='#' className='text-pink-600'>Raad more</a></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-[#BC00A6]'>
                <div className="flex mb-4 p-5">
                    <div className="w-1/3" >
                        <p className='text-md text-white'>© 2016 sahityatimes. All Rights Reserved</p>
                    </div>
                    <div className="w-1/3 text-center" >
                        <p className='text-md text-white'>Visitors : 331</p>
                    </div>
                    <div className="w-1/3 text-end" >
                        <p className='text-md text-white'>Design by : GujaratiGraphics</p>
                    </div>
                </div>
            </div>

        </>
    )
}
