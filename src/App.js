import React from 'react';
import './App.css';
import Header from './sharedComponents/menu/header/header';
import Footer from './sharedComponents/menu/footer';
import Products from './pages/store/products/index';
import Location from './sharedComponents/advertising/location';
import SideBar from './sharedComponents/menu/sidebar';


// class App extends React.Component {
    
    // render()
    
    function App() {
        const anchocarru = () =>{
            var elementos = document.getElementsByClassName("products-wrapper");
            var margin = document.getElementsByClassName("m-c-wrapper")[0].offsetLeft*2;
        
            var cliente  = (document.body.clientWidth) - margin;
            if (cliente>=1200)
                cliente= 1200
            
            if (cliente<=320)
            cliente=320
            var ancho = cliente+"px";
            var anchocambio = "width : " +ancho;
        
            for (var i =0; i< elementos.length ; i++){
        
        // console.log(elementos[i]);
                document.getElementsByClassName("products-wrapper")[i].style.width= ancho;
                if (document.getElementsByClassName('products-wrapper')[i].hasAttribute("style")){
                    document.getElementsByClassName('products-wrapper')[i].setAttribute('style',anchocambio);
                }else{
                document.getElementsByClassName("products-wrapper")[i].replaceWith.style.width= ancho;
                }
            }
        }
        
        window.onload = anchocarru;
        window.onresize = anchocarru;
    // }
    // {
        return(

    <div className="content">
        <div className="grid-container">
            <header className="hd-bg">
                <Header/>
            </header>
            <div className="advertising">
                <Location/>
            </div>
            <aside>
                <SideBar/>
            </aside>

            <main className="main-content">
                <Products/>
            </main>

            <footer className="ft-bg">
                <Footer/>
            </footer>
        </div>
    </div>

      );
    }
// }


export default App;