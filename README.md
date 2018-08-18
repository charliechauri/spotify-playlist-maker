# Spotify hits playlist maker

![Spotify logo](./Spotify_Logo_RGB_Green.png)

This project is meant to create a Spotify playlist.

My ex middle school mates and I have a reunite for the first time in 12 years, so I taught it was a good idea to make a playlist with the hits from those years in middle school (2003, 2004, 2005, 2006). I wrote this simple script to add all those tracks in an automated way.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

**It's important to have an active Spotify account and a playlist**

To configure your spotify account and playlist, it's needed to fill the .env file with the correct variables:

```
  USER_ID={replace} // Owner's userId of the playlist
  ACCESS_TOKEN={replace} // Acces token with permissions to write in a public playlist `playlist-modify-public`
  PLAYLIST_ID={replace} // Id of the public playlist to upload the tracks
```

This project was created using `ecmascript modules` that is still an experimental feature in node (v10.5.0). So it's necessary to use a version that can support the `--experimental-modules` flag.

You need to have a list of the tracks you want to search and if found added to a playlist. This tracks should be listed in the `tracks.txt` file of the project's root directory. Each song can be provided with keywords that can be useful to fing the song. The proposal format is {artist - song}, examples:

```
  White Lies - Take it out on me
  Grimes - Realiti
```

This project includes a default `tracks.txt` listing [MTV's Los 100 más pedidos del 2004](https://es.wikipedia.org/wiki/Anexo:Los_100_%2B_pedidos_del_2004).

*Important: each track must be separated by a new line*

### Installing
To install dependencies, run:

``` bash
  npm install
```

To start the project, run:
``` bash
  npm start
```
*Remember that this project uses ecmascript modules which is still an experimental feature*

## Running the tests

@todo Write tests and docs

### Coding style

The airbnb's eslint configuration is set in this project.

## Built With

* [SpotifyWebAPI](https://github.com/thelinmichael/spotify-web-api-node) - Spotify node js client to connect to the Spotify's API

## Authors

* **Carlos Echauri** - *Initial work* - [charliechauri](https://github.com/charliechauri)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
