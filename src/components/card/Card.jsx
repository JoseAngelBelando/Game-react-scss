import styles from './card.module.css'

const Card = ({title, color}) =>{
   
    return (
    <div>
        <h2 className={`${styles[color]} ${styles.big}`}>{title}</h2>
    </div>
    );
};

export default Card;