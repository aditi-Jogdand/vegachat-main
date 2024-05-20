import { createSignal } from "solid-js";
import Profilepic from '../../img/profile.png' 

function Post1Ex() {
  const [likes, setLikes] = createSignal(10);
  const [likedBy, setLikedBy] = createSignal([
    { id: 1, user: "User1", profileImage: "https://via.placeholder.com/40" },
    { id: 2, user: "User2", profileImage: "https://via.placeholder.com/40" },
  ]);
  const [comments, setComments] = createSignal([
    { id: 1, user: "Commenter1", profileImage: "https://via.placeholder.com/40", content: "Great post! Very informative. 🌱" },
    { id: 2, user: "Commenter2", profileImage: "https://via.placeholder.com/40", content: "I've been vegan for a year, and it really helped my health!" },
  ]);
  const [newComment, setNewComment] = createSignal("");
  const [showLikedBy, setShowLikedBy] = createSignal(false);
  const [userLiked, setUserLiked] = createSignal(false); // Track if the user has liked the post

  const handleLike = () => {
    if (!userLiked()) {
      setLikes(likes() + 1);
      setLikedBy([...likedBy(), { id: Date.now(), user: "Me", profileImage: Profilepic }]);
      setUserLiked(true);
    }
  };

  const handleAddComment = () => {
    if (newComment().trim()) {
      setComments([...comments(), { id: Date.now(), user: "Me", profileImage: Profilepic , content: newComment().trim() }]);
      setNewComment("");
    }
  };

  const toggleShowLikedBy = () => {
    setShowLikedBy(!showLikedBy());
  };

  return (
    <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div class="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        <div class="mb-6">
          <h1 class="text-3xl font-bold mb-4">How vegan diet benefited me who is diabetic</h1>
          <p class="text-gray-700 leading-relaxed mb-4">
            🌱 Calling all health enthusiasts and foodies! 🥑 Are you curious about the benefits of a vegan diet on insulin levels? 🤔 Well, let me share my personal experience since I made the switch to a plant-based lifestyle. 🌱
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Not only have I noticed a significant improvement in my insulin levels, but I've also experienced a boost in energy and overall well-being. 🌟 Plus, the endless variety of delicious vegan meals has expanded my taste buds and made me appreciate the power of plants even more. 🌿
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            I know there may be some skepticism around veganism, but trust me, the results speak for themselves. 💪🏼 So if you're looking to take control of your health and maintain your insulin levels, I highly recommend giving veganism a try. 🌱
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Let's start a conversation in the comments below! Have you tried a vegan diet? Share your thoughts and experiences. 🌱 Together, we can discover the incredible benefits of a plant-based lifestyle. 🌿
          </p>
          <p class="text-blue-500">#vegan #plantbased #insulincontrol #healthylifestyle</p>
        </div>

        <div class="flex items-center space-x-4 mb-6">
          <button
            class={`flex items-center ${userLiked() ? "text-pink-500" : "text-gray-700"} hover:text-pink-500 focus:outline-none`}
            onClick={handleLike}
            disabled={userLiked()}
          >
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{likes()}</span>
          </button>
          <button class="text-blue-500" onClick={toggleShowLikedBy}>
            See who liked this
          </button>
        </div>

        {showLikedBy() && (
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-4">Liked by:</h2>
            <div class="space-y-4">
              {likedBy().map((user) => (
                <div class="flex items-center space-x-4" key={user.id}>
                  <img class="w-8 h-8 rounded-full" src={user.profileImage} alt={user.user} />
                  <h3 class="font-semibold">{user.user}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-4">Comments</h2>
          <div class="space-y-4">
            {comments().map((comment) => (
              <div class="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center space-x-4" key={comment.id}>
                <img class="w-8 h-8 rounded-full" src={comment.profileImage} alt={comment.user} />
                <div>
                  <h3 class="font-semibold">{comment.user}</h3>
                  <p>{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="mt-6">
          <h2 class="text-2xl font-bold mb-4">Add a Comment</h2>
          <textarea
            class="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none"
            rows="4"
            placeholder="Write your comment here..."
            value={newComment()}
            onInput={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            class="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post1Ex;
