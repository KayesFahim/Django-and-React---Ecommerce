import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import {Col,Row} from 'react-bootstrap'
import Product from './Product';
import axios from 'axios'


function FeaturesProduct() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
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
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={200}>

        <Row>
            {products.map(product =>
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
                )}
        </Row>
      </ItemsCarousel>
    </div>
  );
};

export default FeaturesProduct
