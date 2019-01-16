import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';
import CssModules from 'react-css-modules';

const Card = (props) => (
    <div styleName="card">
    <h2>{props.name}</h2>
    <p>blabla</p>
</div>
);

Card.propTypes = {
   name: PropTypes.string
};


export default CssModules(Card, styles);

