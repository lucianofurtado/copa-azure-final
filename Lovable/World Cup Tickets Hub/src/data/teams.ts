export interface Team {
  id: string;
  name: string;
  code: string;
  flag: string;
  confederation: string;
  group?: string;
  isConfirmed: boolean;
  isTBD?: boolean;
  flagColor?: string;
}

export const teams: Team[] = [
  // Grupo A
  { id: "mex", name: "México", code: "MEX", flag: "https://flagcdn.com/w80/mx.png", confederation: "CONCACAF", group: "A", isConfirmed: true },
  { id: "rsa", name: "África do Sul", code: "RSA", flag: "https://flagcdn.com/w80/za.png", confederation: "CAF", group: "A", isConfirmed: true },
  { id: "kor", name: "Coreia do Sul", code: "KOR", flag: "https://flagcdn.com/w80/kr.png", confederation: "AFC", group: "A", isConfirmed: true },
  { id: "cze", name: "Tchéquia", code: "CZE", flag: "https://flagcdn.com/w80/cz.png", confederation: "UEFA", group: "A", isConfirmed: true },
  
  // Grupo B
  { id: "can", name: "Canadá", code: "CAN", flag: "https://flagcdn.com/w80/ca.png", confederation: "CONCACAF", group: "B", isConfirmed: true },
  { id: "qat", name: "Catar", code: "QAT", flag: "https://flagcdn.com/w80/qa.png", confederation: "AFC", group: "B", isConfirmed: true },
  { id: "sui", name: "Suíça", code: "SUI", flag: "https://flagcdn.com/w80/ch.png", confederation: "UEFA", group: "B", isConfirmed: true },
  { id: "bih", name: "Bósnia e Herzegovina", code: "BIH", flag: "https://flagcdn.com/w80/ba.png", confederation: "UEFA", group: "B", isConfirmed: true },
  
  // Grupo C
  { id: "bra", name: "Brasil", code: "BRA", flag: "https://flagcdn.com/w80/br.png", confederation: "CONMEBOL", group: "C", isConfirmed: true },
  { id: "mar", name: "Marrocos", code: "MAR", flag: "https://flagcdn.com/w80/ma.png", confederation: "CAF", group: "C", isConfirmed: true },
  { id: "hai", name: "Haiti", code: "HAI", flag: "https://flagcdn.com/w80/ht.png", confederation: "CONCACAF", group: "C", isConfirmed: true },
  { id: "sco", name: "Escócia", code: "SCO", flag: "https://flagcdn.com/w80/gb-sct.png", confederation: "UEFA", group: "C", isConfirmed: true },
  
  // Grupo D
  { id: "usa", name: "Estados Unidos", code: "USA", flag: "https://flagcdn.com/w80/us.png", confederation: "CONCACAF", group: "D", isConfirmed: true },
  { id: "par", name: "Paraguai", code: "PAR", flag: "https://flagcdn.com/w80/py.png", confederation: "CONMEBOL", group: "D", isConfirmed: true },
  { id: "aus", name: "Austrália", code: "AUS", flag: "https://flagcdn.com/w80/au.png", confederation: "AFC", group: "D", isConfirmed: true },
  { id: "tur", name: "Turquia", code: "TUR", flag: "https://flagcdn.com/w80/tr.png", confederation: "UEFA", group: "D", isConfirmed: true },
  
  // Grupo E
  { id: "ger", name: "Alemanha", code: "GER", flag: "https://flagcdn.com/w80/de.png", confederation: "UEFA", group: "E", isConfirmed: true },
  { id: "cur", name: "Curaçau", code: "CUR", flag: "https://flagcdn.com/w80/cw.png", confederation: "CONCACAF", group: "E", isConfirmed: true },
  { id: "civ", name: "Costa do Marfim", code: "CIV", flag: "https://flagcdn.com/w80/ci.png", confederation: "CAF", group: "E", isConfirmed: true },
  { id: "ecu", name: "Equador", code: "ECU", flag: "https://flagcdn.com/w80/ec.png", confederation: "CONMEBOL", group: "E", isConfirmed: true },
  
  // Grupo F
  { id: "ned", name: "Holanda", code: "NED", flag: "https://flagcdn.com/w80/nl.png", confederation: "UEFA", group: "F", isConfirmed: true },
  { id: "jpn", name: "Japão", code: "JPN", flag: "https://flagcdn.com/w80/jp.png", confederation: "AFC", group: "F", isConfirmed: true },
  { id: "tun", name: "Tunísia", code: "TUN", flag: "https://flagcdn.com/w80/tn.png", confederation: "CAF", group: "F", isConfirmed: true },
  { id: "swe", name: "Suécia", code: "SWE", flag: "https://flagcdn.com/w80/se.png", confederation: "UEFA", group: "F", isConfirmed: true },
  
  // Grupo G
  { id: "bel", name: "Bélgica", code: "BEL", flag: "https://flagcdn.com/w80/be.png", confederation: "UEFA", group: "G", isConfirmed: true },
  { id: "egy", name: "Egito", code: "EGY", flag: "https://flagcdn.com/w80/eg.png", confederation: "CAF", group: "G", isConfirmed: true },
  { id: "irn", name: "Irã", code: "IRN", flag: "https://flagcdn.com/w80/ir.png", confederation: "AFC", group: "G", isConfirmed: true },
  { id: "nzl", name: "Nova Zelândia", code: "NZL", flag: "https://flagcdn.com/w80/nz.png", confederation: "OFC", group: "G", isConfirmed: true },
  
  // Grupo H
  { id: "esp", name: "Espanha", code: "ESP", flag: "https://flagcdn.com/w80/es.png", confederation: "UEFA", group: "H", isConfirmed: true },
  { id: "cpv", name: "Cabo Verde", code: "CPV", flag: "https://flagcdn.com/w80/cv.png", confederation: "CAF", group: "H", isConfirmed: true },
  { id: "ksa", name: "Arábia Saudita", code: "KSA", flag: "https://flagcdn.com/w80/sa.png", confederation: "AFC", group: "H", isConfirmed: true },
  { id: "uru", name: "Uruguai", code: "URU", flag: "https://flagcdn.com/w80/uy.png", confederation: "CONMEBOL", group: "H", isConfirmed: true },
  
  // Grupo I
  { id: "fra", name: "França", code: "FRA", flag: "https://flagcdn.com/w80/fr.png", confederation: "UEFA", group: "I", isConfirmed: true },
  { id: "sen", name: "Senegal", code: "SEN", flag: "https://flagcdn.com/w80/sn.png", confederation: "CAF", group: "I", isConfirmed: true },
  { id: "nor", name: "Noruega", code: "NOR", flag: "https://flagcdn.com/w80/no.png", confederation: "UEFA", group: "I", isConfirmed: true },
  { id: "irq", name: "Iraque", code: "IRQ", flag: "https://flagcdn.com/w80/iq.png", confederation: "AFC", group: "I", isConfirmed: true },
  
  // Grupo J
  { id: "arg", name: "Argentina", code: "ARG", flag: "https://flagcdn.com/w80/ar.png", confederation: "CONMEBOL", group: "J", isConfirmed: true },
  { id: "aut", name: "Áustria", code: "AUT", flag: "https://flagcdn.com/w80/at.png", confederation: "UEFA", group: "J", isConfirmed: true },
  { id: "jor", name: "Jordânia", code: "JOR", flag: "https://flagcdn.com/w80/jo.png", confederation: "AFC", group: "J", isConfirmed: true },
  { id: "alg", name: "Argélia", code: "ALG", flag: "https://flagcdn.com/w80/dz.png", confederation: "CAF", group: "J", isConfirmed: true },
  
  // Grupo K
  { id: "por", name: "Portugal", code: "POR", flag: "https://flagcdn.com/w80/pt.png", confederation: "UEFA", group: "K", isConfirmed: true },
  { id: "uzb", name: "Uzbequistão", code: "UZB", flag: "https://flagcdn.com/w80/uz.png", confederation: "AFC", group: "K", isConfirmed: true },
  { id: "col", name: "Colômbia", code: "COL", flag: "https://flagcdn.com/w80/co.png", confederation: "CONMEBOL", group: "K", isConfirmed: true },
  { id: "cod", name: "Rep. Dem. do Congo", code: "COD", flag: "https://flagcdn.com/w80/cd.png", confederation: "CAF", group: "K", isConfirmed: true },
  
  // Grupo L
  { id: "eng", name: "Inglaterra", code: "ENG", flag: "https://flagcdn.com/w80/gb-eng.png", confederation: "UEFA", group: "L", isConfirmed: true },
  { id: "cro", name: "Croácia", code: "CRO", flag: "https://flagcdn.com/w80/hr.png", confederation: "UEFA", group: "L", isConfirmed: true },
  { id: "gha", name: "Gana", code: "GHA", flag: "https://flagcdn.com/w80/gh.png", confederation: "CAF", group: "L", isConfirmed: true },
  { id: "pan", name: "Panamá", code: "PAN", flag: "https://flagcdn.com/w80/pa.png", confederation: "CONCACAF", group: "L", isConfirmed: true },

  // TBD Placeholder teams for knockout rounds
  { id: "tbd-1a", name: "1º Grupo A", code: "1ºA", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2a", name: "2º Grupo A", code: "2ºA", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1b", name: "1º Grupo B", code: "1ºB", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2b", name: "2º Grupo B", code: "2ºB", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1c", name: "1º Grupo C", code: "1ºC", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2c", name: "2º Grupo C", code: "2ºC", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1d", name: "1º Grupo D", code: "1ºD", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2d", name: "2º Grupo D", code: "2ºD", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1e", name: "1º Grupo E", code: "1ºE", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2e", name: "2º Grupo E", code: "2ºE", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1f", name: "1º Grupo F", code: "1ºF", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2f", name: "2º Grupo F", code: "2ºF", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1g", name: "1º Grupo G", code: "1ºG", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2g", name: "2º Grupo G", code: "2ºG", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1h", name: "1º Grupo H", code: "1ºH", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2h", name: "2º Grupo H", code: "2ºH", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1i", name: "1º Grupo I", code: "1ºI", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2i", name: "2º Grupo I", code: "2ºI", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1j", name: "1º Grupo J", code: "1ºJ", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2j", name: "2º Grupo J", code: "2ºJ", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1k", name: "1º Grupo K", code: "1ºK", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2k", name: "2º Grupo K", code: "2ºK", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-1l", name: "1º Grupo L", code: "1ºL", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-2l", name: "2º Grupo L", code: "2ºL", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  
  // TBD for Knockout
  { id: "tbd-r32-1", name: "Vencedor Jogo 73", code: "R32", flag: "⚽", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-r16-1", name: "Vencedor Oitavas 1", code: "R16", flag: "⚽", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-qf-1", name: "Vencedor Quartas 1", code: "QF", flag: "⚽", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-sf-1", name: "Vencedor Semi 1", code: "SF", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-sf-2", name: "Vencedor Semi 2", code: "SF", flag: "🏆", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-3rd-1", name: "Perdedor Semi 1", code: "3º", flag: "🥉", confederation: "TBD", isConfirmed: true, isTBD: true },
  { id: "tbd-3rd-2", name: "Perdedor Semi 2", code: "3º", flag: "🥉", confederation: "TBD", isConfirmed: true, isTBD: true },
];

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getTeamsByConfederation = (confederation: string): Team[] => {
  return teams.filter(team => team.confederation === confederation && !team.isTBD);
};

export const getTeamsByGroup = (group: string): Team[] => {
  return teams.filter(team => team.group === group && !team.isTBD);
};

export const getRealTeams = (): Team[] => {
  // Returns all 48 teams that compete in group stage (including playoff slots)
  return teams.filter(team => team.group !== undefined);
};
