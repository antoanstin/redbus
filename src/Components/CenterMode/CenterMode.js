import React, { Component } from "react";
import Slider from "react-slick";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CenterMode.css';
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    var item = [
      {
        image: 'https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png',
        name: 'Bus',
        desc: 'Save up to Rs 250 on buses tickets on road',
        date: 'Valid till  31 Jul',
        type: 'FIRST',
        icon: <ContentCopyIcon />
      },

      {
        image: 'https://st.redbus.in/images/offers/superhit_rav/2_1.png',
        name: 'Bus',
        desc: 'Save up to Rs 300 in AP,TS routes on tickets.',
        date: 'Valid till  31 Jul',
        type: 'SUPR',
        icon: <ContentCopyIcon />
      },

      {
        image: 'https://st.redbus.in/Images/INDOFFER/BUS200/80x80.png',
        name: 'Bus',
        desc: 'Save up to Rs 200 in Gujarat and MP routes.',
        date: 'Valid till  31 Jul',
        type: 'BUS2',
        icon: <ContentCopyIcon />
      },

      {
        image: 'https://st.redbus.in/Images/INDOFFER/RB200/80x80.png',
        name: 'Bus',
        desc: 'Save up to Rs 200 in Delhi, Rajasthan, Gujarat, Madhya Pradesh, RON.',
        date: 'Valid tilll  31 Jul',
        type: 'RB200',
        icon: <ContentCopyIcon />
      },

      {
        image: 'https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png',
        name: 'Bus',
        desc: 'Save up to Rs 250 on buses tickets on road',
        date: 'Valid till  31 Jul',
        type: 'FIRST',
        icon: <ContentCopyIcon />
      },

      {
        image: 'https://st.redbus.in/Images/TSRTC/80x80.png',
        name: 'Bus',
        desc: 'Save Up to Rs 250 on TSRTC buses for tickets ',
        date: 'Valid till  31 Jul',
        type: 'TSRT',
        icon: <ContentCopyIcon />
      }


    ]
    return (
      <div>
        <div className="center-section">
          <div className="containe">
            <h2 className="head">TRENDING OFFERS</h2>
            <Slider {...settings}>
              {item.map((value, index) => (
                <div className="row">
                  <div className="cards" id={index}>
                    <img className="imge" src={value.image} alt="" />
                    <div className="cont">
                      <h3 className="name">{value.name}</h3>
                      <h1 className="desc">{value.desc}</h1>
                      <h2 className="date">{value.date}</h2>
                      <span className="type">{value.type}</span> 
                      <span> <ContentCopyIcon /></span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}