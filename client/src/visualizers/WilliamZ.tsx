// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const FlowerVisualizer = new Visualizer(
  'Flowerform',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    p5.angleMode('degrees');
    p5.background(0, 0, 0, 255); 
    p5.stroke(255, 0, 0);
    p5.noFill();
    p5.translate(width/2.5, height/2)
    const values = analyzer.getValue();
    for(let t = -1; t <= 1; t+=2){
      p5.beginShape();
      for (let i = 0; i <= 180; i++) {
        let index = Math.floor(p5.map(i,0,width,0,values.length - 1));
        let r = p5.map(values[index] as unknown as number ,-1,1,90,190)
        let x = r * Math.sin(i);
        let y = r * Math.cos(i); 
      // Place vertex
        p5.vertex(x, y);
      }
    p5.endShape();
    }
  },
);