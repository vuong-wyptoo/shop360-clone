const new_01_image_01 = require('../Images/news/new1.jfif');
const new_02_image_01 = require('../Images/news/new2.jfif');
const new_03_image_01 = require('../Images/news/new3.png');

const news = [
    {
        title: 'TUẦN LỄ MUA SẮM – ƯU ĐÃI LÊN ĐẾN 60% HÀNG NGHÌN SẢN PHẨM MÙA HÈ',
        img: new_01_image_01,
        time: '04/08/2022',
        des: 'Cơ hội để sở hữu những sản phẩm chất lượng của 360® với mức giá tốt nhất. –> ÁO...',
        path: '/sales',
    },
    {
        title: 'TUYỂN DỤNG GẤP NHÂN VIÊN SALE ONLINE',
        img: new_02_image_01,
        time: '24/07/2022',
        des: 'TUYỂN DỤNG GẤP NHÂN VIÊN SALE ONLINE- ĐI LÀM NGAY!!! Team nhà 360 Boutique chúng mình cần tìm đồng đội...',
        path: '/tuyen-dung',
    },
    {
        title: 'TUYỂN DỤNG CONTENT MARKETING',
        img: new_03_image_01,
        time: '04/10/2022',
        des: 'Không chỉ là truyền thông về các thông tin về sản phẩm, chương trình khuyến mãi hấp dẫn tại...',
        path: '/tuyen-dung',
    },
];

const getAllNews = () => news;
export default getAllNews;
