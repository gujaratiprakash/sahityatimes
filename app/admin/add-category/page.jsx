"use client";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleCategorybtn = async (e) => {
    e.preventDefault();


    console.log("clicked");

    await axios.post("http://localhost:3000/api/categories/", {
      title: title,
      image: image,
      header,
    }).then((response) => {
      router.push("/admin/view-category")
    });
  }
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <div className="flex items-center justify-center h-fit  mb-4 rounded bg-gray-50 ">
            <div className="rounded-sm  w-full  bg-white px-5 pt-6 pb-2.5 shadow-defaultsm:px-7.5 xl:pb-1">
              <div className="rounded-sm  bg-white shadow-default">
                <form action="#">
                  <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full ">
                        <label className="mb-2.5 block text-black ">
                          Enter Category Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Category Title"
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="mb-3 block text-black ">Attach Image Link </label>
                      <input
                        placeholder="Attach Image Link "
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      />
                    </div>
                    <button className="flex w-full justify-center rounded bg-blue-900 text-white mt-5 p-3 font-medium text-gray" onClick={handleCategorybtn}>
                      Add Category
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
