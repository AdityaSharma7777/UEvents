// import React from 'react'
import { FaCopyright } from "react-icons/fa";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function  Footer() {
  return (
    <div className="relative bottom-0 w-full">
      <div className='flex justify-between mt-12 bottom-0 w-full bg-red h-10 bg-fixed items-center text-white gap-3 p-5 text-sm'>
          <div>&copy; UEvents</div>
          <div>Made With ❤ यAय </div>
          <div>
          <div className="flex gap-5">

          <button >
            <IoMail className="w-auto h-6" />
          </button>

          <button >
            <FaLinkedinIn className="w-auto h-6" />
          </button>
          
          <button >
            <FaPhoneAlt className="w-auto h-6" />
          </button>

          </div>
        </div>
      </div>
    </div>
  )
}




