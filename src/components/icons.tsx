/**
 * Hand authored inline SVGs. No icon library is used anywhere on this site.
 * All icons are decorative: the surrounding link or button carries the label.
 */

type IconProps = {
  className?: string;
};

export function LinkedInIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M6.94 5.01a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.2 8.48h3.6V21H3.2V8.48Zm5.86 0h3.45v1.71h.05c.48-.9 1.66-1.85 3.41-1.85 3.64 0 4.31 2.33 4.31 5.37V21h-3.6v-6.4c0-1.53-.03-3.5-2.16-3.5-2.16 0-2.49 1.66-2.49 3.38V21h-3.6V8.48Z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M8 16 16 8" />
      <path d="M9.5 8H16v6.5" />
    </svg>
  );
}

export function MenuIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "size-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function PauseIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="7" y="5" width="3.5" height="14" rx="1.25" />
      <rect x="13.5" y="5" width="3.5" height="14" rx="1.25" />
    </svg>
  );
}

export function PlayIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M8.4 5.2a1 1 0 0 1 1.53-.85l9 6.8a1 1 0 0 1 0 1.7l-9 6.8a1 1 0 0 1-1.53-.85V5.2Z" />
    </svg>
  );
}

/** Map pin, used for the location line in the about section. */
export function MapPinIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 21.4c4.2-4.3 6.3-7.7 6.3-10.3a6.3 6.3 0 1 0-12.6 0c0 2.6 2.1 6 6.3 10.3Z" />
      <circle cx="12" cy="11" r="2.4" />
    </svg>
  );
}

/** Heart held in an open hand, used for the "Non profit" tag. */
export function HeartIcon({ className = "size-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 11.6 8.9 8.6a2.4 2.4 0 0 1 3.1-3.6 2.4 2.4 0 0 1 3.1 3.6L12 11.6Z" />
      <path d="M3.5 14.2a2 2 0 0 1 2.8 0l1.8 1.8h3.3a1.6 1.6 0 0 1 0 3.2H9.6" />
      <path d="M10.2 19.2h3.4l5-3.1a1.7 1.7 0 0 1 2.1 2.6l-4.4 3.4H6.3l-2.8-2.8" />
    </svg>
  );
}
