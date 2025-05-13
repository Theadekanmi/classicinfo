"use client";
import Link from 'next/link';
import React, { useEffect } from "react";
import BackgroundSwiper from "@/components/BackgroundSwiper";
import { FaLaptop, FaInfo, FaDatabase, FaPaintBrush, FaFirefoxBrowser, FaDigitalTachograph, FaBusinessTime   } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { MdOutlineSecurity, MdComputer } from "react-icons/md";
import { CiMobile1, CiDatabase, CiServer } from "react-icons/ci";
import { GiArtificialIntelligence, GiTeamIdea, GiNetworkBars} from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css"; 

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main>
      <BackgroundSwiper />

      {/* Our Services  */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
            We provide top-quality technology solutions tailored to meet your
            specific needs
          </p>
          <div
            className="flex flex-col md:flex-row justify-between items-stretch gap-6"
            data-aos="zoom-out"
          >
            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <FaLaptop className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                Digital Skills Training
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                
                Ready to level up your career in technology? Our comprehensive
                Tech Training Program covers the most in-demand skills.
              </p>
            </div>

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <FaDiagramProject className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                Projects & Installations
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                
                Professional installation and project management services for IT
                infrastructure, network setup, CCTV installations, and more.
              </p>
            </div>

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <FaInfo className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                Corporate Training
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                Tailored training programs for businesses in areas like IT
                skills, software use, cybersecurity, and more to boost team
                efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight */}

      <section className="bg-gray-300 py-12">
        <div className="container mx-auto px-4">
          <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-3 md:mb-4">
            Our Highlighted Projects
          </h2>
          <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
            Explore our portfolio of successful projects that demonstrate our
            expertise, <br />
            innovation, and commitment to excellence across various domains.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-10 " data-aos="fade-up ">
            {/*CCTV*/}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747061795/cctv_proj_znuova.webp"
                alt="CCTV IMG"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-cyan-900 text-2xl font-bold mb-2 "> CCTV Installation</h3>
                <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4 leading-relaxed">
                Professional security camera installations for homes and businesses with remote monitoring capabilities. We provide cutting-edge security.
                </p>
              </div>
            </div>

            {/* 3MTT */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747061795/p_3mtt_qjoj1r.webp"
                alt="3mmt Img"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-cyan-900 text-2xl font-bold mb-2 "> 3MTT Training in Nigeria</h3>
                <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4 leading-relaxed">
                Comprehensive technical training program delivered across Nigeria to build digital skills and capacity. Empowering professionals with right Skills.
                </p>
              </div>
            </div>

            {/* SAED */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747061795/Saed_sgh4rm.webp"
                alt="Saed Img"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-cyan-900 text-2xl font-bold mb-2 "> SAED Nysc Osun Program</h3>
                <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4 leading-relaxed">
                Skill Acquisition and Entrepreneurship Development program at NYSC Osun Orientation Camp. Fostering entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* training */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-3 md:mb-4">
          Our Training Courses
          </h2>
          <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
          Enhance your skills with our comprehensive training programs designed by industry experts.
          </p>
          < div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-10" data-aos="zoom-out">
            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-2">
                <MdOutlineSecurity className="text-cyan-900 text-4xl  mb-2 " />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
              Cyber Security
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
               
              Learn to protect systems, networks, and programs from digital attacks. Covers security fundamentals, ethical hacking, and threat analysis.
              </p>
            </div>
            

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <CiMobile1 className="text-cyan-900 text-4xl"/>
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
              Mobile App Development
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                
              Master the creation of applications for iOS and Android platforms using React Native, Flutter, and native development approaches.
              </p>
            </div>

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <FaDatabase className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
              Data Science
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
              Explore data analysis, visualization, machine learning, and AI to extract valuable insights and make data-driven decisions.
              </p>
            </div>
          </div>

          < div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-15" data-aos="zoom-out">
            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-2">
                < MdComputer className="text-cyan-900 text-4xl  mb-2 " />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                 Digital Literacy
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
              Develop essential computer skills, internet navigation, online safety, and productivity tools for the modern digital workplace.
              </p>
            </div>
            

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <CiServer className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
              UI/UX Design
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                
              Create intuitive user interfaces and meaningful experiences through user research, wireframing, prototyping, and usability testing.
              </p>
            </div>

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <FaPaintBrush className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                 Graphics Design
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
              Learn visual communication principles and design techniques using industry-standard tools like Photoshop, Illustrator, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
           <Link href="/Training">
             <button className="bg-cyan-900 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded shadow transition duration-300 ease-in-out">
               View Projects
             </button>
           </Link>
           </div>
      </section>

      {/* Consulting */}

      <section className="bg-gray-300 py-12">
        <div className="container mx-auto px-4">
          <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-3 md:mb-4">
              Consulting Services 
          </h2>
          <p className="text-cyan-800 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                  Expert guidance to help you navigate complex challenges and drive sustainable growth.
          </p>
          < div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-10" data-aos="zoom-out">
            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-2">
                <FaDigitalTachograph className="text-cyan-900 text-4xl  mb-2 " />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                   Digital Strategy
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
               
                Develop a comprehensive roadmap to leverage digital technologies for business growth and transformation.
              </p>
            </div>
            

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <FaBusinessTime className="text-cyan-900 text-4xl"/>
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                 Business Process Optimization
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                
                  Streamline operations and enhance efficiency by identifying bottlenecks and implementing improved workflows
              </p>
            </div>

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <GrTechnology className="text-cyan-900 text-4xl" />
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                  Technology Assessment
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                    Evaluate your current technology stack and identify opportunities for improvement and modernization.
              </p>
            </div>
          </div>


          < div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-10" data-aos="zoom-out">
            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-2">
                <GiNetworkBars className="text-cyan-900 text-4xl  mb-2 "/>
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                  Data Analytics

              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
               
                Develop a comprehensive roadmap to leverage digital technologies for business growth and transformation.
              </p>
            </div>
            

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <CiDatabase className="text-cyan-900 text-4xl"/>
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                  Product Strategy
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                
                  Streamline operations and enhance efficiency by identifying bottlenecks and implementing improved workflows
              </p>
            </div>

            <div className="flex-1 bg-white p-6 shadow rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center mb-2">
                <GiTeamIdea className="text-cyan-900 text-4xl"/>
              </div>
              <h2 className=" text-cyan-900 text-2xl sm:text-3xl md:text-2xl text-center font-bold mb-3 md:mb-4">
                   Team Augmentation
              </h2>
              <p className="text-gray-700 text-1xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
                    Evaluate your current technology stack and identify opportunities for improvement and modernization.
              </p>
            </div>
          </div>
            
          <div className="text-center mt-6">
           <Link href="https://theadekanmi-portfolio.vercel.app" target='_blank' rel="noopener noreferrer">
             <button className="bg-cyan-900 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-md shadow transition duration-300 ease-in-out">
                 Schedule a Consultation Now
             </button>
           </Link>
           </div>
           </div>
          </section>

          {/* special offer */}

          <section className="bg-gray-900 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold mb-3 md:mb-4">
      Special Offers
    </h2>
    <p className="text-cyan-800 text-1xl text-center mb-3 md:mb-4">
      Take advantage of our limited-time promotions and special offers on selected courses and programs.
    </p>

    {/* Row for Item 1 and Item 2 */}
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 mt-10" data-aos="zoom-out">
      <div className="flex-1 p-6 shadow rounded hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747075054/ubiqum-coding-bootcamp_uzhle4.webp"
          alt="Bootcamp"
          className="w-full h-80 object-cover rounded mb-4"
        />
      </div>

      {/* Text */}
      <div className="flex-1 bg-cyan-900 p-6 shadow rounded hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-2xl font-bold text-gray-100">LIMITED TIME OFFER</h1>
        <h2 className="text-2xl font-bold text-gray-100 mt-3">Summer Coding Bootcamp</h2>
        <p className="text-1xl text-gray-100 mt-5">
          Accelerate your career with our intensive 8-week coding bootcamp. Master the latest technologies with expert instructors.
        </p>
        <ul className="list-disc list-inside text-gray-100 mt-5 space-y-2">
          <li>Hands-on project-based learning</li>
          <li>Industry-recognized certification</li>
          <li>Job placement assistance</li>
          <li>1-on-1 mentorship sessions</li>
        </ul>
      </div>
    </div>

    {/* Row for the other 3 items */}
    <div className="flex flex-col md:flex-row gap-5 mt-10" data-aos="fade-up">
      {/* Early Bird */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747131493/ffffff_1_kkc1ji.svg"
            alt=" IMG"
            className="w-full h-48 object-cover"
          />
          <p className="absolute top-2 right-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
            Special Offer
          </p>
        </div>
        <div className="p-6">
          <h3 className="text-cyan-900 text-2xl font-bold mb-2">Early Bird Discount</h3>
          <p className="text-cyan-800 text-1xl text-center mb-3 md:mb-4 leading-relaxed">
            Sign up for any course this month and get 25% off the regular price. Limited spots available.
          </p>
        </div>
      </div>

          {/* Group Training */}
           <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
             <div className="relative">
               <img
                 src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747131493/ffffff_3_xtla73.svg"
                 alt="Img"
                 className="w-full h-48 object-cover"
               />
               <p className="absolute top-2 right-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
                 Special Offer
               </p>
             </div>
             <div className="p-6">
               <h3 className="text-cyan-900 text-2xl font-bold mb-2">Group Training Package</h3>
               <p className="text-cyan-800 text-1xl text-center mb-3 md:mb-4 leading-relaxed">
                 Enroll 3 or more team members and get special corporate rates plus customized curriculum.
               </p>
             </div>
           </div>

          {/* Free Workshop */}
     <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
       <div className="relative">
         <img
           src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1747131493/ffffff_2_rtlb5o.svg"
           alt="Img"
           className="w-full h-48 object-cover"
         />
         <p className="absolute top-2 right-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
           Special Offer
         </p>
       </div>
       <div className="p-6">
         <h3 className="text-cyan-900 text-2xl font-bold mb-2">Free Workshop Webinar</h3>
         <p className="text-cyan-800 text-1xl text-center mb-3 md:mb-4 leading-relaxed">
           Join our free 4-week workshop on cybersecurity fundamentals. Perfect for beginners.
         </p>
       </div>
     </div>

    </div>
  </div>
</section>


    </main>
  );
};

export default HomePage;
