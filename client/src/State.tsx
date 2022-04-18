// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
<<<<<<< HEAD
import {GuitarInstrument} from './instruments/Guitar';
import { WaveformVisualizer } from './visualizers/Waveform';
import { FlowerVisualizer } from './visualizers/Flower';

=======
import { ClarinetInstrument} from './instruments/swethac1130'
import { WaveformVisualizer } from './visualizers/Waveform';
import { OvalVisualizer  } from './visualizers/swethac1130';
>>>>>>> e7bd02265c5057e3359c23efc1768f2dfd639b0a

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
<<<<<<< HEAD
const instruments = List([PianoInstrument,GuitarInstrument]);       // similar to Instrument[]
=======
const instruments = List([PianoInstrument, ClarinetInstrument]);       // similar to Instrument[]
>>>>>>> e7bd02265c5057e3359c23efc1768f2dfd639b0a

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
<<<<<<< HEAD
const visualizers = List([WaveformVisualizer, FlowerVisualizer]);    // similar to Visualizer[]
=======
const visualizers = List([WaveformVisualizer, OvalVisualizer]);    // similar to Visualizer[]
>>>>>>> e7bd02265c5057e3359c23efc1768f2dfd639b0a


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