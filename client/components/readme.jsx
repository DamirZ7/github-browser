import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Head from './head'
import Header from './header'

const Readme = () => {
  const { userName, repositoryName } = useParams()
  const [text, setText] = useState('')
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((r) => r.text())
      .then((r) => setText(r))
  }, [])

  // const reposList = text.map((it) => (
  //   <Link to={`/${userName}/${it.name}`} key={it.id}>
  //     {it.name}
  //   </Link>
  // ))
  // console.log(reposList)

  return (
    <>
      <Header {...{ userName, repositoryName }} />
      <Head title="Readme" />

      <div className="flex justify-center items-center ">
        <div
          id="description"
          className="flex flex-col bg-gray-100 rounded border m-2 p-4 space-y-2 whitespace-normal"
        >
          {/* <div className="flex m-auto uppercase font-bold">{`${userName} - ${repositoryName}`}</div> */}
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
