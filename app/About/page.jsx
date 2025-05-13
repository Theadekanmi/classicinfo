"use client";
import CountUp from 'react-countup';
import Link from 'next/link';
import React, { useEffect } from "react";
import { FcCollaboration } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css"; 

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main>
      {/* About Hero section */}
      <section className="bg-gray-900 py-12 -mt-5">
        <div className="container mx-auto px-4">
          <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold  mb-3 md:mb-4">
           About Us</h1>
          <p className="text-gray-100 text-2xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
             Empowering businesses with innovative technology solutions.
          </p>
          </div>
          </section>

           {/* Who we are */}
      <section className="bg-gray-300 py-12 -mt-5">
        <div className="container mx-auto px-4">
          <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold  mb-3 md:mb-4">Who We Are</h1>
          <p className="text-cyan-900 text-2xl sm:text-1xl md:text-1xl text-center p-3 m-5 mb-3 md:mb-4">
             "Classic Systems Infotech is a premier IT solutions provider based in Ile-Ife, Osun State. Founded in 2010, we've grown from a small startup to a trusted technology partner for businesses across Nigeria and beyond". <br /><br />
              "Our team of experts specializes in web development, mobile applications, cloud solutions, IT consulting, and digital marketing. We combine technical expertise with industry knowledge to deliver solutions that drive business growth and operational efficiency". <br /><br />

               "At Classic Systems, we believe technology should simplify business processes, not complicate them. That's why we focus on creating user-friendly, scalable solutions tailored to each client's unique needs and objectives".
          </p>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-15">
                <div className="flex-1 bg-gray-300 p-6 shadow rounded">
                <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-4xl text-center font-bold  mb-3 md:mb-4">Our Mission</h1>
                   <p className="text-cyan-900 text-2xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4"> 
                   To empower businesses through innovative technology solutions that solve real-world problems, enhance productivity, and drive sustainable growth. We strive to be a trusted partner in our clients' digital transformation journey, delivering excellence through every line of code and every strategic recommendation
                     </p>
                </div>
                <div className="flex-1 bg-gray-300 p-6 shadow rounded">
                <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-4xl text-center font-bold  mb-3 md:mb-4">Our Vision</h1>
                    <p className="text-cyan-900  text-2xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">  
                    To be the leading technology solutions provider in Africa, recognized for our innovation, quality, and client-centered approach. We aim to create a digital ecosystem where businesses of all sizes can leverage technology to achieve their full potential and compete in the global marketplace.

                    </p>
                </div>
                </div>
          </div>
          </section>

          {/* Value */}

          <section className="bg-gray-900 py-12">
                  <div className="container mx-auto px-4">
                    <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-3 md:mb-4">
                        Our Core Values
                    </h2>
                    <div
                      className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-15"
                      data-aos="zoom-out"
                    >
                      <div className="flex-1 bg-gray-900 p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex justify-center mb-2">
                          <IoMdCheckmarkCircleOutline  className="text-cyan-900 text-4xl" />
                  </div>
                  <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">EXCELLENCE</h2>
                  <p className="text-gray-300 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                    
                     We are committed to delivering top-quality solutions that exceed client expectations.
                  </p>
                </div>
    
                <div className="flex-1 bg-gray-900 p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                  <div className="flex justify-center mb-2">
                    <FcCollaboration className="text-cyan-900 text-4xl" />
                  </div>
                  <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">COLLABORATION</h2>
                  <p className="text-gray-300 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                  We believe in the power of teamwork, both within our organization and with our clients
                  </p>
                </div>
                <div className="flex-1 bg-gray-900 p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                     <div className="flex justify-center mb-2">
                       <IoBookSharp className="text-cyan-900 text-4xl" />
                     </div>
                     <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                       INNOVATION
                     </h2>
                     <p className="text-gray-300 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                     
                     We constantly explore new technologies and approaches to solve complex business challenges.
                     </p>
                   </div>
                </div>
                 </div>   
          </section>

          
          {/* Count Up */}

<section className="bg-gray-400 py-12">
  <div className="container mx-auto px-4">
  <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-3xl text-center font-bold  mb-3 md:mb-4">Our Impact</h1>
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-6" data-aos="zoom-out">
    
      <div className="flex-1 bg-gray-300 p-6 shadow rounded text-center">
        <h3 className="text-4xl font-bold text-cyan-900">
          <CountUp end={200} duration={110} />+
        </h3>
        <p className="mt-2 text-cyan-800">Projects Completed</p>
      </div>

      <div className="flex-1 bg-gray-300 p-6 shadow rounded text-center">
        <h3 className="text-4xl font-bold text-cyan-900">
          <CountUp end={50} duration={50} />+
        </h3>
        <p className="mt-2 text-cyan-800">Happy Clients</p>
      </div>

      <div className="flex-1 bg-gray-300 p-6 shadow rounded text-center">
        <h3 className="text-4xl font-bold text-cyan-900">
          <CountUp end={15} duration={50} />+
        </h3>
        <p className="mt-2 text-cyan-800">Years Experience</p>
      </div>

      <div className="flex-1 bg-gray-300 p-6 shadow rounded text-center">
        <h3 className="text-4xl font-bold text-cyan-900">
          <CountUp end={25} duration={50} />+
        </h3>
        <p className="mt-2 text-cyan-800">Expert Team Members</p>
      </div>

    </div>
  </div>
</section>

          {/* Contact */}

          <section className="bg-gray-400 py-12 -mt-5">
        <div className="container mx-auto px-4">
          <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-3xl text-center font-bold  mb-3 md:mb-4">
               Ready to Transform Your Business?</h1>
          <p className="text-cyan-900 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4 leading-relaxed">
               Partner with Classic Systems Infotech for innovative technology solutions tailored to your needs.
          </p>
          </div>
          <div className="text-center mt-6">
               <Link href="/Training">
             <button className="bg-cyan-900 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-md shadow transition duration-300 ease-in-out">
                 Contact Us Today
             </button>
           </Link>
           </div>
          </section>


    </main>
  )
}

export default AboutPage
