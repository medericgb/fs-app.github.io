import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "./App.css";

import { GET_USERS } from './queries';

const User = ({ user: { login, avatar_url } }) => (
  <div className="card">
    <img alt="avatar" className="card__avatar" src={avatar_url} />
    <h1 className="card__name">{login}</h1>
    <a href={`https://github.com/${login}`} className="card__link">
      See profile
    </a>
  </div>
)

function App() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <main className="App">
      <h1>Github | Users</h1>
      {data.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </main>
  )
}

export default App
