import { createCanvas } from "https://deno.land/x/canvas/mod.ts";


const canvas=createCanvas(1,1);
const ctx = canvas.getContext("2d");
export default function({ size, family, str}){
  ctx.font = `${size}px ${family}`;
  const result= ctx.measureText(str);
  result.height=result.actualBoundingBoxAscent 
                +result.actualBoundingBoxDescent;
  return result;
}