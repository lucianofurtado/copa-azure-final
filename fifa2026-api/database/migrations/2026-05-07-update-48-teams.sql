-- =====================================================
-- Migration: Atualizar tabela teams para 48 seleções
-- =====================================================
-- Origem: FIFA Final Draw 2025-12-05 (Kennedy Center, DC)
-- Source: https://www.fifa.com/.../final-draw-results
--
-- Estratégia: MERGE por code (UNIQUE) — preserva os IDs
-- INT IDENTITY existentes (matches.home_team_id/away_team_id
-- referenciam via FK) e só ADICIONA os 32 faltantes.
-- Idempotente: pode rodar múltiplas vezes.
-- =====================================================

;WITH source_teams (name, code, flag, group_name, confederation) AS (
  SELECT * FROM (VALUES
    -- Grupo A
    (N'México',                  'MEX', 'https://flagcdn.com/w80/mx.png',     'A', 'CONCACAF'),
    (N'África do Sul',           'RSA', 'https://flagcdn.com/w80/za.png',     'A', 'CAF'),
    (N'Coreia do Sul',           'KOR', 'https://flagcdn.com/w80/kr.png',     'A', 'AFC'),
    (N'Tchéquia',                'CZE', 'https://flagcdn.com/w80/cz.png',     'A', 'UEFA'),
    -- Grupo B
    (N'Canadá',                  'CAN', 'https://flagcdn.com/w80/ca.png',     'B', 'CONCACAF'),
    (N'Bósnia e Herzegovina',    'BIH', 'https://flagcdn.com/w80/ba.png',     'B', 'UEFA'),
    (N'Catar',                   'QAT', 'https://flagcdn.com/w80/qa.png',     'B', 'AFC'),
    (N'Suíça',                   'SUI', 'https://flagcdn.com/w80/ch.png',     'B', 'UEFA'),
    -- Grupo C
    (N'Brasil',                  'BRA', 'https://flagcdn.com/w80/br.png',     'C', 'CONMEBOL'),
    (N'Marrocos',                'MAR', 'https://flagcdn.com/w80/ma.png',     'C', 'CAF'),
    (N'Haiti',                   'HAI', 'https://flagcdn.com/w80/ht.png',     'C', 'CONCACAF'),
    (N'Escócia',                 'SCO', 'https://flagcdn.com/w80/gb-sct.png', 'C', 'UEFA'),
    -- Grupo D
    (N'Estados Unidos',          'USA', 'https://flagcdn.com/w80/us.png',     'D', 'CONCACAF'),
    (N'Paraguai',                'PAR', 'https://flagcdn.com/w80/py.png',     'D', 'CONMEBOL'),
    (N'Austrália',               'AUS', 'https://flagcdn.com/w80/au.png',     'D', 'AFC'),
    (N'Turquia',                 'TUR', 'https://flagcdn.com/w80/tr.png',     'D', 'UEFA'),
    -- Grupo E
    (N'Alemanha',                'GER', 'https://flagcdn.com/w80/de.png',     'E', 'UEFA'),
    (N'Curaçau',                 'CUR', 'https://flagcdn.com/w80/cw.png',     'E', 'CONCACAF'),
    (N'Costa do Marfim',         'CIV', 'https://flagcdn.com/w80/ci.png',     'E', 'CAF'),
    (N'Equador',                 'ECU', 'https://flagcdn.com/w80/ec.png',     'E', 'CONMEBOL'),
    -- Grupo F
    (N'Holanda',                 'NED', 'https://flagcdn.com/w80/nl.png',     'F', 'UEFA'),
    (N'Japão',                   'JPN', 'https://flagcdn.com/w80/jp.png',     'F', 'AFC'),
    (N'Suécia',                  'SWE', 'https://flagcdn.com/w80/se.png',     'F', 'UEFA'),
    (N'Tunísia',                 'TUN', 'https://flagcdn.com/w80/tn.png',     'F', 'CAF'),
    -- Grupo G
    (N'Bélgica',                 'BEL', 'https://flagcdn.com/w80/be.png',     'G', 'UEFA'),
    (N'Egito',                   'EGY', 'https://flagcdn.com/w80/eg.png',     'G', 'CAF'),
    (N'Irã',                     'IRN', 'https://flagcdn.com/w80/ir.png',     'G', 'AFC'),
    (N'Nova Zelândia',           'NZL', 'https://flagcdn.com/w80/nz.png',     'G', 'OFC'),
    -- Grupo H
    (N'Espanha',                 'ESP', 'https://flagcdn.com/w80/es.png',     'H', 'UEFA'),
    (N'Cabo Verde',              'CPV', 'https://flagcdn.com/w80/cv.png',     'H', 'CAF'),
    (N'Arábia Saudita',          'KSA', 'https://flagcdn.com/w80/sa.png',     'H', 'AFC'),
    (N'Uruguai',                 'URU', 'https://flagcdn.com/w80/uy.png',     'H', 'CONMEBOL'),
    -- Grupo I
    (N'França',                  'FRA', 'https://flagcdn.com/w80/fr.png',     'I', 'UEFA'),
    (N'Senegal',                 'SEN', 'https://flagcdn.com/w80/sn.png',     'I', 'CAF'),
    (N'Iraque',                  'IRQ', 'https://flagcdn.com/w80/iq.png',     'I', 'AFC'),
    (N'Noruega',                 'NOR', 'https://flagcdn.com/w80/no.png',     'I', 'UEFA'),
    -- Grupo J
    (N'Argentina',               'ARG', 'https://flagcdn.com/w80/ar.png',     'J', 'CONMEBOL'),
    (N'Áustria',                 'AUT', 'https://flagcdn.com/w80/at.png',     'J', 'UEFA'),
    (N'Jordânia',                'JOR', 'https://flagcdn.com/w80/jo.png',     'J', 'AFC'),
    (N'Argélia',                 'ALG', 'https://flagcdn.com/w80/dz.png',     'J', 'CAF'),
    -- Grupo K
    (N'Portugal',                'POR', 'https://flagcdn.com/w80/pt.png',     'K', 'UEFA'),
    (N'Uzbequistão',             'UZB', 'https://flagcdn.com/w80/uz.png',     'K', 'AFC'),
    (N'Colômbia',                'COL', 'https://flagcdn.com/w80/co.png',     'K', 'CONMEBOL'),
    (N'Rep. Dem. do Congo',      'COD', 'https://flagcdn.com/w80/cd.png',     'K', 'CAF'),
    -- Grupo L
    (N'Inglaterra',              'ENG', 'https://flagcdn.com/w80/gb-eng.png', 'L', 'UEFA'),
    (N'Croácia',                 'CRO', 'https://flagcdn.com/w80/hr.png',     'L', 'UEFA'),
    (N'Gana',                    'GHA', 'https://flagcdn.com/w80/gh.png',     'L', 'CAF'),
    (N'Panamá',                  'PAN', 'https://flagcdn.com/w80/pa.png',     'L', 'CONCACAF')
  ) AS v(name, code, flag, group_name, confederation)
)
MERGE dbo.teams AS target
USING source_teams AS source
  ON target.code = source.code
