import React from 'react'
import AboutImage from '../images/about.png';

export default function About() {
  return (
    <div>
      <div className='grid gap-40 h-full w-full sm:my-60 lg:my-36 ' >
        <div className="h-80 bg-gray-50 flex items-center ">
          <section className="bg-cover bg-center py-32 w-full background-3">
            <div className="container mx-auto text-center text-white">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full ">
                  <h1 className="text-5xl font-medium mb-6"> About Us</h1>
                </div>
                <div className="w-full flex  items-center justify-center  ">
                  <p className="text-2xl w-5/12 font-medium mb-6">
                    Golden Whisper, a renowned jewelry store, has captured the hearts of jewelry enthusiasts worldwide with its exquisite collection. Nestled in the heart of the city, this establishment has become synonymous with elegance and opulence.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 sm:my-60">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">What sets Golden Whisper apart is its commitment to sourcing only the finest gemstones and materials. Every diamond is hand-selected for its exceptional quality and brilliance, while the pearls are carefully cultivated to ensure a lustrous finish. This dedication to perfection is evident in every piece, making each creation a true work of art. Not only does Golden Whisper offer an exquisite selection, but it also provides a personalized shopping experience. The knowledgeable staff is always on hand to assist </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img className="w-full h-full" src={AboutImage} alt="A group of People" />

            </div>
          </div>
        </div>

        <div className='w-full h-50 grid grid-cols-1 grid-rows-2 mt-[-3rem]'>
          <div className='flex items-center justify-center flex-col order-1 lg:order-1  '>
            <h1 className='text-center text-3xl lg:text-5xl font-medium leading-9 pb-4 text-center border-l-8 px-10  border-r-8  border-x-amber-300 '>MEET OUR TEAM</h1>
          </div>


        </div>
        <div className='flex items-center justify-center order-2 lg:order-2  '>
          <iframe className='z-10 w-8/12 h-100 aspect-video border border-l-8 border-x-zinc-600' src="https://www.youtube.com/embed/meECaU01tBg?autoplay=1&controls=0&loop=1&modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="autoplay; loop;" ></iframe>
        </div>




      </div>

    </div>



  )
}
