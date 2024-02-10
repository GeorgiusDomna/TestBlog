import { IPost } from "../interfaces/IPost"
import ReactionBlock from "./ReactionBlock"

interface IPostItemProps {
  postData: IPost;
  toggleReact: (id: number, type: "like" | "dislike") => void;
  setOpenPost: React.Dispatch<React.SetStateAction<number | null>>
}
const PostItem: React.FC<IPostItemProps> = ({postData, toggleReact, setOpenPost}) => {

  return (
    <div className='postItem'>
      <img src="https://placehold.co/600x400?text=Hello+World" alt="" />
      <div className="postItem_info">
        <h2>{postData.title}</h2>
        <div className="interactions">
          <ReactionBlock reaction={postData.reaction} id={postData.id} toggleReact={toggleReact} />
          <button onClick={() => setOpenPost(postData.id)} className="readeMore">Читать далее</button>
        </div>
      </div>
    </div>
  )
}

export default PostItem
