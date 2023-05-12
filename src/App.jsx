import { useState } from 'react'
import Album from './components/Album'
import NavBar from './components/NavBar'
import data from './assets/data.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Container>
        <Row xs="4">
          {data.map((album) => (
            <Col className="bg-light border">
              <Album key={album.title_short} album={album}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
