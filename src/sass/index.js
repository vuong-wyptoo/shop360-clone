// import './variables.scss';
// import './mixins.scss';
import './base.scss';

import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
