import React from 'react'
import ProductLayout from './commonLayouts/ProductLayout'
import Container from './commonLayouts/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

  function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


const FeaturedProduct = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Container>
        {/* <div className='flex gap-1'> */}
          <Slider {...settings}>
            <ProductLayout percentTag={false} category="PHONE" title="JPhone 13 High Quality Value Buy Best Cam..." rating="5" totalRating="50" price="999.00" border={true} bg="transparent" stock={true} stockAmount="120"/>
            
            <ProductLayout percentTag={true} category="AUDIO" title="WH-1000XM4 Wireless Headphones High Qu..." rating="5" totalRating="120" price="59.00" border={true} bg="transparent" stock={false} stockAmount="120"/>
            
            <ProductLayout percentTag={false} category="LAPTOP" title="S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating="5" totalRating="100" price="1199.00" border={true} bg="transparent" stock={false} stockAmount="120"/>
            
            <ProductLayout percentTag={false} category="CAMERA" title="Mini Polaroid Camera for Girls with Flash Li..." rating="5" totalRating="70" price="79.00" border={true} bg="transparent" stock={true} stockAmount="120"/>
            
            <ProductLayout percentTag={false} category="TELEVISION" title="AG OLED65CXPUA 4K Smart OLED TV New ..." rating="5" totalRating="20" price="2799.00" border={true} bg="transparent" stock={false} stockAmount="120"/>
        </Slider>
        {/* </div> */}
    </Container>
  )
}

export default FeaturedProduct