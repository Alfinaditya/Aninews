import axios from 'axios';

export async function mangaList(page: number, select: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/top/manga/${page + 1}/${select}`
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

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

export async function mangaId(id: string) {
	try {
		const res = await axios.get(`https://api.jikan.moe/v3/manga/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

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
