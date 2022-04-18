import React, {useState} from 'react';
import * as Tone from 'tone';
import { List } from 'immutable';
import GuitarBody from './GuitarComponent/GuitarBody.js';
import Fretboard from './GuitarComponent/Fretboard.js';
import './GuitarComponent/Guitar.css';
import { Instrument, InstrumentProps} from '../Instruments';
import classNames from 'classnames';


function GuitarType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Guitar({ synth, setSynth }: InstrumentProps): JSX.Element{


  const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);

  function updateCurrFrets(string: any){
      let newFrets = [...currFrets];
      newFrets[string] = newFrets[string] * -1;
      setCurrFrets(newFrets);
  }
  

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

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

  return (
    <div className="pv4">
      <div className="guitar container">
         <Fretboard
              currFrets={currFrets}
              updateCurrFrets={updateCurrFrets}
          />
          <GuitarBody
                currFrets={currFrets}
         />
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <GuitarType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  )
}



export const GuitarInstrument = new Instrument('Guitar', Guitar);