import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/screenshots/*.webp', { eager: true });

/** Every screenshot by file name, like `collection` or `console-home`. */
export const shots: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace('.webp', ''), mod.default]),
);

export const shot = (name: string) => {
  const image = shots[name];
  if (!image) throw new Error(`No screenshot named ${name}`);
  return image;
};
