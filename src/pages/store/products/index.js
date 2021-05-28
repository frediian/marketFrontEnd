import React from 'react';
import Categories from '../categories/index';

class Product extends React.Component{

    render(){
        // const keys=  Math.floor(Math.random()*100);        

        return(
            <div className="m-c-wrapper">
                    
                    <div className="recipe-content">
                        recetas
                    </div>

                    <div className="offer-new-product">
                        ofertas
    
                    </div>
{/* start print products by categories*/}
                            <Categories />
       
  {/* category map end */}
                    {/* category print end */}
                </div>

        );
        }
        }

export default Product;