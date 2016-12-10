import {player} from 'main/main';
import {setNetworkInputBuffer, getNetworkInputBuffer} from "./input";
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
        inputs:MPPlayer.getNetworkInput(playerposition)
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

      MPPlayer.setPlayerInput(playerposition,record.get("inputs"));


    });
    // record
    this._record = global.ds.record.getRecord( 'player/' + name );


    // bind to gameloop
    room.on( 'update', this._update.bind( this ) );
  }

  static setPlayerInput(index,val){
    setNetworkInputBuffer(index,val);

  }

static getNetworkInput(playerSlot){
return getNetworkInputBuffer(playerSlot);
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
      MPPlayer.setPlayerInput(this._playerposition, data.inputs);
    }

  }
}