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
};

const Card = (props: CardProps) => {
  return (
    <div className="max-w-[900px] mx-auto px-20 py-6 border-b border-gray-300 flex justify-between items-start flex-wrap gap-y-6 bg-white/70 backdrop-blur-md rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src={props.avatar_url}
          alt={props.name}
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {props.name}
            <span className="text-sm text-gray-600 pl-2">@{props.login}</span>
          </h3>
          <p className="text-sm text-gray-700 mt-1">
            {props.public_repos} repositories • User since {props.created_at.slice(0, 4)}
          </p>
          {props.location && (
            <p className="text-sm text-gray-700">{props.location}</p>
          )}
          {props.bio && (
            <p className="text-sm text-gray-700 mt-1">{props.bio}</p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="px-4 py-2 border border-gray-400 text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 transition"
          >
            Profile
          </button>
        </a>
        {props.blog && (
          <a href={props.blog} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="px-4 py-2 border border-gray-400 text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 transition"
            >
              Website
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
