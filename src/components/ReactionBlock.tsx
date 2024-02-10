import { Reactions } from "../interfaces/IPost"

interface ReactionBlockProps {
  reaction: Reactions;
  id: number;
  toggleReact: (id: number, type: "like" | "dislike") => void;
}

const ReactionBlock: React.FC<ReactionBlockProps> = ({reaction, id, toggleReact}) => {

  return (
    <div className="interactions_reaction">
      <button
        onClick={() => toggleReact(id, "like")}
        className={["reaction", "like", reaction.like.status && "like-active"].join(' ')}></button>
      <span>{reaction.like.count}</span>
      <button
        onClick={() => toggleReact(id, "dislike")}
        className={["reaction", "dislike", reaction.dislike.status && "dislike-active"].join(' ')}></button>
      <span>{reaction.dislike.count}</span>
    </div>
  )
}

export default ReactionBlock
