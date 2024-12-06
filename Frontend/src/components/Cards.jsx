import React from 'react'

function cards({item}) {
  
  return (
    
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-90 shadow-xl dark:text-white dark:bg-slate-900 dark:border" >
  <figure>
    <img
      src={item.image}
      alt="Shoes" className="pt-10" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title.substring(0,15)}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description.substring(0,25)}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">SAR {item.price} </div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default cards
