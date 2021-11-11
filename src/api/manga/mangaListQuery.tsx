import axios from 'axios';

export async function mangaListQuery(
	input: string,
	status: string,
	page: number
) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/search/manga?q=${input}&type=${status}&order_by=title&page=${
				page + 1
			}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
