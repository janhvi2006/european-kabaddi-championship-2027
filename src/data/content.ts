export type Category = "men" | "women";

export interface Nation {
  name: string;
  code: string;
  flagClass: string;
  category: Category[];
  group: string;
}

export interface TeamStanding {
  team: string;
  flagClass: string;
  p: number;
  w: number;
  l: number;
  pts: number;
}

export interface MatchItem {
  id: string;
  category: Category;
  home: string;
  away: string;
  homeFlag: string;
  awayFlag: string;
  homeScore?: number;
  awayScore?: number;
  status: "upcoming" | "result";
  stage: string;
  group: string;
  date: string;
  demo: boolean;
}

export interface Athlete {
  id: string;
  name: string;
  country: string;
  flagClass: string;
  position: string;
  category: Category;
  demo: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image?: string;
  demo: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  type: string;
  category: string;
  demo: boolean;
}

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Championship", path: "/championship" },
  { label: "Teams", path: "/teams" },
  { label: "Match Centre", path: "/match-centre" },
  { label: "Venue", path: "/venue" },
  { label: "News", path: "/news" },
  { label: "Media", path: "/media" },
  { label: "Sponsors", path: "/sponsors" },
  { label: "Tickets", path: "/tickets" },
  { label: "Contact", path: "/contact" },
];

export const NATIONS: Nation[] = [
  { name: "France", code: "FRA", flagClass: "flag-fr", category: ["men", "women"], group: "A" },
  { name: "Germany", code: "GER", flagClass: "flag-de", category: ["men", "women"], group: "A" },
  { name: "Poland", code: "POL", flagClass: "flag-pl", category: ["men", "women"], group: "B" },
  { name: "Italy", code: "ITA", flagClass: "flag-it", category: ["men", "women"], group: "B" },
  { name: "England", code: "ENG", flagClass: "flag-en", category: ["men", "women"], group: "A" },
  { name: "Netherlands", code: "NED", flagClass: "flag-nl", category: ["men", "women"], group: "B" },
  { name: "Czech Republic", code: "CZE", flagClass: "flag-cz", category: ["men", "women"], group: "A" },
  { name: "Hungary", code: "HUN", flagClass: "flag-hu", category: ["men", "women"], group: "B" },
];

export const STANDINGS: Record<Category, TeamStanding[]> = {
  men: [
    { team: "France", flagClass: "flag-fr", p: 3, w: 3, l: 0, pts: 9 },
    { team: "Germany", flagClass: "flag-de", p: 3, w: 2, l: 1, pts: 6 },
    { team: "England", flagClass: "flag-en", p: 3, w: 1, l: 2, pts: 3 },
    { team: "Czech Republic", flagClass: "flag-cz", p: 3, w: 0, l: 3, pts: 0 },
  ],
  women: [
    { team: "Italy", flagClass: "flag-it", p: 3, w: 3, l: 0, pts: 9 },
    { team: "Poland", flagClass: "flag-pl", p: 3, w: 2, l: 1, pts: 6 },
    { team: "Netherlands", flagClass: "flag-nl", p: 3, w: 1, l: 2, pts: 3 },
    { team: "Hungary", flagClass: "flag-hu", p: 3, w: 0, l: 3, pts: 0 },
  ],
};

export const MATCHES: MatchItem[] = [
  {
    id: "m1", category: "men", home: "France", away: "Poland",
    homeFlag: "flag-fr", awayFlag: "flag-pl",
    status: "upcoming", stage: "Group Stage", group: "A", date: "15 June 2027", demo: true,
  },
  {
    id: "m2", category: "women", home: "Germany", away: "Netherlands",
    homeFlag: "flag-de", awayFlag: "flag-nl",
    status: "upcoming", stage: "Group Stage", group: "B", date: "15 June 2027", demo: true,
  },
  {
    id: "m3", category: "men", home: "England", away: "Czech Republic",
    homeFlag: "flag-en", awayFlag: "flag-cz",
    status: "upcoming", stage: "Group Stage", group: "A", date: "15 June 2027", demo: true,
  },
  {
    id: "m4", category: "men", home: "Germany", away: "Italy",
    homeFlag: "flag-de", awayFlag: "flag-it",
    homeScore: 24, awayScore: 28,
    status: "result", stage: "Final — Demo", group: "A", date: "Demo Result", demo: true,
  },
  {
    id: "m5", category: "women", home: "France", away: "Hungary",
    homeFlag: "flag-fr", awayFlag: "flag-hu",
    homeScore: 31, awayScore: 19,
    status: "result", stage: "Semi-Final — Demo", group: "B", date: "Demo Result", demo: true,
  },
];

export const ATHLETES: Athlete[] = [
  { id: "a1", name: "Lucas Moreau", country: "France", flagClass: "flag-fr", position: "Raider", category: "men", demo: true },
  { id: "a2", name: "Anna Schmidt", country: "Germany", flagClass: "flag-de", position: "Defender", category: "women", demo: true },
  { id: "a3", name: "Kamil Nowak", country: "Poland", flagClass: "flag-pl", position: "All-Rounder", category: "men", demo: true },
  { id: "a4", name: "Sofia Rossi", country: "Italy", flagClass: "flag-it", position: "Raider", category: "women", demo: true },
  { id: "a5", name: "James Carter", country: "England", flagClass: "flag-en", position: "Defender", category: "men", demo: true },
  { id: "a6", name: "Lotte Visser", country: "Netherlands", flagClass: "flag-nl", position: "All-Rounder", category: "women", demo: true },
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    title: "The Road to European Kabaddi Championship 2027",
    category: "Championship",
    date: "March 2027",
    excerpt: "As the championship approaches, European nations prepare to compete on the continental stage in Köln.",
    image: "/european-kabaddi-championship-2027/images/news/01_News_Road_to_EKC_2027.jpg",
    demo: true,
  },
  {
    id: "n2",
    title: "Men's and Women's Kabaddi Take the European Stage",
    category: "Competition",
    date: "March 2027",
    excerpt: "For the first time, both men's and women's categories will share one European championship platform.",
    image: "/european-kabaddi-championship-2027/images/news/02_News_European_Stage.jpg",
    demo: true,
  },
  {
    id: "n3",
    title: "Meet the Next Generation of European Kabaddi",
    category: "Athletes",
    date: "February 2027",
    excerpt: "A new wave of European athletes is redefining what Kabaddi looks like on the continent.",
    image: "/european-kabaddi-championship-2027/images/news/03_News_Next_Generation.jpg",
    demo: true,
  },
];

export const MEDIA_ITEMS: MediaItem[] = [
  { id: "v1", title: "Match Highlights", type: "video", category: "Highlights", demo: true },
  { id: "v2", title: "Athlete Stories", type: "video", category: "Stories", demo: true },
  { id: "v3", title: "Behind the Championship", type: "video", category: "Behind the Scenes", demo: true },
];

export const SPONSOR_TIERS = [
  { tier: "Title Partner", count: 1, level: "title" },
  { tier: "Gold Partners", count: 3, level: "gold" },
  { tier: "Official Partners", count: 4, level: "official" },
  { tier: "Media Partners", count: 3, level: "media" },
];
