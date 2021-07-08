import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product.id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
            <Link to={`/product/${product.id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="dive">
                <div className="my-3 h6">
                <i style={{ color: "#f8e824" }} className="fas fa-star"></i> {product.rating} Ratings
            </div>

            </Card.Text>

            <Card.Text as="div">
                <div className="h4">
                    ৳{product.price}           
                </div>
            </Card.Text>

            </Card.Body>

            
        </Card>
    )
}

export default Product
