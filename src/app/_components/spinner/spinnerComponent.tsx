import styles from './spinnerComponent.module.css';

export default function SpinnerComponent() {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles.spinner}></div>
    </div>
  );
}
