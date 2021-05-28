import React from 'react';

class Footer extends React.Component{

    componentDidMount = () => window.scrollTo({ top:0,behavior: 'smooth'});

    render(){
        
        return(
        <div>
        <div className="menu-footer">
                    <div className="container-footer">
                        <h4 className="linkfont">Customer Service</h4>
                        <ul className="list-footer">
                            <li className="link-footer">
                                <a href="/">Store Pickup </a>
                            </li>
                            <li className="link-footer">
                                <a href="/">Quotes </a>
                            </li>
                            <li className="link-footer">
                                <a href="/">Help </a>
                            </li>
                            
                        </ul>  
                    </div>
                    <div className="container-footer">
                        <h4 className="linkfont">Comercial Gordillo</h4>
                        <ul className="list-footer">
                            <li className="link-footer">
                                <a href="/">About Us </a>
                            </li>
                            <li className="link-footer">
                                <a href="/">Find Us </a>
                            </li>
                            <li className="link-footer">
                                <a href="/">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container-footer">
                        <h4 className="linkfont">Legal</h4>
                        <ul className="list-footer">
                            <li className="link-footer">
                                <a href="/"> Terms of Use </a>
                            </li>
                            <li className="link-footer">
                                <a href="/"> 
                                    Privacy and Security
                                </a>
                            </li>
                            <li className="link-footer">
                                <a href="/">Advertise With Us </a>
                            </li>
                        </ul>  
                    </div>
                    <div className="container-footer">
                        <h4 className="linkfont">
                            Your Account
                        </h4>
                        <ul className="list-footer">
                            <li className="link-footer">
                                <a href="/">
                                    Your Account Details
                                </a>
                            </li>
                            <li className="link-footer">
                                <a href="/"> 
                                    Your Orders
                                </a>
                            </li>
                        </ul>  
                    </div>
                    <div className="appear">
                        <ul className="list-footer linkfont">
                            <li className="link-footer-1">
                                <a href="/">
                                Find Us
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/">
                                    Your Orders
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/"> 
                                    Your Account Details
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/">
                                    Terms of Use
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/"> 
                                    Privacy and Security
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/">
                                    Advertise With Us
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/">
                                    Store Pickup
                                </a>
                            </li>
                            <li className="link-footer-1">
                                <a href="/">
                                    Quotes
                                </a>
                            </li>
                        </ul>  
                    </div>
                </div>
        <div className="copyright">
        {/* <span>Powered by Norber Digital</span> */}

                    <span>© 2020 Comercial Gordillo. All Rights Reserved.</span>
                    <button id="backToTopLink" onClick={this.componentDidMount} className="back-top">Back to top</button>
        </div>
        </div>
        );
    }
}

export default Footer;