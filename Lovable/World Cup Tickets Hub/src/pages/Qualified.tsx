import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Trophy, Medal, Users, Globe, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface QualifiedTeam {
  id: string;
  name: string;
  code: string;
  flag: string;
  confederation: string;
  group: string;
  ranking: number;
  participations: number;
  bestResult: string;
  titles?: number;
}

const qualifiedTeams: QualifiedTeam[] = [
  // Campeões mundiais
  { id: "esp", name: "Espanha", code: "ESP", flag: "https://flagcdn.com/w80/es.png", confederation: "UEFA", group: "H", ranking: 1, participations: 16, bestResult: "1x Campeão", titles: 1 },
  { id: "arg", name: "Argentina", code: "ARG", flag: "https://flagcdn.com/w80/ar.png", confederation: "CONMEBOL", group: "J", ranking: 2, participations: 18, bestResult: "3x Campeão", titles: 3 },
  { id: "fra", name: "França", code: "FRA", flag: "https://flagcdn.com/w80/fr.png", confederation: "UEFA", group: "I", ranking: 3, participations: 16, bestResult: "2x Campeão", titles: 2 },
  { id: "eng", name: "Inglaterra", code: "ENG", flag: "https://flagcdn.com/w80/gb-eng.png", confederation: "UEFA", group: "L", ranking: 4, participations: 16, bestResult: "1x Campeão", titles: 1 },
  { id: "bra", name: "Brasil", code: "BRA", flag: "https://flagcdn.com/w80/br.png", confederation: "CONMEBOL", group: "C", ranking: 5, participations: 23, bestResult: "5x Campeão", titles: 5 },
  { id: "ger", name: "Alemanha", code: "GER", flag: "https://flagcdn.com/w80/de.png", confederation: "UEFA", group: "E", ranking: 9, participations: 20, bestResult: "4x Campeão", titles: 4 },
  { id: "uru", name: "Uruguai", code: "URU", flag: "https://flagcdn.com/w80/uy.png", confederation: "CONMEBOL", group: "H", ranking: 16, participations: 14, bestResult: "2x Campeão", titles: 2 },
  
  // Vice-campeões e semifinalistas
  { id: "por", name: "Portugal", code: "POR", flag: "https://flagcdn.com/w80/pt.png", confederation: "UEFA", group: "K", ranking: 6, participations: 8, bestResult: "3º lugar (1966)" },
  { id: "ned", name: "Holanda", code: "NED", flag: "https://flagcdn.com/w80/nl.png", confederation: "UEFA", group: "F", ranking: 7, participations: 11, bestResult: "Vice-campeão (3x)" },
  { id: "bel", name: "Bélgica", code: "BEL", flag: "https://flagcdn.com/w80/be.png", confederation: "UEFA", group: "G", ranking: 8, participations: 14, bestResult: "3º lugar (2018)" },
  { id: "cro", name: "Croácia", code: "CRO", flag: "https://flagcdn.com/w80/hr.png", confederation: "UEFA", group: "L", ranking: 10, participations: 6, bestResult: "Vice-campeão (2018)" },
  { id: "mar", name: "Marrocos", code: "MAR", flag: "https://flagcdn.com/w80/ma.png", confederation: "CAF", group: "C", ranking: 11, participations: 7, bestResult: "4º lugar (2022)" },
  { id: "col", name: "Colômbia", code: "COL", flag: "https://flagcdn.com/w80/co.png", confederation: "CONMEBOL", group: "K", ranking: 12, participations: 7, bestResult: "Quartas de final" },
  
  // Seleções CONCACAF
  { id: "usa", name: "Estados Unidos", code: "USA", flag: "https://flagcdn.com/w80/us.png", confederation: "CONCACAF", group: "D", ranking: 14, participations: 12, bestResult: "3º lugar (1930)" },
  { id: "mex", name: "México", code: "MEX", flag: "https://flagcdn.com/w80/mx.png", confederation: "CONCACAF", group: "A", ranking: 15, participations: 17, bestResult: "Quartas de final" },
  
  // Outras seleções europeias
  { id: "sui", name: "Suíça", code: "SUI", flag: "https://flagcdn.com/w80/ch.png", confederation: "UEFA", group: "B", ranking: 17, participations: 12, bestResult: "Quartas de final" },
  
  // Seleções asiáticas
  { id: "jpn", name: "Japão", code: "JPN", flag: "https://flagcdn.com/w80/jp.png", confederation: "AFC", group: "F", ranking: 18, participations: 7, bestResult: "Oitavas de final" },
  
  // Seleções africanas
  { id: "sen", name: "Senegal", code: "SEN", flag: "https://flagcdn.com/w80/sn.png", confederation: "CAF", group: "I", ranking: 19, participations: 3, bestResult: "Quartas de final (2002)" },
  
  // Seleções asiáticas
  { id: "irn", name: "Irã", code: "IRN", flag: "https://flagcdn.com/w80/ir.png", confederation: "AFC", group: "G", ranking: 20, participations: 6, bestResult: "Fase de grupos" },
  { id: "kor", name: "Coreia do Sul", code: "KOR", flag: "https://flagcdn.com/w80/kr.png", confederation: "AFC", group: "A", ranking: 22, participations: 11, bestResult: "4º lugar (2002)" },
  
  // Seleções sul-americanas
  { id: "ecu", name: "Equador", code: "ECU", flag: "https://flagcdn.com/w80/ec.png", confederation: "CONMEBOL", group: "E", ranking: 23, participations: 4, bestResult: "Oitavas de final" },
  
  // Europeias
  { id: "aut", name: "Áustria", code: "AUT", flag: "https://flagcdn.com/w80/at.png", confederation: "UEFA", group: "J", ranking: 24, participations: 8, bestResult: "3º lugar (1954)" },
  
  // Asiáticas
  { id: "aus", name: "Austrália", code: "AUS", flag: "https://flagcdn.com/w80/au.png", confederation: "AFC", group: "D", ranking: 26, participations: 6, bestResult: "Oitavas de final" },
  
  // CONCACAF
  { id: "can", name: "Canadá", code: "CAN", flag: "https://flagcdn.com/w80/ca.png", confederation: "CONCACAF", group: "B", ranking: 27, participations: 3, bestResult: "Fase de grupos" },
  
  // Europeias
  { id: "nor", name: "Noruega", code: "NOR", flag: "https://flagcdn.com/w80/no.png", confederation: "UEFA", group: "I", ranking: 29, participations: 3, bestResult: "Oitavas de final" },
  
  // CONCACAF
  { id: "pan", name: "Panamá", code: "PAN", flag: "https://flagcdn.com/w80/pa.png", confederation: "CONCACAF", group: "L", ranking: 30, participations: 2, bestResult: "Fase de grupos" },
  
  // Africanas
  { id: "alg", name: "Argélia", code: "ALG", flag: "https://flagcdn.com/w80/dz.png", confederation: "CAF", group: "J", ranking: 34, participations: 5, bestResult: "Oitavas de final" },
  { id: "egy", name: "Egito", code: "EGY", flag: "https://flagcdn.com/w80/eg.png", confederation: "CAF", group: "G", ranking: 35, participations: 4, bestResult: "Fase de grupos" },
  
  // Sul-americanas
  { id: "par", name: "Paraguai", code: "PAR", flag: "https://flagcdn.com/w80/py.png", confederation: "CONMEBOL", group: "D", ranking: 36, participations: 9, bestResult: "Quartas de final" },
  
  // Europeias
  { id: "sco", name: "Escócia", code: "SCO", flag: "https://flagcdn.com/w80/gb-sct.png", confederation: "UEFA", group: "C", ranking: 37, participations: 8, bestResult: "Fase de grupos" },
  
  // Africanas
  { id: "tun", name: "Tunísia", code: "TUN", flag: "https://flagcdn.com/w80/tn.png", confederation: "CAF", group: "F", ranking: 41, participations: 6, bestResult: "Fase de grupos" },
  { id: "civ", name: "Costa do Marfim", code: "CIV", flag: "https://flagcdn.com/w80/ci.png", confederation: "CAF", group: "E", ranking: 42, participations: 4, bestResult: "Fase de grupos" },
  
  // Asiáticas
  { id: "uzb", name: "Uzbequistão", code: "UZB", flag: "https://flagcdn.com/w80/uz.png", confederation: "AFC", group: "K", ranking: 49, participations: 1, bestResult: "Estreante (2026)" },
  { id: "qat", name: "Catar", code: "QAT", flag: "https://flagcdn.com/w80/qa.png", confederation: "AFC", group: "B", ranking: 51, participations: 2, bestResult: "Fase de grupos" },
  { id: "ksa", name: "Arábia Saudita", code: "KSA", flag: "https://flagcdn.com/w80/sa.png", confederation: "AFC", group: "H", ranking: 56, participations: 7, bestResult: "Oitavas de final" },
  { id: "jor", name: "Jordânia", code: "JOR", flag: "https://flagcdn.com/w80/jo.png", confederation: "AFC", group: "J", ranking: 58, participations: 1, bestResult: "Estreante (2026)" },
  
  // Africanas
  { id: "rsa", name: "África do Sul", code: "RSA", flag: "https://flagcdn.com/w80/za.png", confederation: "CAF", group: "A", ranking: 59, participations: 4, bestResult: "Fase de grupos" },
  { id: "gha", name: "Gana", code: "GHA", flag: "https://flagcdn.com/w80/gh.png", confederation: "CAF", group: "L", ranking: 61, participations: 4, bestResult: "Quartas de final" },
  { id: "cpv", name: "Cabo Verde", code: "CPV", flag: "https://flagcdn.com/w80/cv.png", confederation: "CAF", group: "H", ranking: 63, participations: 1, bestResult: "Estreante (2026)" },
  
  // CONCACAF
  { id: "hai", name: "Haiti", code: "HAI", flag: "https://flagcdn.com/w80/ht.png", confederation: "CONCACAF", group: "C", ranking: 81, participations: 2, bestResult: "Fase de grupos" },
  
  // Oceania
  { id: "nzl", name: "Nova Zelândia", code: "NZL", flag: "https://flagcdn.com/w80/nz.png", confederation: "OFC", group: "G", ranking: 98, participations: 3, bestResult: "Fase de grupos" },
  
  // CONCACAF
  { id: "cur", name: "Curaçau", code: "CUR", flag: "https://flagcdn.com/w80/cw.png", confederation: "CONCACAF", group: "E", ranking: 120, participations: 1, bestResult: "Estreante (2026)" },

  // Europeias adicionais (Final Draw 2025-12-05)
  { id: "cze", name: "Tchéquia", code: "CZE", flag: "https://flagcdn.com/w80/cz.png", confederation: "UEFA", group: "A", ranking: 38, participations: 9, bestResult: "Vice-campeão (1934, 1962 — pela Tchecoslováquia)" },
  { id: "bih", name: "Bósnia e Herzegovina", code: "BIH", flag: "https://flagcdn.com/w80/ba.png", confederation: "UEFA", group: "B", ranking: 75, participations: 1, bestResult: "Fase de grupos (2014)" },
  { id: "tur", name: "Turquia", code: "TUR", flag: "https://flagcdn.com/w80/tr.png", confederation: "UEFA", group: "D", ranking: 25, participations: 11, bestResult: "3º lugar (2002)" },
  { id: "swe", name: "Suécia", code: "SWE", flag: "https://flagcdn.com/w80/se.png", confederation: "UEFA", group: "F", ranking: 21, participations: 13, bestResult: "Vice-campeão (1958)" },

  // Asiática adicional (Final Draw 2025-12-05)
  { id: "irq", name: "Iraque", code: "IRQ", flag: "https://flagcdn.com/w80/iq.png", confederation: "AFC", group: "I", ranking: 58, participations: 1, bestResult: "Estreante (2026)" },

  // Africana adicional (Final Draw 2025-12-05)
  { id: "cod", name: "Rep. Dem. do Congo", code: "COD", flag: "https://flagcdn.com/w80/cd.png", confederation: "CAF", group: "K", ranking: 65, participations: 1, bestResult: "Estreante (2026)" },
];

