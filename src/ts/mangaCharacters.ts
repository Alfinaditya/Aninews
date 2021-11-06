export interface Characters {
	characters: Character[];
}

export interface Character {
	mal_id: number;
	url: string;
	image_url: string;
	name: string;
	role: string;
}
