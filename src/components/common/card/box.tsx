import React, { useEffect } from 'react';
import styles from '@/styles/Card.module.css';

interface box {
    title: string;
    total: number;
}

const Box = ({ title, total }: box) => {
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