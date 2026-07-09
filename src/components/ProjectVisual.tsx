interface ProjectVisualProps {
  title: string;
  featured?: boolean;
  screenshots?: {
    src: string;
    alt: string;
  }[];
}

export function ProjectVisual({
  title,
  featured = false,
  screenshots,
}: ProjectVisualProps) {
  if (screenshots?.length) {
    return (
      <div
        className="grid gap-3 rounded-lg border border-line bg-gray-50 p-3"
        aria-label={`${title} project screenshots`}
      >
        <img
          src={screenshots[0].src}
          alt={screenshots[0].alt}
          className="aspect-[16/9] w-full rounded-md border border-line bg-white object-cover object-top"
          loading="lazy"
        />
        {screenshots[1] && (
          <img
            src={screenshots[1].src}
            alt={screenshots[1].alt}
            className="aspect-[16/7] w-full rounded-md border border-line bg-white object-cover object-top"
            loading="lazy"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg border border-line bg-gray-50 p-4 ${
        featured ? 'min-h-[320px]' : 'min-h-[210px]'
      }`}
      aria-label={`${title} project image placeholder`}
    >
      <div className="h-full rounded-md border border-line bg-white p-4">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gray-300" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
        <div className="grid gap-3">
          <div className="h-4 w-1/3 rounded bg-gray-200" />
          <div className="h-10 rounded border border-line bg-gray-50" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 rounded border border-line bg-gray-50" />
            <div className="h-20 rounded border border-line bg-gray-50" />
            <div className="h-20 rounded border border-line bg-gray-50" />
          </div>
          <div className="h-24 rounded border border-line bg-gray-50" />
        </div>
      </div>
    </div>
  );
}
