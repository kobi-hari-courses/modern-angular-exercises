import { resolveForwardRef } from "@angular/core";
import { Post } from "../models/post.model";

export function wordsCount(text: string): number {
  return text
    .trim()
    .split(' ')
    .filter(word => word.length > 0)
    .length;
}

export function addPost(posts: Post[], newPost: Post): Post[] {
  const res = [...posts, newPost];
  return res;
}

export function deletePost(posts: Post[], postId: number): Post[] {
  const res = posts.filter(post => post.id !== postId);
  return res;
}