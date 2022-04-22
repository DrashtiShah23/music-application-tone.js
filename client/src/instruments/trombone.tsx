
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

import { Instrument, InstrumentProps } from '../Instruments';


interface TromboneKeyProps {
    note: string; 
    duration?: string;
    synth?: Tone.Synth; // Contains library code for making sound
    octave: number;
    index: number; // octave + index together give a location for the Trombone key
}

export function TromboneKey({
    note,
    synth,
    index,
}: TromboneKeyProps): JSX.Element {
 
    return (
        <div
            onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
            onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
            className={classNames('ba pointer absolute dim mytrombone', {
                
                
            })}
            style={{
           
                left: `${index * 10}rem`,
                marginLeft:  '1rem' ,
                padding: '2rem .7rem',
                margin: 35,
                display: "inline-block",
                borderRadius: "5%",
                width: 50,
                height: 50,
                color: '#C38D9E',
                backgroundColor: '#41B3A3',
          

            }}
        ></div>
    );
}

// eslint-disable-next-line
function TromboneKeyWithoutJSX({
    note,
    synth,
    index,
}: TromboneKeyProps): JSX.Element {
  
    return React.createElement(
        'div',
        {
            onMouseDown: () => synth?.triggerAttack(`${note}`),
            onMouseUp: () => synth?.triggerRelease('+0.25'),
            className: classNames('ba pointer absolute dim', {

            }),
            style: {
                top: 0,
                left: `${index * 2}rem`,
                padding: 1,
                margin: 20,
                borderRadius: "50%",
                height: 20,
            },
        },
        [],
    );
}

function TromboneType({ title, onClick, active }: any): JSX.Element {
    return (
        <div
            onClick={onClick}
            className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1 trombone_oscillator_buttons', {
                'black trombone_oscillator_buttons_pressed': active,
                'red b--black': !active,
            })}
        >
            {title}
        </div>
    );
}

function Trombone({ synth, setSynth }: InstrumentProps): JSX.Element {
    const keys = List([
        { note: 'Bb', idx: 0.5 },
        { note: 'F', idx: 1 },
        { note: 'Ab', idx: 1.5 },
        { note: 'Eb', idx: 2 },
        { note: 'D', idx: 2.5 },
        { note: 'Db', idx: 3 },
        { note: 'C', idx: 3.5 },
    ]);

    const setOscillator = (newType: Tone.ToneOscillatorType) => {
        setSynth(oldSynth => {
            oldSynth.disconnect();

            return new Tone.Synth({
                oscillator: { type: newType } as Tone.OmniOscillatorOptions,
                "envelope": {
                    "attack": 0.001,
                    "decay": 0.1,
                    "sustain": 1,
                    "release": 1.4,
                },
            }).toDestination();
        });
    };

    const oscillators: List<OscillatorType> = List([
        'amsine',
        'triangle',
        'amtriangle',
        'fmsine',
        'square',
        'fmsawtooth',
        'fmtriangle',
        'amsawtooth',
        'sawtooth',
        'sine',
    ]) as List<OscillatorType>;

    return (
        <div className="pv4" id ="trombone">
           
            <div className="relative dib h4 w-85">
                {Range(0, 3).map(octave =>
                    keys.map(key => {
                        const note = `${key.note}${octave}`;
                        return (
                            <TromboneKey
                                key={note} 
                                note={note}
                                synth={synth}
                                octave={octave}
                                index={(octave-2) * 7 + key.idx}
                            />
                        );
                    }),
                )}
            </div>
            
            <div className={'pl4 pt4 flex'}>
                {oscillators.map(o => (
                    <TromboneType
                        key={o}
                        title={o}
                        onClick={() => setOscillator(o)}
                        active={synth?.oscillator.type === o}
                    />
                ))}
            </div>
        </div>
    );
}

export const TromboneInstrument = new Instrument('Trombone', Trombone);
