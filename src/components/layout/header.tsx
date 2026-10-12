import { Brand } from '@lumia-ui/components';
import styles from '../sections/home/home.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#home" aria-label="Xynes home" className={styles.brandLink}>
        <Brand
          variant="wordmark"
          size="lg"
          aria-hidden
          className={styles.brand}
        />
      </a>
    </header>
  );
}