WHEN MATCHED THEN
  UPDATE SET
    target.name          = source.name,
    target.flag          = source.flag,
    target.group_name    = source.group_name,
    target.confederation = source.confederation
WHEN NOT MATCHED BY TARGET THEN
  INSERT (name, code, flag, group_name, confederation)
  VALUES (source.name, source.code, source.flag, source.group_name, source.confederation);

-- Cleanup: teams legacy do bacpac antigo que NÃO estão nos 48 oficiais
-- (ex.: Itália, que estava no Group D antigo). Soft-disable: mantém o
-- team na tabela (preserva FK em matches), mas tira do agrupamento
-- e marca o nome como "(legacy)".
UPDATE dbo.teams
SET group_name = NULL,
    name = name + N' (legacy)'
WHERE code NOT IN (
  'MEX','RSA','KOR','CZE','CAN','BIH','QAT','SUI',
  'BRA','MAR','HAI','SCO','USA','PAR','AUS','TUR',
  'GER','CUR','CIV','ECU','NED','JPN','SWE','TUN',
  'BEL','EGY','IRN','NZL','ESP','CPV','KSA','URU',
  'FRA','SEN','IRQ','NOR','ARG','AUT','JOR','ALG',
  'POR','UZB','COL','COD','ENG','CRO','GHA','PAN'
)
AND group_name IS NOT NULL  -- só atualizar se ainda estiver em grupo (idempotente)
AND name NOT LIKE N'%(legacy)%';
GO

-- Validação
SELECT 'Total teams' AS metric, COUNT(*) AS value FROM dbo.teams
UNION ALL
SELECT 'Em grupos (esperado 48)', COUNT(*) FROM dbo.teams WHERE group_name IS NOT NULL
UNION ALL
SELECT 'Confederations distinct', COUNT(DISTINCT confederation) FROM dbo.teams
UNION ALL
SELECT 'Groups distinct', COUNT(DISTINCT group_name) FROM dbo.teams WHERE group_name IS NOT NULL;
GO

-- Detalhe por grupo (deve mostrar 12 linhas, count=4 cada)
SELECT group_name, COUNT(*) AS team_count
FROM dbo.teams
WHERE group_name IS NOT NULL
GROUP BY group_name
ORDER BY group_name;
GO

PRINT 'Migration concluída. 48 seleções alinhadas com FIFA Final Draw 2025-12-05.';
GO
