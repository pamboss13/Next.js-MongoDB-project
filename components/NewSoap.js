import { useRef } from 'react';

import Card from './ui/Card';
import classes from './NewSoap.module.css';

function NewSoap(props) {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const soapData = {
      title: enteredTitle,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddSoap(soapData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Soap Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        
        <div className={classes.control}>
          <label htmlFor='price'>Price</label>
          <input type='text' required id='price' ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Soap</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSoap;
