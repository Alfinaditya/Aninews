import axios from 'axios';

export async function mangaIdRecommendations(id: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/manga/${id}/recommendations`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
