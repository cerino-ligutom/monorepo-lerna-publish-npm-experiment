import { album } from '@music-sdk/album';
import { song } from '@music-sdk/song';
import { artist } from '@music-sdk/artist';

console.log('Album:', album.get());
console.log('Song:', song.get());
console.log('Artist:', artist.get());
