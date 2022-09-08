// import productData from '@/assets/fake-data/products';
import React, { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ProductView from '@/components/ProductView';
import Section, { SectionBody, SectionTitle } from '@/components/Section';
import Uptop from '@/components/Uptop';
import { useParams } from 'react-router-dom';

//data
import productData from '@/assets/fake-data/products';
import ProductNew from '@/components/ProductNew';

function Product() {
    const { slug } = useParams();
    const product = productData.getProductBySlug(slug);
    const productList = productData.getAllProducts().filter((e) => e.categorySlug === product.categorySlug);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);
    return (
        <Uptop title="-product">
            <Breadcrumb title={product.title} />
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Sản phẩm liên quan</SectionTitle>
                <SectionBody>
                    <ProductNew data={productList} />
                </SectionBody>
            </Section>
        </Uptop>
    );
}

export default Product;
