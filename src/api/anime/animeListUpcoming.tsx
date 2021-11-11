import axios from 'axios';

export async function animeListUpcoming() {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/top/anime/1/upcoming`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
