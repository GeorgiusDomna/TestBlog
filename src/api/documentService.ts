import { IResponsePostData, IPost } from "../interfaces/IPost";
import { typeConversion } from "../utils/typeConversion";

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const getPostsList = async() => {
  try {
    const res = await fetch(`${baseUrl}posts`)
    const data: IResponsePostData[] = await res.json();
    
    /// adding reactions to the post data
    const dataWhithReactions: IPost[] = data.map((post): IPost => {
      return typeConversion(post);
    })
    
    return dataWhithReactions
  } catch (err) {
    console.error((err as Error).message)
  }
}

export const getListPostByTitle = async(name: string) => {
  try {
    const res = await fetch(`${baseUrl}posts?title=${name}`)
    const data: IResponsePostData[] = await res.json();
    
    /// adding reactions to the post data
    const dataWhithReactions: IPost[] = data.map((post): IPost => {
      return typeConversion(post);
    })
    
    return dataWhithReactions
  } catch (err) {
    console.error((err as Error).message)
  }
}