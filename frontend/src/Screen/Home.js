import React, {useState, useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import MainSlider from '../components/MainSlider'


function Home() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchProducts(){
            const {data} = await axios.get('/api/products/')
            setProducts(data)
        }
        fetchProducts()

    })
    return (
        <div>
            <MainSlider></MainSlider>
            <h3>Features Products</h3>
            <Row>
                {products.slice(0,4).map(product =>
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
                )}
                
            </Row> 

            <h3>Latest Products</h3>
            <Row>
                {products.slice(0,8).map(product =>
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
                )}
            </Row>         
        </div>
    )
}

export default Home
