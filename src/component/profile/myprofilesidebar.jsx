import { createSignal } from 'solid-js';
import Profilepic from '../img/profile.png';
import Profilebg from '../img/bg.jpg';
// import  '../../../site';
function Profile() {
    return (
      <>
    <div class="hidden fixed z-10 right-1 lg:block lg:w-1/3 p-6 pb-32 bg-transparent rounded top-0">
        <div class="relative">
        <div class="profile bg-gray-500  rounded rounded-t-lg pb-5">
          <div class="relative mb-8 flex items-center justify-end pr-5">
            <div class="absolute inset-0 bg-cover bg-center rounded-t-lg overflow-visible" style={`background-image: url(${Profilebg})`}></div>
            <img 
            src={Profilepic}
             alt="Featured Recipe" 
             class="relative z-10 w-40 h-40 rounded-full border-4 border-gray-200 " />
          </div>
          <h1 class="text-center text-white text-xl font-bold mb-2">Me</h1>
          <p class="text-gray-300 text-center">my bio , it tells few things about me that i wanna tell!</p>
        </div>
      </div>
      
                <div class="mt-6  ">
                  <ul class="list-none space-y-4">
                    <li>
                      <a href="#" class="block bg-gray-800 py-3 px-4 rounded-md text-white text-center hover:bg-gray-700 transition duration-300">Saved Posts</a>
                    </li>
                    <li>
                      <a href="#" class="block bg-gray-800 py-3 px-4 rounded-md text-white text-center hover:bg-gray-700 transition duration-300">Liked Posts</a>
                    </li>
                    <li>
                      <a href="#" class="block bg-gray-800 py-3 px-4 rounded-md text-white text-center hover:bg-gray-700 transition duration-300">Drafts</a>
                    </li>
                    <li>
                      <a href="#" class="block bg-gray-800 py-3 px-4 rounded-md text-white text-center hover:bg-gray-700 transition duration-300">Contact Team</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="fixed bottom-20 right-8">
                <button class="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-    4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"/>
        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"/>
      </svg>
                </button>
              </div>
      </>
    );
  }
  
  export default Profile;
  