"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";

export default function DataPengajar() {
  const [pengajar, setPengajar] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [newTeacherData, setNewTeacherData] = useState({
    name: "",
    role: "",
    email: "",
    phone_number: "",
    second_phone_number: "",
    address: ""
  });
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPengajar = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/users/prof-user`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPengajar(data); // Assuming data is an array of teacher objects
      } catch (error) {
        console.error("Error fetching pengajar data:", error);
      }
    };

    fetchPengajar();
  }, []);

  // Function to handle teacher deletion
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/users/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Failed to delete teacher");
      }

      setPengajar(pengajar.filter((item) => item.id !== id)); // Remove deleted teacher from list
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  // Function to handle editing a teacher
  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setNewTeacherData({
      name: teacher.name,
      role: teacher.role,
    });
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacherData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle updating teacher
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/users/update/${editingTeacher.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTeacherData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update teacher");
      }

      const updatedTeacher = await response.json();
      setPengajar((prev) =>
        prev.map((item) => (item.user_id === updatedTeacher.user_id ? updatedTeacher : item))
      );

      // Reset editing state
      setEditingTeacher(null);
      setNewTeacherData({
        name: "",
        role: "",
      });
    } catch (error) {
      console.error("Error updating teacher:", error);
      setError(error.message); // Capture error for user feedback
    }
  };

  return (
    <div className='fixed p-6 mt-0 '>
      <div className='flex flex-col text-center items-center justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Data Pengajar</h1>
        <a
          href='#'
          className='text-blue-600 font-semibold text-lg mb-4 inline-block'>
          Tambahkan Pengajar
        </a>
      </div>

      <div className='overflow-y-auto h-[50vh]'>
        <ScrollArea className='h-96'>
          <table className='w-[80rem] bg-white shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-gray-50 border-b mb-10'>
              <tr>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking -wider'>
                  No.
                </th>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Guru
                </th>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Unit Pengajaran
                </th>
                <th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {pengajar.map((item, index) => (
                <tr key={item.id}>
                  <td className='py-4 px-6'>{index + 1}</td>
                  <td className='py-4 px-6 font-medium text-gray-900'>
                    {item.name}
                  </td>
                  <td className='py-4 px-6'>{'TK SANTA LUSIA SEI ROTAN'}</td>
                  <td className='py-4 px-6'>
                    <button
                      onClick={() => handleEdit(item)}
                      className='bg-blue-500 text-white px-4 py-1 rounded-md mr-2'>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className='bg-red-500 text-white px-4 py-1 rounded-md'>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>

      {/* Edit Teacher Modal */}
      {editingTeacher && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Edit Pengajar</h2>
            {error && <p className='text-red-500'>{error}</p>}
            <form onSubmit={handleUpdate}>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Nama:</label>
                <input
                  type='text'
                  name='name'
                  value={newTeacherData.name}
                  onChange={handleChange}
                  required
                  className='mt-1 p-2 border border-gray-300 rounded-md w-full'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Role:</label>
                <select
                  name='role'
                  value={newTeacherData.role}
                  onChange={handleChange}
                  required
                  className='mt-1 p-2 border border-gray-300 rounded-md w-full'>
                  <option value=''>Select Role</option>
                  <option value='guru'>Guru</option>
                  <option value='wali_murid'>Wali Murid</option>
                  <option value='kepala_sekolah'>Kepala Sekolah</option>
                </select>
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={() => setEditingTeacher(null)} // Close modal
                  className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2'>
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className='fixed bottom-0 right-0 w-[100rem] h-[5rem] bg-white drop-shadow-xl z-50'>
        <footer className='fixed bottom-0 text-gray-500 text-sm py-7 text-center w-full '>
          <p>
            Copyright Supervisi
            <a href='#' className='text-blue-500 hover:underline'>
              TK SANTA LUSIA
            </a>{" "}
            2024 @ Saloma Banjarnahor
          </p>
        </footer>
      </div>
    </div>
  );
}
