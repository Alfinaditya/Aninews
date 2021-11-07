import axios from 'axios';

export async function animeListRecommendations() {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/anime/1/recommendations`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
