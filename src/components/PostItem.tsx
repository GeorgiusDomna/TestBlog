import { getPostsItem } from "../api/documentService"
import { IPost } from "../interfaces/IPost"
import ReactionBlock from "./ReactionBlock"

interface IPostItemProps {
  postData: IPost
  toggleReact: (id: number, type: "like" | "dislike") => void
}
const PostItem: React.FC<IPostItemProps> = ({postData, toggleReact}) => {

  const readMoreHandler = async(id: number) => {
    const res = await getPostsItem(id);
    res && console.log(res);
  }

  return (
    <div className='postItem'>
      <img src="https://placehold.co/600x400?text=Hello+World" alt="" />
      <div className="postItem_info">
        <h2>{postData.title}</h2>
        <div className="interactions">
          <ReactionBlock reaction={postData.reaction} id={postData.id} toggleReact={toggleReact} />
          <button onClick={() => readMoreHandler(postData.id)} className="readeMore">Читать далее</button>
        </div>
      </div>
    </div>
  )
}

export default PostItem
