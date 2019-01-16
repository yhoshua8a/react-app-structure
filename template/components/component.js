import React from 'react';
import styles from './<%= name%>.css';
import CssModules from 'react-css-modules';

const <%= name%> = (props) => (
    <h1>component <%= name%></h1>

);

export default CssModules(<%= name%>, styles);