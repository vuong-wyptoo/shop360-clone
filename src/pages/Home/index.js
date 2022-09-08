// import classNames from 'classnames/bind';
// import style from './Home.module.scss';
import HeroSlide from '@/components/Heroslide';
import Uptop from '@/components/Uptop';
import Grid from '@/components/Grid';
import Section, { SectionBody, SectionTitle } from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import ProductNew from '@/components/ProductNew';
import News from '@/components/News';

//data
import getSliderData from '@/assets/fake-data/slider';
import productData from '@/assets/fake-data/products';
import getAllNews from '@/assets/fake-data/news';
// import { useParams } from 'react-router-dom';
// const cx = classNames.bind(style);
function Home() {
    const productList = productData.getProductByClassify('cu');
    const newProductList = productData.getProductByClassify('moi');
    return (
        <Uptop title="-Trang chủ">
            <HeroSlide data={getSliderData} />
            <Section>
                <SectionTitle>Sản phẩm bán chạy</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={30}>
                        {productList.map((item, index) => (
                            <ProductCard
                                key={index}
                                name={item.title}
                                img={item.image}
                                variant={item.variant}
                                priceOld={Number(item.priceOld)}
                                priceNew={Number(item.priceNew)}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>hàng mới về</SectionTitle>
                <SectionBody>
                    <ProductNew data={newProductList} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle> tin tức</SectionTitle>
                <SectionBody>
                    <Grid col={3} mdCol={2} smCol={1} gap={30}>
                        <News data={getAllNews()} />
                    </Grid>
                </SectionBody>
            </Section>
        </Uptop>
    );
}

export default Home;
