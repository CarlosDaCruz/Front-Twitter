import { useEffect } from "react";
import { useTweets } from "../context/TweetContext";
import { useAuth } from "../context/AuthContext";
import TweetCard  from "../components/TweetCard";

function ProfilePage() {
  const { getTweets, tweets } = useTweets();
  const {user}=useAuth();

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="flex flex-col h-full justify-center items-center gap-5">
      {/* Sección del perfil */}
      <div className="bg-zinc-800 flex flex-col justify-between w-4/5 py-5 px-10 rounded-md gap-4">
        <div className="flex w-full justify-center py-2 border-b-4 border-fuchsia-700">
          <h1 className="text-white text-2xl font-bold">Profile: {user.username}</h1>
        </div>
        <div className="grid grid-rows-2 gap-5">
          <div className="grid grid-cols-2">
            <p className="text-white font-bold">Nombre de usuario: </p>
            <p className="text-white text-center">{user.username}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-white font-bold">Email: </p>
            <p className="text-white text-center">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Sección de los tweets */}
      <div className="bg-zinc-800 flex flex-col justify-between w-4/5 p-10 rounded-md gap-3">
        <div className="border-b-4 border-fuchsia-700">
          <h2 className="text-white text-1xl font-bold">Tweets</h2>
        </div>

        {/* Aquí iría el espacio para el tweet */}
        <div className="flex flex-col  gap-5">
          {[...tweets].reverse().map((tweet) => (
            <TweetCard tweet={tweet} key={tweet._id}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
