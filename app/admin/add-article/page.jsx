"use client";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddArticle() {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");

  const router = useRouter();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleArticlebtn = (e) => {
    e.preventDefault();

    console.log("clicked");

    axios.post("http://localhost:3000/api/articles", {
      title: title,
      image: image,
      subtitle: subtitle,
      category: category,
      description: description,
      language : language,
      header,
    }).then((response) => {
      router.push("/admin/view-article")
    });;
  }

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <div className="flex items-center justify-center h-fit  mb-4 rounded bg-gray-50 ">
            <div className="rounded-sm  w-full  bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
              <div className="rounded-sm  bg-white shadow-default">
                <form action="#">
                  <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full ">
                        <label className="mb-2.5 block text-black ">
                          Enter Article Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter News Title"
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                        />
                      </div>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full ">
                        <label className="mb-2.5 block text-black ">
                          Enter Article Subtitle
                        </label>
                        <input
                          type="text"
                          placeholder="Enter News Subtitle"
                          onChange={(e) => setSubtitle(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="mb-3 block text-black ">Attach Link Image</label>
                      <input
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "
                      />
                    </div>
                    <div className="mb-4.5 mt-5">
                      <label className="mb-2.5 block text-black ">Desciption</label>
                      <textarea
                        rows={6}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Desciption"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "></textarea>
                    </div>

                    <div className="mb-4.5 mt-5">
                      <label className="mb-2.5 block text-black ">
                        Select Category
                      </label>
                      <div className="relative z-20 bg-transparent ">
                        <select onChange={(e) => setCategory(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ">
                          <option value="">Select Article</option>
                          <option value="Science">Science</option>
                          <option value="Health">Health</option>
                          <option value="Environment">Environment</option>
                          <option value="Politics">Politics</option>
                          <option value="Technology">Technology</option>
                          <option value="Business">Business</option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mb-4.5 mt-5">
                      <label className="mb-2.5 block text-black ">
                        Select language
                      </label>
                      <div className="relative z-20 bg-transparent ">
                        <select onChange={(e) => setLanguage(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ">
                          <option value="">Select language</option>
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                          <option value="Gujarati">Gujarati</option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <button className="flex w-full justify-center rounded bg-blue-900 text-white mt-5 p-3 font-medium text-gray" onClick={handleArticlebtn}>
                      Add Article
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
