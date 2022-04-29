import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';
import { Schema } from "./Schemas";
import Joi from "joi";

/**
 * Return the result of performing the query in sql/get_songs.sql on the
 * database.
 * 
 * @returns the songs
 */
async function onMessage(msg: any): Promise<any> {
  let songsList: any[];
  // console.log("msg "+msg)
  const song_title = msg.song_title ? msg.song_title : "default";
  console.log("song_title ===>>> "+song_title)
  songsList = await DB.runQuery(
    "get_songs_by_name",
    song_title
  )
  console.log('songs based on name');
  console.log('songsList '+ (songsList.length) +" "+songsList);
  if (songsList.length == 0) {
    console.log("No data for input")
    return null
  } 
  return { songsList };
}

// Our schema can be empty, as we are not expecting any data with the message
const schema = {
  song_title: Joi.string().required()
};

/**
 * A handler for the get_songs message; internally, queries the database for
 * the songs in it.
 */
export const GetSongsByNameHandler = new MessageHandler(
  'get_songs_by_name',
  schema,
  onMessage
);



