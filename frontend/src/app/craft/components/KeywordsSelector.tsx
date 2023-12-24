'use client';

import { useEffect, useReducer } from 'react';
import { keywordReducer } from '../reducers/keyword.reducer';
import { KeywordActionType } from '../reducers/keyword.reducer.types';
import KeywordItem from './KeywordItem';

interface KeywordsSelectorProps {
	keywords: string[];
	reset: boolean;
}

const KeywordsSelector = ({ keywords, reset }: KeywordsSelectorProps) => {
	const [state, dispatch] = useReducer(keywordReducer, []);

	const isValueStored = (keyword: string) => {
		return !!state.find((word) => word === keyword);
	};

	const handleKeywordClick = (keyword: string) => {
		isValueStored(keyword)
			? dispatch({ type: KeywordActionType.remove, value: [keyword] })
			: dispatch({ type: KeywordActionType.add, value: [keyword] });
	};

	useEffect(() => {
		reset && dispatch({ type: KeywordActionType.reset, value: [] });
	}, [reset]);

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
				readOnly
			/>
		</div>
	);
};

export default KeywordsSelector;
