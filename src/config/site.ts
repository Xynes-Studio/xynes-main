export type DestinationId =
  'explore' | 'code' | 'cms' | 'contact' | 'hosted' | 'roadmap';
export type Destination =
  { href: string; pending?: never } | { href?: never; pending: string };

export const destinations: Record<DestinationId, Destination> = {
  explore: { href: '#cms' },
  code: { href: 'https://github.com/Xynes-Studio' },
  cms: { pending: 'The Xynes CMS destination is being prepared.' },
  contact: { pending: 'The contact destination is being prepared.' },
  hosted: { pending: 'The hosted services destination is being prepared.' },
  roadmap: { href: 'https://github.com/Xynes-Studio' },
};

export function getSiteOrigin(value?: string): URL | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return undefined;
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export const site = {
  title: 'Xynes — Your business is weird. Good.',
  description:
    'Open-source, modular business software that grows with you. Start with Xynes CMS. Add things when you need them.',
};
