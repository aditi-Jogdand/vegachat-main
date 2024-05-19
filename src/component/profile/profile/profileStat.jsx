import { createSignal } from "solid-js";
import { Show } from "solid-js/web";

const ProfileStats = () => {
  const [selectedSection, setSelectedSection] = createSignal("liked");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div class="bg-white py-8 px-6 lg:px-32">
      <div class="max-w-3xl mx-auto">
        <div class="flex justify-center mb-6">
          <button
            class={`px-4 py-2 rounded-lg mr-2 focus:outline-none ${
              selectedSection() === "liked"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleSectionChange("liked")}
          >
            Liked Posts
          </button>
          <button
            class={`px-4 py-2 rounded-lg mr-2 focus:outline-none ${
              selectedSection() === "reposts"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleSectionChange("reposts")}
          >
            Reposts
          </button>
          <button
            class={`px-4 py-2 rounded-lg focus:outline-none ${
              selectedSection() === "comments"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleSectionChange("comments")}
          >
            Comments
          </button>
        </div>
        
        <Show when={selectedSection() === "liked"}>
          <div>
            <div class="p-4 bg-gray-100 rounded-lg mb-4">
              <p class="text-gray-800">Liked Post 1</p>
            </div>
            <div class="p-4 bg-gray-100 rounded-lg mb-4">
              <p class="text-gray-800">Liked Post 2</p>
            </div>
          </div>
        </Show>
        
        <Show when={selectedSection() === "reposts"}>
          <div>
            <div class="p-4 bg-gray-100 rounded-lg mb-4">
              <p class="text-gray-800">Reposted Post 1</p>
            </div>
            <div class="p-4 bg-gray-100 rounded-lg mb-4">
              <p class="text-gray-800">Reposted Post 2</p>
            </div>
          </div>
        </Show>
        
        <Show when={selectedSection() === "comments"}>
          <div>
            <div class="p-4 bg-gray-100 rounded-lg mb-4">
              <p class="text-gray-800">Commented Post 1</p>
            </div>
            <div class="p-4 bg-gray-100 rounded-lg mb-4">
              <p class="text-gray-800">Commented Post 2</p>
            </div>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default ProfileStats;
