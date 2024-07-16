import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null; //early return pattern it will return if the isMenuOpen value is false

  return (
    <div className=" mx-10 p-6 w-40 h-auto pl-5 text-pretty">
        
        <ul>
            <li className="pb-3"><Link to="/">Home</Link></li>
            <li className="pb-3">Shorts</li>
            <li className="pb-3">Live</li>
        </ul>
        <hr></hr>
        <h1 className="font-bold text-pretty py-3">Subscriptions</h1>
        <ul>
            <li className="pb-3">Sports</li>
            <li className="pb-3">Movies</li>
            <li className="pb-3">Music</li>
            <li className="pb-3">Gaming</li>
            <li className="pb-3">Kpop</li>
            <li className="pb-3">Anime</li>
        </ul>
        <hr></hr>
        <h1 className="font-bold text-pretty py-3">Watch Later</h1>
        <ul>
            <li className="pb-3">NCT dance</li>
            <li className="pb-3">Choreo</li>
            <li className="pb-3">Code</li>
            <li className="pb-3">Gaming</li>
            <li className="pb-3">Kpop</li>
            <li className="pb-3">Anime</li>
        </ul>
    </div>
  )
}

export default SideBar