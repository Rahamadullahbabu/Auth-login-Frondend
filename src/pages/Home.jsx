import React from 'react'
import { Container, Button } from 'react-bootstrap'
import "../styles/Home.css"

const Home = () => {
  return (
    <Container>
        <h1>Welcome</h1>
        <p>Hi there..</p>
        <Button variant="primary" type="submit">
          Get started
        </Button>
    </Container>
  )
}

export default Home
