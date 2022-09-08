import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { updateCartItem, removeItem } from '@/redux/shopping-cart/cartItemsSlice';
import classNames from 'classnames/bind';
import style from './CartItem.module.scss';
import numberWithCommas from '@/utils/numberWithCommas';

const cx = classNames.bind(style);
function CartItem(props) {
    const dispatch = useDispatch();
    const [item, setItem] = useState(props.item);
    // const price = props.item.price;
    const [quantity, setQuantity] = useState(props.item.quantity);
    const [totalPriceItem, setTotalPriceItem] = useState(props.item.quantity * props.item.price);
    const handleInputValue = (value) => {
        if (isNaN(value)) {
            alert('Vui lòng nhập số hợp lệ');
            setQuantity(quantity);
        } else {
            dispatch(updateCartItem({ ...item, quantity: value }));
        }
    };
    const updateQuantity = (opt) => {
        if (opt === '-') {
            dispatch(updateCartItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }));
        } else {
            dispatch(updateCartItem({ ...item, quantity: quantity + 1 }));
        }
    };
    const handleRemoveItem = () => {
        dispatch(removeItem(item));
    };
    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
        setTotalPriceItem(props.item.quantity * props.item.price);
    }, [props.item]);
    return (
        <tr>
            <td>
                <Link to={`/product/${item.slug}`}>
                    <img src={item.image} alt="" />
                </Link>
            </td>
            <td>
                <Link to={`/product/${item.slug}`}> {`${item.name} - ${item.color}, ${item.size}`}</Link>
            </td>
            <td>
                <span>
                    {numberWithCommas(item.price)}
                    <span className={cx('amount')}>đ</span>
                </span>
            </td>
            <td>
                <div className={cx('quantity')}>
                    <div onClick={() => updateQuantity('-')} className={cx('btn')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faMinus} />
                        </span>
                    </div>
                    <input
                        className={cx('number')}
                        value={quantity}
                        onChange={(e) => {
                            handleInputValue(Number(e.target.value));
                        }}
                    />
                    <div onClick={() => updateQuantity('+')} className={cx('btn')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>
                </div>
            </td>
            <td>
                <span className={cx('remove')} onClick={handleRemoveItem}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </span>
            </td>
            <td>
                <span>
                    {numberWithCommas(totalPriceItem)}
                    <span className={cx('amount')}>đ</span>
                </span>
            </td>
        </tr>
    );
}
CartItem.prototype = {
    item: PropTypes.object.isRequired,
};
export default CartItem;
