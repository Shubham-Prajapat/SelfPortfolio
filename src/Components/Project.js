import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        responsive:[
            {
                breakpoint: 767,
                settings:{
                    slidesToShow: 1,
                    dots:true,
                    arrows:false,
                }
            }
        ]
      };
  return (
    <div class="project-main-container">
    <div className='container'>
    <h1 className='title-heading'>Project</h1>
     <div class="project-container">
     <Slider {...settings}>
     {data.map((d) => (

        <div class="project-div1">
            <div class="project-box">
                <div class="project-details">
                    <div class="project-name">
                            <h5>{d.name}</h5>
                    </div>
                    <div class="project-link-img">
                        <a href={d.url}>
                        <img src={d.img}  alt='jc'/>
                        </a>
                    </div>
                </div>
            </div>           
        </div>
      ))}

        {/* <div class="project-div2">
            <div class="project-box">
                <div class="project-details">
                    <div class="project-name">
                            <h2>Bulleyetrade</h2>
                    </div>
                    <div class="project-link-img">
                        <p>https://bulleyetrade.com/</p>
                        <img  src={bulleye_logo} />
                    </div>
                </div>
          </div>
     </div>
         <div class="project-div3">
            <div class="project-box">
                <div class="project-details">
                    <div class="project-name">
                            <h2>Color Code </h2>
                    </div>
                    <div class="project-link-img">
                        <p>https://thechaywala.com/</p>
                        <img src='' />
                    </div>
                </div>
            </div>
        </div> */}
        </Slider>
   </div>
   </div>
</div>

  )
}

const  data =[
    {
        id:1,
        name:"Bull EyeTrade",
        url:"https://bulleyetrade.com",
        img:"../Bull_Eye_logo.png"
    },
    {
        name:"The Chay Wala",
        url:"https://thechaywala.com/",
        img:"../Chaylogoo.png"
    },
    {
        name:"Bull EyeTrade",
        url:"https://bulleyetrade.com",
        img:"../Bull_Eye_logo.png"
    },
    {
        name:"The Chay Wala",
        url:"https://thechaywala.com/",
        img:"../Chaylogoo.png"
    },
    {
        name:"Crud App",
        url:"https://webshubh-crud.netlify.app/",
        img:"../pc4.jpg"
    },
    {
        name:"Employee Managment",
        url:"https://thechaywala.com/",
        img:"../pc3.jpg"
    },
    {
        name: "Restrourent Managment",
        url: "https://webshubh-restrourant.netlify.app",
        img: "../1.png"
    }
]

export default Project;