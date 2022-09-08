import React from 'react';
import PropTypes from 'prop-types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Slide.module.scss';

const cx = classNames.bind(style);

function HeroSlide(props) {
    const data = props.data;
    return (
        <div className={cx('home-slider')}>
            <div className={cx('hero-slide')}>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 1,

                        rewind: true,

                        autoplay: true,
                        speed: 1000,
                        arrows: false,
                    }}
                >
                    {data.map((item, index) => (
                        <SplideSlide key={index}>
                            <Link to={item.path}>
                                <div>
                                    <img className={cx('imgae')} src={item.img} alt="" />
                                </div>
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

HeroSlide.propTypes = {
    data: PropTypes.array.isRequired,
};

export default HeroSlide;
