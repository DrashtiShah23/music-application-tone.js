// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

let diameter = 0;

export const OvalVisualizer = new Visualizer(
    'OvalVisualizer',
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = 150;
        const height = 150;
        const colors = ['#fff700', '#4000ff', '#00ff08', '#ff0000'];
        p5.background(0, 0, 0, 255);
        const color = colors[Math.floor(Math.random() * (colors.length + 1))];
        p5.stroke(String(color));

        const analyzerValues = analyzer.getValue();

        p5.beginShape();
        for (let i = 0; i < Math.min(analyzerValues.length, 255) ; i++) {
            const amplitude = analyzerValues[i] as number;
            const angle = 361
            const horizontalPosition = (width*-5) - width / 2 * p5.cos(2 * Math.PI * amplitude + angle);
            const verticalPosition = (height*-0.5) - height / 2 * p5.sin(2 * Math.PI * -1 * amplitude + angle);
            diameter += amplitude
            p5.circle(horizontalPosition + 11 * 115, verticalPosition + 250  , diameter); 
        }
        p5.endShape(); 
        diameter = 0;
    
    },
);

