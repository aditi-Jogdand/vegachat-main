import { createSignal } from "solid-js";
import { For } from "solid-js/web";
import Profile from "../profile/myprofilesidebar";
import post1ex from "../posts/POST/ex1";

const allPosts = {
  "For You": [
    { id: 1, user: "VeganUser1", profileImage: "https://via.placeholder.com/40", content: "Loving my new vegan recipe! Check out this delicious tofu stir-fry I made.", likes: 10, comments: 5 , url:post1ex},
    { id: 2, user: "VeganUser2", profileImage: "https://via.placeholder.com/40", content: "Just had the best vegan burger. Who says vegans can't enjoy burgers? 😋", likes: 15, comments: 3 },
    { id: 9, user: "VeganUser2", profileImage: "https://via.placeholder.com/40", content: "Just had the best vegan burger. Who says vegans can't enjoy burgers? 😋", likes: 15, comments: 3 },
    { id: 10, user: "VeganUser2", profileImage: "https://via.placeholder.com/40", content: "Just had the best vegan burger. Who says vegans can't enjoy burgers? 😋", likes: 15, comments: 3 }
  ],
  Trending: [
    { id: 3, user: "VeganUser3", profileImage: "https://via.placeholder.com/40", content: "Why go vegan? Here's why... 🌱", likes: 20, comments: 10 },
    { id: 4, user: "VeganUser4", profileImage: "https://via.placeholder.com/40", content: "My vegan transformation story. From meat lover to plant-based enthusiast!", likes: 25, comments: 7 },
  ],
  Recent: [
    { id: 5, user: "VeganUser5", profileImage: "https://via.placeholder.com/40", content: "New vegan product review. Tried and tested the latest vegan ice cream. Verdict: Yum! 🍦", likes: 5, comments: 1 },
    { id: 6, user: "VeganUser6", profileImage: "https://via.placeholder.com/40", content: "Quick and easy vegan meals. Here's a 10-minute recipe for avocado toast.", likes: 12, comments: 4 },
  ],
  "Featured Recipe 🌱": [
    { id: 7, user: "veganuser7", profileImage: "https://via.placeholder.com/40", content: "Let's bake something tasty today!", likes: 10, comments: 70 },
    { id: 8, user: "veganuser8", profileImage: "https://via.placeholder.com/40", content: "Let's bake something tasty & delicious today!", likes: 300, comments: 60 }
  ]
};
const sections = ["For You", "Trending", "Recent", "Featured Recipe 🌱"];

function home() {
  const [selectedSection, setSelectedSection] = createSignal("For You");
  const [posts, setPosts] = createSignal(allPosts["For You"]);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setPosts(allPosts[section]);
  };

  const handlePostClick = (url) => {
    window.location.href = url;
  };


  return (
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-purple-300 to-blue-300 text-gray-900">
      <div class="flex-grow p-6 lg:flex">
        <div class="lg:w-2/3 lg:mr-8">
          <div class="mb-8  ">
            <input
              type="text"
              placeholder="Search posts..."
              class="w-full p-3 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none"
            />
            {/* <button type="submit" class=" bg-pink-500   text-white hover:bg-pink-600 hover:text-white focus:outline-none mb-4 absolute right-12">submit</button> */}
          </div>
          <div class="mb-8 flex flex-wrap space-x-4 justify-center lg:justify-start">
            <For each={sections}>
              {(section) => (
                <button
                  class={`px-6 py-3 rounded-lg ${
                    selectedSection() === section ? "bg-pink-500 text-white" : "bg-white text-gray-800"
                  } hover:bg-pink-600 hover:text-white focus:outline-none mb-4 lg:mb-0`}
                  onClick={() => handleSectionChange(section)}
                >
                  {section}
                </button>
              )}
            </For>
          </div>
          <div class="space-y-6">
            <For each={posts()}>
              {(post) => (
                <div class="p-3 lg:p-10 bg-white rounded-lg shadow-md" >
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="w-8 h-8 rounded-full mr-2" src={post.profileImage} alt={post.user} />
                      <h3 class="text-lg font-semibold">{post.user}</h3>
                    </div>
                    <div class="flex space-x-4">
                      <button class="flex items-center text-gray-600 hover:text-pink-500 focus:outline-none">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span class="ml-1">{post.likes}</span>
                      </button>
                      <button class="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 2H6c-1.1 0-1.99 0.9-1.99 2L4 22l4-4h10c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2.99 0-2 0-2-0.9-2-2V4c0-1.1 0.9-2 2-2zM6 6h8v2H6V6zm0 4h8v2H6v-2zm8 4H6v-2zm-6 2h8v2h-8v-2zm0 4h8v2h-8v-2z"/>
                        </svg>
                        <span class="ml-1">{post.comments}</span>
                      </button>
                      <button class="flex items-center text-gray-600 hover:text-green-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M 18 2 C 16.35499 2 15 3.3549904 15 5 C 15 5.1909529 15.021791 5.3771224 15.056641 5.5585938 L 7.921875 9.7207031 C 7.3985399 9.2778539 6.7320771 9 6 9 C 4.3549904 9 3 10.35499 3 12 C 3 13.64501 4.3549904 15 6 15 C 6.7320771 15 7.3985399 14.722146 7.921875 14.279297 L 15.056641 18.439453 C 15.021555 18.621514 15 18.808386 15 19 C 15 20.64501 16.35499 22 18 22 C 19.64501 22 21 20.64501 21 19 C 21 17.35499 19.64501 16 18 16 C 17.26748 16 16.601593 16.279328 16.078125 16.722656 L 8.9433594 12.558594 C 8.9782095 12.377122 9 12.190953 9 12 C 9 11.809047 8.9782095 11.622878 8.9433594 11.441406 L 16.078125 7.2792969 C 16.60146 7.7221461 17.267923 8 18 8 C 19.64501 8 21 6.6450096 21 5 C 21 3.3549904 19.64501 2 18 2 z M 18 4 C 18.564129 4 19 4.4358706 19 5 C 19 5.5641294 18.564129 6 18 6 C 17.435871 6 17 5.5641294 17 5 C 17 4.4358706 17.435871 4 18 4 z M 6 11 C 6.5641294 11 7 11.435871 7 12 C 7 12.564129 6.5641294 13 6 13 C 5.4358706 13 5 12.564129 5 12 C 5 11.435871 5.4358706 11 6 11 z M 18 18 C 18.564129 18 19 18.435871 19 19 C 19 19.564129 18.564129 20 18 20 C 17.435871 20 17 19.564129 17 19 C 17 18.435871 17.435871 18 18 18 z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p class="mt-4 text-gray-800">
                    {/* <a href="/posts/ex1"> */}
                      {post.content}
                      {/* </a> */}
                    </p>
                </div>
              )}
            </For>
          </div>
        </div>
        <Profile class='z-10'/>
      </div>
      <div class="p-20"></div>
    </div>
  );
};

export default home;
