import React from 'react';
import withUser from '../../../context/withUser';

function ListCategory (props){
    // id category received
    const catID = props.idCategory;

    // list all products by category order
    const listProductByCategory = withUser.products.filter(prod => prod.categories === catID);

    // print list product by product
    const listItems = listProductByCategory.map( (prod)=>

        <ListProducts prod={prod} key={prod.id.toString()} />

    );

    return (
        <ul className="list-product">
            {listItems}
        </ul>
    );
}

function ListProducts (props){
    const prod = props.prod
    return (
        <li className="product" >
                        <div className="items">
                            <div className="tittle-item">
                                <button className="like-product">
                                    {/* unlike */}
                                    <i className="material-icons likeItem">&#xe87e;</i>
                
                                    {/* like */}
                                    <i className="material-icons likeItem">&#xe87d;</i>
                                </button>
                            </div>

                            <a href="/" className="img-item">
                                <div className="image-product">
                                    <img src={prod.image} alt="foodproduct" />
                                </div>
                            </a>

                            <div className="container-item">
                                <div className="price-item">
                                    <span className="detail-price">
                                        ${prod.price}
                                    </span>
                                </div>
                                <a href="/" className="detail-item">
                                    <span>
                                        {prod.description}
                                    </span>
                                    <span className="brand-item">
                                        {prod.brand}
                                    </span>
                                </a>
                            </div>
    
                            <div className="add-to-cart">
                                <button className="cart-button">
                                    Add to card
                                    
                                </button>
                                
                            </div>
    
                        </div>
                    </li>
    );
} 

// class listProducts extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = { product: this.print(props.idCategory)
//         }
//     }

//     print (cat) {
//         const listaItems = withUser.products.filter(prod => prod.categories === cat);
// console.log('imprime 1 vez');
//         return ( 
//             listaItems
//         );
//     }

//     render () {

//         return(
//             <ul className="list-product">
                

//                 {this.state.product.map( (prod)=>
                    
//                     <li className="product" key={prod.id.toString()} >
//                         <div className="items">
//                             <div className="tittle-item">
//                                 <button className="like-product">
//                                     {/* unlike */}
//                                     <i className="material-icons likeItem">&#xe87e;</i>
                
//                                     {/* like */}
//                                     <i className="material-icons likeItem">&#xe87d;</i>
//                                 </button>
//                             </div>

//                             <a href="/" className="img-item">
//                                 <div className="image-product">
//                                     <img src={prod.image} alt="foodproduct" />
//                                 </div>
//                             </a>

//                             <div className="container-item">
//                                 <div className="price-item">
//                                     <span className="detail-price">
//                                         ${prod.price}
//                                     </span>
//                                 </div>
//                                 <a href="/" className="detail-item">
//                                     <span>
//                                         {prod.description}
//                                     </span>
//                                     <span className="brand-item">
//                                         {prod.brand}
//                                     </span>
//                                 </a>
//                             </div>
    
//                             <div className="add-to-cart">
//                                 <button className="cart-button">
//                                     Add to card
                                    
//                                 </button>
                                
//                             </div>
    
//                         </div>
//                     </li>
//                 )//end map
//                 } 
//             </ul>
//         ); //end return
//     } //end render

// } // end class
export default ListCategory;
// export default listProducts;