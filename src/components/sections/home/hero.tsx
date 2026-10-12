import { Flex } from '@lumia-ui/components';
import { Header } from '@/components/layout/header';
import { Action } from '@/components/shared/action';
import { Artwork } from '@/components/shared/artwork';
import styles from './home.module.css';

export function Hero() {
  return (
    <section
      id="home"
      className={`${styles.section} ${styles.hero}`}
      aria-labelledby="hero-heading"
      data-section="hero"
    >
      <Header />
      <div className={styles.heroContent}>
        <div className={styles.heroHeadline}>
          <h1 id="hero-heading" className={styles.heading}>
            Your business is weird
          </h1>
          <span className={styles.heroGlow} aria-hidden="true">
            Your business is weird
          </span>
        </div>
        <p className={`${styles.copy} ${styles.heroCopy}`}>
          Good.
          <br />
          Your software should be able to cope.
          <br />
          Xynes is open-source, modular business software that grows with you.
        </p>
        <Flex gap="lg" align="center" wrap="wrap" className={styles.actions}>
          <Action destination="explore" variant="primary">
            Explore
          </Action>
          <Action destination="code">See our code</Action>
        </Flex>
      </div>
      <Artwork
        src="/assets/Vector.svg"
        width={378}
        height={85}
        className={styles.heroDots}
      />
    </section>
  );
}
