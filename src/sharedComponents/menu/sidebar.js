import React from 'react';

class SideBar extends React.Component {

    render(){

        const closeMenu = () =>{
            document.getElementsByClassName("menu-sidebar")[0].removeAttribute("style");
            document.getElementById("followUS").removeAttribute("style");
        }

        return(

                // <!-- side bar main menu -->
                <div className="menu-sidebar">
                    <div className="background-sidebar" onClick={closeMenu}>
                        
                    </div>
                    <div className="menu-s-categories">
                        <div className="header-menu-s-c">
                            
                            <div className="logoname">
                                <img src="/img/logo1.svg"  width="34px" height="34px" alt="logo"/>
                            </div>
                            
                            <button className="close-sidebar" onClick={closeMenu}>
                                    x
                            </button>
                            
                        </div>

                        <div className="list-categories">
                            <h3 className="categories">
                                Categories
                            </h3>
                            <ul>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                            </ul>
                            <h3 className="categories">
                                User Account
                            </h3>
                            <ul>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                                <li className="nav-categories">
                                    <button className="nav-cat-item">
                                        <div className="item-category">
                                        Lorem, ipsum dolor.
                                            <span>
                                                >
                                            </span>
                                             
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SideBar;