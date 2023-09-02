import React from 'react';
import "./Sidebar.css";
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
// import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-image"></img>
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS  </strong>
            <hr />
            <div className="sidebar__left">

                {playlists?.items?.map((playlist) => (
                    <SidebarOptions title={playlist.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;