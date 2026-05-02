export const seasons = {
  summer: { name: "Summer Blaze", primary: "#FF6B35", secondary: "#FFD700", accent: "#FF4500", months: "Dec–Feb" },
  autumn: { name: "Autumn Harvest", primary: "#C97B2A", secondary: "#8B4513", accent:"#D4A017", months: "Mar–May" },
  winter: { name: "Winter Frost", primary: "#5E8CA8", secondary: "#1B3A4B", accent: "#E8D5B7", months: "Jun–Aug" },
  spring: { name: "Spring Bloom", primary: "#7BC950", secondary: "#F5A623", accent: "#FF69B4", months: "Sep–Nov" },
} as const;

export type SeasonKey = keyof typeof seasons;

export interface Territory {
  id: string;
  name: string;
  province: string;
  state: "available" | "discussion" | "committed";
  interest: number;
  crest: { bg: string; outline: string; inner: string } | null;
}

export const territories: Territory[] = [
  { id: "gp-jhb", name: "Johannesburg Central", province: "Gauteng", state: "discussion", interest: 14, crest: null },
  { id: "gp-pta", name: "Pretoria East", province: "Gauteng", state: "available", interest: 4, crest: null },
  { id: "gp-sdt", name: "Sandton", province: "Gauteng", state: "committed", interest: 0, crest: { bg: "#D4A017", outline: "#0A1628", inner: "#F5E6C8" } },
  { id: "wc-cpt", name: "Cape Town CBD", province: "Western Cape", state: "committed", interest: 0, crest: { bg: "#1B3A4B", outline: "#F5E6C8", inner: "#E8D5B7" } },
  { id: "wc-stl", name: "Stellenbosch", province: "Western Cape", state: "discussion", interest: 9, crest: null },
  { id: "wc-pkl", name: "Paarl / Franschhoek", province: "Western Cape", state: "available", interest: 2, crest: null },
  { id: "kz-dbn", name: "Durban North", province: "KwaZulu-Natal", state: "available", interest: 6, crest: null },
  { id: "kz-pmb", name: "Pietermaritzburg", province: "KwaZulu-Natal", state: "available", interest: 1, crest: null },
  { id: "ec-plz", name: "Gqeberha", province: "Eastern Cape", state: "discussion", interest: 5, crest: null },
  { id: "ec-ell", name: "East London", province: "Eastern Cape", state: "available", interest: 0, crest: null },
  { id: "fs-bfn", name: "Bloemfontein", province: "Free State", state: "available", interest: 2, crest: null },
  { id: "mp-nel", name: "Mbombela", province: "Mpumalanga", state: "available", interest: 0, crest: null },
  { id: "lp-plk", name: "Polokwane", province: "Limpopo", state: "available", interest: 1, crest: null },
  { id: "nw-rus", name: "Rustenburg", province: "North West", state: "available", interest: 0, crest: null },
  { id: "nc-kbl", name: "Kimberley", province: "Northern Cape", state: "available", interest: 0, crest: null },
];

export interface GalleryCrest {
  name: string; author: string; city: string;
  bg: string; outline: string; inner: string;
  votes: number; daysAgo: number; curated: boolean;
}

