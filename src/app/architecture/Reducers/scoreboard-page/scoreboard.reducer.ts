import { createReducer, on } from "@ngrx/store";
import * as ScoreboardPageActions from "./scoreboard-page.actions";
import { state } from "@angular/animations";

export interface State {
    home: number;
    away: number;
}

export const initialState: State = {
    home: 0,
    away: 0
}
export const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
)

export const scoreboardFeatureKey = 'game';
