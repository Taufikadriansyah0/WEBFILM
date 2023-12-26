import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Trending() {
    const {tombol, setTombol} = useState()

  return (
    <>
    <h2 className="text-center text-white pt-5" id="trending">TRENDING</h2>
    <div className="text-white d-flex pb-5 pt-5 justify-content-center flex-wrap gap-4" >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="tren" />
      <Card.Body>
        <Card.Title>Satria Dewa: GATOTKACA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" href="https://rebahan21.me/watch/satria-dewa-gatotkaca.html?key=h24okqcrvxxw">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="tren1" />
      <Card.Body>
        <Card.Title>Into the Storm</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" href="https://rebahan21.me/watch/into-the-storm.html">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="tren2" />
      <Card.Body>
        <Card.Title>Thor: Love and Thunde</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" href="https://rebahan21.me/watch/thor-love-and-thunder.html">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className="tren3" />
      <Card.Body>
        <Card.Title>Suzume</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" href="https://rebahan21.me/watch/suzume.html?key=a64cly36936m">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
};

export default Trending;
