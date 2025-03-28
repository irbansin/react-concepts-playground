import styles from './Board.module.css';
import Square from './Square/Square';

function Board({ boardState }) {
  console.log(boardState);
  function handleClick() {
    console.log('click');
  }
  return (
    <div className={styles.container}>
      {boardState.map((item) => {
        return item.map((subItem) => {
          console.log('hello1', subItem);
          return (<Square sign={subItem} clickHandler={handleClick} />);
        });
      })}
    </div>
  );
}
export default Board;
