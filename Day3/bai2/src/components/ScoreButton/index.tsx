import styles from './ScoreButton.module.css'
import { Ellipsis } from 'lucide-react';

const ScoreButton = () => {
    return (
    <button className={styles.button}>
        <div className={styles.topRow}>
            <span style ={{color:'red'}}>7'</span>
            <Ellipsis size={16} />
            
        </div>
        <div className={styles.bottomRow}>
            <div className={styles.team}>Spain <img height={20} src="images/spain.png" alt="" /></div>
            <div className = {styles.boderScore}>
                0:0
            </div>
            <div className={styles.team}><img height={20} src="images\france.png" alt="" />France</div>
        </div>
    
    </button>
  );

};
  

export default ScoreButton