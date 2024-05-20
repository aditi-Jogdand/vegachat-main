import { createSignal, onMount } from 'solid-js';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const PostEditor = () => {
  const [content, setContent] = createSignal('');
  const [posts, setPosts] = createSignal([]);
  const [darkMode, setDarkMode] = createSignal(false);
  const [selectedPost, setSelectedPost] = createSignal(null);

  let quillEditor;

  onMount(() => {
    quillEditor = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['code-block'],
        ],
      },
    });

    quillEditor.on('text-change', () => {
      setContent(quillEditor.root.innerHTML);
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts().length + 1,
      content: content(),
    };
    setPosts([...posts(), newPost]);
    setContent('');
    quillEditor.setText('');
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div class={`p-4 rounded-lg shadow-md transition-all duration-500 ${darkMode() ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-bold">Post Editor</h1>
        <div class="flex items-center">
          <label class="text-gray-600 mr-2">Dark Mode</label>
          <button
            type="button"
            class={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ${darkMode() ? 'bg-gray-600' : 'bg-gray-300'}`}
            onClick={() => setDarkMode(!darkMode())}
          >
            <span class={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${darkMode() ? 'translate-x-5' : ''}`}></span>
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div id="editor" class={`w-full h-60 border rounded-lg mb-4 ${darkMode() ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}></div>
        <div class="flex items-center justify-end">
          <button type="submit" class={`bg-blue-500 text-white font-medium px-4 py-2 rounded-lg ${darkMode() ? 'hover:bg-blue-600' : 'hover:bg-blue-400'}`}>Post</button>
        </div>
      </form>
      {selectedPost() ? (
        <div class="mt-6">
          <button onClick={handleBackToList} class="text-blue-500 mb-4">Back to Posts</button>
          <div class={`p-4 rounded-lg shadow-md transition-all duration-500 ${darkMode() ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
            <p class="break-words" innerHTML={selectedPost().content}></p>
          </div>
        </div>
      ) : (
        <div class="mt-6">
          <h2 class="text-lg font-bold mb-2">Posted Content</h2>
          {posts().map((post) => (
            <div key={post.id} class={`p-4 rounded-lg shadow-md mb-4 transition-all duration-500 cursor-pointer ${darkMode() ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`} onClick={() => handlePostClick(post)}>
              <p class="break-words" innerHTML={post.content}></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostEditor;
