import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Grid from '@/components/Grid';
import { useState } from 'react';

const cx = classNames.bind(styles);

const navItems = [
    {
        title: 'Giới Thiệu',
        path: '/',
    },
    {
        title: 'Sản Phẩm',
        path: '/',
        children: [
            {
                title: 'Áo Nam',
                path: '/aonam',
                children2: [
                    { title: 'Áo Polo', path: '/' },
                    { title: 'Áo Phông', path: '/' },
                    { title: 'Áo Sơ Mi Dài Tay', path: '/' },
                    { title: 'Áo Sơ Mi Ngắn Tay', path: '/' },
                    { title: 'Áo Len', path: '/' },
                    { title: 'Áo Nỉ', path: '/' },
                    { title: 'Áo Hoodie', path: '/' },
                    { title: 'Áo Khoác', path: '/' },
                    { title: 'Áo Vest', path: '/' },
                    { title: 'Sơ Mi Họa Tiết', path: '/' },
                ],
            },
            {
                title: 'Quần Nam',
                path: '/',
                children2: [
                    { title: 'Quần Âu', path: '/' },
                    { title: 'Quần Jeans', path: '/' },
                    { title: 'Quần Jogger', path: '/' },
                    { title: 'Quần Kaki', path: '/' },
                    { title: 'Quần Short', path: '/' },
                ],
            },
            {
                title: 'Phụ Kiện Nam',
                path: '/',
                children2: [
                    { title: 'Balo Túi Đeo Chéo', path: '/' },
                    { title: 'Kính ', path: '/' },
                    { title: 'Quần Jogger', path: '/' },
                    { title: 'Mũ', path: '/' },
                    { title: 'Ví da', path: '/' },
                ],
            },
            {
                title: 'Giày Dép Nam',
                path: '/',
                children2: [
                    { title: 'Giày Tây', path: '/' },
                    { title: 'Dép ', path: '/' },
                ],
            },
        ],
    },
    {
        title: 'Khuyến Mãi',
        path: '/',
        sales: [
            { title: 'Sale 10%', path: '/' },
            { title: 'Sale 20%', path: '/' },
            { title: 'Sale 30%', path: '/' },
            { title: 'Sale 50%', path: '/' },
            { title: 'Sale 60%', path: '/' },
            { title: 'Sale Đồng giá 99k', path: '/' },
        ],
    },
    {
        title: 'Tin Tức',
        path: '/',
    },
    {
        title: 'Tuyển Dụng',
        path: '/',
    },
    {
        title: 'Hệ Thống Cửa Hàng',
        path: '/',
    },
];
function Nav({ children }) {
    const [menuShow, setMenuShow] = useState(false);
    const handleShowMenu = () => {
        menuShow === false ? setMenuShow(true) : setMenuShow(false);
    };
    return (
        <div className={cx(menuShow ? 'menu-show' : 'menu')}>
            <div onClick={handleShowMenu} className={cx('btn-showmenu')}></div>
            <button className={cx('btn-hidemenu-mb')} onClick={(e) => setMenuShow(false)}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div className={cx(children[0] ? 'scroll-nav' : 'nav')}>
                <ul className={cx(children[0] && children[1] ? 'd-none' : 'nav-list')}>
                    {navItems.map((navItem, index) => (
                        <li key={index} className={cx('nav-item')}>
                            <Link className={cx('nav-link')} to={navItem.path}>
                                {navItem.title}
                            </Link>
                            {navItem.children && (
                                <div className={cx('nav-products')}>
                                    <div className={cx('container-fluid')}>
                                        <Grid col={4} mdCol={2} smCol={2} gap={10}>
                                            {navItem.children.map((item, index) => (
                                                <div key={index}>
                                                    <h3>
                                                        <Link to={item.path}>{item.title}</Link>
                                                    </h3>
                                                    <ul>
                                                        {item.children2.map((value, index) => (
                                                            <li key={index}>
                                                                <Link to={value.path}>
                                                                    <span>
                                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                                    </span>
                                                                    {value.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Grid>
                                    </div>
                                </div>
                            )}
                            {navItem.sales && (
                                <div className={cx('nav-sales')}>
                                    <ul>
                                        {navItem.sales.map((sale, index) => (
                                            <li key={index}>
                                                <Link to={sale.path}>{sale.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx(children[0] ? 'logo-mb-show' : 'logo-mb-hide')}>
                <Link to={'/'}>
                    <img
                        src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
