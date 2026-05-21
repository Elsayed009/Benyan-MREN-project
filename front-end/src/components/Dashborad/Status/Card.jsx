import React from 'react';
import styles from './Card.module.css';

function Card({icon, title, counter}) {
  return (
    <div className='col-12 col-lg-3 col-md-6 mb-4'>
        <div className={styles.cardStatus}>
            <div className={styles.icon}>
                <i className={`fa-solid ${icon}`}></i>
            </div>
            <div className={styles.info}>
                <span className={styles.counter}>{counter}</span>
                <span className={styles.title}>{title}</span>
                
            </div>
        </div>
      
    </div>
  )
}

export default Card
