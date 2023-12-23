'use client';

import { useReducer } from 'react';
import KeywordItem from './keywordItem';
import { keywordReducer } from '../reducers/keyword.reducer';
import { KeywordActionType } from '../reducers/keyword.reducer.types';

interface KeywordsSelectorProps {
	keywords: string[];
}

const KeywordsSelector = ({ keywords }: KeywordsSelectorProps) => {
	const [state, dispatch] = useReducer(keywordReducer, []);

	const isValueStored = (keyword: string) => {
		return !!state.find((word) => word === keyword);
	};

	const handleKeywordClick = (keyword: string) => {
		isValueStored(keyword)
			? dispatch({ type: KeywordActionType.remove, value: keyword })
			: dispatch({ type: KeywordActionType.add, value: keyword });
	};

	return (
		<div className='flex flex-wrap gap-1 items-center justify-center min-w-[300px]'>
			{keywords.slice(1, keywords.length).map((keyword) => (
				<KeywordItem
					key={crypto.randomUUID().toString()}
					handleKeywordClick={handleKeywordClick}
					keyword={keyword}
					isValueStored={isValueStored(keyword)}
				/>
			))}
			<input
				name='keywords'
				className='hidden'
				value={state.join(', ')}
			/>
		</div>
	);
};

export default KeywordsSelector;
