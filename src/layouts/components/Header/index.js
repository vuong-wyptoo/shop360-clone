import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleUser,
    faBagShopping,
    faCircleXmark,
    faMagnifyingGlass,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { auth } from '@/firebase/config';
import { signOut, getAuth } from 'firebase/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { useStore } from '@/store';
import { useSelector } from 'react-redux';

import routesConfig from '@/config/routes';

import Nav from '@/layouts/components/Nav';

import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);
// const user = false;

function Header() {
    const cartItems = useSelector((state) => state.cartItems.value);
    const user = useStore((state) => state.user);
    const setUser = useStore((state) => state.setUser);
    const [searchText, setSearchText] = useState('');
    const [isScroll, setIsSroll] = useState(false);
    const [btnSearch, setBtnSearch] = useState(false);
    const [cart, setCart] = useState(routesConfig.login);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setCart(routesConfig.cart);
            } else {
                setUser(null);
            }
        });
    });
    useEffect(() => {
        document.onscroll = () => {
            if (window.scrollY > 150 || document.documentElement.scrollTop > 150) {
                setIsSroll(true);
            } else setIsSroll(false);
        };
    }, []);
    const handleHideSearch = () => {
        setBtnSearch(!btnSearch);
        // if (isScroll) {
        //     btnSearch === false ? setBtnSearch(true) : setBtnSearch(false);
        // } else {
        //     setBtnSearch(false);
        // }
    };
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser(null);
                setCart(routesConfig.login);
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    };
    return (
        <>
            <div className={cx(isScroll ? 'd-none' : 'top-bar')}>
                <div className={cx('top-container')}>
                    <div className={cx('top-content')}>
                        <p>
                            Hotline Mua Hàng: 0123 456 789 | Hotline CSKH: 0123 456 789 - Ext 1 | Email CSKH:
                            web@360boutique.vn
                        </p>
                    </div>
                </div>
            </div>
            <header className={cx(isScroll ? 'affix-scroll' : 'wrapper')}>
                <div className={cx('header-top')}>
                    <div className={cx('header-menu')}>
                        <button className={cx('header-menu-btn')}>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </button>
                    </div>
                    <Link to={routesConfig.home} className={cx('logo')}>
                        <img
                            className={cx('logo-img')}
                            src="https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png"
                            alt=""
                        />
                    </Link>
                    <div className={cx(btnSearch && isScroll ? 'search-show' : 'search')}>
                        <input
                            value={searchText}
                            className={cx('input')}
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        {!!searchText && (
                            <button onClick={(e) => setSearchText('')} className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('actions')}>
                        <button onClick={handleHideSearch} className={cx('search-menu')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <Link to={cart} className={cx('cart-btn')}>
                            <FontAwesomeIcon icon={faBagShopping} />
                            {cartItems.length > 0 && (
                                <div className={cx('wrapper-number')}>
                                    <span className={cx('number-item')}>{cartItems.length}</span>
                                </div>
                            )}
                        </Link>
                        {user ? (
                            <div className={cx('user')}>
                                <img className={cx('user-pictrue')} src={user.photoURL} alt=""></img>
                                <div className={cx('user-list')}>
                                    <Link to={'/profile/users'} className={cx('user-item')}>
                                        Thông tin tài khoản
                                    </Link>
                                    <Link className={cx('user-item')} to={'/'}>
                                        Đơn mua
                                    </Link>
                                    <button onClick={handleLogout} className={cx('user-item')}>
                                        Đăng xuất
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link to={routesConfig.login} className={cx('login-btn')}>
                                <FontAwesomeIcon icon={faCircleUser} />
                            </Link>
                        )}
                    </div>
                </div>
                <Nav>{[isScroll, btnSearch]}</Nav>
            </header>
        </>
    );
}

export default Header;
