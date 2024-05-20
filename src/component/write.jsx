import { createSignal, JSX } from "solid-js";

function PostEditor() {
  const [postContent, setPostContent] = createSignal("");

  return (
    <div>
      <textarea value={postContent()} onChange={(event) => setPostContent(event.target.value)} />
      <button onClick={() => console.log(postContent())}>Submit Post</button>
    </div>
  );
}

// export default PostEditor;