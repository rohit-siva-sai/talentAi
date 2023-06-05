import React from 'react'

const Expert = () => {
  return (
    <div className="py-10 bg-gray-100 flex flex-col space-y-8 items-center">
          <p className="font-semibold ">
            Ready to share your AI business needs?
          </p>
          <div className="flex">
            <input
              type="email"
              name=""
              id=""
              className="outline-none border md:w-72 py-1 placeholder:text-sm text-gray-600 px-3 rounded border-gray-300 placeholder:text-gray-400"
              placeholder="Your work email"
            />
            <div
              className="md:px-5 px-2 text-white md:text-base text-sm bg-blue-500 cursor-pointer rounded
             py-2"
            >
              Talk to an Expert
            </div>
          </div>
        </div>
  )
}

export default Expert
