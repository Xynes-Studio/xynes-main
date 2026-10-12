import { Flex } from '@lumia-ui/components';
import { Action } from '@/components/shared/action';
import { Artwork } from '@/components/shared/artwork';
import styles from './home.module.css';

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className={`${styles.section} ${styles.roadmap}`}
      aria-labelledby="roadmap-heading"
      data-section="roadmap"
    >
      <div className={styles.roadmapContent}>
        <h2 id="roadmap-heading" className={styles.heading}>
          We&apos;re building the rest
        </h2>
        <div className={styles.copy}>
          <p>
            Slowly enough to make it useful.
            <br />
            Xynes is becoming a connected set of tools for running a business.
            <br />
            CMS is ready.
            <br />
            More is coming.
            <br />
            We could put twelve greyed-out product cards here.
            <br />
            We won&apos;t.
          </p>
        </div>
        <Flex gap="lg" align="center" wrap="wrap" className={styles.actions}>
          <Action destination="contact" variant="primary">
            Reach Out
          </Action>
          <Action destination="roadmap">See what we&apos;re building</Action>
        </Flex>
      </div>
      <Artwork
        src="/assets/Vector.svg"
        width={378}
        height={85}
        className={styles.roadmapDots}
      />
      <Artwork
        src="/assets/Rectangle46.svg"
        width={1728}
        height={6}
        className={styles.gradientFinish}
      />
      <Artwork
        src="/assets/Rectangle47.svg"
        width={1752.4}
        height={30.4}
        className={styles.gradientGlow}
      />
    </section>
  );
}
