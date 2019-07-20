import { GameState } from './game/state';
import { QuestionsState } from './questions/state';

export interface RootState {
  game: GameState;
  questions: QuestionsState;
}
