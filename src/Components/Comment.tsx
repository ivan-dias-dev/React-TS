import { ThumbsUp, Trash, TrashSimple } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)



    function handleDeleteComment() {
        onDeleteComment(content)
    }
    function handleLikeComment() {
        setLikeCount((valorAnteriordeLikes) => {
            return valorAnteriordeLikes + 1
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/105668055?v=4" alt="Ivan Dias" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ivan Dias</strong>
                            <time dateTime="11 de Maio às 08:13">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}