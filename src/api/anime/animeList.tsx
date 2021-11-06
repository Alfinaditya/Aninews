import axios from 'axios';

export async function animeList(page: number, select: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
