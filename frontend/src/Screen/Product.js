import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import products from '../products'
import axios from 'axios'

function Product({match}) {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()

    })

    return (
        <div>
            <Link to='/' className="btn btn-dark my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup Variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <i style={{ color: "#f8e824" }} className="fas fa-star"></i> {product.rating} Review ratings
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Price : {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : {product.name}                           
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status: {product.stock > 0 ? 'In stock' : 'Out of stock'}</Col>
                                
                            </Row>                          
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={products.stock < 1} type='button'>Add To Cart</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

            </Row>
           
        </div>
    )
}

export default Product
