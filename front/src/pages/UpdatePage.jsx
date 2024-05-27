import { useTweets } from "../context/TweetContext";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useNavigate, useParams,} from "react-router-dom";

function UpdatePage() {
  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const {getTweet, updateTweet} = useTweets();
  const params = useParams();

  useEffect(() => {
    async function loadTweet(){
      if(params.id) {
        const tweet = await getTweet(params.id);
        setValue("theme", tweet.theme);
      }
    }
    loadTweet();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    await updateTweet(params.id, data);
    navigate("/profile");
  });

  return (
    <div className="flex flex-col h-full justify-center items-center gap-5">
      <div className="bg-zinc-800 flex flex-col gap-4 max-w-md w-full p-10 rounded-md">
        <h1 className="text-slate-300 font-semibold">Tweaking your words...</h1>
        <form onSubmit={onSubmit}>
          <textarea
            rows={3}
            placeholder="Comparte tus ideas..."
            {...register("theme")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          ></textarea>
          <button>Tweet</button>
        </form>
      </div>
    </div>
  );
}
export default UpdatePage;
