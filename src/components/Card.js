import React from 'react'

const Card = ({ products ,searchVal}) => {
  return (
    <div className='card-container'>
      <h5 className='text-start'>Trending in Electronics</h5>
      <div className= "card-datas">
        {products && products.filter((item) => item.name.toLowerCase().includes(searchVal.toLowerCase())).map((item, index) => (<div className='card-items' key={index}>
          <div className='card-image-container'><img src={item.images[0]} alt={item.name} /></div>
          <p>{item.name}</p>
        </div>))}
      </div></div>



  )
}

export default Card