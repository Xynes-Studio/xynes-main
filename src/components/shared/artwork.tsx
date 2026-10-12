import Image from 'next/image';

type ArtworkProps = {
  src: string;
  width: number;
  height: number;
  className: string;
  sizes?: string;
};

/** The wrapper owns placement; intrinsic asset proportions stay intact. */
export function Artwork({
  src,
  width,
  height,
  className,
  sizes = '100vw',
}: ArtworkProps) {
  return (
    <div className={className} aria-hidden="true" data-artwork={src}>
      <Image
        src={src}
        width={width}
        height={height}
        alt=""
        unoptimized={src.endsWith('.svg')}
        sizes={sizes}
        quality={100}
        loading="lazy"
      />
    </div>
  );
}
