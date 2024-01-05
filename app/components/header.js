import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import headerimage from '../../public/components/image.png'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={headerimage} width={50} height={50} alt="header image" />
            <span className="ml-3 text-xl">NextBlog</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="/blogpost" className="mr-5 hover:text-gray-900">Blogs</Link>
            <Link href="/aboutus" className="mr-5 hover:text-gray-900">About Us</Link>
            <Link href="/contactus" className="mr-5 hover:text-gray-900">Contact Us</Link>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  )
}

export default Header
