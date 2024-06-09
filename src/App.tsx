import { Post } from "./Components/Post"
import { Header } from "./Components/Header"
import { Sidebar } from "./Components/SideBar"

import styles from "./Components/App.module.css"
import "./global.css"



const posts = [
  {
    id: 1,
    author: {
      name: "Ivan Dias",
      avatarUrl: "https://github.com/ivan-dias-dev.png",
      role: "Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: '👉 ' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2024-06-01 22:38:00')
  },
  {
    id: 2,
    author: {
      name: "Mariana",
      avatarUrl: "https://media.istockphoto.com/id/1311084168/pt/foto/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=2048x2048&w=is&k=20&c=ZlVkWkAHbBJDBrqkHWIqoHmYRxc32KDvCsRsq5oDXPE=",
      role: "UI/UX Design"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'paragraph', content: '👉 ' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2024-05-30 10:38:00')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
                id={post.id}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App



