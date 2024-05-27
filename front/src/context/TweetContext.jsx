import { createContext, useContext, useState } from "react";
import {
  createTweetRequest,
  getTweetsRequest,
  getAllTweetsRequest,
  deleteTweetRequest,
  getTweetRequest,
  updateTweetRequest,
} from "../api/tweets";

const tweetContext = createContext();

export const useTweets = () => {
  const context = useContext(tweetContext);
  if (!context) {
    throw new Error("useTweet must be used within a TweetProvider");
  }
  return context;
};

export function TweetProvider({ children }) {
  const [tweets, setTweets] = useState([]);

  const getAllTweets = async () => {
    try {
      const res = await getAllTweetsRequest();
      setTweets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTweets = async () => {
    try {
      const res = await getTweetsRequest();
      setTweets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTweets = async (tweets) => {
    const res = await createTweetRequest(tweets);
    console.log(res);
  };

  const deleteTweet = async (id) => {
    try {
      const res = await deleteTweetRequest(id);
      if (res.status === 204)
        setTweets(tweets.filter((tweet) => tweet._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTweet = async (id) => {
    try {
      const res = await getTweetRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTweet = async (id, tweet) => {
     try {
      await updateTweetRequest(id, tweet);
     } catch (error) {
      console.log(error);
     }
  }

  return (
    <tweetContext.Provider
      value={{
        tweets,
        createTweets,
        getAllTweets,
        getTweets,
        deleteTweet,
        getTweet,
        updateTweet,
      }}
    >
      {children}
    </tweetContext.Provider>
  );
}
