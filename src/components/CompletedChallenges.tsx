import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChanges() {
    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}