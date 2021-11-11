import axios from 'axios';

export async function animeListQuery(
	input: string,
	status: string,
	page: number
) {
	let URL: string;
	if (status === 'airing' || status === 'upcoming') {
		URL = `https://api.jikan.moe/v3/search/anime?q=${input}&status=${status}g&order_by=title&page=${
			page + 1
		}`;
	} else {
		URL = `https://api.jikan.moe/v3/search/anime?q=${input}&type=${status}&order_by=title&page=${
			page + 1
		}`;
	}
	try {
		const res = await axios.get(URL);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
