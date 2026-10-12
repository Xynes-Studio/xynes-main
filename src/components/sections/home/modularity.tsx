import { Artwork } from '@/components/shared/artwork';
import styles from './home.module.css';

export function Modularity() {
  return (
    <section
      id="modularity"
      className={`${styles.section} ${styles.modularity}`}
      aria-labelledby="modularity-heading"
      data-section="modularity"
    >
      <h2
        id="modularity-heading"
        className={`${styles.heading} ${styles.modularityHeading}`}
      >
        Add things when you need them
      </h2>
      <div className={`${styles.copy} ${styles.modularityCopy}`}>
        <p>
          Most software wants you to buy <strong>seventeen</strong> things on
          Tuesday because you might need one of them in 2029.
        </p>
        <p>
          We <strong>don&apos;t.</strong>
          <br />
          Start with <strong>one</strong> module.
          <br />
          Add another when there&apos;s <strong>an actual reason.</strong>
        </p>
      </div>
      <Artwork
        src="/assets/modules.svg"
        width={705}
        height={702}
        className={styles.modulesArt}
      />
    </section>
  );
}
