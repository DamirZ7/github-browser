import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, repositoryName }) => (
  <div className="flex flex-col items-center bg-gray-300">
    <div id="repository-name" className="flex m-auto uppercase font-bold">
      <div id="user-name">{userName} </div>
      <div id="repository-name">
        {typeof repositoryName === 'undefined' ? '' : `-${repositoryName}`}
      </div>
    </div>
    <div className="flex justify-around w-full px-3 m-1">
      <Link id="go-back" className="border border-black rounded-md  hover:bg-blue-200 p-1" to="/">
        Back
      </Link>
      <Link
        id="go-repository-list"
        className="border border-black rounded-md  hover:bg-blue-200 p-1"
        to={`/${userName}`}
      >
        Repository list
      </Link>
    </div>
  </div>
)

Header.propTypes = {}

export default React.memo(Header)
