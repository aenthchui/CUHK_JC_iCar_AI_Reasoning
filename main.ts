//% color="#EC7482" weight=4 icon="\uf2e7" block="CUHK_JC_iCar_Delivery"

namespace CUHK_JC_iCar_Delivery{ 

  export enum reason {
      //% block="Skill-based"
      skill,
      //% block="Rule-based"
      rule,
      //% block="Knowledge-based"
      knowledge
  }
  /**
  * Move iCar to array of points(A to H) using SKill, Rule or Knowledge-bases reasoning, click "+" to customize speed values
  */
  //% block="iCar deliver food to $points using %index reasoning || at left speed %LSpeed\\%, right speed %RSpeed\\%, forward speed %FSpeed\\%"
  //% LSpeed.min=1 LSpeed.max=100 LSpeed.defl=20
  //% RSpeed.min=1 RSpeed.max=100 RSpeed.defl=20
  //% FSpeed.min=1 FSpeed.max=100 FSpeed.defl=20
  //% inlineInputMode=inline
  //% expandableArgumentMode="toggle"
  export function startProgram(points?: string[], index?: reason, LSpeed?: number,RSpeed?: number,FSpeed?: number): void {
    
  }
    
  /**
  * Sample points of delivering to A, B, F, G
  */ 
  //% block="A,B,F,G"
  //% group="Sample points" blockGap=10
  export function ABFG(): string[] {
    return ["a","b","f","g"];
  }
}
