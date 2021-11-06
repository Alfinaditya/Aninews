export interface MediaList {
	top: Top[];
}

export interface Top {
	mal_id: number;
	rank: number;
	title: string;
	url: string;
	image_url: string;
	type: string;
	episodes?: number;
	start_date: string;
	end_date?: string;
	members: number;
	score: number;
}

export interface MediaQuery {
	results: Result[];
	last_page: number;
}

export interface Result {
	mal_id: number;
	url: string;
	image_url: string;
	title: string;
	airing: boolean;
	synopsis: string;
	type: string;
	episodes: number;
	score: number;
	start_date?: string;
	end_date?: string;
	members: number;
	rated?: string;
}
export interface MediaRecommendations {
	recommendations: Recommendation[];
}

export interface Recommendation {
	mal_id: number;
	url: string;
	image_url: string;
	recommendation_url: string;
	title: string;
	recommendation_count: number;
}
