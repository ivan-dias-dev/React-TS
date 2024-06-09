import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/ivan-dias-dev.png" />
                <strong>Ivan Dias</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} /> Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}