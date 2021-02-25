import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className={styles.currentExperience} style={{ left: '50%'}}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}

// No React, usamos className ao invés do class padrão do HTML, porque class é uma palavra reservada do JavaScript, porque definimos classes no JS com essa palavra, então só coloca um Name depois