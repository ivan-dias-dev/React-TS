import styles from "./Avatar.module.css"

interface AvatarProps {
    hasBorder?: boolean,
    src: string,
    alt?: string
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {

    //const hasBorder = props.hasBorder !== false é possivel fazer assim
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={alt}
        />
    )
}