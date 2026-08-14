import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { PhotoCollection } from "@/data/events";

/**
 * Editorial photo mosaic for community/event highlights. Collections with a
 * real photo get featured, larger treatment; collections still awaiting
 * photos are shown smaller and visually quieter below — the size
 * difference reflects real content vs. placeholder, not decoration.
 */
export function PhotoGrid({ collections }: { collections: PhotoCollection[] }) {
  const withPhotos = collections.filter((c) => c.images[0]);
  const withoutPhotos = collections.filter((c) => !c.images[0]);

  return (
    <div className="flex flex-col gap-10">
      {withPhotos.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-3">
          {withPhotos.map((collection, i) => {
            const image = collection.images[0];
            const isLead = i === 0;
            return (
              <article
                key={collection.id}
                className={isLead ? "md:col-span-2" : "md:col-span-1"}
              >
                <div
                  className={`group relative overflow-hidden bg-surface-soft ${
                    isLead ? "aspect-[16/11]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={`/images/${collection.folder}/${image.file}`}
                    alt={image.alt}
                    fill
                    sizes={isLead ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 30vw, 100vw"}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-dark/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span aria-hidden="true" className="absolute left-0 top-0 h-8 w-1.5 bg-gold" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-maroon">
                  {collection.title}
                </h3>
                <p className="mt-1.5 max-w-[45ch] text-base leading-relaxed text-ink/70">
                  {collection.description}
                </p>
              </article>
            );
          })}
        </div>
      ) : null}

      {withoutPhotos.length > 0 ? (
        <div className="grid gap-5 border-t border-maroon/10 pt-8 sm:grid-cols-3">
          {withoutPhotos.map((collection) => (
            <article key={collection.id} className="flex gap-4">
              <div className="relative aspect-square w-16 flex-shrink-0 overflow-hidden bg-surface-soft">
                <ImagePlaceholder />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-maroon">
                  {collection.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/60">
                  {collection.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
