import React, { useEffect, useState } from 'react';

export default function DownloadPage() {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [downloading, setDownloading] = useState(false); // State to track download status

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/rph/files`);
        const result = await response.json();
        
        // Check if the response contains files
        if (result.files) {
          setData(result.files); // Update state with formatted data
        } else {
          console.error("No files found in the response");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUsers();
  }, []);

  // Download function
  const handleDownload = async (userId, fileName, file_type) => {
    setDownloading(true); // Set downloading state to true
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/rph/download/${userId}/${fileName}/${file_type}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
  
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
  
      // Create a blob from the response
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; // Set the filename for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download file. Please try again.");
    } finally {
      setDownloading(false); // Reset downloading state after download attempt
    }
  };

  // Render loading indicator or data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Halaman Download</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border rounded-lg'>
          <thead className='bg-gray-200 text-gray-600'>
            <tr>
              <th className='py-2 px-4 border-b'>No.</th>
              <th className='py-2 px-4 border-b'>Nama Pengguna</th>
              <th className='py-2 px-4 border-b'>status</th>
              <th className='py-2 px-4 border-b'>Tipe Berkas</th>
              <th className='py-2 px-4 border-b'>Deskripsi</th>
              <th className='py-2 px-4 border-b'>Berkas</th>
              <th className='py-2 px-4 border-b'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.user_id} className='text-gray-700'>
                <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
                <td className='py-2 px-4 border-b'>{item.user_name}</td>
                <td className='py-2 px-4 border-b'>{item.role}</td>
                <td className='py-2 px-4 border-b'>{item.file_type}</td>
                <td className='py-2 px-4 border-b'>{item.description}</td>
                <td className='py-2 px-4 border-b text-center'>{item.name}</td>
                <td className='py-2 px-4 border-b text-center'>
                  <button
                    className='bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600'
                    onClick={() => handleDownload(item.user_id, item.name, item.file_type)} // Pass user_id and file_name
                    disabled={downloading} // Disable button while downloading
                  >
                    {downloading ? 'Downloading...' : 'Download'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {downloading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div> {/* Spinner */}
          </div>
        )}
      </div>
    </div>
  );
}
