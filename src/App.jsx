import { useState } from 'react'
import Album from './components/Album'
import NavBar from './components/NavBar'
import data from './assets/data.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [playList, setPlayList] = useState([]);

  return (
    <div>
      <NavBar playList={playList} setPlayList={setPlayList}/>
      <Container>
        <Row xs="4">
          {data.map((album) => (
            <Col key={album.title_short} className="bg-light border">
              <Album album={album} playList={playList} setPlayList={setPlayList}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
