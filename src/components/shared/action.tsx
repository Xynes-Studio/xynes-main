'use client';

import { useState } from 'react';
import { Button, buttonStyles } from '@lumia-ui/components';
import { destinations, type DestinationId } from '@/config/site';
import styles from './action.module.css';

type ActionProps = {
  destination: DestinationId;
  children: React.ReactNode;
  variant?: 'primary' | 'link';
};

export function Action({
  destination,
  children,
  variant = 'link',
}: ActionProps) {
  const target = destinations[destination];
  const [showPending, setShowPending] = useState(false);
  const className = [
    styles.action,
    styles[variant],
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes.sm,
  ].join(' ');
  const content = (
    <>
      {children}
      {variant === 'link' ? (
        <span aria-hidden="true" className={styles.arrow} />
      ) : null}
    </>
  );

  if (target.href)
    return (
      <a className={className} href={target.href}>
        {content}
      </a>
    );

  return (
    <span className={styles.pendingWrapper}>
      <Button
        className={className}
        variant={variant}
        size="sm"
        aria-expanded={showPending}
        onClick={() => setShowPending((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setShowPending(false);
        }}
        title="Destination pending"
      >
        {content}
        <span className="sr-only"> (destination pending)</span>
      </Button>
      {showPending ? (
        <span className={styles.pendingMessage} role="status">
          {target.pending}
        </span>
      ) : null}
    </span>
  );
}
