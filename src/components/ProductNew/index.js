import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import classNames from 'classnames/bind';
import style from './ProductNew.module.scss';
// import { imgOnsale } from '@/assets/fake-data/background';
import ProductCard from '../ProductCard';

const cx = classNames.bind(style);

function ProductNew(props) {
    const data = props.data;
    return (
        <div className={cx('wrapper')}>
            <Splide
                hasTrack={false}
                aria-label="..."
                options={{
                    type: 'loop',
                    perPage: 4,

                    pagination: false,

                    rewind: true,

                    // autoplay: true,
                    // speed: 1000,
                    // arrows: false,
                    breakpoints: {
                        1200: {
                            perPage: 4,
                        },
                        940: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 1,
                        },
                    },
                }}
            >
                <SplideTrack>
                    {data.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className={cx('product')}>
                                <ProductCard
                                    // key={index}
                                    name={item.title}
                                    img={item.image}
                                    variant={item.variant}
                                    priceOld={Number(item.priceOld)}
                                    priceNew={Number(item.priceNew)}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className="splide__arrows">
                    <button
                        style={{
                            background: '#f0f0f0',
                            height: '4rem',
                            width: '4rem',
                            top: '40%',
                            left: '2em',
                            color: '#5c5c5c',
                        }}
                        className="splide__arrow splide__arrow--prev"
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                    <button
                        style={{
                            background: '#f0f0f0',
                            height: '4rem',
                            width: '4rem',
                            top: '40%',
                            right: '2em',
                            color: '#5c5c5c',
                        }}
                        className="splide__arrow splide__arrow--next"
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </Splide>
        </div>
    );
}
ProductNew.propTypes = {
    data: PropTypes.array.isRequired,
};
export default ProductNew;
