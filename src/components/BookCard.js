import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BookCard.css'
import { useNavigate } from 'react-router-dom';

const BookCard = ({data}) => {
    const navigate = useNavigate()
    return (
        <Card className='mycard' onClick={() => navigate('/book-detail')}>
          {/* <Card.Img className='img' variant="top" src="https://i.pinimg.com/564x/53/7e/7d/537e7d20b8032354ca2c8aced9b33b8c.jpg" /> */}
          {data && <Card.Img className='img'variant="top" src={data.rcmd_1_url_l} />}
          <Card.Body>
            {/* <Card.Title className='title'>A Skinful of Shadows</Card.Title> */}
            {data && <Card.Title className='title'>{data.rcmd_1}</Card.Title>}
            {/* <Card.Text className='author'>Frances Hardinge</Card.Text> */}
            {data && <Card.Text className='author'>{data.rcmd_1_author}</Card.Text>}
            <Card.Text className='price'>$ 40.00</Card.Text>
            <Button variant="danger" className='add-to-cart-btn'>ADD TO CART</Button>
          </Card.Body>
        </Card>
    )
}

export default BookCard