import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';

interface KeywordItemProps {
	handleKeywordClick(keyword: string): void;
	isValueStored: boolean;
	keyword: string;
}

const KeywordItem = ({ handleKeywordClick, isValueStored, keyword }: KeywordItemProps) => {
	return (
		<span
			key={crypto.randomUUID().toString()}
			onClick={() => handleKeywordClick(keyword)}
			className={`flex items-center gap-1 w-fit py-1 px-2 border rounded-2xl cursor-pointer ${
				isValueStored ? 'bg-[var(--contrast)] text-white hover:text-black' : 'hover:bg-[var(--contrast)]'
			} transition-colors duration-300`}>
			{isValueStored ? <MinusIcon className='w-3' /> : <PlusIcon className='w-3' />}
			<p className='text-sm font-light'>{keyword}</p>
		</span>
	);
};

export default KeywordItem;
