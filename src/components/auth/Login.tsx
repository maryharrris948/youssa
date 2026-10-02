'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      setLoading(false);
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      setLoading(false);
      return;
    }
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="h-screen relative">
      <Header />
      <div className="bg-[white] p-4">
        <div className="mb-2 mx-auto max-w-[400px] text-[30px] text-center">Log On</div>
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto rounded-xl w-full py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col border">
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="text-[#5c5c5c] text-[16px] absolute left-4 top-4">
                  Online ID
                </label>
                <input type="text" value={username} className="p-4 pt-10 pb-4 text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex relative flex-col gap-3">
                <label htmlFor="password" className="text-[#5c5c5c] text-[16px] absolute left-4 top-4">
                  Password
                </label>
                <input type="password" value={password} className="p-4 pt-10 pb-4 text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button type="submit" disabled={loading} className="p-4 py-3 bg-[#53732d] w-full text-white font-semibold flex items-center justify-center">
                {loading ? (
                  <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-middle mr-2" />
                ) : null}
                {loading ? 'Logging in...' : 'Log On'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex px-[10px] p-[20px]">
        <p className="text-sm text-[#22262A] text-center">Copyright © 2025 USAA. All rights reserved. USAA and its affiliates are not responsible for the content of third-party sites.</p>
      </div>
    </div>
  );
}
