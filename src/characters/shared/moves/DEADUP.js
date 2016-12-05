import {finishGame, cS, percentShake, screenShake, player} from "main/main";
import {playSounds, aS, isFinalDeath} from "physics/actionStateShortcuts";
import {sounds} from "main/sfx";
import {drawVfx} from "main/vfx/drawVfx";
export default {
  name : "DEADUP",
  canBeGrabbed : false,
  ignoreCollision : true,
  dead : true,
  init : function(p){
    player[p].actionState = "DEADUP";
    player[p].timer = 0;
    player[p].phys.cVel.x = 0;
    player[p].phys.cVel.y = 0;
    player[p].phys.kVel.x = 0;
    player[p].phys.kVel.y = 0;
    player[p].percent = 0;
    drawVfx("blastzoneExplosion",player[p].phys.pos,180);
    if (!isFinalDeath()){
      screenShake(500);
      percentShake(500,p);
    }
    sounds.kill.play();
    aS[cS[p]].DEADUP.main(p);
  },
  main : function(p){
    player[p].timer++;
    playSounds("DEAD",p);
    if (!aS[cS[p]].DEADUP.interrupt(p)){
      player[p].phys.outOfCameraTimer = 0;
      player[p].phys.intangibleTimer = 2;
      if (player[p].timer == 4){
        if (isFinalDeath()){
          finishGame();
        }
        else {
          screenShake(500);
          percentShake(500,p);
        }
      }
    }
  },
  interrupt : function(p){
    if (player[p].timer > 60){
      if (player[p].stocks > 0){
        aS[cS[p]].REBIRTH.init(p);
      }
      else {
        aS[cS[p]].SLEEP.init(p);
      }
      return true;
    }
    else {
      return false;
    }
  }
};

