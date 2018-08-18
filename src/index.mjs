import fs from 'fs';
import dotenv from 'dotenv';
import SpotifyWebAPI from 'spotify-web-api-node';
import searchAndAddTracksToPlaylist from './searchAndAddTracksToPlaylist';

const env = dotenv.config();

/**
 * Read a file and convert it to a list of tracks
 * @param {object} err Default error for unreadable file
 * @param {string} data UTF-8 string representing the list of tracks
 */
const handleReadFile = (err, data) => {
  if (err) throw err;

  const userId = env.parsed.USER_ID;
  const playlistId = env.parsed.PLAYLIST_ID;
  const accessToken = env.parsed.ACCESS_TOKEN;
  const tracksToAdd = data.split('\n');
  const spotifyClient = new SpotifyWebAPI();

  spotifyClient.setAccessToken(accessToken);
  searchAndAddTracksToPlaylist(spotifyClient, tracksToAdd, userId, playlistId);
};

fs.readFile('./tracks.txt', 'utf8', handleReadFile);
