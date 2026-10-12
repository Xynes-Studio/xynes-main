import { Flex } from '@lumia-ui/components';
import { Action } from '@/components/shared/action';
import { Artwork } from '@/components/shared/artwork';
import styles from './home.module.css';

export function Cms() {
  return (
    <section
      id="cms"
      className={`${styles.section} ${styles.cms}`}
      aria-labelledby="cms-heading"
      data-section="cms"
      data-tone="light"
    >
      <h2 id="cms-heading" className={`${styles.heading} ${styles.cmsHeading}`}>
        Start with the bit that actually exists
      </h2>
      <span className={styles.blueSquare} aria-hidden="true" />
      <div className={styles.cmsContent}>
        <Flex align="center" className={styles.cmsTitle}>
          <Artwork
            src="/assets/Vector3.svg"
            width={38}
            height={38}
            className={styles.cmsIcon}
          />
          <h3>Xynes CMS</h3>
        </Flex>
        <div className={`${styles.copy} ${styles.cmsCopy}`}>
          <p>
            Flexible content and data for websites, apps and internal tools.
          </p>
          <p>
            API-first. Self-hostable. Extensible.
            <br />
            No revolutionary synergy platform.
          </p>
          <p>
            Just a <strong>good CMS.</strong>
          </p>
        </div>
        <Action destination="cms">Try Xynes CMS</Action>
      </div>
      <Artwork
        src="/assets/cms-art.png"
        sizes="(max-width: 767px) 110vw, 55vw"
        width={936}
        height={936}
        className={styles.cmsBot}
      />
      <div className={styles.cmsCallout}>
        <Artwork
          src="/assets/Rectangle15.svg"
          width={287.5}
          height={82}
          className={styles.calloutBackdrop}
        />
        <p>It’s actually free.</p>
      </div>
    </section>
  );
}
