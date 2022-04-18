// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';

// project imports
import {Instrument, InstrumentProps} from '../Instruments';
import {RecursivePartial} from "tone/Tone/core/util/Interface";
import {OmniOscillatorOptions} from "tone/Tone/source/oscillator/OscillatorInterface";
import image from './../img/clarinet.jpeg';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Clarinet. 
 ** ------------------------------------------------------------------------ */

interface ClarinetKeyProps {
  minorBool?: boolean; 
  yPosition: number;
  xPosition: number; 
  rotation: string; 
}

const synth =  new Tone.Synth({
  "volume": 20,
  "detune": 0,
  "portamento": 0,
  "envelope": {
    "attack": 2,
    "attackCurve": "cosine",
    "decay": 0.1,
    "decayCurve": "linear",
    "release": 0.2,
    "releaseCurve": "cosine",
    "sustain": 0.2
  },
  "oscillator": {
    "partialCount": 5,
    "partials": [
      1,
      0.8434636622299384,
      0.000244140625,
      0.31640625,
      0.0625
    ],
    "phase": 8,
    "type": "custom"
  } as RecursivePartial<OmniOscillatorOptions>,
}).toDestination();

//(A B C D E F G) Style
const clarinet_sound = async (keyNumber: string) => {
    if (keyNumber === "button1") {
      synth.triggerAttackRelease('A4', '8n')
  } 
  else if (keyNumber === "button2") {
    synth.triggerAttackRelease('B4', '8n')
  }
  else if (keyNumber === "button3") {
    synth.triggerAttackRelease('C4', '8n')
  }
  else if (keyNumber === "button4") {
    synth.triggerAttackRelease('D4', '8n')
  }
  else if (keyNumber === "button5") {
    synth.triggerAttackRelease('E4', '8n')
  }
  else if (keyNumber === "button6") {
    synth.triggerAttackRelease('F4', '8n')
  }
  else if (keyNumber === "button7") {
    synth.triggerAttackRelease('G4', '8n')
  }
}

export function ClarinetKey1({ minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div 
      style={{
        transform: rotation
        }}>
       <button id = "key1" onClick={() => clarinet_sound("button1")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#FFC033",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );
}
export function ClarinetKey2({minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div
      style={{
        transform: rotation
        }}>
      <button id="key2" onClick={() => clarinet_sound("button2")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#FFF633",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );
}
export function ClarinetKey3({ minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div
      style={{
        transform: rotation
        }}>
      <button id="key3"  onClick={() => clarinet_sound("button3")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#FF33FF",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );
}
export function ClarinetKey4({ minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div
      style={{
        transform: rotation
        }}>
      <button id="key4"  onClick={() => clarinet_sound("button4")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#33FFFC",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );
}
export function ClarinetKey5({minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div
      style={{
        transform: rotation
        }}>
      <button id="key5"  onClick={() => clarinet_sound("button5")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#33FF36",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );
}
export function ClarinetKey6({minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div
      style={{
        transform: rotation
        }}>
      <button id="key6"  onClick={() => clarinet_sound("button6")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#A569BD",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );

}
export function ClarinetKey7({ minorBool, yPosition: topDi, xPosition: leftDi, rotation}: ClarinetKeyProps): JSX.Element {
  return (
    <div 
      style={{
        transform: rotation
        }}>
       <button id = "key1" onClick={() => clarinet_sound("button7")}
        className={classNames('ba pointer absolute dim')}
        style={{
          top: topDi,
          transform: "rotate(0deg)",
          left: `${leftDi}rem`,
          marginLeft: minorBool ? '0.25rem' : 0,
          background: "#080CF0",
          height: '15px',
          width: "15px",
          borderRadius: "50%"
        }}>
      </button>
    </div>
  );
}


function Clarinet({synth, setSynth}: InstrumentProps): JSX.Element {
  return (
    <div className="pv4">
      <div className={"image"}>
        <img id = "image" src={image} alt={"Carinet"} style={{
          position: 'absolute',
          top: window.innerHeight/4,
          left: window.innerWidth/8
        }}/>
      </div>
      <div className="relative dib h4 w-100 ml4">
          <ClarinetKey1
            yPosition={window.innerHeight/4 + 4}
            xPosition={23.7}
            rotation={"rotate(1.5deg)"}
          />  
          <ClarinetKey2
            yPosition={window.innerHeight/4 + 3}
            xPosition={25}
            rotation={"rotate(1.5deg)"}
          />
          <ClarinetKey3
            yPosition={window.innerHeight/4 + 1}
            xPosition={26.4}
            rotation={"rotate(1.5deg)"}
          />  
           <ClarinetKey4
            yPosition={window.innerHeight/4 + 1}
            xPosition={27.3}
            rotation={"rotate(1.5deg)"}
          />  
           <ClarinetKey5
            yPosition={window.innerHeight/4}
            xPosition={30.8}
            rotation={"rotate(1.5deg)"}
          />  
          <ClarinetKey6
            yPosition={window.innerHeight/4}
            xPosition={31.7}
            rotation={"rotate(1.5deg)"}
          />  
          <ClarinetKey7
            yPosition={window.innerHeight/4}
            xPosition={32.6}
            rotation={"rotate(1.5deg)"}
          />  
      </div>
    </div>
  );
}

export const ClarinetInstrument = new Instrument('Clarinet', Clarinet);


