import { createSignal, createEffect ,onCleanup} from 'solid-js';


const PostEditor = () => {
    // State for content and posts
    const [content, setContent] = createSignal('');
    const [posts, setPosts] = createSignal([]);
  
    // State for selected text
    const [selection, setSelection] = createSignal({ start: 0, end: 0 });
  
    // State for theme
    const [darkMode, setDarkMode] = createSignal(false);
  
    // Handle content change
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
        id: posts().length + 1,
        content: content(),
      };
      setPosts([...posts(), newPost]);
      // Reset content
      setContent('');
    };
  
    // Handle text formatting
    const handleTextFormat = (format) => {
      const currentContent = content();
      const start = selection().start;
      const end = selection().end;
  
      // Apply format to selected text
      const formattedContent =
        currentContent.slice(0, start) +
        format.startTag +
        currentContent.slice(start, end) +
        format.endTag +
        currentContent.slice(end);
  
      setContent(formattedContent);
  
      // Reset selection
      setSelection({ start: 0, end: 0 });
    };
  
    // Handle text selection
    const handleTextSelection = (e) => {
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      setSelection({ start, end });
    };
  
    // Clean up
    createEffect(() => {
      // Cleanup effect
      onCleanup(() => {
        // Clean up here if needed
      });
    });
  
    return (
      <div class={`bg-${darkMode() ? 'gray-800' : 'white'} text-${darkMode() ? 'white' : 'black'} p-4 rounded-lg shadow-md transition-all duration-500`}>
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold">Post Editor</h1>
          <div class="flex items-center">
            <label class="text-gray-600 mr-2">Dark Mode</label>
            <button
              type="button"
              class={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ${
                darkMode() ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              onClick={() => setDarkMode(!darkMode())}
            >
              <span
                class={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode() ? 'translate-x-5' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="flex mb-4">
            <div class="mr-4">
              <button
                type="button"
                class={`text-blue-500 font-medium ${darkMode() ? 'text-white' : ''}`}
                onClick={() => handleTextFormat({ startTag: '<b>', endTag: '</b>' })}
              >
                <b>B</b>
              </button>
            </div>
            <div class="mr-4">
              <button
                type="button"
                class={`text-blue-500 font-medium ${darkMode() ? 'text-white' : ''}`}
                onClick={() => handleTextFormat({ startTag: '<i>', endTag: '</i>' })}
              >
                <i>I</i>
              </button>
            </div>
            <div class="mr-4">
              <button
                type="button"
                class={`text-blue-500 font-medium ${darkMode() ? 'text-white' : ''}`}
                onClick={() => handleTextFormat({ startTag: '<span style="text-decoration: underline">', endTag: '</span>' })}
              >
                <u>U</u>
              </button>
            </div>
            <div class="mr-4">
              <button
                type="button"
                class={`text-blue-500 font-medium ${darkMode() ? 'text-white' : ''}`}
                onClick={() => handleTextFormat({ startTag: '<del>', endTag: '</del>' })}
              >
                <s>S</s>
              </button>
            </div>
            <div class="mr-4">
              <button
                type="button"
                class={`text-blue-500 font-medium ${darkMode() ? 'text-white' : ''}`}
                onClick={() => handleTextFormat({ startTag: '<code>', endTag: '</code>' })}
              >
                <code>Code</code>
              </button>
            </div>
          </div>
          <textarea
            class={`w-full border rounded-lg p-2 mb-4 ${darkMode() ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            rows="6"
            placeholder="What's on your mind?"
            value={content()}
            onInput={handleContentChange}
            onSelect={handleTextSelection}
          ></textarea>
          <div class="flex items-center justify-end">
            <button
              type="submit"
              class={`bg-blue-500 text-white font-medium px-4 py-2 rounded-lg ${darkMode() ? 'hover:bg-blue-600' : 'hover:bg-blue-400'}`}
            >
              Post
            </button>
          </div>
        </form>
        <div class="mt-6">
          <h2 class="text-lg font-bold mb-2">Posted Content</h2>
          {posts().map((post) => (
            <div class={`bg-${darkMode() ? 'gray-700' : 'gray-200'} p-4 rounded-lg shadow-md mb-4 transition-all duration-500`}>
              <p class={`text-${darkMode() ? 'white' : 'black'} break-words`} innerHTML={post.content}></p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PostEditor;