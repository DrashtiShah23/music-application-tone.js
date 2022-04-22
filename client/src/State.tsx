// 3rd party
import { List, Map } from 'immutable';

// project dependencies
//Instruments
import { PianoInstrument } from './instruments/Piano';
import {GuitarInstrument} from './instruments/WilliamZ';
import { HarpInstrument  } from './instruments/Bsandhu97';
import { ClarinetInstrument} from './instruments/swethac1130'

//Visualizer
import { WaveformVisualizer } from './visualizers/Waveform';
import { FlowerVisualizer } from './visualizers/WilliamZ';
import { OvalVisualizer  } from './visualizers/swethac1130';
import { MosaicVisualizer  } from './visualizers/Bsandhu97';
/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, HarpInstrument, GuitarInstrument, ClarinetInstrument]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, FlowerVisualizer, OvalVisualizer, MosaicVisualizer ]);    // similar to Visualizer[]


/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});