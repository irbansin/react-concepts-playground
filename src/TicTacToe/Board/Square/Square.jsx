import styles from './Square.module.css';

function Square({ sign, clickHandler }) {
  return (
    <div className={styles.square} onClick={clickHandler}>
      {sign}
    </div>
  );
}

export default Square;
