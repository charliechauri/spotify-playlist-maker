import _ from 'underscore';

/**
 * Search tracks in Spotify and if found they get added to an specific Playlist
 * @param {object} spotifyClient Instance of SpotifyWebAPI (with access_token already set)
 * @param {Array(string)} tracks Songs to search and if found added to the provided playlist
 * @param {string} userId Playlist owner Spotify userId. The playlist must be public
 * @param {string} playListId playlistId to upload the tracks
 */
const searchAndAddTracksToPlaylist = (spotifyClient, tracks, userId, playListId) => {
  const notFoundTracks = [];
  const notAddedDueToErrors = [];
  const addedTracks = [];

  tracks.forEach((track, index) => {
    const tryAddSong = (tName) => {
      spotifyClient.searchTracks(tName)
        .then(({ body }) => {
          if (body.tracks.items.length > 0) {
            const { items } = body.tracks;
            const foundTrack = items[0];
            spotifyClient
              .addTracksToPlaylist(userId, playListId, [`spotify:track:${foundTrack.id}`])
              .then(() => { addedTracks.push(track); })
              .catch((error) => {
                notAddedDueToErrors.push({ track, error });
                console.log(error);
              });
          } else {
            notFoundTracks.push(track);
          }
        });
    };

    try {
      _.delay(tryAddSong, 500 * (index + 1), track);
    } catch (e) {
      throw e;
    }
  });
};

export default searchAndAddTracksToPlaylist;
