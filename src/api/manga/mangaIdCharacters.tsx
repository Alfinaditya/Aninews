import axios from 'axios';

export async function mangaIdCharacters(id: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/manga/${id}/characters`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
