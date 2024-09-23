# Exercise 04: Angular Components - Blog Post App
## Introduction
In this exercise, you will create a simple blog post management application. It will allow the user to view all the blog posts, and create new ones, or delete existing ones.

## Instructions

### Step 1: Define the `Post` Interface
- Create a `Post` interface with the following readonly properties: `id`, `title`, `content`, and `date`. 
- Define also a constant of type `Post[]` with some mock data to start with.

### Step 2: Create the `PostComponent`
Create a `PostComponent` that will display an individual post. The component should have a `post` input property, and it should display the `title`, `content`, and `date` of the post. In addition, the component should calculate and display the word count of the `content`.
#### Hints
- You can use the angular cli generator to create a new component:
```cmd
ng generate component components/post
```
or in short
```cmd
ng g c components/post
```
- The input should be a **required input signal**
- the word count should be a **computed signal**

### Step 3: Create the `PostListComponent`
Create a `PostListComponent` that will display a list of posts.

```cmd
ng g c components/post-list
```

 The component should have a `posts` required input property and a `deletePost` output event. The `PostListComponent` should use the `PostComponent` to display each post in the `posts` list. It should also have a button for each post that, when clicked, emits the `deletePost` event.

> Note that we do not want the list component to delete posts, only to emit requests to delete them

### Step 4: Create the `CreatePostComponent`
Create a `CreatePostComponent` that allows the user to create a new post. The component should have a `newPost` output event. It should include `<input>` fields for the `title` and `content` of the post, and it should have a button that, when clicked, creates a new `Post` object with the entered `title` and `content` and the current date, and emits this new post on the `newPost` event.

### Step 5: Implement the Parent Component
Implement a parent component that uses the `PostListComponent` and the `CreatePostComponent`. The parent component should contain an array of `Post` objects. It should pass this array as an input to the `PostListComponent`, and it should handle the `deletePost` event from the `PostListComponent` and the `newPost` event from the `CreatePostComponent` to update the array of `Post` objects.

#### Hints
- To remove an item from an array while maintaining immutability, use the array `filter` method to create an array that contains all the original items, except a new one. Alternatively you can use the `slice` method to create a copy of a specific sub array
  
  ```typescript
  // remove specific object 'removedObj'
  newArray = oldArray.filter(obj => obj !== removedObj);
  
  // remove from specific index 'removedIndex'
  newArray = oldArray.filter((_, index) => index !== removedIndex);
  ```
- To add an item from an array with immutability, use the spread operator:

    ```typescript
    // add newItem at the end
    newArray = [...oldArray, newItem];
    ```
