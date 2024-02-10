import ReactionBlock from './ReactionBlock'
import { IPost } from '../interfaces/IPost'
import gobackIcon from '../assets/goback.svg'

interface IOpenPostProps {
    postData: IPost;
    toggleReact: (id: number, type: "like" | "dislike") => void;
    setOpenPost: React.Dispatch<React.SetStateAction<number | null>>
}
const OpenPost: React.FC<IOpenPostProps> = ({postData, toggleReact, setOpenPost}) => {
    return (
        <div className="openPost">
            <header>
                <button className="goBack" onClick={() => setOpenPost(null)}>
                    <img src={gobackIcon} alt="go back" />
                    <span>Вернуться к статьям</span>
                </button>
                <ReactionBlock reaction={postData.reaction} id={postData.id} toggleReact={toggleReact}/>
            </header>
            <h2>{postData.title}</h2>
            <div className='openPost_content'>
                <img src="https://placehold.co/600x400?text=Hello+World" />
                <p>{postData.body}</p>
            </div>
        </div>
    )
}

export default OpenPost