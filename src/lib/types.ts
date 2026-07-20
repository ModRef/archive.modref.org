export type Conf = { name: string; url?: string };

export interface Workshop {
	year: number;
	edition: number; // 1..25
	ordinal: string; // "Twenty-Fifth"
	city: string;
	country: string;
	date?: string; // human-readable
	virtual?: boolean; // held online (city = the official host city)
	conference: Conf; // the CP conference it was co-located with
	floc?: Conf; // set when CP was part of a FLoC
	siteUrl?: string; // the edition's own website (may be an archived capture)
	archivedSite?: boolean; // siteUrl points at the Internet Archive
	status: 'past' | 'upcoming';
	cfpOpen?: boolean;
}

export type PaperType = 'Paper' | 'Invited' | 'Panel' | 'Poster' | 'Short' | 'Front matter';

export interface Paper {
	year: number;
	title: string;
	authors: string;
	type: PaperType;
	paper?: string; // absolute /files/… URL
	slides?: string;
}
