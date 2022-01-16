import logo from './logo.svg';
import styles from './App.module.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>{t('hello')}</p>
        <button onClick={() => i18n.changeLanguage('tr')}>Toggle</button>
        <p>
          Edit <code>src/App.js</code> and save for to reload.
        </p>
        <p>asas</p>
        <a className={styles['App-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
