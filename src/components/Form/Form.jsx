import React from 'react'

function Form() {
  return (
    <form
              className="flex gap-3 flex-col text-white"
              method="POST"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-transparent  active:outline-[#4bff33] max-[680px]:w-full rounded-lg border p-3 w-[49%] mr-3 border-gray-500 mb-3"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="max-[680px]:w-full bg-transparent border-gray-500 border w-[49%] rounded-lg p-3  active:outline-[#4bff33]"
                />
              </p>
              
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-transparent border  active:outline-[#4bff33] w-full p-3 border-gray-500 rounded-lg"
                />
              
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="border-gray-500 rounded-lg bg-transparent border p-3 w-full outline-none active:outline-[#4bff33]"
                ></textarea>
              
                <button
                  type="submit"
                  className='bg-transparent border rounded-lg p-3 border-gray-500 w-full relative before:absolute before:left-0 before:content-[""] before:w-2 before:bg-[#4bff33] before:h-full before:top-0 before:rounded-lg hover:before:w-full z-10 before:transition-all text-white font-semibold hover:text-black tracking-widest before:duration-700 before:-z-10'
                >
                  SEND A MESSAGE
                </button>
              
            </form>
  )
}

export default Form