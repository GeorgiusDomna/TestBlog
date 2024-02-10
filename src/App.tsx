import { FormEvent, useEffect, useState } from 'react'
import ReactionBlock from './components/ReactionBlock';
import OpenPost from './components/OpenPost';
import PostItem from './components/PostItem';
import { getListPostByTitle, getPostsList } from './api/documentService'
import { IPost } from './interfaces/IPost';
import inpIcon from './assets/Shape.svg';
import './App.css'

function App() {
  const [postList, setPostList] = useState<IPost[]>([]);
  const [inpValue, setInpValue] = useState('');
  const [openPost, setOpenPost] = useState<number | null>(null);

  const findOpenPost = (): IPost => {
    const post = postList.find(post => post.id === openPost);
    return post as IPost;
  }

  const toggleReact = (id: number, type: "like" | "dislike") => {
    setPostList(prevList => {
      return prevList.map(post => {
        if (id === post.id) {
          const reactions = post.reaction;
          const updateReaction = {
            ...reactions, [type]: {
              ...reactions[type], 
              status: !reactions[type].status,
              count: reactions[type].status ? reactions[type].count - 1 : reactions[type].count + 1
            }
          }
          return { ...post, reaction:  updateReaction}
        }
        return post
      })
    })
  };

  useEffect(() => {
    (async () => {
      const res = await getPostsList();
      res && setPostList(res);
    })();
  }, [])

  const handelSubmit = async(e: FormEvent) => {
    e.preventDefault();
    const res = await getListPostByTitle(inpValue);
    res && setPostList(res);
  }

  return (
    <div className='App'>
      {openPost
      ? <OpenPost postData={findOpenPost()} toggleReact={toggleReact} setOpenPost={setOpenPost}/>
      : (
        <>
          <header>
            <h1>Блог</h1>
            <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
          </header>
            <form onSubmit={handelSubmit} action="">
              <div className="input-group">
                <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type="text" placeholder='Поиск по названию статьи' />
                <div className="icon">
                  <img src={inpIcon} alt="icon" />
                </div>
              </div>
            </form>              
          
          {postList.length > 0 && <div className='postItem firstItem'>
            <img src="https://placehold.co/600x400?text=Hello+World" alt="" />
            <div className="postItem_info">
              <div className="headerPost">
                <h2>{postList[0].title}</h2>
                <ReactionBlock reaction={postList[0].reaction} id={postList[0].id} toggleReact={toggleReact} />
              </div>
              <p>{postList[0].body}</p>
              <div className="interactions">
                <button onClick={() => setOpenPost(postList[0].id)} className="readeMore">Читать далее</button>
              </div>
            </div>
          </div>}

          <div className="postList">
            {postList.slice(1).map((post) => {
              return <PostItem key={post.id} postData={post} toggleReact={toggleReact} setOpenPost={setOpenPost} />
            })}
          </div>
       </>
      )}
    </div>
  )
}

export default App
