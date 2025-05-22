import React, { useState } from "react"
import axios from "axios"

type FormProps = {
  onSubmit: Function
}

const Form = (props: FormProps) => {
  const [username, setUsername] = useState("")
  
  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
    props.onSubmit(resp.data)
    setUsername("")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mt-8 flex">
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="GitHub username"
          className="form-input block w-full py-2 px-3 bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          required
        />
        <button
          type="submit"
          className="ml-2 py-2 px-6 border border-gray-600 rounded-md text-sm leading-6 font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Search
        </button>
      </div>
    </form>
  )
};  

export default Form