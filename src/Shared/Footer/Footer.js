import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer  my-5'>
        
        <div className="containerr">
            <div className="roww">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="">about us</a></li>
                        <li><a href="">Our service</a></li>
                            <li><a href="">privacy policy</a></li>
                            <li><a href="">legalization</a></li>
                    </ul>
                </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">shipping </a></li>
                            <li><a href="">returns</a></li>
                            <li><a href="">order status</a></li>
                            <li><a href="">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online shop</h4>
                        <ul>
                            <li><a href=""> Bike</a></li>
                            <li><a href="">bag</a></li>
                            <li><a href="">Water botle</a></li>
                            <li><a href="">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4> foolow us</h4>
                        <div className="social-link">

                            <a href=""> <i className="fab fa-facebook-f"></i></a>
                            <a href=""> <i className="fab fa-twitter"></i></a>
                            <a href=""> <i className="fab fa-instagram"></i></a>
                            <a href=""> <i className="fab fa-linkedin"></i></a>

                        </div>
                            
                        
                    </div>
            </div>
        </div>

        </footer>
    );
};

export default Footer;