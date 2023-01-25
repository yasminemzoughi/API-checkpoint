import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profile = () => {
    const [user, setuser] = useState({})
    const {id}= useParams()
    useEffect(() => {
    axios 
          .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
          .then((res)=> setuser(res.data[0]))
          .catch((err)=> console.error(err))
    },)   
  return (
    <div>
      <h1>profile</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>name:{user.name}</Card.Title>
        <Card.Text>{user.username} </Card.Text>
        <Card.Text>{user.email} </Card.Text>
        <Card.Text>{user.phone} </Card.Text>

      <Link to={`/users`}>
        <Button variant="primary">
            Go back
        </Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile
