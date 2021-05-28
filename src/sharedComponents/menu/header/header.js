import React from 'react';

class Header extends React.Component {

    render(){

        const openMenu = () =>{
            document.getElementsByClassName("menu-sidebar")[0].style.visibility ="visible";
            document.getElementById("followUS").style.display ="none";
        }

        return(
            <div className="header-menu">
                    <div className="socialmedia-wrapper">

                        <a className="linksheader " href="/" aria-label="PaginaWeb" title="Comercial Gordillo">
                            <span className="linktext btnMenu linkfont"> ComercialGordillo.com </span>
                        </a>
                        <div className="linksheader dissappear" id="followUS">
                            <span className="linktext linkfont">Follow us:</span>
                        </div>
                        <a className="linksheader"  href="index.html" aria-label="RedSocial" title="Facebook" id="faceDis">
                            <span className="linktext linkfont btnMenu">
                                {/* <img src="/img/fb.svg" width="17px" height="17px" alt="icono red social"/> */}
                                {/* <!-- FB --> */}
                                <i className="fa socialicon">&#xf082; </i>
                            </span>
                        </a>

                        <a className="linksheader "  href="index.html" aria-label="RedSocial" title="Instagram" id="igDis">
                            <span className="linktext linkfont btnMenu">
                            <i className="fa socialicon">&#xf16d;</i>
                                {/* <img src="/img/ig.svg" width="17px" height="17px" alt="icono red social" /> */}
                                {/* <!-- IG --> */}
                            </span>
                        </a>
                    </div>

                    <div className="menu-wrapper">
                        <div className="mw-container">
                                <div className="menu-name">
                                    <div className="menu">
                                        <button className="link-menu" onClick={openMenu} aria-label="Menu" title="Menu">
                                            <span className="linktext"> 
                                                <i className="material-icons menuicon">&#xe5d2;</i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="logoname">
                                        <a className="link-logoname" href="index.html" aria-label="Inicio" title="Comercial Gordillo">
                                            <span className="name-img dissappear">
                                                <img src="/img/logoname1.svg" width="100px" height="34px" alt="Nombre de la Empresa" />
                                            </span>
                                            <span className="logo">
                                                <img src="/img/logo1.svg"  width="34px" height="34px" alt="Logotipo"/>
                                            </span>
                                        </a>
                                    </div>
                                </div>
        
                                <div className="search ">
                                    <form action="post" className="search-form">
                                        <input type="text" className="search-input" aria-autocomplete="both" aria-label="Search ComercialGordillo.com" autoCapitalize="off" autoComplete="off" autoCorrect="off" name="query" placeholder="Search ComercialGordillo.com"/>
                                        <button className="button-search" type="submit" aria-label="Search But">
                                            <span className="icon-search">
                                                <i className="material-icons">&#xe8b6;</i>
                                            </span>
                                        </button>
                                    </form>
                                </div>
        
                                <div className="account linkfont">
                                    <div className="user-account1 dissappear">
                                        <a href="index.html" className="userlogin ">
                                            <span className="u-a-icon">
                                                {/* user no login */}
                                            <i  className="fa usericon">&#xf2be;</i>
                                            {/* user login */}
                                                {/* <i class="material-icons">&#xe7fd;</i> */}
                                            </span>
                                            <span className="u-a-text">
                                                Log In
                                            </span>
                                        </a>
                                    </div>
                                    <div className="user-account2">
                                        <a href="index.html" className="usercard">
                                            <span className="c-o-icon">
                                                <img src="/img/usercard.svg"  width="34px" height="31px" alt="icono de usuario" />
                                              
                                                <div className="user-items" data-automation-id="count">
                                                    0
                                                </div>
                                            </span>
                                            <div className="price-container">
                                                <span className="style-price">$00.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
        );
    }
}

export default Header;