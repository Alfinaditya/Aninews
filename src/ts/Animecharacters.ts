export interface AnimeCharacters {
	characters: Character[];
	staff: Staff[];
}

export interface Character {
	mal_id: number;
	url: string;
	image_url: string;
	name: string;
	role: string;
	voice_actors: VoiceActor[];
}

export interface VoiceActor {
	mal_id: number;
	name: string;
	url: string;
	image_url: string;
	language: string;
}

export interface Staff {
	mal_id: number;
	url: string;
	name: string;
	image_url: string;
	positions: string[];
}
