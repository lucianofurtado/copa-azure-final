export type MatchPhase = 'group' | 'round32' | 'round16' | 'quarterfinals' | 'semifinals' | 'third-place' | 'final';

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  stadiumId: string;
  date: string;
  time: string;
  phase: MatchPhase;
  group?: string;
  matchNumber?: number;
  availableTickets: {
    vip: number;
    cat1: number;
    cat2: number;
  };
}

export const phaseLabels: Record<MatchPhase, string> = {
  'group': 'Fase de Grupos',
  'round32': '32-avos de Final',
  'round16': 'Oitavas de Final',
  'quarterfinals': 'Quartas de Final',
  'semifinals': 'Semifinais',
  'third-place': 'Disputa do 3º Lugar',
  'final': 'Final',
};

// ============ PARTIDAS OFICIAIS FIFA COPA 2026 ============
export const matches: Match[] = [
  // ============ 1ª RODADA - FASE DE GRUPOS ============
  
  // 11 de junho de 2026 - Jogo de Abertura
  { id: "m1", homeTeamId: "mex", awayTeamId: "rsa", stadiumId: "azteca", date: "2026-06-11", time: "13:00", phase: "group", group: "A", matchNumber: 1, availableTickets: { vip: 5000, cat1: 25000, cat2: 57000 } },
  { id: "m2", homeTeamId: "kor", awayTeamId: "cze", stadiumId: "akron", date: "2026-06-11", time: "20:00", phase: "group", group: "A", matchNumber: 2, availableTickets: { vip: 2800, cat1: 14000, cat2: 33000 } },
  
  // 12 de junho de 2026
  { id: "m3", homeTeamId: "can", awayTeamId: "bih", stadiumId: "bmo", date: "2026-06-12", time: "15:00", phase: "group", group: "B", matchNumber: 3, availableTickets: { vip: 2800, cat1: 13000, cat2: 29700 } },
  { id: "m4", homeTeamId: "usa", awayTeamId: "par", stadiumId: "sofi", date: "2026-06-12", time: "18:00", phase: "group", group: "D", matchNumber: 4, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  
  // 13 de junho de 2026
  { id: "m5", homeTeamId: "qat", awayTeamId: "sui", stadiumId: "levis", date: "2026-06-13", time: "12:00", phase: "group", group: "B", matchNumber: 5, availableTickets: { vip: 3800, cat1: 19000, cat2: 45700 } },
  { id: "m6", homeTeamId: "bra", awayTeamId: "mar", stadiumId: "metlife", date: "2026-06-13", time: "18:00", phase: "group", group: "C", matchNumber: 6, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m7", homeTeamId: "hai", awayTeamId: "sco", stadiumId: "gillette", date: "2026-06-13", time: "21:00", phase: "group", group: "C", matchNumber: 7, availableTickets: { vip: 3500, cat1: 18000, cat2: 44000 } },
  { id: "m8", homeTeamId: "aus", awayTeamId: "tur", stadiumId: "bcplace", date: "2026-06-13", time: "21:00", phase: "group", group: "D", matchNumber: 8, availableTickets: { vip: 3200, cat1: 16000, cat2: 35000 } },
  
  // 14 de junho de 2026
  { id: "m9", homeTeamId: "ger", awayTeamId: "cur", stadiumId: "nrg", date: "2026-06-14", time: "12:00", phase: "group", group: "E", matchNumber: 9, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m10", homeTeamId: "civ", awayTeamId: "ecu", stadiumId: "lincoln", date: "2026-06-14", time: "19:00", phase: "group", group: "E", matchNumber: 10, availableTickets: { vip: 3800, cat1: 19000, cat2: 47000 } },
  { id: "m11", homeTeamId: "ned", awayTeamId: "jpn", stadiumId: "att", date: "2026-06-14", time: "15:00", phase: "group", group: "F", matchNumber: 11, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  { id: "m12", homeTeamId: "swe", awayTeamId: "tun", stadiumId: "bbva", date: "2026-06-14", time: "20:00", phase: "group", group: "F", matchNumber: 12, availableTickets: { vip: 3000, cat1: 15000, cat2: 35500 } },
  
  // 15 de junho de 2026
  { id: "m13", homeTeamId: "esp", awayTeamId: "cpv", stadiumId: "mercedes", date: "2026-06-15", time: "12:00", phase: "group", group: "H", matchNumber: 13, availableTickets: { vip: 4200, cat1: 20000, cat2: 46800 } },
  { id: "m14", homeTeamId: "ksa", awayTeamId: "uru", stadiumId: "hardrock", date: "2026-06-15", time: "18:00", phase: "group", group: "H", matchNumber: 14, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  { id: "m15", homeTeamId: "bel", awayTeamId: "egy", stadiumId: "lumen", date: "2026-06-15", time: "12:00", phase: "group", group: "G", matchNumber: 15, availableTickets: { vip: 3600, cat1: 18500, cat2: 46600 } },
  { id: "m16", homeTeamId: "irn", awayTeamId: "nzl", stadiumId: "sofi", date: "2026-06-15", time: "18:00", phase: "group", group: "G", matchNumber: 16, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  
  // 16 de junho de 2026
  { id: "m17", homeTeamId: "aut", awayTeamId: "jor", stadiumId: "levis", date: "2026-06-16", time: "21:00", phase: "group", group: "J", matchNumber: 17, availableTickets: { vip: 3800, cat1: 19000, cat2: 45700 } },
  { id: "m18", homeTeamId: "fra", awayTeamId: "sen", stadiumId: "metlife", date: "2026-06-16", time: "15:00", phase: "group", group: "I", matchNumber: 18, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m19", homeTeamId: "irq", awayTeamId: "nor", stadiumId: "gillette", date: "2026-06-16", time: "18:00", phase: "group", group: "I", matchNumber: 19, availableTickets: { vip: 3500, cat1: 18000, cat2: 44000 } },
  { id: "m20", homeTeamId: "arg", awayTeamId: "alg", stadiumId: "arrowhead", date: "2026-06-16", time: "20:00", phase: "group", group: "J", matchNumber: 20, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  
  // 17 de junho de 2026
  { id: "m21", homeTeamId: "por", awayTeamId: "cod", stadiumId: "nrg", date: "2026-06-17", time: "12:00", phase: "group", group: "K", matchNumber: 21, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m22", homeTeamId: "eng", awayTeamId: "cro", stadiumId: "att", date: "2026-06-17", time: "15:00", phase: "group", group: "L", matchNumber: 22, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  { id: "m23", homeTeamId: "gha", awayTeamId: "pan", stadiumId: "bmo", date: "2026-06-17", time: "19:00", phase: "group", group: "L", matchNumber: 23, availableTickets: { vip: 2800, cat1: 13000, cat2: 29700 } },
  { id: "m24", homeTeamId: "uzb", awayTeamId: "col", stadiumId: "azteca", date: "2026-06-17", time: "20:00", phase: "group", group: "K", matchNumber: 24, availableTickets: { vip: 5000, cat1: 25000, cat2: 57000 } },
  
  // ============ 2ª RODADA - FASE DE GRUPOS ============
  
  // 18 de junho de 2026
  { id: "m25", homeTeamId: "cze", awayTeamId: "rsa", stadiumId: "mercedes", date: "2026-06-18", time: "12:00", phase: "group", group: "A", matchNumber: 25, availableTickets: { vip: 4200, cat1: 20000, cat2: 46800 } },
  { id: "m26", homeTeamId: "sui", awayTeamId: "bih", stadiumId: "sofi", date: "2026-06-18", time: "12:00", phase: "group", group: "B", matchNumber: 26, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m27", homeTeamId: "can", awayTeamId: "qat", stadiumId: "bcplace", date: "2026-06-18", time: "15:00", phase: "group", group: "B", matchNumber: 27, availableTickets: { vip: 3200, cat1: 16000, cat2: 35000 } },
  { id: "m28", homeTeamId: "mex", awayTeamId: "kor", stadiumId: "akron", date: "2026-06-18", time: "19:00", phase: "group", group: "A", matchNumber: 28, availableTickets: { vip: 2800, cat1: 14000, cat2: 33000 } },
  
  // 19 de junho de 2026
  { id: "m29", homeTeamId: "tur", awayTeamId: "par", stadiumId: "levis", date: "2026-06-19", time: "21:00", phase: "group", group: "D", matchNumber: 29, availableTickets: { vip: 3800, cat1: 19000, cat2: 45700 } },
  { id: "m30", homeTeamId: "usa", awayTeamId: "aus", stadiumId: "lumen", date: "2026-06-19", time: "12:00", phase: "group", group: "D", matchNumber: 30, availableTickets: { vip: 3600, cat1: 18500, cat2: 46600 } },
  { id: "m31", homeTeamId: "sco", awayTeamId: "mar", stadiumId: "gillette", date: "2026-06-19", time: "18:00", phase: "group", group: "C", matchNumber: 31, availableTickets: { vip: 3500, cat1: 18000, cat2: 44000 } },
  { id: "m32", homeTeamId: "bra", awayTeamId: "hai", stadiumId: "lincoln", date: "2026-06-19", time: "21:00", phase: "group", group: "C", matchNumber: 32, availableTickets: { vip: 3800, cat1: 19000, cat2: 47000 } },
  
  // 20 de junho de 2026
  { id: "m33", homeTeamId: "tun", awayTeamId: "jpn", stadiumId: "bbva", date: "2026-06-20", time: "20:00", phase: "group", group: "F", matchNumber: 33, availableTickets: { vip: 3000, cat1: 15000, cat2: 35500 } },
  { id: "m34", homeTeamId: "ned", awayTeamId: "swe", stadiumId: "nrg", date: "2026-06-20", time: "12:00", phase: "group", group: "F", matchNumber: 34, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m35", homeTeamId: "ger", awayTeamId: "civ", stadiumId: "bmo", date: "2026-06-20", time: "16:00", phase: "group", group: "E", matchNumber: 35, availableTickets: { vip: 2800, cat1: 13000, cat2: 29700 } },
  { id: "m36", homeTeamId: "ecu", awayTeamId: "cur", stadiumId: "arrowhead", date: "2026-06-20", time: "19:00", phase: "group", group: "E", matchNumber: 36, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  
  // 21 de junho de 2026
  { id: "m37", homeTeamId: "esp", awayTeamId: "ksa", stadiumId: "mercedes", date: "2026-06-21", time: "12:00", phase: "group", group: "H", matchNumber: 37, availableTickets: { vip: 4200, cat1: 20000, cat2: 46800 } },
  { id: "m38", homeTeamId: "bel", awayTeamId: "irn", stadiumId: "sofi", date: "2026-06-21", time: "12:00", phase: "group", group: "G", matchNumber: 38, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m39", homeTeamId: "uru", awayTeamId: "cpv", stadiumId: "hardrock", date: "2026-06-21", time: "18:00", phase: "group", group: "H", matchNumber: 39, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  { id: "m40", homeTeamId: "nzl", awayTeamId: "egy", stadiumId: "bcplace", date: "2026-06-21", time: "18:00", phase: "group", group: "G", matchNumber: 40, availableTickets: { vip: 3200, cat1: 16000, cat2: 35000 } },
  
  // 22 de junho de 2026
  { id: "m41", homeTeamId: "arg", awayTeamId: "aut", stadiumId: "att", date: "2026-06-22", time: "12:00", phase: "group", group: "J", matchNumber: 41, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  { id: "m42", homeTeamId: "fra", awayTeamId: "irq", stadiumId: "lincoln", date: "2026-06-22", time: "17:00", phase: "group", group: "I", matchNumber: 42, availableTickets: { vip: 3800, cat1: 19000, cat2: 47000 } },
  { id: "m43", homeTeamId: "nor", awayTeamId: "sen", stadiumId: "metlife", date: "2026-06-22", time: "20:00", phase: "group", group: "I", matchNumber: 43, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m44", homeTeamId: "jor", awayTeamId: "alg", stadiumId: "levis", date: "2026-06-22", time: "20:00", phase: "group", group: "J", matchNumber: 44, availableTickets: { vip: 3800, cat1: 19000, cat2: 45700 } },
  
  // 23 de junho de 2026
  { id: "m45", homeTeamId: "por", awayTeamId: "uzb", stadiumId: "nrg", date: "2026-06-23", time: "12:00", phase: "group", group: "K", matchNumber: 45, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m46", homeTeamId: "eng", awayTeamId: "gha", stadiumId: "gillette", date: "2026-06-23", time: "16:00", phase: "group", group: "L", matchNumber: 46, availableTickets: { vip: 3500, cat1: 18000, cat2: 44000 } },
  { id: "m47", homeTeamId: "pan", awayTeamId: "cro", stadiumId: "bmo", date: "2026-06-23", time: "19:00", phase: "group", group: "L", matchNumber: 47, availableTickets: { vip: 2800, cat1: 13000, cat2: 29700 } },
  { id: "m48", homeTeamId: "col", awayTeamId: "cod", stadiumId: "akron", date: "2026-06-23", time: "20:00", phase: "group", group: "K", matchNumber: 48, availableTickets: { vip: 2800, cat1: 14000, cat2: 33000 } },
  
  // ============ 3ª RODADA - FASE DE GRUPOS ============
  
  // 24 de junho de 2026
  { id: "m49", homeTeamId: "sui", awayTeamId: "can", stadiumId: "bcplace", date: "2026-06-24", time: "12:00", phase: "group", group: "B", matchNumber: 49, availableTickets: { vip: 3200, cat1: 16000, cat2: 35000 } },
  { id: "m50", homeTeamId: "bih", awayTeamId: "qat", stadiumId: "lumen", date: "2026-06-24", time: "12:00", phase: "group", group: "B", matchNumber: 50, availableTickets: { vip: 3600, cat1: 18500, cat2: 46600 } },
  { id: "m51", homeTeamId: "sco", awayTeamId: "bra", stadiumId: "hardrock", date: "2026-06-24", time: "18:00", phase: "group", group: "C", matchNumber: 51, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  { id: "m52", homeTeamId: "mar", awayTeamId: "hai", stadiumId: "mercedes", date: "2026-06-24", time: "18:00", phase: "group", group: "C", matchNumber: 52, availableTickets: { vip: 4200, cat1: 20000, cat2: 46800 } },
  { id: "m53", homeTeamId: "cze", awayTeamId: "mex", stadiumId: "azteca", date: "2026-06-24", time: "19:00", phase: "group", group: "A", matchNumber: 53, availableTickets: { vip: 5000, cat1: 25000, cat2: 57000 } },
  { id: "m54", homeTeamId: "rsa", awayTeamId: "kor", stadiumId: "bbva", date: "2026-06-24", time: "19:00", phase: "group", group: "A", matchNumber: 54, availableTickets: { vip: 3000, cat1: 15000, cat2: 35500 } },
  
  // 25 de junho de 2026
  { id: "m55", homeTeamId: "ecu", awayTeamId: "ger", stadiumId: "metlife", date: "2026-06-25", time: "16:00", phase: "group", group: "E", matchNumber: 55, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m56", homeTeamId: "cur", awayTeamId: "civ", stadiumId: "lincoln", date: "2026-06-25", time: "16:00", phase: "group", group: "E", matchNumber: 56, availableTickets: { vip: 3800, cat1: 19000, cat2: 47000 } },
  { id: "m57", homeTeamId: "jpn", awayTeamId: "swe", stadiumId: "att", date: "2026-06-25", time: "18:00", phase: "group", group: "F", matchNumber: 57, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  { id: "m58", homeTeamId: "tun", awayTeamId: "ned", stadiumId: "arrowhead", date: "2026-06-25", time: "18:00", phase: "group", group: "F", matchNumber: 58, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  { id: "m59", homeTeamId: "tur", awayTeamId: "usa", stadiumId: "sofi", date: "2026-06-25", time: "19:00", phase: "group", group: "D", matchNumber: 59, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m60", homeTeamId: "par", awayTeamId: "aus", stadiumId: "levis", date: "2026-06-25", time: "19:00", phase: "group", group: "D", matchNumber: 60, availableTickets: { vip: 3800, cat1: 19000, cat2: 45700 } },
  
  // 26 de junho de 2026
  { id: "m61", homeTeamId: "nor", awayTeamId: "fra", stadiumId: "gillette", date: "2026-06-26", time: "15:00", phase: "group", group: "I", matchNumber: 61, availableTickets: { vip: 3500, cat1: 18000, cat2: 44000 } },
  { id: "m62", homeTeamId: "sen", awayTeamId: "irq", stadiumId: "bmo", date: "2026-06-26", time: "15:00", phase: "group", group: "I", matchNumber: 62, availableTickets: { vip: 2800, cat1: 13000, cat2: 29700 } },
  { id: "m63", homeTeamId: "cpv", awayTeamId: "ksa", stadiumId: "nrg", date: "2026-06-26", time: "19:00", phase: "group", group: "H", matchNumber: 63, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m64", homeTeamId: "uru", awayTeamId: "esp", stadiumId: "akron", date: "2026-06-26", time: "18:00", phase: "group", group: "H", matchNumber: 64, availableTickets: { vip: 2800, cat1: 14000, cat2: 33000 } },
  { id: "m65", homeTeamId: "egy", awayTeamId: "irn", stadiumId: "lumen", date: "2026-06-26", time: "20:00", phase: "group", group: "G", matchNumber: 65, availableTickets: { vip: 3600, cat1: 18500, cat2: 46600 } },
  { id: "m66", homeTeamId: "nzl", awayTeamId: "bel", stadiumId: "bcplace", date: "2026-06-26", time: "20:00", phase: "group", group: "G", matchNumber: 66, availableTickets: { vip: 3200, cat1: 16000, cat2: 35000 } },
  
  // 27 de junho de 2026
  { id: "m67", homeTeamId: "pan", awayTeamId: "eng", stadiumId: "metlife", date: "2026-06-27", time: "17:00", phase: "group", group: "L", matchNumber: 67, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m68", homeTeamId: "cro", awayTeamId: "gha", stadiumId: "lincoln", date: "2026-06-27", time: "17:00", phase: "group", group: "L", matchNumber: 68, availableTickets: { vip: 3800, cat1: 19000, cat2: 47000 } },
  { id: "m69", homeTeamId: "col", awayTeamId: "por", stadiumId: "hardrock", date: "2026-06-27", time: "19:30", phase: "group", group: "K", matchNumber: 69, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  { id: "m70", homeTeamId: "cod", awayTeamId: "uzb", stadiumId: "mercedes", date: "2026-06-27", time: "19:30", phase: "group", group: "K", matchNumber: 70, availableTickets: { vip: 4200, cat1: 20000, cat2: 46800 } },
  { id: "m71", homeTeamId: "alg", awayTeamId: "aut", stadiumId: "arrowhead", date: "2026-06-27", time: "21:00", phase: "group", group: "J", matchNumber: 71, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  { id: "m72", homeTeamId: "jor", awayTeamId: "arg", stadiumId: "att", date: "2026-06-27", time: "21:00", phase: "group", group: "J", matchNumber: 72, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  
  // ============ 32-AVOS DE FINAL (MATA-MATA) ============
  { id: "m73", homeTeamId: "tbd-2a", awayTeamId: "tbd-2b", stadiumId: "sofi", date: "2026-06-28", time: "18:00", phase: "round32", matchNumber: 73, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m74", homeTeamId: "tbd-1e", awayTeamId: "tbd-r32-1", stadiumId: "gillette", date: "2026-06-29", time: "15:00", phase: "round32", matchNumber: 74, availableTickets: { vip: 3500, cat1: 18000, cat2: 44000 } },
  { id: "m75", homeTeamId: "tbd-1f", awayTeamId: "tbd-2c", stadiumId: "bbva", date: "2026-06-29", time: "18:00", phase: "round32", matchNumber: 75, availableTickets: { vip: 3000, cat1: 15000, cat2: 35500 } },
  { id: "m76", homeTeamId: "tbd-1c", awayTeamId: "tbd-2f", stadiumId: "nrg", date: "2026-06-29", time: "20:00", phase: "round32", matchNumber: 76, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m77", homeTeamId: "tbd-1i", awayTeamId: "tbd-r32-1", stadiumId: "metlife", date: "2026-06-30", time: "15:00", phase: "round32", matchNumber: 77, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m78", homeTeamId: "tbd-2e", awayTeamId: "tbd-2i", stadiumId: "att", date: "2026-06-30", time: "18:00", phase: "round32", matchNumber: 78, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  { id: "m79", homeTeamId: "tbd-1a", awayTeamId: "tbd-r32-1", stadiumId: "azteca", date: "2026-06-30", time: "19:00", phase: "round32", matchNumber: 79, availableTickets: { vip: 5000, cat1: 25000, cat2: 57000 } },
  { id: "m80", homeTeamId: "tbd-1l", awayTeamId: "tbd-r32-1", stadiumId: "mercedes", date: "2026-07-01", time: "15:00", phase: "round32", matchNumber: 80, availableTickets: { vip: 4200, cat1: 20000, cat2: 46800 } },
  { id: "m81", homeTeamId: "tbd-1d", awayTeamId: "tbd-r32-1", stadiumId: "levis", date: "2026-07-01", time: "18:00", phase: "round32", matchNumber: 81, availableTickets: { vip: 3800, cat1: 19000, cat2: 45700 } },
  { id: "m82", homeTeamId: "tbd-1g", awayTeamId: "tbd-r32-1", stadiumId: "lumen", date: "2026-07-01", time: "20:00", phase: "round32", matchNumber: 82, availableTickets: { vip: 3600, cat1: 18500, cat2: 46600 } },
  { id: "m83", homeTeamId: "tbd-2k", awayTeamId: "tbd-2l", stadiumId: "bmo", date: "2026-07-02", time: "15:00", phase: "round32", matchNumber: 83, availableTickets: { vip: 2800, cat1: 13000, cat2: 29700 } },
  { id: "m84", homeTeamId: "tbd-1h", awayTeamId: "tbd-2j", stadiumId: "sofi", date: "2026-07-02", time: "18:00", phase: "round32", matchNumber: 84, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m85", homeTeamId: "tbd-1b", awayTeamId: "tbd-r32-1", stadiumId: "bcplace", date: "2026-07-02", time: "20:00", phase: "round32", matchNumber: 85, availableTickets: { vip: 3200, cat1: 16000, cat2: 35000 } },
  { id: "m86", homeTeamId: "tbd-1j", awayTeamId: "tbd-2h", stadiumId: "hardrock", date: "2026-07-03", time: "15:00", phase: "round32", matchNumber: 86, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  { id: "m87", homeTeamId: "tbd-1k", awayTeamId: "tbd-r32-1", stadiumId: "arrowhead", date: "2026-07-03", time: "18:00", phase: "round32", matchNumber: 87, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  { id: "m88", homeTeamId: "tbd-2d", awayTeamId: "tbd-2g", stadiumId: "att", date: "2026-07-03", time: "20:00", phase: "round32", matchNumber: 88, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  
  // ============ OITAVAS DE FINAL ============
  { id: "m89", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "lincoln", date: "2026-07-04", time: "15:00", phase: "round16", matchNumber: 89, availableTickets: { vip: 3800, cat1: 19000, cat2: 47000 } },
  { id: "m90", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "nrg", date: "2026-07-04", time: "18:00", phase: "round16", matchNumber: 90, availableTickets: { vip: 4000, cat1: 21000, cat2: 47000 } },
  { id: "m91", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "metlife", date: "2026-07-05", time: "15:00", phase: "round16", matchNumber: 91, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m92", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "azteca", date: "2026-07-05", time: "18:00", phase: "round16", matchNumber: 92, availableTickets: { vip: 5000, cat1: 25000, cat2: 57000 } },
  { id: "m93", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "sofi", date: "2026-07-06", time: "15:00", phase: "round16", matchNumber: 93, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m94", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "att", date: "2026-07-06", time: "18:00", phase: "round16", matchNumber: 94, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  { id: "m95", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "hardrock", date: "2026-07-07", time: "15:00", phase: "round16", matchNumber: 95, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  { id: "m96", homeTeamId: "tbd-r16-1", awayTeamId: "tbd-r16-1", stadiumId: "arrowhead", date: "2026-07-07", time: "18:00", phase: "round16", matchNumber: 96, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  
  // ============ QUARTAS DE FINAL ============
  { id: "m97", homeTeamId: "tbd-qf-1", awayTeamId: "tbd-qf-1", stadiumId: "sofi", date: "2026-07-11", time: "18:00", phase: "quarterfinals", matchNumber: 97, availableTickets: { vip: 4000, cat1: 20000, cat2: 46000 } },
  { id: "m98", homeTeamId: "tbd-qf-1", awayTeamId: "tbd-qf-1", stadiumId: "metlife", date: "2026-07-11", time: "21:00", phase: "quarterfinals", matchNumber: 98, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m99", homeTeamId: "tbd-qf-1", awayTeamId: "tbd-qf-1", stadiumId: "arrowhead", date: "2026-07-12", time: "18:00", phase: "quarterfinals", matchNumber: 99, availableTickets: { vip: 4200, cat1: 22000, cat2: 50000 } },
  { id: "m100", homeTeamId: "tbd-qf-1", awayTeamId: "tbd-qf-1", stadiumId: "att", date: "2026-07-12", time: "21:00", phase: "quarterfinals", matchNumber: 100, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  
  // ============ SEMIFINAIS ============
  { id: "m101", homeTeamId: "tbd-sf-1", awayTeamId: "tbd-sf-1", stadiumId: "metlife", date: "2026-07-15", time: "18:00", phase: "semifinals", matchNumber: 101, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
  { id: "m102", homeTeamId: "tbd-sf-2", awayTeamId: "tbd-sf-2", stadiumId: "att", date: "2026-07-15", time: "21:00", phase: "semifinals", matchNumber: 102, availableTickets: { vip: 4500, cat1: 22000, cat2: 53500 } },
  
  // ============ DISPUTA DO 3º LUGAR ============
  { id: "m103", homeTeamId: "tbd-3rd-1", awayTeamId: "tbd-3rd-2", stadiumId: "hardrock", date: "2026-07-18", time: "18:00", phase: "third-place", matchNumber: 103, availableTickets: { vip: 3500, cat1: 18000, cat2: 43800 } },
  
  // ============ FINAL ============
  { id: "m104", homeTeamId: "tbd-sf-1", awayTeamId: "tbd-sf-2", stadiumId: "metlife", date: "2026-07-19", time: "16:00", phase: "final", matchNumber: 104, availableTickets: { vip: 5000, cat1: 25000, cat2: 52500 } },
];

export const formatMatchDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const getMatchById = (id: string): Match | undefined => {
  return matches.find(match => match.id === id);
};

export const getMatchesByPhase = (phase: MatchPhase): Match[] => {
  return matches.filter(match => match.phase === phase);
};

export const getMatchesByTeam = (teamId: string): Match[] => {
  return matches.filter(match => 
    match.homeTeamId === teamId || match.awayTeamId === teamId
  );
};

export const getMatchesByStadium = (stadiumId: string): Match[] => {
  return matches.filter(match => match.stadiumId === stadiumId);
};

export const getMatchesByGroup = (group: string): Match[] => {
  return matches.filter(match => match.group === group);
};
