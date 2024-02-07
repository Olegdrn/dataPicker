import { useState } from 'react';
import { Calendar } from '../calendar/Calendar';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {



  return (
    <>
    <div className={styles.container}>
    <button className={styles.button}></button>
    <button className={styles.button}></button>
    </div>
    <Calendar/>
    </>
  )

}