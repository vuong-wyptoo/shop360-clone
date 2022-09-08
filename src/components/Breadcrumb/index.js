import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Breadcrumb.module.scss';
import routesConfig from '@/config/routes';
const cx = classNames.bind(style);

function Breadcrumb(props) {
    return (
        <div className="container-fluid">
            <div className={cx('breadcrumb')}>
                <Link to={routesConfig.home}>
                    <button className={cx('btn-home')}>
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </button>
                </Link>
                <span className={cx('space')}>/</span>
                <span>{props.title}</span>
            </div>
        </div>
    );
}
Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
};
export default Breadcrumb;
