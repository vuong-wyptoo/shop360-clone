import React from 'react';
import classNames from 'classnames/bind';
import style from './Section.module.scss';

const cx = classNames.bind(style);

const Section = (props) => {
    return (
        <div className={cx('section')}>
            <div className="container-fluid">{props.children}</div>
        </div>
    );
};

export const SectionTitle = (props) => {
    return <div className={cx('section-title')}>{props.children}</div>;
};

export const SectionBody = (props) => {
    return <div className={cx('section-body')}>{props.children}</div>;
};

export default Section;
