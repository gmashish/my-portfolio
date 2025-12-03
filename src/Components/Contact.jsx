import React from "react";

function Contact() {
  return (
    <div id="contact" className="px-4 sm:px-10 lg:px-36 mt-10">
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="title relative text-3xl sm:text-4xl font-[montserrat] tracking-widest text-center font-bold border-3 border-black-500 px-5 py-3 inline uppercase hover:text-white overflow-hidden">
          Contact
        </h1>
      </div>

      {/* Form */}
      <div className="flex justify-center mt-10">
        <form className="flex flex-col w-full max-w-2xl gap-4">
          <input
            type="text"
            className="px-4 py-3 w-full border-l-4 border-b-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            className="px-4 py-3 w-full border-l-4 border-b-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
            required
          />
          <input
            type="tel"
            className="px-4 py-3 w-full border-l-4 border-b-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your phone number"
            required
          />
          <textarea
            placeholder="Enter your message"
            rows="5"
            className="px-4 py-3 w-full border-l-4 border-b-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 px-6 py-3 text-base font-[montserrat] border-l-4 border-r-4 rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
