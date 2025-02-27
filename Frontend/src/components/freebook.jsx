import React from 'react'

import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function freebook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const filterData=list.filter((data)=>data.category==="free");
  
  return (
    <>
    <div className='mt-4 max-w-screen-2xl container mx-auto md:px-20 px-4 space-x-4'>
      <div >
      <h1 className='text-2xl mb-4'>Free Offered Books</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint totam quo soluta facilis nihil maiores, enim alias voluptatum ab, reprehenderit minus a distinctio perspiciatis sapiente magni expedita quibusdam ducimus quae.</p>
      </div>
      
    
    <div>
    <Slider {...settings}>  

      {filterData.map((item)=>
      <Cards item={item} key={item.id}/>
      )}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default freebook
