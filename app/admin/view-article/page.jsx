
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';

export default function ViewCategory() {
  const [data, setData] = useState([]);
  const [editableItemId, setEditableItemId] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editedImage, setEditedImage] = useState(null);
  const [editedDesciption, setEditedDesciption] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedSubtitle, setEditedSubtitle] = useState('');
  const [editedLanguage, setEditedLanguage] = useState('');


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

  function handleDelete(_id) {
    axios
      .delete(`http://localhost:3000/api/articles/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
      });
  }

  function handleEditClick(_id, currentTitle, currentDescription, currentCategory, currentSubTitle, currentLanguage) {
    setEditableItemId(_id);
    setEditedTitle(currentTitle);
    setEditedDesciption(currentDescription);
    setEditedCategory(currentCategory);
    setEditedSubtitle(currentSubTitle);
    setEditedLanguage(currentLanguage);
  }

  function handleEditCancel() {
    setEditableItemId('');
    setEditedTitle('');
    setEditedImage(null);
    setEditedDesciption('');
    setEditedCategory('');
    setEditedSubtitle('');
    setEditedLanguage('');
  }

  function handleEditSave(_id) {
    const formData = {
      title: editedTitle,
      image: _id.image,
      subtitle: editedSubtitle,
      category: editedCategory,
      description: editedDesciption,
      language : editedLanguage,
    };

    if (editedImage) {
      formData.image = editedImage;
    }

    axios
      .put(`http://localhost:3000/api/articles/${_id}`, formData)
      .then((res) => {
        console.log('Category updated:', res.data);
        getData();
        setEditableItemId('');
        setEditedTitle('');
        setEditedImage(null);
        setEditedDesciption('');
        setEditedCategory('');
        setEditedSubtitle('');
        setEditedLanguage('');
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="sm:p-4 sm:ml-64">
        <div className="sm:p-4">
          <div className="flex items-center justify-center h-fit  mb-4 rounded bg-gray-50 ">
            <div className="rounded-sm  w-full  bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
              <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
                <div className="sm:max-w-full overflow-x-auto">
                  <p className="text-3xl text-center  font-bold">View Article</p>
                  <table className="w-full mt-5 table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-left">
                        <th className="min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11">
                          News Title
                        </th>
                        <th className="min-w-[150px] py-4 px-4 font-medium text-black ">
                          File
                        </th>
                        <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                          Desciption
                        </th>
                        <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                          Category
                        </th>
                        <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                          Subtitle
                        </th>
                        <th className="min-w-[120px] py-4 px-4 font-medium text-black">
                          language
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
                          <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                            {editableItemId === item._id ? (
                              <input
                                type="text"
                                value={editedDesciption}
                                onChange={(e) => setEditedDesciption(e.target.value)}
                              />
                            ) : (
                              item.description
                            )}
                          </td>
                          <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                            {editableItemId === item._id ? (
                              <input
                                type="text"
                                value={editedCategory}
                                onChange={(e) => setEditedCategory(e.target.value)}
                              />
                            ) : (
                              item.category
                            )}
                          </td>

                          <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                            {editableItemId === item._id ? (
                              <input
                                type="text"
                                value={editedSubtitle}
                                onChange={(e) => setEditedSubtitle(e.target.value)}
                              />
                            ) : (
                              item.subtitle
                            )}
                          </td>
                          <td className="border-b border-[#eee] py-5 px-4 pl-9  xl:pl-11">
                            {editableItemId === item._id ? (
                              <input
                                type="text"
                                value={editedLanguage}
                                onChange={(e) => setEditedLanguage(e.target.value)}
                              />
                            ) : (
                              item.language
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
                                    onClick={() => handleEditClick(item._id, item.title,item.description,item.category,item.subtitle, language)}
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
        </div>
      </div>
    </>
  );
}
