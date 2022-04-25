// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import {GuitarInstrument} from './instruments/WilliamZ';
import {TromboneInstrument} from './instruments/trombone';
import { WaveformVisualizer } from './visualizers/Waveform';
import { FlowerVisualizer } from './visualizers/WilliamZ';
import { ClarinetInstrument} from './instruments/swethac1130'
import { SemiCircleVisualizer  } from './visualizers/swethac1130';
import {DrashtiShah23Visualizer} from './visualizers/DrashtiShah23'

import { HarpInstrument  } from './instruments/Bsandhu97';
import { MosaicVisualizer  } from './visualizers/Bsandhu97';
/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument,GuitarInstrument, ClarinetInstrument, TromboneInstrument, HarpInstrument]);       // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, FlowerVisualizer, SemiCircleVisualizer, DrashtiShah23Visualizer, MosaicVisualizer]);    // similar to Visualizer[]


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