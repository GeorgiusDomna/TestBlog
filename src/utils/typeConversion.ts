import { IPost, IResponsePostData, Reactions } from "../interfaces/IPost"
import { getRandomNum } from "./getRundomNum"

/**
 * Converts a single response post data object into a post with reactions.
 * @param {IResponsePostData} post - The response post data object.
 * @returns {IPost} A post object with reactions.
 */
export const typeConversion = (post: IResponsePostData): IPost => {
    const reaction: Reactions = {
      like: {
        count: getRandomNum(),
        status: false,
      },
      dislike: {
        count: getRandomNum(),
        status: false,
      }
    }
    return { ...post, reaction }
}