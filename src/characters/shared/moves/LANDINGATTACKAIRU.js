import {reduceByTraction, actionStates} from "physics/actionStateShortcuts";
import {characterSelections,  player} from "main/main";
import {sounds} from "main/sfx";
import {framesData} from 'main/characters';
import {drawVfx} from "main/vfx/drawVfx";
export default {
  name : "LANDINGATTACKAIRU",
  canEdgeCancel : true,
  canBeGrabbed : true,
  init : function(p,input){
    player[p].actionState = "LANDINGATTACKAIRU";
    player[p].timer = 0;
    if (player[p].phys.lCancel){
      player[p].phys.landingLagScaling = 2;
    }
    else {
      player[p].phys.landingLagScaling = 1;
    }
    drawVfx("circleDust",player[p].phys.pos,player[p].phys.face);
    sounds.land.play();
    actionStates[characterSelections[p]].LANDINGATTACKAIRU.main(p,input);
  },
  main : function(p,input){
    player[p].timer += player[p].phys.landingLagScaling;
    if (!actionStates[characterSelections[p]].LANDINGATTACKAIRU.interrupt(p,input)){
      reduceByTraction(p,true);
    }
  },
  interrupt : function(p,input){
    if (player[p].timer > framesData[characterSelections[p]].LANDINGATTACKAIRU){
      actionStates[characterSelections[p]].WAIT.init(p,input);
      return true;
    }
    else {
      return false;
    }
  }
};
