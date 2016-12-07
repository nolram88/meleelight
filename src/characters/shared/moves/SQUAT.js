import {checkForJump, checkForSmashes, checkForTilts, checkForSpecials, reduceByTraction, actionStates} from "physics/actionStateShortcuts";
import {characterSelections, player} from "main/main";
import {framesData} from 'main/characters';
export default {
  name : "SQUAT",
  canEdgeCancel : true,
  canBeGrabbed : true,
  crouch : true,
  disableTeeter : true,
  init : function(p,input){
    player[p].actionState = "SQUAT";
    player[p].timer = 0;
    actionStates[characterSelections[p]].SQUAT.main(p,input);
  },
  main : function(p,input){
    player[p].timer++;
    if (!actionStates[characterSelections[p]].SQUAT.interrupt(p,input)){
      reduceByTraction(p,true);
    }
  },
  interrupt : function(p,input){
    var b = checkForSpecials(p,input);
    var t = checkForTilts(p,input);
    var s = checkForSmashes(p,input);
    var j = checkForJump(p,input);
    if (player[p].timer == 4 && (input[p].lsY[0] < -0.65 || input[p].lsY[1] < -0.65 || input[p].lsY[2] < -0.65) && input[p].lsY[6] > -0.3 && player[p].phys.onSurface[0] == 1){
      actionStates[characterSelections[p]].PASS.init(p,input);
      return true;
    }
    else if (input[p].l[0] || input[p].r[0]){
      actionStates[characterSelections[p]].GUARDON.init(p,input);
      return true;
    }
    else if (input[p].lA[0] > 0 || input[p].rA[0] > 0){
      actionStates[characterSelections[p]].GUARDON.init(p,input);
      return true;
    }
    else if (b[0]){
      actionStates[characterSelections[p]][b[1]].init(p,input);
      return true;
    }
    else if (s[0]){
      actionStates[characterSelections[p]][s[1]].init(p,input);
      return true;
    }
    else if (t[0]){
      actionStates[characterSelections[p]][t[1]].init(p,input);
      return true;
    }
    else if (player[p].timer > framesData[characterSelections[p]].SQUAT){
      actionStates[characterSelections[p]].SQUATWAIT.init(p,input);
      return true;
    }
    else if (j[0]){
      actionStates[characterSelections[p]].KNEEBEND.init(p,j[1],input);
      return true;
    }
    else {
      return false;
    }
  }
};

