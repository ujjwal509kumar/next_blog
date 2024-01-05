import React from 'react'
import Image from 'next/image'
import headerimage from '../../public/components/image.png'

const footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={headerimage} width={50} height={50} alt="header image" />
                        <span className="ml-3 text-xl">NextBlog</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 All rights reserved.
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            Made with &#10084; and <code>&lt;/Code&gt;</code>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default footer
