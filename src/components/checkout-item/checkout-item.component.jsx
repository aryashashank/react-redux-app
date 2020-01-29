import React from 'react';

import './checkout-item.styles.scss';
import { clearItemFromCart, addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';
const CheckoutItem = ({ cartItem, addItem, clearItem, removeItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);