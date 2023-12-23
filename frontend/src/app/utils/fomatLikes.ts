export const formatLikes = (likes: string): string => {
	const paddedLikes = likes.padStart(3, '0');

	if (paddedLikes.length > 3) {
		return '+999';
	}

	return paddedLikes;
};
