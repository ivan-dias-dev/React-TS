import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([""]); // Lista de comentários

    const [newCommentText, setNewCommentText] = useState(''); // Estado para o novo comentário

    function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Para não dar reload

        setComments([...comments, newCommentText]); // Adiciona o comentário à lista de comentários
        setNewCommentText(''); // Reseta o setNewCommentText para o valor inicial
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value); // Seta o setNewCommentText para o valor do textarea
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true, // Faz com que adicione os "há cerca de" ou "há"
    });

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Escreva um comentário..."
                    name="comment"
                    value={newCommentText} // Seta o valor
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar!
                    </button>
                </footer>
            </form>
            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return (
                        <Comment content={comment} key={comment} onDeleteComment={deleteComment} />
                    );
                })}
            </div>
        </article>
    );
}
