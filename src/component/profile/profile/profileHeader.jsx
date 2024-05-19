import { createSignal } from 'solid-js';
// import { Transition } from 'solid-js/web';
// import { div } from 'solid-js';
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/solid';

const ProfileHeader = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    bio: 'Passionate vegan and animal lover. 🌱',
    followers: 1234,
    following: 567,
    profilePic: 'https://via.placeholder.com/150',
    bgPic: 'https://via.placeholder.com/800x300',
    contacts: [
      { type: 'Email', link: 'mailto:johndoe@example.com' },
      { type: 'Website', link: 'https://johndoe.com' },
    ],
    stats: {
      likedPosts: 56,
      reposted: 12,
      comments: 34,
    },
  };

  // State for theme toggle
  const [darkMode, setDarkMode] = createSignal(false);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode());

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ${darkMode() ? 'dark' : ''}`}>
      {/* Background image */}
      <div className="relative h-40 sm:h-48 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
        <img src={user.bgPic} alt="Background" className="w-full h-full object-cover object-center" />
      </div>

      {/* Profile details */}
      <div className="px-4 py-6 sm:px-6">
        {/* Profile picture and edit button */}
        <div className="-mt-20 sm:-mt-24 flex items-center justify-center">
          <div className="relative">
            <img
              src={user.profilePic}
              alt="Profile"
              className="h-28 w-28 sm:h-36 sm:w-36 rounded-full ring-4 ring-white"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600">
              {/* Edit icon */}
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a2 2 0 002.828 0l2.829-2.829a2 2 0 000-2.828l-8-8a2 2 0 00-2.828 0l-8 8a2 2 0 000 2.828l2.829 2.829a2 2 0 002.828 0M9 14h6m-3-5v6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* User info */}
        <div className="text-center mt-3 sm:mt-5">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{user.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{user.bio}</p>
          <div className="mt-4 flex justify-center space-x-4">
            {/* Contacts */}
            {user.contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {contact.type}
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6">
          <div className="flex justify-center">
            <div className="mr-8">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Followers</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{user.followers}</p>
            </div>
            <div className="mr-8">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Following</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{user.following}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Liked Posts</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{user.stats.likedPosts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Theme toggle */}
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <button
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none"
          onClick={toggleDarkMode}
        >
          <span className="hidden sm:inline">Switch Theme</span>
          {darkMode() ? (
            <ChevronUpIcon className="w-5 h-5 ml-1" aria-hidden="true" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
