import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [users, setUsers] = useState([]);
  const onSubmit = data => {
    // remove password and retry cause useless
    const { password, retryPassword, ...userInfo } = data;
    setUsers([...users, userInfo]);
  };

  const password = watch('password', '');

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            {...register('country', { required: 'Country is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Vietnam">Vietnam</option>
          </select>
          {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Retry Password</label>
          <input
            type="password"
            {...register('retryPassword', {
              required: 'Retry Password is required',
              validate: value => value === password || 'The passwords do not match'
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.retryPassword && <p className="text-red-600 text-sm mt-1">{errors.retryPassword.message}</p>}
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Submit</button>
        </div>
      </form>

      {users.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">User Information</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Name</th>
                <th className="py-2 px-4 border-b border-gray-200">Email</th>
                <th className="py-2 px-4 border-b border-gray-200">Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
