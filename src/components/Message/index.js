import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routesConfig from '@/config/routes';
// import PropTypes from 'prop-types';

import style from './Message.module.scss';
import classNames from 'classnames/bind';

// import { useStore } from '@/store';

const cx = classNames.bind(style);

function Message() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('name')}>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Sản phẩm đã được thêm vào giỏ hàng.
            </div>
            <button className={cx('btn')}>
                <Link to={routesConfig.cart}> XEM GIỎ HÀNG</Link>
            </button>
        </div>
    );
}
// Message.prototype = {

// }
export default Message;
