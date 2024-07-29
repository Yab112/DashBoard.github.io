import React from 'react'
import { Title } from '../../ui'
import { users } from '../../constants'
import Member from "./Member.jsx"

const Team = ({darMode}) => {
  return (
    <div className='bg-white p-3 rounded-2xl dark:bg-gray-600
    dark:text-gray-200 flex flex-1 flex-col gap-5'>
       <Title>Teams</Title>
       {users.map((user,index)=>(
        
         <Member key={index} user={user} />
       ))}
    </div>
  )
}

export default Team
