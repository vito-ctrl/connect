import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
  
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-gray-600">Loading...</div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-red-500">Error: {error}</div>
        </div>
      );
    }
  
    return (
        <Link to='\'>
            <div className="bg-black py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                    Contact Submissions
                </h2>
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
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {users.map((user) => (
                        <tr key={user._id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                            {user.username}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                            {user.email}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                            {user.phone}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-300">
                            {user.message}
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