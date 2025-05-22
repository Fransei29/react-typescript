import React from "react"

type CardProps = {
  avatar_url: string;
  name: string;
  login: string;
  public_repos: string;
  created_at: string;
  location: string;
  bio: string;
  html_url: string;
  blog: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="px-18 py-5 sm:px-60 -ml-4 -mt-4 border-b border-gray-700 pb-8 flex justify-between items-center flex-wrap sm:flex-no-wrap bg-[#1e1e1e] rounded-xl shadow-md">
      <div className="ml-4 mt-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full border border-gray-600"
              src={props.avatar_url}
              alt=""
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-white">
              {props.name}
              <span className="text-sm leading-5 text-gray-400 pl-2">
                @{props.login}
              </span>
            </h3>
            <p className="text-sm leading-5 text-gray-400">
              {props.public_repos} repositories. User since{" "}
              {props.created_at.slice(0, 4)}
            </p>
            <p className="text-sm leading-5 text-gray-400">
              {props.location || ""}
            </p>
            <p className="mt-1 text-sm leading-5 text-gray-300">{props.bio}</p>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-4 flex-shrink-0 flex">
        <span className="ml-3 inline-flex rounded-md shadow-sm">
          <a href={props.html_url}>
            <button
              type="button"
              className="mr-2 relative inline-flex items-center px-4 py-2 border border-gray-600 text-sm leading-5 font-medium rounded-md text-gray-200 bg-[#2a2a2a] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Profile</span>
            </button>
          </a>
          <a href={props.blog}>
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-gray-600 text-sm leading-5 font-medium rounded-md text-gray-200 bg-[#2a2a2a] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Website</span>
            </button>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Card

