import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const deleteMessage = async (id) => {
        try {
            await fetch(`http://localhost:4000/users/${id}`, { method: 'DELETE' });
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
  
    if (loading) {
        return <div className="text-gray-600">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }
  
    return (
        <Link to='\'>
                   <div className="bg-black py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                        Contact Submissions
                    </h2>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="mt-4 px-3 py-2 text-black"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="mt-10">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Email</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Phone</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Message</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {users.filter(user =>
                                    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    user.message.toLowerCase().includes(searchTerm.toLowerCase())
                                ).map((user) => (
                                    <tr key={user._id}>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{user.username}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{user.email}</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{user.phone}</td>
                                        <td className="px-6 py-4 text-sm text-gray-300">{user.message}</td>
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            <button 
                                                onClick={() => deleteMessage(user._id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Link>
        );
  };
  
  export default UsersList;