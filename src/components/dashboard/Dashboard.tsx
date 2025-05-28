'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Account, Transaction } from '@/utils/types';
import Link from 'next/link';
import TransactionHistory from './TransactionHistory';
import Header from './header/Header';
import { formatCurrency } from '../formatCurrency';
import { IoIosArrowForward } from 'react-icons/io';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../Loader';
import { BillIcon, CardIcon } from '../svgIcons';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { MdOutlineEventNote } from 'react-icons/md';

const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);
  const [hideBalance, setSideBalance] = useState(false);

  const toggleHideBalance = () => {
    setSideBalance(true);
  };

  const toggleShowBalance = () => {
    setSideBalance(false);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }

  const date = new Date();
  const hour = date.getHours();

  const formattedDate = getFormattedDate();

  return (
    <div className="">
      <Header handleLogout={handleLogout} user={user} />
      <div className="flex flex-col">
        <div className="mb-4">
          <div className="bg-[#12395b] p-4 px-7">
            <div className="pb-4 relative text-white flex flex-col">
              <span className='absolute text-sm right-0'>{formattedDate}</span>
              <span className="font-medium text-base">Welcome,<br />{user.holder.fullName}</span>
            </div>
            <div className="flex flex-col gap-6 bg-white text-[#12395b] rounded p-4">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[16px] flex items-center gap-1">
                  Available balance
                  {hideBalance ? <FiEyeOff onClick={toggleShowBalance} /> : <FiEye onClick={toggleHideBalance} />}
                </span>
                <span className="font-[400] text-[25px]">{hideBalance ? '******' : `${formatCurrency(user.bank_details.balance_usd)}`}</span>
                <Link href="/dashboard/transactions" className="text-[14px] hover:und flex items-center gap-1">
                  <span>History</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 p-4 pt-6">
              <Link href="/dashboard/transfer" className="flex flex-col items-center gap-1 justify-center text-white text-[16px]">
                <FaMoneyBillTransfer className="text-2xl" />
                Transfer
              </Link>
              <Link href="/dashboard/bill-payment" className="flex flex-col items-center gap-1 justify-center text-white text-[16px]">
                <MdOutlineEventNote className="text-2xl" />
                Pay Bills
              </Link>
            </div>
          </div>
        </div>
        <div className="p-[16px] hidden border py-8">
          <div className="flex items-center justify-center gap-3">
            <Link href="/dashboard/cards" className="border flex items-center gap-1 p-4 py-2 text-[13px] max-w-max bg-white text-[#12395b] rounded-full">
              <CardIcon className="w-5 h-5" /> <span>Cards</span>
            </Link>
            <Link href="/dashboard/bill-payment" className="border flex items-center gap-1 p-4 py-2 text-[13px] max-w-max bg-white text-[#12395b] rounded-full">
              <BillIcon className="w-5 h-5" />
              <span>Pay Bills</span>
            </Link>
          </div>
        </div>
        <TransactionHistory user={user} hideBalance={hideBalance} />
      </div>
    </div>
  );
}
