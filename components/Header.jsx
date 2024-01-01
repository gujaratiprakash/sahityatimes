"use client";
import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";



export default function Header() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    const menuItems1 = [
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


    const menuItems = [
        { text: 'પ્રથમપાનું', link: '/' },
        { text: 'કાર્યક્રમ', link: '#' },
        { text: 'સાહિત્ય', link: '#' },
        { text: 'માહિતી', link: '#' },
        { text: 'મનોરંજન', link: '#' },
        { text: 'સુવિધાઓ', link: '#' },
        { text: 'ઝરૂખો', link: '#' },
        { text: 'સંપર્ક', link: '#' },
        { text: 'બ્લોગ', link: '/blog' },

    ];

    const dropdownContents = {

        સાહિત્ય: ['सुविचार', 'સાહિત્ય લેખો', 'ચાણક્ય નીતિ', 'વિદુર નીતિ', 'કહેવતો', 'ટૂંકીવાર્તા', 'નિબંધો', 'કવિતા', 'પદ્ય', 'ગીત', 'ગઝલો', 'દોહા', 'અછાંદસ', 'બાળસાહિત્ય', 'બાળકાવ્યો', 'ગુજરાતી શાયરી', 'પ્રાર્થના', 'સોનેટ', 'હાયકુ', 'હાલરડુ', 'પ્રકીર્ણ'],
        માહિતી: ['આરોગ્ય', 'મુદ્રા વિજ્ઞાન', 'રસોઇ', 'બ્યુટી ટીપ્સ', 'ટેકનોલોજી ટીપ્સ', 'વાસ્તુ તથાસ્તુ', 'ભારતની અસ્મિતા', 'અધ્યાત્મિક લેખો', 'કારકિર્દીની પસંદગી', 'અજબ ગજબ', 'બ્લોગીંગ'],
        મનોરંજન: ['જોક્સ', 'હસો અને હસાવો', 'કિટ્ટીપાર્ટી ગેમ્સ'],
        સુવિધાઓ: ['ભાષા શિક્ષણ', 'ગુજરાતીમાં લખો', 'ગુજરાતી કેલેન્ડર', 'રસોઇ આપની ફરમાઈશ', 'આપનો લેખ મોકલાવો', 'ઉપયોગી વેબસાઈટનું લીસ્ટ'],
    };

    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <>

            <div className="block p-4 bg-gray-200 border  bg-gray-100 flex flex-wrap">
                <div className="flex  mb-4">
                    <div className="w-[190%]  h-fit text-gray-500 " >

                        {menuItems1.map((item, index) => (
                            <React.Fragment key={index}>
                                <a href={item.link} className="p-1 text-sm hover:text-orange-300">
                                    {item.text}
                                </a>
                                {index !== menuItems1.length - 1 && <span className="p-1">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="w-1/2 text-end h-fit flex flex-col items-end justify-end space-x-4">

                        <a href="YOUR_FACEBOOK_URL" className='text-gray-500 sm:mt-0 mt-10'>
                            <FaFacebookF size={25} />
                        </a>

                        <a href="YOUR_YOUTUBE_URL" className='sm:mt-6 mt-10 text-gray-500'>
                            <IoLogoYoutube size={25} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="block py-2 bg-[#FFFFFF] border  bg-gray-100 flex flex-wrap">
                <div className="flex sm:flex-row flex-col items-center p-4">
                    <div className="w-full mb-4">
                        <img src='/assets/mlogo.png' className="w-2/3 md:w-full mx-auto" />
                    </div>
                    <div className="w-full mb-4 text-center">
                        <p className='text-2xl text-gray-500'>લોકસંસ્કૃતિ * साहित्य टाइम्स * लोकसंस्कृति</p>
                    </div>
                    <div className="w-full mb-4">
                        <img src='/assets/rlogo.png' className="w-2/3 md:w-full mx-auto" />
                    </div>
                    <div className="w-full flex sm:flex-row flex-col items-center">

                        <div className="flex mb-4 mt-7 sm:ms-32">
                            <div className="w-2/3 mt-6">
                                <input type="text" id="first_name" className=" border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Search" required />
                            </div>
                            <div className="w-1/6 mt-1">
                                <button className='py-2 m-5 p-5 bg-[#A20075] text-white'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <marquee className="bg-[#FFB400] font-bold">
                    DigiCable  Channel No  787  –  youtube Channel  : Sahitya Times  /  Web
                    Site  : www.sahityatimes.com..  સાહિત્ય ટાઈમ્સ – લોકસંસ્કૃતિ દ્વારા
                    કોલકાતાના ગુજરાતીઓના સમાચાર લોક નૃત્ય,રાસ ગરબા,નાટિકા લોક ગીત, સુગમ
                    સંગીત, દોહા ,મુક્તક છંદ નાટક સ્કીટ,પ્રેરક પ્રસંગો સ્ટેન્ડ અપ કોમેડી,
                    ભવાઈ, જોકસ પ્રાચીન–અર્વાચીન-શ્રુતિ-મૌલિક ઈતિહાસ, વાનગી રેસીપી, સ્વાસ્થ
                    ,ચિકિત્સા કાવ્ય,શેરો-શાયરી પઠન , ચર્ચા-વિચારણા-વક્તવ્ય-મંતવ્ય
                    .ધાર્મિક,સાંસ્કૃતિક,સામાજિક વ્યવસાયિક ,મનોરંજક તથા ગુજરાતીઓને ગર્વ અપાવે
                    એવા વિવિધ કાર્યક્રમો ….. ગુજરાતી સામાજિક – ,ધાર્મિક- સાંસ્કૃતિક –
                    વ્યવસાયિક સંસ્થા -ક્લબ – ફોરમ– મિત્ર વર્તુળ – મંડળ, મહિલા મંડળને અનુરોધ –
                    તેઓ તેમના કાર્યક્રમોના સમાચાર, રિપોર્ટ, વિડીયો અહેવાલ દેખાડવા માટે
                    સંપર્ક કરે સાહિત્ય ટાઈમ્સ ૯૯૦૩૮૬૨૪૨૪ / ૯૩૩૧૮૫૨૪૨૪ ..Sahitya Times /
                    Loksanskruti  9903862424   9331852424 .  loksanskruti1@gmail.com  Studio
                    Office : Bolai Kutir 23A/1B Justice Dwarkanath Road , Ground Floor
                    ,Bhowanipore , Kolkata : 700 020 પ્રથમ વાર કોલકાતાના ગુજરાતી કાર્યક્રમો
                    દરરોજ, હરરોજ , હરહમેશ બધા માટે ….. આપણા કોલકાતાના ગુજરાતીઓના
                    સમાચાર, લોક નૃત્ય,રાસ ગરબા,નાટિકા,લોક ગીત, સુગમ સંગીત, દોહા ,મુક્તક છંદ
                    નાટક સ્કીટ,પ્રેરક પ્રસંગો સ્ટેન્ડ અપ કોમેડી,ભવાઈ,જોકસ વાનગી રેસીપી,
                    સ્વાસ્થ ,ચિકિત્સા કાવ્ય,શેરો-શાયરી પઠન ,
                    ચર્ચા-વિચારણા-વક્તવ્ય-મંતવ્ય.પ્રાચીન–અર્વાચીન-શ્રુતિ-મૌલિક
                    ઈતિહાસ,ધાર્મિક,સાંસ્કૃતિક,સામાજિક મનોરંજક તથા ઘણા વિવિધ ગુજરાતીઓને ગર્વ
                    અપાવે એવા કાર્યક્રમો …..આપણી વાતો – આપણા માટે – આપણા દ્વારા આપણા
                    કોલકાતાના સ્થાનિક TV ચેનલમાં..સંપર્ક કરો : કેયુર મજમુદાર -Keyur Majmudar
                    સાહિત્ય ટાઈમ્સ Sahitya Times / Loksanskruti ૯૯૦૩૮૬૨૪૨૪ / ૯૩૩૧૮૫૨૪૨૪
                    ..Sahitya Times / Loksanskruti   9903862424 9331852424 . Studio Office :
                    Bloai Kutir 23A/1B Justice Dwarkanath Road , Ground Floor ,Bhowanipore ,
                    Kolkata : 700 020 loksanskruti1@gmail.com.. We are also on youtube as
                    Channel as Sahitya Times   .Digi  Cable  Channel  no  787
                </marquee>
            </div>

            <nav className="bg-[rgb(162,0,117)] border-gray-200">
                <div className="sm:max-w-full flex flex-wrap sm:items-center sm:justify-between p-4">
                    <div className="flex sm:items-center sm:space-x-3 rtl:space-x-reverse">
                        <div className="flex items-center justify-between w-full">
                            <button
                                onClick={toggleDrawer}
                                className="block sm:hidden text-white text-2xl focus:outline-none"
                            >
                                &#8801;
                            </button>
                            <ul
                                className={`${openDrawer ? 'block' : 'hidden'
                                    } sm:flex sm:flex-col font-medium sm:p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 w-full sm:w-auto`}
                            >
                                {menuItems.map((item, index) => (
                                    <li key={index} onMouseEnter={() => setOpenDropdown(item)}>
                                        {dropdownContents[item] ? (
                                            <div className="relative inline-block text-left">
                                                <button
                                                    type="button"
                                                    className="block py-2 px-3 text-white text-xl rounded md:bg-transparent hover:text-orange-400 md:p-0 focus:outline-none"
                                                >
                                                    {item}
                                                </button>
                                                {openDropdown === item && (
                                                    <div className="sm:origin-top-right absolute sm:right-0 sm:left-0 sm:mt-2 w-56 font-bold bg-[#A20075] ring-1 ring-white ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            {dropdownContents[item].map((dropdownItem, index) => (
                                                                <a
                                                                    key={index}
                                                                    href="#"
                                                                    className="sm:block sm:px-4 py-2 text-md text-white hover:text-orange-400"
                                                                >
                                                                    {dropdownItem}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <a
                                                href={item.link} 
                                                className="block py-2 px-3 text-white text-xl rounded md:bg-transparent hover:text-orange-400 md:p-0"
                                                aria-current="page"
                                            >
                                               {item.text}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="items-end justify-end">
                        <button
                            type="button"
                            className="self-end px-4 py-3 text-lg font-bold text-white bg-[#FFB400] hidden sm:block"
                        >
                            HINDI
                        </button>
                    </div>
                </div>
            </nav>


        </>
    );
}
