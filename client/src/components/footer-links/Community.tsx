import { useEffect, useState } from "react";
import { Heart, MessageCircle, UserCircle, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community.png";

const mockPosts = [
  {
    id: 1,
    user: "Aaditya Raj",
    avatar: "https://res.cloudinary.com/ddgkgaffw/image/upload/v1744485825/tzt6ud5ayfos1xnvwjj7.jpg",
    image: "https://cdn.pixabay.com/photo/2022/07/14/06/35/smoothie-7320560_1280.jpg",
    text: "My Sunday brunch — oats, smoothie, and some avocado magic! 🥑💚",
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    user: "Rhea Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    image: "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_1280.jpg",
    text: "Post-workout salad vibes 🥗🔥 Fuel your body right!",
    likes: 25,
    comments: 6,
  },
  {
      "id": 3,
      "user": "Aman Sharma",
      "avatar": "https://randomuser.me/api/portraits/men/45.jpg",
      "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
      "text": "Cheat day means double cheeseburger 🍔😍 #WorthIt",
      "likes": 42,
      "comments": 10
  },
  {
      "id": 4,
      "user": "Priya Mehta",
      "avatar": "https://randomuser.me/api/portraits/women/55.jpg",
      "image": "https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_1280.jpg",
      "text": "Breakfast goals ☕🍞 Fresh start to the day!",
      "likes": 34,
      "comments": 7
  },
  {
      "id": 5,
      "user": "Karan Malhotra",
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
      "image": "https://cdn.pixabay.com/photo/2014/01/09/09/11/sweets-241016_1280.jpg",
      "text": "Nothing beats home-cooked Indian food 🇮🇳🍛",
      "likes": 58,
      "comments": 12
  },
  {
      "id": 6,
      "user": "Sanya Verma",
      "avatar": "https://randomuser.me/api/portraits/women/85.jpg",
      "image": "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
      "text": "Pizza nights are the best nights 🍕✨ #FoodieLife",
      "likes": 76,
      "comments": 15
  },
  {
      "id": 7,
      "user": "Arjun Desai",
      "avatar": "https://randomuser.me/api/portraits/men/33.jpg",
      "image": "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
      "text": "Sundays are for soul food 🥘😋 #LazySunday",
      "likes": 29,
      "comments": 4
  }
  
];

const Community = () => {
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    document.title = "Community - Lazeez Diet";
  }, []);

  return (

    <div className="min-h-screen px-6 py-12 sm:px-12 md:px-20 lg:px-32">

<div className="flex justify-left mb-8">
          <img
            src={communityImage}
            alt="Lazeez Diet profile image"
            className="w-400 h-auto rounded-xl"
          />
        </div>
        

    <div className="max-w-5xl mx-auto px-4 py-12">
      
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500">
          Lazeez Community ❤️‍🔥
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Share your meals, inspire others, and be part of our foodie fam!
        </p>
      </div>

      {/* Feed */}
      <div className="space-y-10">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-4 p-5">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-zinc-700"
              />
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {post.user}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Just now · Public
                </p>
              </div>
            </div>

            <img
              src={post.image}
              alt="Post"
              className="w-full h-64 object-cover"
            />

            <div className="p-5 space-y-4">
              <p className="text-gray-700 dark:text-gray-200 text-base">{post.text}</p>

              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                  <Heart className="w-5 h-5" /> {post.likes}
                </span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                  <MessageCircle className="w-5 h-5" /> {post.comments}
                </span>
              </div>

              <div className="flex items-center mt-4 gap-3">
                <UserCircle className="w-8 h-8 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="flex-grow"
                />
                <Button className="bg-purple-500 hover:bg-hoverPurple">
                  <SendHorizonal size={18} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Community;
