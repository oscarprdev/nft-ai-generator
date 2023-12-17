export interface QuestionsInfo {
	title: string;
	email: string;
	questions: QuestionsItems[];
}

export interface QuestionsItems {
	question: string;
	answer: string;
}
