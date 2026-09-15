"use client"

import { useState } from "react";

type User = {
    id: number,
    name: string,
    username: string
}

type filteredUsersProps = {
    users: User[]
}

const filterUsers = ({users}: filteredUsersProps) => {
    const [username, setUsername] = useState('')

    const filteredUsers = users.filter((user: User) => {
        return user.name.toLocaleLowerCase().includes(username.toLocaleLowerCase())
    })

  return (
    <div>
      <input 
        type="text"
        placeholder="Search for user...."
        value={username}
        onChange={(e) =>{
            setUsername(e.target.value)
        }}
      />

      <ul>
        {filteredUsers.map((user: User) =>{
            return (
                <li key={user.id}>{user.name}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default filterUsers
