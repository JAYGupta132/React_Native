import React, { useEffect, useRef, useState } from 'react'

import { Card, Row, Col } from 'react-bootstrap'

export default function Intersection_Observer() {
  const [products, setProducts] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)

  const elementRef = useRef(null)

  function onIntersection(entries){
    const firstEntry = entries[0];
    if(firstEntry.isIntersecting && hasMore){
        fetchMoreItems()
    }
  }

  useEffect(()=>{
    const observer = new IntersectionObserver(onIntersection);
    if(observer && elementRef.current){
      observer.observe(elementRef.current)
    }
    return ()=>{
      if(observer){
        observer.disconnect()
      }
    }
  },[products])

  async function fetchMoreItems(){
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10}`)
    const data = await response.json()
    // console.log('data:',data)
    if(data.products.length == 0){
      setHasMore(false)
    }
    else{
      setProducts(prevProducts => [...prevProducts, ...data.products] )
      setPage(prevPage=>prevPage+1)
    }

  }

  return (
    <>
    <button>click here</button>
      {
        products.map((item)=>{
          return (
          <Card key={item.id} style={{width: '600px', margin: '0 auto'}} className='mb-2'>
            <Row>
              <Col md={4}>
                <img 
                  src={item.thumbnail}
                  alt='products Image'
                  style={{width: '100%', margin: 10}}
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Text>
                    $ {item.price}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>)
        })
      }
      {hasMore && <div ref={elementRef} style={{textAlign: 'center'}}>Load More Item...</div>}
    </>
  )
}



// import React from 'react'

// export const IntersectionObserver = () => {
//   return (
//     <div>
//       <button>click</button>
//     </div>
//   )
// }
