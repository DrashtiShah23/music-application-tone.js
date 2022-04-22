/// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import {List, Range} from 'immutable';
import React from 'react';
import {useEffect} from 'react';

// project imports
import {Instrument, InstrumentProps} from '../Instruments';
import {RecursivePartial} from "tone/Tone/core/util/Interface";
import {OmniOscillatorOptions} from "tone/Tone/source/oscillator/OscillatorInterface";
import image from './../img/harp_edit.png';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Violin.
 ** ------------------------------------------------------------------------ */


 interface HarpStringsProps {
    note: string; // C, D, E, F, G, A, B
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    octave: number;
    index: number; 
    distanceTop: number;
    distanceLeft: number; 
  }

export function HarpStrings({note, synth, index, distanceTop, distanceLeft}: HarpStringsProps): JSX.Element {
  return (
      <div
        onMouseDown={() => synth?.triggerAttack(`${note}`, '+0.35')} 
        onMouseUp={() => synth?.triggerRelease('+0.45')}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: distanceTop,
          left: `${distanceLeft}rem`,
          zIndex: 0,
          marginLeft:  '0.8rem',
          background: '#00ff08',
          height: '1rem',
          width: "1rem",
          borderRadius: ".5rem"
        }}>
      </div>
  );
}

/*
function HarpType({ title, onClick, active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
            'b--black black': active,
            'gray b--light-gray': !active,
            })}
            style={{
                marginTop: '2rem',
                marginLeft:  '0.8rem',
            }}
        >
            {title}
        </div>
    );
  }
  */

function Harp({synth, setSynth}: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);
  
/*
  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };
*/
  const setOscillator = () => {
    setSynth(oldSynth => {
      oldSynth.disconnect();
      return new Tone.Synth({
        "volume": 3,
        "detune": 10,
        "envelope": {
          "attack": 1,
          "attackCurve": "exponential",
          "decay": 1,
          "decayCurve": "linear",
          "release": 1,
          "releaseCurve": "linear",
          "sustain": 0.5
        },
        "oscillator": {
          "partialCount": 7,
          "partials": [
             
            2, 1, 0.2, 0.01, .0001, .000001, .000000001 
          ],
          "phase": 0,
          "type": "custom",
          "count": 7,
          "spread": 2
      } as RecursivePartial<OmniOscillatorOptions>,
      }).toDestination();
    });
  };

/*
  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;
*/
  useEffect(setOscillator, [setSynth]);

  return (
    <div className="pv4">

      <div className={"image"}>
        <img src={image} alt={"Harp"} style={{
          position: 'absolute',
          top: window.innerHeight/100,
          left: window.innerWidth/10,
        }}/>
      </div>
    
      <div className="relative dib h4 w-100 ml4">
         {Range(2, 4).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`; 
            return (
              <HarpStrings
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
                distanceTop={90}
                distanceLeft={(key.idx)+14}
              />
            );
          }),
        )}
      </div>
        
      <div className="relative dib h4 w-100 ml4">
        {Range(4, 5).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <HarpStrings
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
                distanceTop={20}
                distanceLeft={(key.idx)+17}
              />
            );
          }),
        )}
      </div>

      <div className="relative dib h4 w-100 ml4">
        {Range(5, 6).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <HarpStrings
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
                distanceTop={-40}
                distanceLeft={(key.idx + 20)}
              />
            );
          }),
        )}
      </div>

      <div className="relative dib h4 w-100 ml4">
        {Range(6, 7).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <HarpStrings
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
                distanceTop={-205}
                distanceLeft={(key.idx + 26)}
              />
            );
          }),
        )}
      </div>

      <div className="relative dib h4 w-100 ml4">
        {Range(7, 7.5).map(octave =>
          keys.map(key => {
            const note = `${key.note}${octave}`;
            return (
              <HarpStrings
                key={note} //react key
                note={note}
                synth={synth}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
                distanceTop={-390}
                distanceLeft={(key.idx + 29)}
              />
            );
          }),
        )}
      </div>
      
      <div className={'pl4 pt1 flex'}/*>
        
        {oscillators.map(o => (
          <HarpType
            key={o}
            title={o}
            onClick={() => setOscillator()}
            active={synth?.oscillator.type === o}
          />
        ))}*/
      ></div>
    </div>
  );
}

export const HarpInstrument = new Instrument('Harp', Harp);