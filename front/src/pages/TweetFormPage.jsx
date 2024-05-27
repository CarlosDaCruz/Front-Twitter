import { useForm } from "react-hook-form";
import { useTweets } from "../context/TweetContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function TweetFormPage() {
  const { register, handleSubmit } = useForm();

  const {user} = useAuth();

  const { createTweets, getAllTweets, tweets } = useTweets(); //Crea un nuevo tweet y Trae todos los tweets que estan en la base de datos

  // Estado local para almacenar los tweets
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    //Se ejecuta y carga todos los tweets que estan en la base de datos cada vez que se hace refresh
    getAllTweets();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    // Crear un nuevo tweet
    await createTweets(data);
    // Después de crear el tweet, volvemos a cargar todos los tweets y actualizamos el estado local
    const updatedTweets = await getAllTweets();
    setAllTweets(updatedTweets);
  });   

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="bg-zinc-800  flex flex-col gap-4 w-4/5 p-10 rounded-md">
        <h1 className="font-semibold text-2xl text-center py-2 border-b-4 border-fuchsia-600">Welcome {user.username}</h1>
        <form onSubmit={onSubmit}>
          <textarea
            rows={3}
            placeholder="Craft your tweet here..."
            {...register("theme")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          ></textarea>
          <button className="bg-fuchsia-600 px-4 py-1 rounded-md">Tweet</button>
        </form>
      </div>

      <div className="bg-zinc-800 w-4/5 p-10 rounded-md flex flex-col gap-4 ">
        {[...tweets].reverse().map((tweet) => (
          <div key={tweet._id} className="flex flex-col w-full gap-5 justify-between border-b-2 border-fuchsia-500 text-slate-200">
            <p className="text-xs text-slate-400">{`${tweet.user.username}: `}</p>
            <p>{tweet.theme}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
export default TweetFormPage;
