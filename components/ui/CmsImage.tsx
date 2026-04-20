import Image from "next/image";

type CmsImageProps = {
  src: string;
  alt: string;
  className: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function CmsImage({
  src,
  alt,
  className,
  width = 1200,
  height = 900,
  priority = false,
}: CmsImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}

