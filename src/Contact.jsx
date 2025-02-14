import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import {Link} from "react-router-dom"

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const collectData = async (e) => {
    e.preventDefault();
    try {
        let result = await fetch('http://localhost:4000/', {
            method: 'post',
            body: JSON.stringify({
                username: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log("Success:", result);
        // Clear form after successful submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        collectData(e);
    }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8" id='con'>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
            <label htmlFor="firtName" className="block text-sm/6 font-semibold text-gray-600">
              First Name
            </label>
            <div className="mt-2.5">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className={`${errors.firstName ? 'outline-red-500' : ''} block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600`}
              />
               {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-600">
              Last Name
            </label>
            <div className="mt-2.5">
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className={`${errors.lastName ? 'outline-red-500' : ''} block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600`}
              />
              {errors.lastName && <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-600">
              Email
            </label>
            <div className="mt-2.5">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Example@gmail.com"
                autoComplete="gmail.com"
                className={`${errors.email ? 'outline-red-500' : ''} block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600`}
              />
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-600">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-gray-900 outline-1 -outline-offset-1 outline-gray-900 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>MA</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  className={`block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600`}
                />
              </div>
                  {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-600">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={3}
                className={`${errors.message ? 'outline-red-500' : ''} block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600`}
              />
              {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
          <Link to="/DispCont">
            <button
              type="button" // Changed from submit to avoid form submission
              className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              display messages
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}