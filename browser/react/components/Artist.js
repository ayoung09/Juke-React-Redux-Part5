import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  console.log('ownProps: ', props.ownProps);
  const artist = props.selectedArtist;
  const albums = artist.albums || [];
  const songs = artist.songs || [];
  const player = props.player

  return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
      </ul>
      {
        props.children && React.cloneElement(props.children, Object.assign({}, props, {
          albums: albums,
          songs: songs,
          currentSong: player.currentSong,
          isPlaying: player.isPlaying,
          toggleOne: props.toggleOne
        }))
      }
    </div>
  );

};
