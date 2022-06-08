import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Head from './head'
import Header from './header'

const Repo = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((r) => r.json())
      .then((r) => setRepos(r))
  }, [])

  const reposList = repos.map((it) => (
    <Link to={`/${userName}/${it.name}`} key={it.id}>
      {it.name}
    </Link>
  ))
  // console.log(reposList)

  return (
    <div>
      <Header {...{ userName }} />
      <Head title="Repositories" />
      <div className="flex justify-center items-center">
        <div className="flex flex-col bg-gray-100 rounded border m-2 p-4 space-y-2">
          {reposList}
        </div>
      </div>
    </div>
  )
}

Repo.propTypes = {}

export default React.memo(Repo)
