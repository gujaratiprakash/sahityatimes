
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useSession } from "next-auth/react";
import ReactApexChart from 'react-apexcharts';
import Sidebar from './Sidebar';


const options = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
  },

};
export default function UserInfo({ children }) {
  const [data, setData] = useState([]);
  const [editableItemId, setEditableItemId] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editedImage, setEditedImage] = useState(null);


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

  function handleDelete(_id) {
    axios
      .delete(`http://localhost:3000/api/categories/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
      });
  }

  function handleEditClick(_id, currentTitle) {
    setEditableItemId(_id);
    setEditedTitle(currentTitle);
  }

  function handleEditCancel() {
    setEditableItemId('');
    setEditedTitle('');
    setEditedImage(null);
  }

  function handleEditSave(_id) {
    const formData = {
      title: editedTitle,
      image: _id.image
    };

    if (editedImage) {
      formData.image = editedImage;
    }

    axios
      .put(`http://localhost:3000/api/categories/${_id}`, formData)
      .then((res) => {
        console.log('Category updated:', res.data);
        getData();
        setEditableItemId('');
        setEditedTitle('');
        setEditedImage(null);
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  

  const [chartData, setChartData] = useState({
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'News Progress',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  });

  const { data: session } = useSession();

  return (
    <>
      <div>
        <Sidebar />

        <div className="p-4 sm:ml-64">
          <div className="p-">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 ">

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md text-center font-bold text-xl text-black ">
                      456
                    </h4>
                    <span className="text-lg text-center  font-medium">Total Articals</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md text-center font-bold text-xl text-black ">
                      456
                    </h4>
                    <span className="text-lg text-center  font-medium">Total Category</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md text-center font-bold text-xl text-black ">
                      456
                    </h4>
                    <span className="text-lg text-center  font-medium">Total Blogs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center h-fit mb-4 rounded bg-gray-50 ">
              <div id="chart" className='w-full'>
                <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={300} />
              </div>
            </div>


            <div className="max-w-full overflow-x-auto">
              <p className="text-3xl text-center  font-bold">View Category</p>
              <table className="sm:w-full mt-5 table-auto">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11">
                      News Title
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black ">
                      File
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black ">
                      Date
                    </th>
                    <th className="py-4 px-4 font-medium text-black ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item._id}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                        {editableItemId === item._id ? (
                          <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                          />
                        ) : (
                          item.title
                        )}
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 ">
                        {editableItemId === item._id ? (
                          <input
                            type="text"
                            onChange={(e) => setEditedImage(e.target.value)}
                          />
                        ) : (
                          <img src={item.image} className="w-32" alt={`Image for ${item.title}`} />
                        )}
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 ">
                        <p className="inline-flex rounded-full  py-1 px-3 text-sm font-medium ">
                          {/* Display current date for new items or updated date for edited items */}
                          {editableItemId === item._id ? new Date().toLocaleString() : item.createdAt}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 ">
                        <div className="flex items-center space-x-3.5">
                          {editableItemId === item._id ? (
                            <>
                              <button
                                className="hover:text-primary"
                                onClick={() => handleEditSave(item._id)}
                              >
                                Save
                              </button>
                              <button
                                className="hover:text-primary"
                                onClick={handleEditCancel}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="hover:text-primary"
                                onClick={() => handleEditClick(item._id, item.title)}
                              >
                                Edit
                              </button>
                              <button
                                className="hover:text-primary"
                                onClick={() => handleDelete(item._id)}
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>

    </>
    
  );
}
