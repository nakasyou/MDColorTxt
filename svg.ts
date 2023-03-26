import getTextSize from "./get-text-size.ts";
import TextToSVG from 'https://esm.sh/text-to-svg';

const textToSVG = TextToSVG.loadSync();

export default function({ str, color, size, family }){
  return textToSVG.getSVG(str, {
    x: 0,
    y: 0,
    fontSize: size,
    anchor: 'top',
    attributes: {
      fill: color,
      stroke: 'none'
    }
  });
  /*const textSize=getTextSize({
    str,size,family
  });
  return (`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="${textSize.width}" height="${textSize.height}"
    viewBox="0 0 ${textSize.width} ${textSize.height}">
    <text x="0" y="0" font-family="${family}" font-size="${size}">
      ${str}
    </text>
  </svg>`)*/
}