export const galleryCrests: GalleryCrest[] = (() => {
  const seed: any[] = [
    ["Joburg Sunset","Thabo M.","Johannesburg","#E85C2A","#0A1628","#FFD66E",2470,3,true],
    ["Cape Storm","Nadia R.","Cape Town","#1B3A4B","#E8D5B7","#5E8CA8",1980,5,true],
    ["Karoo Dust","Pieter v.","Kimberley","#C97B2A","#3A1F0A","#E8D5B7",1560,8,true],
    ["Midlands Green","Zanele K.","Pietermaritzburg","#7BC950","#1F3A12","#F5E6C8",1420,10,true],
    ["Sabi Evening","Lerato D.","Mbombela","#8B4513","#F5E6C8","#D4A017",1180,11,false],
    ["Atlantic Fog","Marco L.","Cape Town","#B8D4E3","#1B3A4B","#FFFFFF",1040,14,false],
    ["Kalahari Noon","Anika P.","Upington","#FFD700","#8B4513","#FF6B35",920,18,true],
    ["Drakensberg Dawn","Siphiwe N.","Pietermaritzburg","#F5A623","#0A1628","#FF69B4",882,20,false],
    ["Sandton Gold","Ricardo M.","Sandton","#D4A017","#0A1628","#F5E6C8",840,1,true],
    ["Bo-Kaap Rose","Yusuf A.","Cape Town","#E94B77","#0A1628","#FFD66E",812,22,false],
    ["Umgeni Teal","Precious D.","Durban","#0E7490","#F5E6C8","#67E8F9",776,25,true],
    ["Karoo Nightfall","Hendrik vd B.","Graaff-Reinet","#3A1F5E","#F5E6C8","#C084FC",748,26,false],
    ["Garden Route","Elmarie S.","George","#1E6B3A","#FFF4D6","#F5C542",710,28,true],
    ["Paarl Syrah","Charl B.","Paarl","#6B0F1A","#F5E6C8","#C0392B",688,30,false],
    ["Summerset","Kagiso M.","Soweto","#F97316","#0A1628","#FDE68A",642,32,true],
    ["Hartbeespoort","Corné J.","Hartbeespoort","#0B4870","#E8D5B7","#90CDF4",614,34,false],
    ["Tshwane Twilight","Mpho R.","Pretoria","#3B2E5A","#F5E6C8","#F5A623",598,36,false],
    ["Stellenbosch Oak","Johan vZ.","Stellenbosch","#4A3621","#F5E6C8","#A37A2C",580,38,true],
    ["Vilakazi Red","Nomvula K.","Soweto","#C0392B","#0A1628","#FDE68A",562,40,false],
    ["Karongwe Morning","Sipho X.","Hoedspruit","#8B5A2B","#F5E6C8","#FFB458",534,42,false],
    ["Table Mountain","Dirk P.","Cape Town","#455A64","#F5E6C8","#B0BEC5",502,44,false],
    ["Umhlanga Dusk","Priya S.","Umhlanga","#DB2777","#0A1628","#FDE68A",488,46,false],
    ["Franschhoek Vine","Margaux R.","Franschhoek","#2D4A2B","#F5E6C8","#D4A017",462,47,false],
    ["East Coast Mist","Bongani Z.","East London","#94A3B8","#1B3A4B","#F1F5F9",434,49,false],
    ["Mthatha Morning","Ayanda S.","Mthatha","#EA580C","#F5E6C8","#FDBA74",410,51,false],
    ["Polokwane Heat","Tebogo M.","Polokwane","#B91C1C","#FEF3C7","#F59E0B",388,53,false],
    ["Wilderness Coast","Leana F.","Wilderness","#0891B2","#F5E6C8","#67E8F9",366,55,false],
    ["Bloem Kopje","Johan K.","Bloemfontein","#A16207","#FEF3C7","#F59E0B",342,57,false],
    ["Camps Bay Blue","Stefan W.","Cape Town","#0284C7","#F5E6C8","#FCD34D",324,59,false],
    ["Rustenburg Gold","Tshepo N.","Rustenburg","#CA8A04","#0A1628","#FEF3C7",306,61,false],
    ["Knysna Forest","Liesl H.","Knysna","#14532D","#F5E6C8","#86EFAC",288,63,false],
    ["Winelands Harvest","Pieter B.","Stellenbosch","#7C2D12","#F5E6C8","#FDBA74",272,65,false],
    ["Soweto Stripes","Dumisani M.","Soweto","#000000","#F5E6C8","#FFD700",258,66,false],
    ["Protea","Siyamthanda N.","Cape Town","#BE185D","#166534","#FDE68A",242,68,false],
    ["Midlands Mist","Jenna T.","Howick","#64748B","#F1F5F9","#94A3B8",224,70,false],
    ["Witbank Iron","Koos S.","eMalahleni","#1F2937","#F59E0B","#FEF3C7",208,72,false],
    ["Vaal Reflection","Ntombi D.","Vereeniging","#475569","#F5E6C8","#CBD5E1",194,74,false],
    ["Lowveld Citrus","Farouk A.","Mbombela","#F59E0B","#1F2937","#FEF3C7",178,76,false],
    ["Clarens Sunset","Marié L.","Clarens","#DC2626","#FEF3C7","#F59E0B",162,78,false],
    ["Ballito Dawn","Sanele D.","Ballito","#06B6D4","#F5E6C8","#FDE68A",148,80,false],
    ["Kruger Red","Sipho M.","Hoedspruit","#991B1B","#F5E6C8","#FDBA74",134,82,false],
    ["Randburg Racing","Eric V.","Randburg","#2563EB","#FEF3C7","#FDE047",122,84,false],
    ["Hermanus Tide","Nina R.","Hermanus","#0369A1","#F5E6C8","#93C5FD",110,86,false],
    ["Muizenberg Waves","Rachel C.","Muizenberg","#7DD3FC","#0A1628","#FEF3C7",98,88,false],
    ["Plettenberg Sand","Hugo M.","Plettenberg","#D4A017","#F5E6C8","#A16207",86,90,false],
    ["Port Alfred Sky","Zola T.","Port Alfred","#60A5FA","#F5E6C8","#1E3A8A",74,92,false],
    ["Magaliesburg Dusk","Andile B.","Magaliesburg","#5B21B6","#FEF3C7","#F59E0B",62,94,false],
    ["Gansbaai Deep","Pieter S.","Gansbaai","#1E3A8A","#F5E6C8","#60A5FA",52,96,false],
    ["Pilanesberg Ember","Neo M.","Rustenburg","#B45309","#FEF3C7","#F87171",42,98,false],
    ["Oudtshoorn Ochre","Emile K.","Oudtshoorn","#CA8A04","#422006","#FEF3C7",34,100,false],
    ["Melkbos Morning","Lisa B.","Melkbosstrand","#FED7AA","#0A1628","#F59E0B",28,102,false],
  ];
  return seed.map(([name,author,city,bg,outline,inner,votes,daysAgo,curated])=>({name,author,city,bg,outline,inner,votes,daysAgo,curated}));
})();

export function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const c = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * c).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function hexToHsl(hex: string): [number, number, number] {
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

export function initHsl(hex: string) {
  const [h, s, l] = hexToHsl(hex);
  return { h, s, l, hex };
}
