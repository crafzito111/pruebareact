import React from 'react'
import App from '../../App'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Card = () => {

    const [user, setuser] = useState()



    useEffect(() => {
        const URL = 'https://randomuser.me/api/'
        axios.get(URL)
            .then(res => setuser(res.data.results[0]))
            .catch()
    }, [])

  return (
      <div className="api">
          <img className='img_api' src={user?.picture.large} alt="" />
          <h1 className='h1_api'>Name: <span>{user?.name.title} {user?.name.first} {user?.name.last}</span></h1>
          <h2 className='email_api'>Email: <span>{user?.email}</span></h2>
          <h2 className='phoe_api'>Phone: <span>{user?.phone}</span></h2>
          
          <h2 >Street: {user?.location.street.name}</h2>
 

      </div>
  )
}

export default Card