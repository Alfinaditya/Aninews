import axios from 'axios';

export async function animeIdRecommendations(id: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/anime/${id}/recommendations`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
