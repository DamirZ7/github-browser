import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

// import history from '../redux/history'

const Home = () => {
  const [user, setUser] = useState('')

  const onChange = (name) => {
    setUser(name)
  }
  return (
    <div>
      <Head title="Dashboard" />
      <div className="flex flex-row justify-center w-full p-4">
        <div className="flex flex-col justify-center items-center w-1/2 bg-yellow-300 border rounded-md items-center font-bold p-4">
          Enter your name:
          <input type="text" onChange={(e) => onChange(e.target.value)} value={user} />
          <Link
            type="button"
            className="p-2 m-2 bg-indigo-400 rounded-md font-semibold text-white"
            to={`/${user}`}
          >
            Go to...
          </Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
