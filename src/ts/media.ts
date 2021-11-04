export interface MediaList {
	mal_id: number;
	rank: number;
	title: string;
	url: string;
	image_url: string;
	type: string;
	episodes: number;
	start_date: string;
	end_date: string | null;
	members: number;
	score: number;
}

export interface Recommendations {
	mal_id: number;
	url: string;
	image_url: string;
	recommendation_url: string;
	title: string;
	recommendation_count: number;
}
