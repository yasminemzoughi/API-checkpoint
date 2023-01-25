import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = ({user}) => {
  return (
    <div className='card'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name: {user.name}</Card.Title>
        <Card.Text>Username: {user.username} </Card.Text>
        <Card.Text>Email: {user.email} </Card.Text>
      <Link to={`/user/${user.id}`}>
        <Button variant="primary">
            Go to user profile
        </Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
