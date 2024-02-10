import { useEffect, useState } from 'react'
import { getPostsList } from './api/documentService'
import PostItem from './components/PostItem';
import { IPost } from './interfaces/IPost';
import './App.css'

function App() {
  const [postList, setPostList] = useState<IPost[]>([]);
  const [inpValue, setInpValue] = useState('');
  const toggleReact = (id: number, type: "like" | "dislike") => {
    setPostList(prevPost => {
      const updatedPostList = prevPost.map(post => {
        if (post.id === id) {
          const updatedReaction = { ...post.reaction };
          updatedReaction[type].status = !post.reaction[type].status;
          return { ...post, reaction: updatedReaction };
        }
        return post;
      });
  
      // Теперь вы можете использовать console.log() после обновления состояния
      console.log(updatedPostList.find(post => post.id === id)?.reaction[type].status);
  
      return updatedPostList;
    });
  };

  useEffect(() => {
    (async () => {
      const res = await getPostsList();
      res && setPostList(res);
    })();
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>Блог</h1>
        <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
      </header>
      <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type="text" name="" id="inpSearch" placeholder='Поиск по названию статьи' />
      
      <div className="postList">
        {postList.map((post) => {
          return <PostItem key={post.id} postData={post} toggleReact={toggleReact} />
        })}
      </div>
    </div>
  )
}

export default App
