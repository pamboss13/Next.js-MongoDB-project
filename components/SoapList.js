import React from 'react';
import classes from './SoapList.module.css';
import Soap from './Soap';


function SoapList(props) {
  return (
    <ul className={classes.list}>
      {props.soaps.map((soap) => (
        <Soap
          key={soap.id}
          id={soap.id}
          title={soap.title}
          description={soap.description}
          price={soap.price}
        />
      ))}
    </ul>
  );
}

export default SoapList;
