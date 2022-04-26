// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const SemiCircleVisualizer = new Visualizer(
    'Semi-Circle Visualizer',
    (p5: P5, analyzer: Tone.Analyser) => {
        p5.angleMode(p5.DEGREES)
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        p5.background(10, 10, 25);
        p5.stroke(255)

        p5.translate(width/3, height/3)
        const analyzerValues = analyzer.getValue()
        let space = 1

        p5.beginShape()
        for (let i = 0; i < 180; i += space) {
            let xoff = p5.map(p5.cos(i), -1,1,0,3)
            let yoff = p5.map(p5.sin(i), -1,1,0,3)
            let n = p5.noise(xoff, yoff + (analyzerValues[i] as unknown as number))
            let height = p5.map(n, 0,1,-150,150 + (analyzerValues[i] as unknown as number))
            p5.rotate(space)
            p5.rect(200, 0, height, 1)
            const colors = ['#fff700', '#4000ff', '#00ff08', '#ff0000'];
            const color = colors[Math.floor(Math.random() * (colors.length + 1))];
            p5.stroke(String(color));
        }
        p5.endShape()
        
    },
);
