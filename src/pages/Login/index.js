// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Login.module.scss';
import { auth, googleProvider, facebookProvider } from '@/firebase/config';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getUser, addNewUser } from '@/firebase/functionHandler';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import routesConfig from '@/config/routes';
import Uptop from '@/components/Uptop';
import Breadcrumb from '@/components/Breadcrumb';

const cx = classNames.bind(style);
function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate(routesConfig.home);
            } else {
                return;
            }
        });
    });
    const checkUser = async (user) => {
        try {
            const result = await getUser(user.uid);
            if (result.size === 0) {
                await addNewUser(user);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleLogin = async (provider) => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            checkUser(user);
            console.log(user);
            // localStorage.setItem(user.uid);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Uptop title="-đăng nhập">
            <div className={cx('wrapper')}>
                <Breadcrumb title="Đăng nhập" />
                <div className={cx('content')}>
                    <h2>Đăng nhập</h2>
                    <form acction="#" className={cx('form')}>
                        <div className={cx('form-row')}>
                            <label>Email hoặc số điện thoại</label>
                            <input required="required" type="text" />
                        </div>
                        <div className={cx('form-row')}>
                            <label>Mật khẩu</label>
                            <input required="required" type="password" />
                        </div>
                        <button type="submit" className={cx('btn-submit')}>
                            Đăng nhập
                        </button>
                        <Link to="/account?">Quên mật khẩu?</Link>
                        <div className={cx('or-login')}>
                            <div className={cx('line')}></div>
                            <span>Hoặc</span>
                            <div className={cx('line')}></div>
                        </div>
                        <div className={cx('logins-social')}>
                            <button
                                type="button"
                                onClick={() => handleLogin(facebookProvider)}
                                className={cx('facebook')}
                            >
                                <div className={cx('facebook-logo')}></div>
                                <span>Facebook</span>
                            </button>
                            <button type="button" onClick={() => handleLogin(googleProvider)} className={cx('google')}>
                                <div className={cx('google-logo')}></div>
                                <span>Google</span>
                            </button>
                            <button type="button" className={cx('apple')}>
                                <div className={cx('apple-logo')}></div>
                                <span>Apple</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Uptop>
    );
}

export default Login;