const confederations = [
  { value: "all", label: "Todas" },
  { value: "UEFA", label: "UEFA (Europa)" },
  { value: "CONMEBOL", label: "CONMEBOL (América do Sul)" },
  { value: "CONCACAF", label: "CONCACAF (América do Norte)" },
  { value: "CAF", label: "CAF (África)" },
  { value: "AFC", label: "AFC (Ásia)" },
  { value: "OFC", label: "OFC (Oceania)" },
];

const Qualified: React.FC = () => {
  const [search, setSearch] = useState('');
  const [confederation, setConfederation] = useState('all');
  const [sortBy, setSortBy] = useState<'ranking' | 'participations' | 'name'>('ranking');

  const filteredTeams = qualifiedTeams
    .filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(search.toLowerCase()) ||
                           team.code.toLowerCase().includes(search.toLowerCase());
      const matchesConfederation = confederation === 'all' || team.confederation === confederation;
      return matchesSearch && matchesConfederation;
    })
    .sort((a, b) => {
      if (sortBy === 'ranking') return a.ranking - b.ranking;
      if (sortBy === 'participations') return b.participations - a.participations;
      return a.name.localeCompare(b.name);
    });

  const champions = qualifiedTeams.filter(t => t.titles && t.titles > 0);
  const totalParticipations = qualifiedTeams.reduce((acc, t) => acc + t.participations, 0);

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">FIFA World Cup 2026</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-gradient mb-4">
              Seleções Classificadas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Todas as 48 seleções classificadas para a Copa do Mundo 2026 nos EUA, México e Canadá
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card p-4 text-center">
              <Globe className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{qualifiedTeams.length}</div>
              <div className="text-sm text-muted-foreground">Seleções</div>
            </div>
            <div className="glass-card p-4 text-center">
              <Trophy className="w-6 h-6 mx-auto mb-2 text-gold" />
              <div className="text-2xl font-bold text-foreground">{champions.length}</div>
              <div className="text-sm text-muted-foreground">Campeões Mundiais</div>
            </div>
            <div className="glass-card p-4 text-center">
              <Medal className="w-6 h-6 mx-auto mb-2 text-amber-500" />
              <div className="text-2xl font-bold text-foreground">{totalParticipations}</div>
              <div className="text-sm text-muted-foreground">Participações Totais</div>
            </div>
            <div className="glass-card p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">Confederações</div>
            </div>
          </div>

          {/* Filters */}
          <div className="glass-card p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar seleção..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={confederation} onValueChange={setConfederation}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Confederação" />
                </SelectTrigger>
                <SelectContent>
                  {confederations.map((conf) => (
                    <SelectItem key={conf.value} value={conf.value}>
                      {conf.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ranking">Ranking FIFA</SelectItem>
                  <SelectItem value="participations">Participações</SelectItem>
                  <SelectItem value="name">Nome</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTeams.map((team, index) => (
              <div
                key={team.id}
                className="glass-card p-4 hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Flag */}
                  <div className="relative">
                    <img
                      src={team.flag}
                      alt={team.name}
                      className="w-16 h-12 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {team.ranking}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground truncate">{team.name}</h3>
                      {team.titles && team.titles > 0 && (
                        <Trophy className="w-4 h-4 text-gold flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {team.confederation} • Grupo {team.group}
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{team.participations}ª participação</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Result */}
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Melhor colocação:</span>
                    <span className={`text-sm font-semibold ${team.titles ? 'text-gold' : 'text-foreground'}`}>
                      {team.bestResult}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhuma seleção encontrada</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Qualified;
