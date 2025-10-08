'use client';
import { useRef } from 'react';

import classes from './image-picker.module.css';

function ImagePicker({ label, name }) {
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input
            className={classes.input}
            type='file'
            id='image'
            accept='image/png, image/jpeg'
            name={name}
            ref={imageInput}
          />
          <button
            onClick={handlePickClick}
            className={classes.button}
            type='button'
          >
            Pick an image
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePicker;
