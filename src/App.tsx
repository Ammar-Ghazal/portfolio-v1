import styles from './App.module.scss';
import { Home } from './components/home/home';

function App() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.stars}>
        <div className={styles.twinkling}></div>
      </div>

      <div className={styles.App}>
        <Home />
      </div>
    </div>
  );
}

export default App;
