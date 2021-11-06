import axios from 'axios';

export async function mangaListRecommendations() {
	try {
		const res = await axios.get(
			'https://api.jikan.moe/v3/manga/1/recommendations'
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
