import React from 'react'

import Twitter from '../../assets/images/circle-twitter.png'
import Facebook from '../../assets/images/circle-facebook.png'
import Pinterest from '../../assets/images/circle-pinterest.png'
import Yebo from '../../assets/images/yebo-logo.png'

const Footer = () => (
    <footer id="footer">
        <div className="container">
            <div className="row flex-column flex-md-row">
                <div className="col my-3 my-md-0">
                    <address className="m-0">
                        <h5 className="m-0">AOD New York</h5>
                        <p className="m-0">2250 Lexington Avenue</p>
                        <p className="m-0">New York, NY 10035 - info@domain.com</p>
                    </address>
                </div>
                <div className="col my-3 my-md-0 text-md-center d-md-flex justify-content-center align-items-center">
                    <nav>
                        <span className="mr-4 mx-md-2">
                            <img src={Twitter} alt="_" />
                        </span>
                        <span className="mr-4 mx-md-2">
                            <img src={Facebook} alt="_" />
                        </span>
                        <span className="mr-4 mx-md-2">
                            <img src={Pinterest} alt="_" />
                        </span>
                    </nav>
                </div>
                <div className="col my-3 my-md-0 text-md-right">
                    <a href="www.yebocreative.com" className="m-0">Designed by <img src={Yebo} alt="_" /></a>
                    <p className="m-0">Developed by MEEh</p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
