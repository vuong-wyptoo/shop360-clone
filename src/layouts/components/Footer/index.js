import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import Grid from '@/components/Grid';

const cx = classNames.bind(style);

const footerItems = [
    {
        title: 'hệ thống cửa hàng',
        children: [
            {
                title: '242 Thái Hà, Q.Đống Đa, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '20 Dương Quảng Hàm, Q.Cầu Giấy, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '11 Dương Quảng Hàm, Q.Cầu Giấy, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '63 Đại Cổ Việt, Q.Hai Bà Trưng, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '27 Chùa Bộc, Q.Đống Đa, HN',
                path: '/',
            },
            {
                title: '296 Nguyễn Trãi, Q.Nam Từ Liêm, HN',
                path: '/he-thong-cua-hang',
            },

            {
                title: '116 Hồ Tùng Mậu,Q.Cầu Giấy, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '24 Trần Phú, Hà Đông, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '346 Cầu Giấy, Q.Cầu Giấy, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '29 Phố Nhổn, Q.Nam Từ Liêm, HN',
                path: '/he-thong-cua-hang',
            },
            {
                title: '69 Quang Trung, Hà Đông, HN',
                path: '/he-thong-cua-hang',
            },

            {
                title: '272 Tô Hiệu, Q.Lê Chân, HP',
                path: '/he-thong-cua-hang',
            },
        ],
    },
    {
        title: 'chính sách và quy định chung',
        children: [
            {
                title: 'Hướng Dẫn Mua Hàng',
                path: '/huong-dan-mua-hang',
            },
            {
                title: 'Hình Thức Thanh Toán',
                path: '/hinh-thuc-thanh-toan',
            },
            {
                title: 'Quy Định Về Bảo Mật Thông Tin',
                path: '/quy-dinh-ve-bao-mat-thong-tin',
            },
            {
                title: 'Chính Sách Bảo Hành',
                path: '/chinh-sach-bao-hanh',
            },
            {
                title: 'Chính Sách Đổi Hàng',
                path: '/chinh-sach-doi-tra',
            },
            {
                title: 'Chính Sách Vận Chuyển',
                path: '/chinh-sach-van-chuyen',
            },

            {
                title: 'Điều Khoản Dịch Vụ',
                path: '/dieu-khona-dich-vu',
            },
            {
                title: 'Giới Thiệu',
                path: '/gioi-thieu',
            },
        ],
    },
    {
        title: 'địa chỉ',
        children: [
            {
                title: 'VPGD: 37 Trung Kinh, Trung Hòa, Cầu Giấy, Hà Nội',
                path: '/',
            },
            {
                title: 'Facebook thời trang nam: 360Boutique',
                path: '/',
            },
            {
                title: 'Facebook kids: 360Kids',
                path: '/',
            },
            {
                title: 'Hotline: 0973 285 886',
                path: '/',
            },
            {
                title: 'Email: web@360boutique.vn',
                path: '/',
            },
            {
                title: 'Website: https://360boutique.vn/',
                path: '/',
            },
            {
                title: 'GPKD: 0107756568',
                path: '/',
                img: 'https://360boutique.vn/wp-content/uploads/2019/04/da-thong-bao.png',
            },
        ],
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-footer')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <h4>Đăng kí nhận thông tin</h4>
                        </div>
                        <div className={cx('input-group')}>
                            <form action="">
                                <input required="required" type="email" name="email" placeholder="Nhập email của bạn" />
                                <button type="submit">Đăng kí </button>
                            </form>
                        </div>
                        <div className={cx('contact')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faSquarePhone} />
                            </span>
                            <span>Hỗ trợ / mua hàng:</span>
                            <a href="tel: 0365505835">0365505835</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('mid-footer')}>
                <div className={cx('container-fluid')}>
                    <Grid col={4} mdCol={2} smCol={1}>
                        {footerItems.map((item, index) => (
                            <div key={index} className={cx('mid-item')}>
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.children.map((value, index) => (
                                        <li key={index}>
                                            <Link to={value.path}>{value.title}</Link>
                                            {value.img && <img src={value.img} alt={value.title} />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className={cx('wrapper-fanpage')}>
                            <h4>Fanpage</h4>
                            <div className={cx('fanpage')}>
                                <div className={cx('content')}>
                                    <div className={cx('img')}>
                                        <img
                                            src="https://scontent.xx.fbcdn.net/v/t39.30808-6/301117697_2364119017084961_1385961634539326461_n.jpg?stp=dst-jpg_s350x350&_nc_cat=111&ccb=1-7&_nc_sid=dd9801&_nc_ohc=IttXg0nZCcgAX_T8QKf&_nc_ht=scontent.xx&edm=ALIZrNsEAAAA&oh=00_AT_SGuuVyF-u35qvF8VoazBfbNCvKx5tySSSqntVjyisfg&oe=630CEAD0"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('infor')}>
                                        <div className={cx('sadown')}></div>
                                        <a href="/">
                                            <img
                                                src="https://scontent.xx.fbcdn.net/v/t39.30808-1/270129693_2164662600363938_5067627820512583111_n.png?stp=cp0_dst-png_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=QATLdO5xcuUAX_Km1I-&_nc_ht=scontent.xx&edm=ALIZrNsEAAAA&oh=00_AT-5QwKhprtf0Sr2iINujMUijmzpmemzamap7jN6tx7Csw&oe=630CFB03"
                                                alt=""
                                            />
                                        </a>
                                        <div className={cx('link')}>
                                            <a href="/">360 Boutique</a>
                                            <span>523.376 lượt thích</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>
            <div className={cx('bottom-footer')}>
                <div className="container-fluid">
                    <p>Copyright © 2017 360boutique. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
