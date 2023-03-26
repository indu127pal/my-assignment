import React, { useEffect } from 'react';
import styles from '@/styles/Card.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from '../../../utils';
import { RootState } from '../../../store/types';
import Box from './box';

const Card = () => {
    const dispatch = useDispatch();
    const { loading, error, contracts, services } = useSelector(
        (state: RootState) => state.sampleData,
      );
    console.log(loading, contracts, services)
    const { active = '', inactive = '', draft = '', approved = '' } = calculateTotal(contracts, services);
    return (
        <>
            <main className={styles.card}>
                <Box title="Total Contracts" total={contracts.length}/>
                <Box title={"Total Sevices"} total={services.length}/>
                <Box title={"Total Active Service"} total={active}/>
                <Box title={"Total Inactive Service"} total={inactive}/>
                <Box title={"Total Draft Service"} total={draft}/>
                <Box title={"Total Approved Service"} total={approved}/>
            </main>
        </>
    )
}

export default Card;