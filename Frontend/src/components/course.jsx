import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
function course() {
    
  return (
    <>
    <div className='pt-32 max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl '>Nice to meet you {" "} <span className='text-pink-500'>Here!</span></h1>
    <p className='my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sunt, illo qui libero voluptas minima neque atque asperiores blanditiis aut fuga quae at? Consequuntur ipsum ab facilis non asperiores magnam!</p>
    <Link to={'/'}>
    <button className='bg-pink-500 text-white px-4 py-2 rounded-md'>Back</button>
    </Link>

    </div>
    </div>
    <div className='max-w-screen-2xl container mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-4'>
      {list.map((item)=>
        <Cards item={item} key={item.key}/>
      )}
    </div>

    </div>
    
    </>
  )
}

export default course
