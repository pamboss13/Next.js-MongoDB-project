import React from 'react';
import { useRouter } from 'next/router';
import classes from './Soap.module.css';
import Card from './ui/Card';



function Soap(props) {
  const router = useRouter();

  function showDetailsHandler(){
    router.push('/'+props.id);
  }

  return (
    <li>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description} </p> 
          <p>{props.price}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default Soap;
