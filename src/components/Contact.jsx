import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/625f4991-108f-4f8b-a4d3-f1e05edad6f8"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounder-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounder-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="10"
            className="mb-4 p-2 bg-transparent border-2 rounder-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-teal-500 drop-shadow-md hover:sroke-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
