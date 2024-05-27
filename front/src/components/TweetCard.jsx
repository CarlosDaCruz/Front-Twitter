import { useTweets } from "../context/TweetContext";
import { Link } from "react-router-dom";

function TweetCard({ tweet }) {
  const { deleteTweet } = useTweets();

  return (
    <div>
      <div className="flex flex-col  gap-5 h-full w-full justify-between border-b-2 border-fuchsia-600 text-slate-200">
        <p className="text-xs text-slate-400">{`${tweet.user.username}:`}</p>
        <div className="flex justify-between">
          <p>{tweet.theme}</p>
          <div className="flex gap-x-2 items-center ">
            <button
                className="text-red-500"
              onClick={() => {
                deleteTweet(tweet._id);
              }}
            >
              Delete
            </button>
            <Link to={`/tweet/${tweet._id}`} className="text-indigo-500">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TweetCard;
