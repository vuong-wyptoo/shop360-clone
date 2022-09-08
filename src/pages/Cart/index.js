import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Breadcrumb from '@/components/Breadcrumb';
import Uptop from '@/components/Uptop';
import classNames from 'classnames/bind';
import CartItem from '@/components/CartItem';
import style from './Cart.module.scss';
import numberWithCommas from '@/utils/numberWithCommas';
import { useState, useEffect } from 'react';
// import productData from '@/assets/fake-data/products';

const cx = classNames.bind(style);
function Cart() {
    const cartItems = useSelector((state) => state.cartItems.value);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setTotalPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
    }, [cartItems]);
    return (
        <Uptop title="-Giỏ hàng">
            <Breadcrumb title="Cart"></Breadcrumb>
            <div className="container-fluid">
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Xóa sản phẩm</th>
                            <th>Tạm tính</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))}
                    </tbody>
                </table>
                <p className={cx('text-muted')}>
                    Phí ship sẽ được tính theo từng địa chỉ , hỗ trợ ship trên hoá đơn trên 500K, tối thiểu 20K
                </p>
                <div className={cx('wrapper-total')}>
                    <div className={cx('total')}>
                        <h2>Cộng giỏ hàng</h2>
                        <div className={cx('total-list')}>
                            <div className={cx('item')}>
                                <label>Tạm tính</label>
                                <span>
                                    {numberWithCommas(totalPrice)}
                                    <span className={cx('amount')}>đ</span>
                                </span>
                            </div>
                            <div className={cx('sperate')}></div>
                            <div className={cx('item')}>
                                <label>Tổng cộng</label>
                                <span>
                                    {numberWithCommas(totalPrice)}
                                    <span className={cx('amount')}>đ</span>
                                </span>
                            </div>
                        </div>
                        <div className={cx('checkout')}>
                            <Link to="/thanh-toan">tiến hành thanh toán</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Uptop>
    );
}

export default Cart;
