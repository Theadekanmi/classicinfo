"use client";
import React from 'react'

const Contactpage = () => {
  return (
    <main>
      {/* Contact Hero section */}
      <section className="bg-gray-900 py-12 -mt-5">
        <div className="container mx-auto px-4">
          <h1 className=" text-cyan-900 text-2xl sm:text-3xl md:text-5xl text-center font-bold  mb-3 md:mb-4">Contact Us</h1>
          <p className="text-gray-100 text-2xl sm:text-1xl md:text-1xl text-center mb-3 md:mb-4">
              We are available 24/7 for Services....
          </p>
          </div>
          </section>

          {/* form */}

          <section className="bg-gray-200 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side - Contact Info */}
      <div>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-6">
          We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.
        </p>

        <ul className="text-gray-700 space-y-3">
          <li><strong>Address:</strong> No 39 Mayfair, Ile-Ife, Osun State, Nigeria</li>
          <li><strong>Email:</strong> support@classicsystemsinfotech.ng</li>
          <li><strong>Phone:</strong> +234 (0) 805 362 8635</li>
          <li><strong>Working Hours:</strong><br />Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 5:00 PM</li>
        </ul>

        <p className="mt-6 font-semibold text-cyan-900">Connect With Us</p>
      </div>

      {/* Right Side - Contact Form */}
      <div>
        <form action="https://usebasin.com/f/8ecaf1613235" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded" />
          <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded" required />
          <textarea name="message" rows="5" placeholder="Message" className="w-full p-3 border border-gray-300 rounded" required></textarea>
          <button type="submit" className="bg-cyan-900 text-white px-6 py-3 rounded hover:bg-cyan-800 transition">Send Message</button>
        </form>
      </div>
    </div>
  </div>

  {/* Google Map Below */}
  <div className="mt-12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012682.2871111744!2d3.3816432468749866!3d7.4884046000000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10383790c6faac85%3A0x92658945a7228d24!2sClassic%20Systems%20Infotech%20Ltd!5e0!3m2!1sen!2sng!4v1747147573036!5m2!1sen!2sng"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


    </main>
  )
}

export default Contactpage
