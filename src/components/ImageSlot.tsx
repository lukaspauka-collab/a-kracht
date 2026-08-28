/**
 * ImageSlot — a faithful, read-only port of the `<image-slot>` web component
 * that the original A-Kracht design imports from `image-slot.js`.
 *
 * In the Claude Design runtime the slot is user-fillable (drag/drop an image,
 * persisted to a sidecar). Outside that runtime the slot is read-only and just
 * renders its empty state: a subtle placeholder tile with a dashed ring, an
 * image icon and a caption. This component reproduces that empty state exactly
 * (colors #f2f1ef / #6e6c66, 1.5px dashed ring at 0.35 opacity, 28px icon).
 *
 * It fills its positioned wrapper (the design always places it inside a sized,
 * `overflow:hidden`, rounded frame), so the ring inherits the frame's radius.
 */
type ImageSlotProps = {
  /** Empty-state caption shown under the icon. */
  placeholder?: string;
  /** When set, renders a real image filling the frame instead of the empty state. */
  src?: string;
  /** Accessible name; falls back to the placeholder caption. */
  alt?: string;
  /** Load eagerly with high fetch priority. Use for the LCP (hero) image only. */
  priority?: boolean;
};

export default function ImageSlot({
  placeholder = "Drop an image",
  src,
  alt,
  priority = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? placeholder}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    );
  }

  return (
    <div className="image-slot" role="img" aria-label={placeholder}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="image-slot__cap">{placeholder}</span>
      <span className="image-slot__ring" aria-hidden="true" />
    </div>
  );
}
