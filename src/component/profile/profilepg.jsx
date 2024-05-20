import { createSignal } from 'solid-js';
import Profilepic from '../img/profile.png';
import Profilebg from '../img/bg.jpg';
import Userpic from '../img/userpic.png'

function Profilepg() {
    const [followers, setFollowers] = createSignal([
      { username: 'follower1', profilePic: Userpic, bio: 'Follower 1 bio', isFollowingBack: false },
      { username: 'follower2', profilePic: Userpic, bio: 'Follower 2 bio', isFollowingBack: true },
    ]);
  
    const [following, setFollowing] = createSignal([
      { username: 'following1', profilePic: Userpic, bio: 'Following 1 bio' },
      { username: 'following2', profilePic: Userpic, bio: 'Following 2 bio' },
    ]);
  
    const [contacts, setContacts] = createSignal([
      { type: 'Website', url: 'https://example.com' },
      { type: 'LinkedIn', url: 'https://linkedin.com/' },
      { type: 'Twitter', url: 'https://twitter.com/' },
      { type: 'Instagram', url: 'https://instagram.com/' },
    ]);
  
    const [showList, setShowList] = createSignal(null); // null, 'followers', 'following', 'contacts'
    const [isEditing, setIsEditing] = createSignal(false);
    const [isEditingContact, setIsEditingContact] = createSignal(null);
    const [editProfile, setEditProfile] = createSignal({
      username: 'Me',
      bio: 'my bio, it tells few things about me that I wanna tell!',
      profilePic: Profilepic,
      profileBg: Profilebg,
    });
  
    const handleEditProfile = () => {
      setIsEditing(!isEditing());
    };
  
    const handleFollowBack = (username) => {
      setFollowers(followers().map(follower => 
        follower.username === username ? { ...follower, isFollowingBack: true } : follower
      ));
    };
  
    const handleUnfollow = (username) => {
      setFollowing(following().filter(person => person.username !== username));
    };
  
    const handleSaveProfile = () => {
      // Save profile logic here (e.g., send to backend or update state)
      setIsEditing(false);
    };
  
    const handleContactEdit = (index, newUrl) => {
      setContacts(contacts().map((contact, i) => 
        i === index ? { ...contact, url: newUrl } : contact
      ));
      setIsEditingContact(null);
    };
  
    const handleProfilePicChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditProfile({ ...editProfile(), profilePic: reader.result });
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleProfileBgChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditProfile({ ...editProfile(), profileBg: reader.result });
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <>
        <div class="relative h-100 lg:w-100 p-6 bg-transparent rounded-t-lg rounded-b-none">
          <div class="relative">
            <div class="profile bg-gray-700 rounded rounded-t-lg pb-5">
              <div class="relative mb-8 flex items-center justify-end pr-5">
                <div class="absolute inset-0 bg-cover bg-center rounded-t-lg overflow-visible" style={`background-image: url(${editProfile().profileBg})`}></div>
                <img 
                  src={editProfile().profilePic}
                  alt="Profile Picture"
                  class="relative z-10 w-40 h-40 rounded-full border-4 border-gray-200" />
                <button 
                  class="absolute top-0 right-0 m-2 p-1 text-white bg-gray-900 rounded-full"
                  onClick={handleEditProfile}
                >
                  Edit
                </button>
              </div>
              <h1 class="text-center text-white text-xl font-bold mb-2">{editProfile().username}</h1>
              <p class="text-gray-300 text-center">{editProfile().bio}</p>
            </div>
          </div>
        </div>
        <div className="stats flex gap-7 px-10">
          <button 
            class='text-gray-300 hover:text-gray-900'
            onClick={() => setShowList(showList() === 'followers' ? null : 'followers')}>
            Followers ({followers().length})
          </button>
          <button 
            class='text-gray-300 hover:text-gray-900'
            onClick={() => setShowList(showList() === 'following' ? null : 'following')}>
            Following ({following().length})
          </button>
          <button 
            class='text-gray-300 hover:text-gray-900'
            onClick={() => setShowList(showList() === 'contacts' ? null : 'contacts')}>
            Contact
          </button>
        </div>
        
        {showList() && (
          <div class="list p-6">
            {showList() === 'followers' && (
              <div>
                <h2 class="text-xl font-bold mb-4 text-gray-800">Followers</h2>
                <ul>
                  {followers().map(follower => (
                    <li class="flex items-center mb-4" key={follower.username}>
                      <img src={follower.profilePic} alt={follower.username} class="w-10 h-10 rounded-full mr-4" />
                      <div class="flex-1">
                        <p class="font-bold text-gray-800">{follower.username}</p>
                        <p class="text-gray-600">{follower.bio}</p>
                      </div>
                      {!follower.isFollowingBack && (
                        <button 
                          class="ml-4 p-1 text-sm text-white bg-blue-600 rounded"
                          onClick={() => handleFollowBack(follower.username)}
                        >
                          Follow Back
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showList() === 'following' && (
              <div>
                <h2 class="text-xl font-bold mb-4 text-gray-800">Following</h2>
                <ul>
                  {following().map(person => (
                    <li class="flex items-center mb-4" key={person.username}>
                      <img src={person.profilePic} alt={person.username} class="w-10 h-10 rounded-full mr-4" />
                      <div class="flex-1">
                        <p class="font-bold text-gray-800">{person.username}</p>
                        <p class="text-gray-600">{person.bio}</p>
                      </div>
                      <button 
                        class="ml-4 p-1 text-sm text-white bg-red-600 rounded"
                        onClick={() => handleUnfollow(person.username)}
                      >
                        Unfollow
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showList() === 'contacts' && (
              <div>
                <h2 class="text-xl font-bold mb-4 text-gray-800">Contact</h2>
                <ul>
                  {contacts().map((contact, index) => (
                    <li class="mb-4 flex items-center" key={contact.type}>
                      <span class="text-gray-800 w-32">{contact.type}</span>
                      {isEditingContact() === index ? (
                        <>
                          <input 
                            type="text" 
                            value={contact.url} 
                            onInput={(e) => setContacts(contacts().map((c, i) => i === index ? { ...c, url: e.target.value } : c))}
                            class="flex-1 p-2 border rounded mr-2"
                          />
                          <button 
                            class="ml-2 p-1 text-sm text-white bg-green-600 rounded"
                            onClick={() => handleContactEdit(index, contact.url)}
                          >
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          <a href={contact.url} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline flex-1">
                            {contact.url}
                          </a>
                          <button 
                            class="ml-4 p-1 text-sm text-white bg-gray-600 rounded"
                            onClick={() => setIsEditingContact(index)}
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
  
        {isEditing() && (
          <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg">
              <h2 class="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>
              <label class="block mb-2">
                Username:
                <input 
                  type="text" 
                  value={editProfile().username} 
                  onInput={(e) => setEditProfile({ ...editProfile(), username: e.target.value })} 
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
                <label class="block mb-2">
                  Bio:
                  <textarea 
                    value={editProfile().bio} 
                    onInput={(e) => setEditProfile({ ...editProfile(), bio: e.target.value })} 
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
                <label class="block mb-2">
                  Profile Picture:
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleProfilePicChange} 
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
                <label class="block mb-2">
                  Background Image:
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleProfileBgChange} 
                    class="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
                <div class="flex justify-end">
                  <button 
                    class="mt-4 p-2 bg-blue-600 text-white rounded"
                    onClick={handleSaveProfile}
                  >
                    Save
                  </button>
                  <button 
                    class="mt-4 p-2 bg-gray-600 text-white rounded ml-2"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
    
    export default Profilepg;
  
  
  
  
  
  
  