import React, { Component, PropTypes } from 'react';

import Product from './Product.jsx';

/*
const mapdispatchToProps = {
  fetchProducts,
  addItemToCart,
  fav
};
*/

const propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  fav: PropTypes.func.isRequired
};

export default class Products extends Component {
  componentDidMount() {
    // this.props.fetchProducts();
  }
  renderProducts(products, addItemToCart, fav) {
    if (!Array.isArray(products)) {
      return null;
    }
    return products.map(item => (
      <Product
        addItem={ addItemToCart }
        fav={ fav }
        item={ item }
        key={ item.id }
      />
    )
    );
  }
  render() {
    const {
      products,
      addItemToCart,
      fav
    } = this.props;
    return (
      <div className='products'>
        <div className='products-search'>
          <input className='products-search_input' />
        </div>
        <div className='products-lists'>
          { this.renderProducts(products, addItemToCart, fav) }
        </div>
      </div>
    );
  }
}

Products.displayName = 'Products';
Products.propTypes = propTypes;
