/* Resource: https://youtu.be/0YvPgYDR1oM */

import P5 from 'p5';
import * as Tone from 'tone';
import { Visualizer } from '../Visualizers';

let start = 0;

export const DrashtiShah23Visualizer = new Visualizer(
  'drashtishah23',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    p5.background(10, 10, 25);
    p5.translate(width / 2.5, height / 2);
    p5.noiseDetail(2, 1);

    const values = analyzer.getValue();
    p5.beginShape();

//space variable is used to control how much 'i' is increased in each loop
    let space = 1

    for (let i = 0; i < 180; i += space) {
      let max_no_oscillations = values[i] as number;
      let temp_oscillations = Math.abs(max_no_oscillations)

     //need x and y offsets to control the height of the rectangle 
      let xoff = p5.map(Math.cos(i), 0, 1, 0, temp_oscillations * 10)
      let yoff = p5.map(Math.sin(i), 0, 1, 0, temp_oscillations * 10)
      let noise = p5.noise(xoff + start, yoff + start) * (temp_oscillations * 5)
      let height = p5.map(noise, 0, 1, 0, 200)
      let width = 3

      //adding the colors - used ideas from the video
      //use of sin and cosine functions make sure that noise works smoothly all around the circle
      let r = p5.map(Math.sin(i), -1, 1, 100, temp_oscillations * 140 + 160)
      let g = p5.map(i / 4, -100, 100, 0, temp_oscillations * 140 + 100)
      let b = p5.map(noise, 0, 1, 150, temp_oscillations * 140 + 115)
      p5.stroke(r, g, b);
      p5.fill(r, g, b);

      p5.rotate(space);
      p5.rect(75, 0, height, width);   
    }

    //incrementing the variable every frame
    start += 0.05;
    p5.endShape();

  },
  
);
