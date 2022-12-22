import React from 'react';
import classes from './SoapDetail.module.css';

function SoapDetail(props) {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </section>
  )
};

export default SoapDetail
