const EventEmitter = require( 'events' ).EventEmitter;
import deepstream from 'deepstream.io-client-js';
import {MPPlayer} from "./mpplayer";
/*eslint-disable*/


export class MPRoom extends EventEmitter{


  constructor( name ) {

    // Initialise the EventEmitter
    super();

    // Frames are distributed unevenly - let's keep track of how much time has passed since the last one
    this._lastFrameTime = 0;
    // new MPPlayer(name,this);

    // Add a listener to notify of players coming online
    global.ds.event.listen( 'status/.*', this._playerOnlineStatusChanged.bind( this ) );

    // On the next frame, the show begins
    requestAnimationFrame( this._tick.bind( this ) );
  }


  _playerOnlineStatusChanged( match, isSubscribed ) {
    // Extract the player name from the status event
   // var name = match.replace( 'status/', '' );
console.log("online status changed");
    // if( isSubscribed ) {
    //   this.addPlayer( name );
    // } else {
    //   this.removePlayer( name );
    // }
  }


  addPlayer( name ,playerPosition) {
    console.log("ADD PLAYER");
    // this._record = global.ds.record.getRecord( 'player/' + name );
    new MPPlayer(name,this,playerPosition);
  }


  removePlayer( name ) {
    console.log("REMOVE PLAYER");
  }


  _tick( currentTime ) {
    // notify objects of the impeding update. This gives ships time to reposition
    // themselves, bullets to move etc.
    this.emit( 'update', currentTime - this._lastFrameTime, currentTime );

    // store the time
    this._lastFrameTime = currentTime;


    // and schedule the next tick
    requestAnimationFrame( this._tick.bind( this ) );
  }
}