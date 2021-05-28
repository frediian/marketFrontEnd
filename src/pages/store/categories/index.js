import React from 'react';

// products by categories
import ListProducts from '../products/listProducts';

// data
import Category from './category';

//  function list all the categories required
function categoriesMain () {
    const categoriesDB = Category.categories; 
    const printcategories = categoriesDB.map ( (cat) =>

        <div className="products-wrapper" key={cat.id.toString()}>
            <h3 className="category-name">
                {cat.categoryName}
            </h3>
            <div className="category-products">

                <div className="slider-products">
                        <div className="slider-items">
                            <ListProducts idCategory={cat.id} key={cat.id.toString()} />
                        </div>
                </div>
            
                <div className="slider-right">
                    right
                </div>
            
                <div className="slider-left">
                    left
                </div>
            
            </div>
        </div>
    );

    return(
        <div className="products-categories">
            {printcategories}
        </div>
    ); //end return
}

export default categoriesMain;