import { buildSrc, Image as ImageKit } from '@imagekit/next';
import { useState } from 'react';

export type ImageProps = {
  path: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export const Image = ({ path, alt, width = 100, height = 100, className }: ImageProps) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <ImageKit
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT}
      src={path}
      alt={alt}
      loading="lazy"
      width={width}
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${buildSrc({
                urlEndpoint: process.env.NEXT_PUBLIC_IMAGE_KIT_URL_ENDPOINT || '',
                src: path,
                transformation: [
                  {
                    quality: 10,
                    blur: 90,
                  },
                ],
              })})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
      onLoad={() => {
        setShowPlaceholder(false);
      }}
      height={height}
      className={className}
    />
  );
};
