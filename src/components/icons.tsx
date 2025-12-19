type IconProps = { className?: string; size?: number }

export function IconSearch({ className, size = 20 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
    )
}

export function IconDownload({ className, size = 20 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v10" />
            <path d="M5 10l7 7 7-7" />
            <path d="M5 21h14" />
        </svg>
    )
}

export function IconImage({ className, size = 20 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M8 13l3-3 4 4" />
            <circle cx="8" cy="9" r="1.5" />
        </svg>
    )
}

export function IconChevronDown({ className, size = 18 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}

export function IconSparkles({ className, size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
            <path d="M18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
        </svg>
    )
}

export function IconCheck({ className, size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4 10-10" />
        </svg>
    )
}

export function IconX({ className, size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    )
}

export function IconDots({ className, size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
            <circle cx="6" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
        </svg>
    )
}

export function IconClock({ className, size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l4 2" />
        </svg>
    )
}

export function IconPhotos({ className, size = 16 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="5" width="12" height="12" rx="2" />
            <rect x="8" y="8" width="12" height="12" rx="2" />
        </svg>
    )
}

export function IconExternalLink({ className, size = 14 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M21 3l-7 7" />
            <path d="M5 12v7h7" />
            <path d="M12 19L19 12" />
        </svg>
    )
}

export function IconLandscape({ className, size = 18 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width={size} height={(size * 2) / 3} className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="2" width="20" height="12" rx="2" />
            <path d="M6 10l3-3 4 4" />
        </svg>
    )
}

export function IconPortrait({ className, size = 18 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" width={(size * 2) / 3} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="2" width="12" height="20" rx="2" />
            <path d="M5 14l2-2 3 3" />
        </svg>
    )
}

export function IconSquare({ className, size = 18 }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="2" width="14" height="14" rx="2" />
            <path d="M6 10l2-2 3 3" />
        </svg>
    )
}

