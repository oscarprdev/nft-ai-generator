export interface KeywordAction {
	type: KeywordActionType;
	value: string;
}

export enum KeywordActionType {
	add = 'add',
	remove = 'remove',
}
