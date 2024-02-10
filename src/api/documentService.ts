import { IResponsePostData, IPost } from "../interfaces/IPost";
import { typeConversion } from "../utils/typeConversion";

export const getPostsList = async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: IResponsePostData[] = await res.json();
    
    /// adding reactions to the post data
    const dataWhithReactions: IPost[] = data.map((post): IPost => {
      return typeConversion(post);
    })
    
    return dataWhithReactions
  } catch (err) {
    console.log(err.message)
  }
}

export const getPostsItem = async(id: number) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json();
  } catch (err) {
    console.log(err.message)
  }
}