import axios from 'axios';

export async function mangaId(id: string) {
	try {
		const res = await axios.get(`https://api.jikan.moe/v3/manga/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
