export default function Nuqta({
    color = "default",
    size = "default"
}: {
    color?: "default" | "dark" | "accent"
    size?: "default" | "medium" | "large"
}) {
    const colors = {
        default: '#f1efe8',
        dark: '#030311',
        accent: '#691315',
    }

    const sizes = {
        default: 8,
        medium: 12, 
        large: 16,
    }
    return (
        <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 10 10">
            <rect
                x="1"
                y="1"
                width="8"
                height="8"
                fill={colors[color]}
                transform="rotate(45 5 5)"
            />
        </svg>
    )
}