"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from 'axios';



export default function View({ params }) {

  const [data, setData] = useState([]);

  function getData() {
    axios
      .get('http://localhost:3000/api/articles/')
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


  const { category } = params;
 
  const filteredBlogs = data.filter((blog) => {
    return blog.category === category;
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url('/assets/websitebg.jpg')`,
          height: "100vh",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="h-fit">
        <div className="p-16 " style={{ overflowY: "scroll", height: "100vh" }}>
          <Header />

          <div className=" p-16 bg-white">
            {filteredBlogs.map((content) => (
              <div className="flex sm:flex-row flex-col mb-4 sm:mt-5" key={content.id}>
                <div className="sm:w-1/4">
                  <Link href={`/description/${content._id}`}>
                    <img src={content.image} className="w-full h-full" alt={content.title} />
                  </Link>
                </div>
                <div className="sm:w-3/4 sm:ms-12">
                  <Link href={`/description/${content._id}`}>
                    {" "}
                    <p className="sm:text-3xl text-2xl sm:mt-0 mt-5 font-bold">{content.title}</p>
                  </Link>
                  <p className="sm:text-lg text-md mt-2 ">{content.subtitle}</p>
                  <p className="sm:text-xl text-md mt-3 font-bold">{content.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
