import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './News.module.scss';

const cx = classNames.bind(style);

function News(props) {
    const data = props.data;
    return (
        <>
            {data.map((item, index) => (
                <Link key={index} to={item.path} className={cx('wrapper')}>
                    <div className={cx('image')}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('time')}>
                            <span>{item.time}</span>
                        </div>
                        <div className={cx('title')}>
                            <h3>{item.title}</h3>
                        </div>
                        <div className={cx('description')}>
                            <p>{item.des}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
News.propTypes = {
    data: PropTypes.array.isRequired,
};
export default News;
