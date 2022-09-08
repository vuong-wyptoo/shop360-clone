import React from 'react';
import PropTypes from 'prop-types';

const Uptop = (props) => {
    document.title = 'Shop 360' + props.title;
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>{props.children}</div>;
};

Uptop.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Uptop;
