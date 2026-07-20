import type { Workshop } from '$lib/types';

// The 25 ModRef editions, newest first. Curated from the archive series index.
// To feature an upcoming edition once its CfP opens: add it with
// status:'upcoming', cfpOpen:true — the site will promote it automatically.
export const workshops: Workshop[] = [
	{ year: 2026, edition: 25, ordinal: 'Twenty-Fifth', city: 'Lisbon', country: 'Portugal', date: '19 July 2026', conference: { name: 'CP 2026', url: 'https://cp2026.a4cp.org/' }, floc: { name: 'FLoC 2026', url: 'https://floc26.org' }, siteUrl: 'https://2026.modref.org', status: 'past' },
	{ year: 2025, edition: 24, ordinal: 'Twenty-Fourth', city: 'Glasgow', country: 'Scotland', conference: { name: 'CP 2025', url: 'http://cp2025.a4cp.org/' }, siteUrl: 'https://2025.modref.org', status: 'past' },
	{ year: 2024, edition: 23, ordinal: 'Twenty-Third', city: 'Girona', country: 'Spain', date: '2 September 2024', conference: { name: 'CP 2024', url: 'http://cp2024.a4cp.org/' }, siteUrl: 'https://2024.modref.org', status: 'past' },
	{ year: 2023, edition: 22, ordinal: 'Twenty-Second', city: 'Toronto', country: 'Canada', date: '27 August 2023', conference: { name: 'CP 2023', url: 'http://cp2023.a4cp.org/' }, siteUrl: 'https://2023.modref.org', status: 'past' },
	{ year: 2022, edition: 21, ordinal: 'Twenty-First', city: 'Haifa', country: 'Israel', date: '31 July 2022', conference: { name: 'CP 2022', url: 'http://cp2022.a4cp.org/' }, floc: { name: 'FLoC 2022', url: 'https://www.floc2022.org/' }, siteUrl: 'https://2022.modref.org', status: 'past' },
	{ year: 2021, edition: 20, ordinal: 'Twentieth', city: 'Montpellier', country: 'France', date: '25 October 2021', virtual: true, conference: { name: 'CP 2021', url: 'http://cp2021.a4cp.org/' }, siteUrl: 'https://2021.modref.org', status: 'past' },
	{ year: 2020, edition: 19, ordinal: 'Nineteenth', city: 'Louvain-la-Neuve', country: 'Belgium', conference: { name: 'CP 2020', url: 'http://cp2020.a4cp.org/' }, siteUrl: 'https://2020.modref.org', status: 'past' },
	{ year: 2019, edition: 18, ordinal: 'Eighteenth', city: 'Stamford', country: 'USA', date: '30 September 2019', conference: { name: 'CP 2019', url: 'http://cp2019.a4cp.org/' }, siteUrl: 'https://2019.modref.org', status: 'past' },
	{ year: 2018, edition: 17, ordinal: 'Seventeenth', city: 'Lille', country: 'France', date: '27 August 2018', conference: { name: 'CP 2018', url: 'http://cp2018.a4cp.org/' }, siteUrl: 'https://2018.modref.org', status: 'past' },
	{ year: 2017, edition: 16, ordinal: 'Sixteenth', city: 'Melbourne', country: 'Australia', conference: { name: 'CP 2017', url: 'http://cp2017.a4cp.org/' }, siteUrl: 'https://ozgurakgun.github.io/ModRef2017', status: 'past' },
	{ year: 2016, edition: 15, ordinal: 'Fifteenth', city: 'Toulouse', country: 'France', conference: { name: 'CP 2016', url: 'http://cp2016.a4cp.org/' }, siteUrl: 'http://cp2016.a4cp.org/program/workshops/ws-modref16.html', status: 'past' },
	{ year: 2015, edition: 14, ordinal: 'Fourteenth', city: 'Cork', country: 'Ireland', conference: { name: 'CP 2015', url: 'https://web.archive.org/web/20180218194104/http://booleconferences.ucc.ie/cp2015/' }, siteUrl: 'http://web.archive.org/web/20160629122436/http://booleconferences.ucc.ie/cp2015workshops/modref', archivedSite: true, status: 'past' },
	{ year: 2014, edition: 13, ordinal: 'Thirteenth', city: 'Lyon', country: 'France', conference: { name: 'CP 2014', url: 'https://web.archive.org/web/20180321143328/http://cp2014.a4cp.org/' }, siteUrl: 'http://web.archive.org/web/20141015110617/http://cp2014.a4cp.org:80/workshops/modref14', archivedSite: true, status: 'past' },
	{ year: 2013, edition: 12, ordinal: 'Twelfth', city: 'Uppsala', country: 'Sweden', conference: { name: 'CP 2013', url: 'https://web.archive.org/web/20171205190255/http://cp2013.a4cp.org:80/' }, siteUrl: 'http://web.archive.org/web/20140714212300/http://cp2013.a4cp.org/workshops/modref', archivedSite: true, status: 'past' },
	{ year: 2012, edition: 11, ordinal: 'Eleventh', city: 'Quebec City', country: 'Canada', conference: { name: 'CP 2012', url: 'http://archive.a4cp.org/cp2012' }, siteUrl: 'http://www.cmears.id.au/modref2012', status: 'past' },
	{ year: 2011, edition: 10, ordinal: 'Tenth', city: 'Perugia', country: 'Italy', conference: { name: 'CP 2011', url: 'http://www.dmi.unipg.it/cp2011/' }, siteUrl: 'http://web.archive.org/web/20191023212537/http://www-users.cs.york.ac.uk/~frisch/ModRef/11/', archivedSite: true, status: 'past' },
	{ year: 2010, edition: 9, ordinal: 'Ninth', city: 'St Andrews', country: 'Scotland', conference: { name: 'CP 2010' }, siteUrl: 'http://web.archive.org/web/20140715112219/http://www.it.uu.se/research/group/astra/ModRef10/', archivedSite: true, status: 'past' },
	{ year: 2009, edition: 8, ordinal: 'Eighth', city: 'Lisbon', country: 'Portugal', conference: { name: 'CP 2009' }, status: 'past' },
	{ year: 2008, edition: 7, ordinal: 'Seventh', city: 'Sydney', country: 'Australia', conference: { name: 'CP 2008' }, siteUrl: 'http://web.archive.org/web/20080609220629/http://www.it.uu.se:80/research/group/astra/ModRef08/', archivedSite: true, status: 'past' },
	{ year: 2007, edition: 6, ordinal: 'Sixth', city: 'Providence', country: 'USA', conference: { name: 'CP 2007', url: 'http://archive.a4cp.org/cp2007/' }, siteUrl: 'http://www.cse.cuhk.edu.hk/~jlee/cp07Model', status: 'past' },
	{ year: 2006, edition: 5, ordinal: 'Fifth', city: 'Nantes', country: 'France', conference: { name: 'CP 2006', url: 'http://web.archive.org/web/20110326174836/http://www.sciences.univ-nantes.fr/cp06/' }, siteUrl: 'http://web.archive.org/web/20060520144559/http://www.cs.ucc.ie:80/cp06/cp06.html', archivedSite: true, status: 'past' },
	{ year: 2005, edition: 4, ordinal: 'Fourth', city: 'Sitges', country: 'Spain', conference: { name: 'CP 2005' }, siteUrl: 'http://web.archive.org/web/20060701170706/http://homes.ieu.edu.tr:80/~bhnich/cp05ws/', archivedSite: true, status: 'past' },
	{ year: 2004, edition: 3, ordinal: 'Third', city: 'Toronto', country: 'Canada', conference: { name: 'CP 2004' }, siteUrl: 'http://web.archive.org/web/20191023212937/http://www-users.cs.york.ac.uk/~frisch/ModRef/04/', archivedSite: true, status: 'past' },
	{ year: 2003, edition: 2, ordinal: 'Second', city: 'Kinsale', country: 'Ireland', conference: { name: 'CP 2003' }, siteUrl: 'http://web.archive.org/web/20191023212511/http://www-users.cs.york.ac.uk/~frisch/ModRef/03/', archivedSite: true, status: 'past' },
	{ year: 2002, edition: 1, ordinal: 'First', city: 'Ithaca', country: 'USA', conference: { name: 'CP 2002' }, siteUrl: 'http://web.archive.org/web/20191023214924/http://www-users.cs.york.ac.uk/~frisch/ModRef/02/', archivedSite: true, status: 'past' }
];

/** The edition to feature on the home page: an open CfP if any, else the most recent. */
export function featuredWorkshop(list: Workshop[] = workshops): Workshop {
	const upcoming = list.filter((w) => w.status === 'upcoming').sort((a, b) => a.year - b.year)[0];
	return upcoming ?? [...list].sort((a, b) => b.year - a.year)[0];
}
