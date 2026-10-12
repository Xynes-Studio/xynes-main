import { Artwork } from '@/components/shared/artwork';
import styles from './home.module.css';

export function Adaptability() {
  return (
    <section
      id="adaptability"
      className={`${styles.section} ${styles.adaptability}`}
      aria-labelledby="adaptability-heading"
      data-section="adaptability"
    >
      <h2
        id="adaptability-heading"
        className={`${styles.heading} ${styles.adaptabilityHeading}`}
      >
        Your company will change
      </h2>
      <div className={`${styles.copy} ${styles.adaptabilityCopy}`}>
        <p>
          Someone will invent a <strong>new process.</strong>
          <br />
          Someone else will make a <strong>spreadsheet.</strong>
          <br />
          <strong>Eventually</strong> that spreadsheet will become{' '}
          <strong>“critical infrastructure.”</strong>
          <br />
          <strong>Xynes</strong> is built for this sort of{' '}
          <strong>nonsense.</strong>
        </p>
      </div>
      <Artwork
        src="/assets/Group10.svg"
        width={1080}
        height={755}
        className={styles.changeGrid}
      />
      <div className={styles.modularLabel}>
        <Artwork
          src="/assets/Vector1.svg"
          width={307.956}
          height={136.688}
          className={styles.modularLabelArt}
        />
        <span className="sr-only">Modular by design</span>
      </div>
    </section>
  );
}
