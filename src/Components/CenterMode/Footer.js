import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div>
            <div class="footer-sec">
                <div class="container">
                    <div className="col-12">
                        <div class="row">
                            <div class="col-lg-2 col-sm-4 col-6 mt-4">
                                <h6>Top RTCs</h6>
                                <a href='https://www.redbus.in/online-booking/apsrtc'>APSRTC</a>
                                <a href='https://www.redbus.in/online-booking/gsrtc'>GSRTC</a>
                                <a href='https://www.redbus.in/online-booking/msrtc'>MSRTC</a>
                                <a href='https://www.redbus.in/online-booking/tnstc'>TNSTC</a>
                                <a href='https://www.redbus.in/online-booking/rtc-directory'>View All</a>
                            </div>
                            <div class="col-lg-2 col-sm-4 col-6 mt-4">
                                <h6>Other</h6>
                                <a href='https://www.redbus.in/online-booking/tsrtc'>TSRTC</a>
                                <a href='https://www.redbus.in/online-booking/sbstc'>SBSTC</a>
                                <a href='https://www.redbus.in/online-booking/rsrtc'>RSRTC</a>
                                <a href='https://www.redbus.in/online-booking/ksrtc-kerala'>Kerala RTC</a>
                                <a href='https://www.redbus.in/online-booking/rtc-directory'>View All</a>
                            </div>
                            <div class="col-lg-3 col-sm-4 col-6 mt-4">
                                <h6>Top bus routes</h6>
                                <a href='https://www.redbus.in/bus-tickets/hyderabad-to-bangalore?fromCityName=Hyderabad&fromCityId=124&toCityName=Bangalore&toCityId=122&onward=13-Jun-2023&busType=Any'>Hyderabad to Bangalore Bus</a>
                                <a href='https://www.redbus.in/bus-tickets/bangalore-to-chennai?fromCityName=Bangalore&fromCityId=122&toCityName=Chennai&toCityId=123&onward=13-Jun-2023&busType=Any'>Bangalore to Chennai Bus</a>
                                <a href='https://www.redbus.in/bus-tickets/pune-to-bangalore?fromCityName=Pune&fromCityId=130&toCityName=Bangalore&toCityId=122&onward=13-Jun-2023&busType=Any'>Pune to Bangalore Bus</a>
                                <a href='https://www.redbus.in/bus-tickets/mumbai-to-bangalore'>Mumbai to Bangalore Bus</a>
                                <a href='https://www.redbus.in/bus-tickets/routes-directory'>View All</a>
                            </div>
                            <div class="col-lg-2 col-sm-6 col-6 mt-4">
                                <h6>Top cities</h6>
                                <a href='https://www.redbus.in/buses/hyderabad-bus-tickets'>Hyderabad Bus Tickets</a>
                                <a href='https://www.redbus.in/buses/bangalore-bus-tickets'>Bangalore Bus Tickets</a>
                                <a href='https://www.redbus.in/buses/chennai-bus-tickets'>Chennai Bus Tickets</a>
                                <a href='https://www.redbus.in/buses/pune-bus-tickets'>Pune Bus Tickets</a>
                                <a href='https://www.redbus.in/buses/cities-directory'>View All</a>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-6 mt-4">
                                <h6>Tempo Traveller in Cities</h6>
                                <a href='https://www.redbus.in/tempo-traveller/bangalore'>Tempo traveller in Bangalore</a>
                                <a href='https://www.redbus.in/tempo-traveller/chennai'>Tempo traveller in Chennai</a>
                                <a href='https://www.redbus.in/tempo-traveller/mumbai'>Tempo traveller in Mumbai</a>
                                <a href='https://www.redbus.in/tempo-traveller/hyderabad'>Tempo traveller in Hyderabad</a>
                                <a href='https://www.redbus.in/tempo-traveller/ahmedabad'>Tempo traveller in Ahmedabad</a>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="col-12 mt-4">
                        <div class="row">
                            <div class="col-lg-4 col-sm-8 col-12 mt-4">
                                <div className="col-10">
                                <img className='mb-3' src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="loading"></img>
                                <p>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-4 col-6 mt-4">
                                <h6>About redBus</h6>
                                <a href='https://www.redbus.in/info/aboutus'>About us</a>
                                <a href='https://www.redbus.in/info/Investors'>Investor Relations</a>
                                <a href='https://www.redbus.in/info/contactus'>Contact us</a>
                                <a href='https://www.redbus.in/'>Mobile version</a>
                                <a href='https://www.redbus.in/info/mobile'>redBus on mobile</a>
                                <a href='https://www.redbus.in/sitemap.html'>Sitemap</a>
                                <a href='https://www.redbus.in/info/offerTerms'>Offers</a>
                                <a href='https://www.redbus.in/careers/'>Careers</a>
                                <a href='https://www.redbus.in/mmtvalue/index.html'>Values</a>
                            </div>
                            <div class="col-lg-2 col-sm-4 col-6 mt-4">
                                <h6>Info</h6>
                                <a href='https://www.redbus.in/info/termscondition'>T&C</a>
                                <a href='https://www.redbus.in/info/privacypolicy'>Privacy policy</a>
                                <a href='https://www.redbus.in/info/faq'>FAQ</a>
                                <a href='https://blog.redbus.in/'>Blog</a>
                                <a href='https://onboardvendor.redbus.in/'>Bus operator registration</a>
                                <a href='https://in3.seatseller.travel/ssui/loginpage'>Agent registration</a>
                                <a href='https://www.acko.com/'>Insurance partner</a>
                                <a href='https://www.redbus.in/info/useragreement'>User agreement</a>
                            </div>
                            <div class="col-lg-2 col-sm-4 col-6 mt-4">
                                <h6>Global Sites</h6>
                                <a href='https://www.redbus.in/'>India</a>
                                <a href='https://www.redbus.sg/'>Singapore</a>
                                <a href='https://www.redbus.my/'>Malaysia</a>
                                <a href='https://www.redbus.id/'>Indonesia</a>
                                <a href='https://www.redbus.pe/'>Peru</a>
                                <a href='https://www.redbus.co/'>Colombia</a>
                            </div>
                            <div class="col-lg-2 col-sm-4 col-6 mt-4">
                                <h6>Our Partners</h6>
                                <a href='https://www.goibibo.com/bus/'>Goibibo</a>
                                <a href='https://www.makemytrip.com/bus-tickets/'>Makemytrip</a>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="col-12">
                        <div class="d-flex gap-2 justify-content-between align-items-center ">
                            <div class="col">
                                <p class="content">Ⓒ 2023 Redbus India Pvt Ltd. All rights reserved</p>
                            </div>
                            <div class=" d-flex">
                                <a class="icons" href='https://www.facebook.com/redBus.in/'><FacebookIcon /></a>
                                <a class="icons" href='https://www.linkedin.com/company/redbus_2/?originalSubdomain=in'><LinkedInIcon /></a>
                                <a class="icons" href='https://twitter.com/redBus_in/'><TwitterIcon /></a>
                                <a class="icons" href='https://www.instagram.com/accounts/login/?next=%2Fredbusindia%2F'><InstagramIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer