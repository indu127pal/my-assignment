import React, { useEffect } from 'react';
import styles from '@/styles/Card.module.css';


const Box = ({ title, total }) => {
    return (
        <>
            <main className={styles.container}>
                <header className={styles.title}>{title}</header>
                <section className={styles.total}>{total}</section>
            </main>
        </>
    )
}

export default Box;