
import {player} from "main/main";
import {Vec2D} from "../../../main/util/Vec2D";
export default {
  name : "THROWNPUFFFORWARD",
  canEdgeCancel : false,
  canGrabLedge : [false,false],
  canBeGrabbed : false,
  offset : [[-10.52,-3.27],[-9.84,-3.27],[-9.13,-3.27],[-8.70,-3.27],[-8.60,-3.27],[-8.61,-3.27],[-8.67,-3.27],[-8.70,-3.27],[-9.78,-3.27],[-9.78,0.01]],
  init : function(p,input){
    player[p].actionState = "THROWNPUFFFORWARD";
    if (player[p].phys.grabbedBy < p){
      player[p].timer = -1;
    }
    else {
      player[p].timer = 0;
    }
    player[p].phys.grounded = false;
    this.main(p,input);
  },
  main : function(p,input){
    player[p].timer++;
    if (!this.interrupt(p,input)){
      if (player[p].timer > 0){
        player[p].phys.pos = new Vec2D(player[player[p].phys.grabbedBy].phys.pos.x+this.offset[player[p].timer-1][0]*player[p].phys.face,player[player[p].phys.grabbedBy].phys.pos.y+this.offset[player[p].timer-1][1]);
      }
    }
  },
  interrupt : function(p,input){
    return false;
  }
};
