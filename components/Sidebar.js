import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  StopIcon,

} from "@heroicons/react/outline";

import React from 'react'
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import useSpotify from "../hooks/useSpotify";

function Sidebar() {
  //Gestion de session
  const {data: session, statut} = useSession();
  console.log(session);

  //Gestion des playlists de l'user avec useSpotify par le token
  const [playlists, setPlaylists] = useState([]);
  const spotifyApi = useSpotify();
  useEffect(() => {
      if (spotifyApi.getAccessToken()) {
          spotifyApi.getUserPlaylists().then((data) => {
              setPlaylists(data.body.items);
          });
      }
  }, [session, spotifyApi])
  console.log(playlists);

  return (
    <div className="text-gray-500 p-5 text-sm border-r
    border-gray-900 overflow-y-scroll h-screen">
      <div className="space-y-4">
      <button className="flex items-center space-x-2 
        hover:text-white" onClick={() => signOut()}>
          <p>Déconnexion</p>
        </button>
        <button className="flex items-center space-x-2 
        hover:text-white">
          <HomeIcon className="h-5 w-5"/>
          <p>Accueil</p>
        </button>
        <button className="flex items-center space-x-2 
        hover:text-white">
          <SearchIcon className="h-5 w-5"/>
          <p>Rechercher</p>
        </button>
        <button className="flex items-center space-x-2 
        hover:text-white">
          <LibraryIcon className="h-5 w-5"/>
          <p>Biblio</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"/>
        
        <button className="flex items-center space-x-2 
        hover:text-white">
          <PlusCircleIcon className="h-5 w-5"/>
          <p>Creer une playlist</p>
        </button>
        <button className="flex items-center space-x-2 
        hover:text-white">
          <HeartIcon className="h-5 w-5"/>
          <p>Musique aimés</p>
        </button>
        <button className="flex items-center space-x-2 
        hover:text-white">
          <RssIcon className="h-5 w-5"/>
          <p>Podcasts</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"/>

        {playlists.map((playlist) => (
            <p key={playlist.id} className="cursor-pointer hover:text-white">
                {playlist.name}
            </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar