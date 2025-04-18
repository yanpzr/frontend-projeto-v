import React from 'react';
import {Card as PrimeCard} from 'primereact/card';
import {Button} from 'primereact/button';
import {useNavigate} from 'react-router'
import styles from './Card.module.css'

const Card = ({title, subTitle, content, route}) => {
    const navigate = useNavigate();

    const handleAccessClick = () => {
        if (route) {
            navigate(route)
        }
    }
    
    return (
        <div className={styles.cardContainer}>
            <PrimeCard className={styles.card} title={title} subTitle={subTitle}>
                <p>{content}</p>
                <div className={styles.buttonContainer}>
                    <Button label='Acessar' className={styles.cardButton} onClick={handleAccessClick}/>
                </div>
            </PrimeCard>
        </div>
    );
}

export default Card;