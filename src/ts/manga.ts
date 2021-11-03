export interface Details {
	mal_id: number;
	url: string;
	title: string;
	title_english: string;
	title_synonyms: any[];
	title_japanese: string;
	status: string;
	image_url: string;
	type: string;
	volumes: number;
	chapters: number;
	publishing: boolean;
	published: Published;
	rank: number;
	score: number;
	scored_by: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	related: Related;
	genres: Genre[];
	explicit_genres: any[];
	demographics: Demographic[];
	themes: Theme[];
	authors: Author[];
	serializations: Serialization[];
	external_links: ExternalLink[];
}

export interface Published {
	from: string;
	to: string;
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
	day: number;
	month: number;
	year: number;
}

export interface Related {
	'Side story': SideStory[];
	Adaptation: Adaptation[];
}

export interface SideStory {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Adaptation {
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

export interface Author {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface Serialization {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface ExternalLink {
	name: string;
	url: string;
}
