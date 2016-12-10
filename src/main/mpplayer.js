import {player} from 'main/main';
import {setPlayer, setPlayerInputs} from "./main";
/*eslint-disable*/
export class MPPlayer{


  constructor(  name ,room,playerposition) {
    this._playerposition = playerposition;
    // this._record = global.ds.record.getRecord( 'player/' + name );
    global.ds.record.getRecord( 'player/'+name ).whenReady(function( record ) {

      // Set the record's initial data-set
      record.set({
        name: name,
        playerPos:playerposition,
        inputs:player[playerposition].inputs
      });

      // Listen for the record's delete event. We use the deletion
      // of the record as a means to inform the client that his or her ship
      // was destroyed
      record.once( 'delete',  function() {


        // Unsubscribe from the satus event (the same happens if the
        // client goes offline)
        global.ds.event.unsubscribe( 'status/' + name );
      });

      // Subscribe to the status event. The game is listening for subscriptions
      // on this event and will use it as a trigger to create the spaceship
      global.ds.event.subscribe( 'status/' + name );

      setPlayerInputs(0,record.get("inputs"));


    });
    // record
    this._record = global.ds.record.getRecord( 'player/' + name );


    // bind to gameloop
    room.on( 'update', this._update.bind( this ) );
  }



  _update( msSinceLastFrame, currentTime ) {
    // let's make sure the record is properly loaded
    if (this._record.isReady === false) {
      return;
    }

    // data contains the user's input. We'll be using it a lot, so let's get it once
    var data = this._record.get();
    console.log(data.inputs);
    if(data !== undefined) {
      setPlayerInputs(this._playerposition, data.inputs);
    }

  }
}