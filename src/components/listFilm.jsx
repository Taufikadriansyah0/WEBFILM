import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {getInitialData} from '../utils/data'
import { Form } from "react-bootstrap";


function ListFilm() {
    const data = getInitialData()
    const [ search, setSearch ] = useState("")
    console.log(search)
  return (
    <>
    <h2 className="text-center text-white pt-5 " id="film">FILM</h2>
    <div className="p-5 d-flex justify-content-center">
    <Form.Control 
    onChange={(e) => setSearch(e.target.value)} 
    type="text" 
    placeholder="cari film ..." />
    </div>
    <div className="text-white d-flex flex-wrap pb-5 pt-5  justify-content-center  gap-4">
    {data.filter((item) => {
      return search === "" ? item : item.title.includes(search)
    }).map((item) => (
    <Card key={item.id} style={{ width: '18rem' }}>
      <Card.Img src={item.image} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" href={item.url}>Go somewhere</Button>
      </Card.Body>
    </Card>
      ))}
    </div>
    </>
  )
};

export default ListFilm;
