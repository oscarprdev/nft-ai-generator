import { KeywordAction, KeywordActionType } from './keyword.reducer.types';

export const keywordReducer = (state: string[], action: KeywordAction) => {
	const { value, type } = action;
	switch (type) {
		case KeywordActionType.add:
			return [...state, value[0]];
		case KeywordActionType.remove:
			return state.filter((val) => val !== value[0]);
		case KeywordActionType.reset:
			return value;
		default:
			return state;
	}
};
