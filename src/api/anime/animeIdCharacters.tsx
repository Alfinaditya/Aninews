import axios from 'axios';

export async function animeIdCharacters(id: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/anime/${id}/characters_staff`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
