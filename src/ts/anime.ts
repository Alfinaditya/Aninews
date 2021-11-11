export interface Details {
	mal_id: number;
	url: string;
	image_url: string;
	trailer_url: string;
	title: string;
	title_english: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: any;
	status: string;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: string;
	score: number;
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	premiered: string;
	broadcast: string;
	related: Related;
	producers: Producer[];
	licensors: Licensor[];
	studios: Studio[];
	genres: Genre[];
	explicit_genres: any[];
	demographics: Demographic[];
	themes: Theme[];
	opening_themes: string[];
	ending_themes: string[];
	external_links: ExternalLink[];
}

export interface Aired {
	from: string;
	to: any;
	prop: Prop;
	string: string;
}

export interface Prop {
	from: From;
	to: To;
}

export interface From {
	day: number;
	month: number;
	year: number;
}

export interface To {
	day: any;
	month: any;
	year: any;
}

export interface Related {
	Adaptation: Adaptation[];
	'Side story': SideStory[];
	Character: Character[];
	Summary: Summary[];
	'Alternative version': AlternativeVersion[];
	Other: Other[];
}

export interface Adaptation {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface SideStory {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Character {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Summary {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface AlternativeVersion {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Other {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Producer {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Licensor {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Studio {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Genre {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Demographic {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Theme {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface ExternalLink {
	name: string;
	url: string;
}
