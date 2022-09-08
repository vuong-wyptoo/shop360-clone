import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import numberWithCommas from '@/utils/numberWithCommas';
import classNames from 'classnames/bind';
import style from './ProductCard.module.scss';
// import { imgOnsale } from '@/assets/fake-data/background';

const cx = classNames.bind(style);

function ProductCard(props) {
    return (
        <div className={cx('product-card')}>
            {!!props.priceOld === true && <span className={cx('onsale')}> Giảm giá</span>}
            <Link to={`/product/${props.slug}`}>
                <div className={cx('product-img')}>
                    <img src={props.img} alt="" />
                    <div className={cx('variant')}>
                        {props.variant.map((item, index) => (
                            <span key={index} className={cx('variant-item')}>
                                <img src={item.img} alt="" />
                                <span>{item.title}</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className={cx('product-infor')}>
                    <h3 className={cx('name')}>{props.name}</h3>
                    <div className={cx('price')}>
                        {props.price ? (
                            <span className={cx('price-one')}>
                                {numberWithCommas(props.price)}
                                <span className={cx('amount')}>đ</span>
                            </span>
                        ) : (
                            <>
                                <span className={cx('old')}>
                                    {numberWithCommas(props.priceOld)}
                                    <span className={cx('amount')}>đ</span>
                                </span>
                                <span className={cx('new')}>
                                    {numberWithCommas(props.priceNew)}
                                    <span className={cx('amount')}>đ</span>
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}
ProductCard.propTypes = {
    slug: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceNew: PropTypes.number.isRequired,
    priceOld: PropTypes.number.isRequired,
    variant: PropTypes.array.isRequired,
};
export default ProductCard;
