import { Action } from '@/components/shared/action';
import { Artwork } from '@/components/shared/artwork';
import styles from './home.module.css';

export function OpenSource() {
  return (
    <section
      id="open-source"
      className={`${styles.section} ${styles.openSource}`}
      aria-labelledby="open-source-heading"
      data-section="open-source"
      data-tone="light"
    >
      <Artwork
        src="/assets/open-source-art.png"
        sizes="(max-width: 767px) 145vw, 106svh"
        width={1184}
        height={1117}
        className={styles.openSourceArt}
      />
      <div className={styles.openSourceContent}>
        <h2 id="open-source-heading" className={styles.heading}>
          Open source
        </h2>
        <div className={`${styles.copy} ${styles.openSourceCopy}`}>
          <p>
            Because <strong>“trust me bro”</strong> is not a security model.
            <br />
            See the <strong>code.</strong>
            <br />
            <strong>Host</strong> it yourself.
            <br />
            Own your <strong>data.</strong>
            <br />
            <strong>Change</strong> what annoys you.
          </p>
        </div>
        <Action destination="code">See our code</Action>
      </div>
      <div className={styles.hostedCallout}>
        <Artwork
          src="/assets/Rectangle14.svg"
          width={395.5}
          height={82}
          className={styles.calloutBackdrop}
        />
        <div className={styles.hostedAction}>
          <Action destination="hosted">Or use our hosted services</Action>
        </div>
      </div>
    </section>
  );
}
