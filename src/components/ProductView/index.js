import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import numberWithCommas from '@/utils/numberWithCommas';
import PropTypes from 'prop-types';

// import cartItemsSlice from '@/redux/shopping-cart/cartItemsSlice';
import Message from '../Message';
import { addItem } from '@/redux/shopping-cart/cartItemsSlice';
import classNames from 'classnames/bind';
import style from './ProductView.module.scss';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import routesConfig from '@/config/routes';

const cx = classNames.bind(style);

function ProductView(props) {
    const navigate = useNavigate();
    const user = useStore((state) => state.user);
    const dispatch = useDispatch();
    const product = props.product;
    const price = product.price ? product.price : product.priceNew;
    const [previewImg, setPreviewImg] = useState(product.imagelists[0]);
    const [quantity, setQuantity] = useState(1);
    const [imgColor, setImgColor] = useState(undefined);
    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [sucess, setSucess] = useState(false);
    const handleInputValue = (value) => {
        if (isNaN(value)) {
            alert('Vui lòng nhập số hợp lệ');
            setQuantity(1);
        } else {
            setQuantity(value);
        }
    };
    const handleChangeQuantity = (type) => {
        if (type === 'minus') {
            setQuantity(quantity < 2 ? 1 : quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    const handleAddToCart = () => {
        if (!user) {
            navigate(routesConfig.login);
        } else {
            if (color === undefined || size === undefined) {
                alert('Chọn các tùy chọn cho sản phẩm trước khi thêm vào giỏ hàng');
            } else {
                dispatch(
                    addItem({
                        slug: product.slug,
                        name: product.title,
                        color: color,
                        size: size,
                        quantity: quantity,
                        price: price,
                        image: imgColor,
                    }),
                );
                setSucess(true);
                window.scrollTo(0, 0);
            }
        }
    };
    useEffect(() => {
        setPreviewImg(product.imagelists[0]);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
        setImgColor(undefined);
        setSucess(false);
    }, [product]);
    return (
        <>
            {sucess && <Message />}
            <div className={cx('product')}>
                <div className={cx('images')}>
                    <div className={cx('images-list')}>
                        {product.imagelists.map((item, index) => (
                            <div key={index} className={cx('images-list-item')} onClick={() => setPreviewImg(item)}>
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className={cx('images-show')}>
                        {product.priceOld && <span className={cx('onsale')}>Giảm giá</span>}
                        <img src={previewImg} alt="" />
                    </div>
                </div>
                <div className={cx('infor')}>
                    <div className={cx('infor-list')}>
                        <h1>{product.title}</h1>
                    </div>
                    <div className={cx('infor-list')}>
                        <div className={cx('price')}>
                            {product.price ? (
                                <span className={cx('price-one')}>
                                    {numberWithCommas(product.price)}
                                    <span className={cx('amount')}>đ</span>
                                </span>
                            ) : (
                                <>
                                    <span className={cx('old')}>
                                        {numberWithCommas(product.priceOld)}
                                        <span className={cx('amount')}>đ</span>
                                    </span>
                                    <span className={cx('new')}>
                                        {numberWithCommas(product.priceNew)}
                                        <span className={cx('amount')}>đ</span>
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={cx('infor-list')}>
                        <div className={cx('color')}>
                            <span>Màu sắc</span>
                            <div className={cx('color-list')}>
                                {product.color.map((item, index) => (
                                    <div
                                        key={index}
                                        className={cx(
                                            item.title === color ? 'color-list-item-active' : 'color-list-item',
                                        )}
                                        onClick={() => {
                                            setColor(item.title);
                                            setImgColor(item.img);
                                        }}
                                    >
                                        <img src={item.img} alt="" />
                                        <div className={cx('color-text')}>{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cx('infor-list')}>
                        <div className={cx('size')}>
                            <span>Size</span>
                            <div className={cx('size-list')}>
                                {product.size.map((item, index) => (
                                    <div
                                        key={index}
                                        className={cx(size === item ? 'size-list-item-active' : 'size-list-item')}
                                        onClick={() => setSize(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('quantity')}>
                            <div className={cx('btn')} onClick={() => handleChangeQuantity('minus')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </span>
                            </div>
                            <input
                                value={quantity}
                                className={cx('number')}
                                onChange={(e) => {
                                    handleInputValue(Number(e.target.value));
                                }}
                            />
                            <div className={cx('btn')} onClick={() => handleChangeQuantity('plus')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </div>
                        </div>
                        <button className={cx('add-cart')} onClick={handleAddToCart}>
                            <span>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                            thêm vào giỏ hàng
                        </button>
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('title')}>
                            <h2>Mô tả</h2>
                        </div>
                        <div className={cx('content')}>
                            <p>
                                - Chất liệu: {product.material}
                                <br />- Dáng: {product.form}
                                <br />- Đặc tính: {product.characteristic}
                                <br />- Màu: {product.color_infor}
                                <br />+ Hướng dẫn sử dụng:
                                <br />- Giặt ở nhiệt độ bình thường, với các đồ có màu tương tự.
                                <br />- Không được dùng hóa chất tẩy.
                                <br />- Hạn chế sử dụng máy sấy, ủi ở nhiệt độ thường.
                                <br />- Sản phẩm đã có mặt ở toàn bộ các cửa hàng trên hệ thống.
                            </p>
                            <h2>HƯỚNG DẪN CHỌN SIZE</h2>
                            <p>
                                Size M: 50-57kg / Cao 1m53 - 1m68
                                <br /> Size L: 58-64kg / Cao 1m57 - 1m70
                                <br /> Size XL: 65-70kg / Cao 1m66 - 1m76
                                <br /> Size XXL: 71-76kg / Cao 1m70 - 1m85
                                <br />
                                Tùy mỗi người thích body hoặc vừa người thì tăng hoặc giảm 1 size, chỉ số trên là tương
                                đối mặc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
ProductView.propTypes = {
    product: PropTypes.object.isRequired,
};
export default ProductView;
