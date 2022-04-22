// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const MosaicVisualizer = new Visualizer(
  'Mosaic Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    //const strokeColors = ['#fff700', '#4000ff', '#00ff08', '#ff0000']
    //const color = strokeColors[Math.floor(Math.random() * (strokeColors.length + 1))];
    //let z = 0;
    let y = 0; 
    let x = 0;

    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    /*let colorNum.push(String(strokeColors.pop()));
    p5.stroke(String(colorNum));
    strokeColors.push(String(colorNum));*/
    //const colors = ['#fff700', '#4000ff', '#00ff08', '#ff0000'];
    p5.background(0, 0, 0, 255);
    
    p5.stroke(0, 200, 150, 100);
    p5.noFill();
    p5.translate(width/4, height/2)
    const values = analyzer.getValue();

    p5.beginShape();
    for (let i = 0; i < Math.min(values.length, 250); i++) {
        let index = Math.floor(p5.map(i,0,width,0,values.length - 1));
        let r = p5.map(values[index] as unknown as number ,-1,0,90,200)
        x = r * Math.cos(i);
        y = r * Math.sin(i); 
        //z = r * Math.sin(i);
        
        p5.ellipse(x, y, 1);
    
    }
    p5.endShape();
    //z = 0;
    y = 0;
    x = 0;
  },
);
