import React from 'react'
import Image from 'next/image'
import Ujjwal from '../../public/components/ujjwal.png'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutUs = () => {
  return (
    <div>
      <Header></Header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-2">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image src={Ujjwal} alt='image of owner'/>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">UJJWAL KUMAR</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Software Developer | React js | Next js | Node js | Express js | Mongo Db | Linux | Cybersecurity & ML enthusiast</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Motivated and talented college fresher looking for a challenging entry-level employment in the IT industry. I am eager to offer my technical expertise, problem-solving abilities, and passion for innovation to the growth and success of a vibrant organisation. I am committed to continual learning and remaining current with emerging technologies, having a good foundation in programming languages, systems analysis, and web development.(Do not believe anything I have mentioned above. It was for fun purpose and, most important it&apos;s a joke.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default AboutUs
