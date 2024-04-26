---creacion de vista

CREATE VIEW exportacion_todo_view
 AS select et.cod_departamento as e_cod_departamento,et.cod_tiempo as e_cod_tiempo, et.cod_pais as e_cod_pais,et.cod_medio as e_cod_medio, et.cod_via as e_cod_via,et.cod_nandina as e_cod_nandina,et.cod_gce3 as e_cod_gce3,et.cod_tnt as e_cod_tnt,et.cod_cuci3 as e_cod_cuci3,et.cod_ciiu3 as e_cod_ciiu3,et.cod_acteco as e_cod_acteco,et.kilbru as e_kilbru,et.kilnet as e_kilnet,et.finuni as e_finuni,et.valor as e_valor,
t.cod_tiempo as t_cod_tiempo,gestion,	id_mes,	des_mes,	trimestre,
d.cod_departamento as d_cod_departamento,	d.des as d_des,
p.cod_pais as p_cod_pais, p.des as p_des	,
cod_continente,	des_continente	,
m.cod_medio as m_cod_medio,	m.des as m_des,
v.cod_via as v_cod_via, v.des as v_des,
n.cod_nandina as n_cod_nandina,	des_nandina,	cod_des_nandina,	n.cod_seccion as n_cod_seccion,	n.des_seccion as n_des_seccion,	n.cod_capitulo as n_cod_capitulo,	n.des_capitulo as n_des_capitulo,	cod_partida,	des_partida,	cod_sis_arm,	des_sis_arm,
g3.cod_gce3 as g3_cod_gce3,	des_gce3 ,	cod_catego_gran,	des_catego_gran,	cod_catego_bas,	des_catego_bas,
tnt.cod_tnt as tnt_cod_tnt,	des_tnt,	cod_tradicional,	des_tradicional,	cod_tradicional_clase,	des_tradicional_clase,
cu3.cod_cuci3 as cu3_cod_cuci3,	des_cuci3,	cu3.cod_seccion as cu3_cod_seccion ,	cu3.des_seccion as cu3_des_seccion,	cu3.cod_capitulo as cu3_cod_capitulo ,	cu3.des_capitulo as cu3_des_capitulo,	cu3.cod_grupo as cu3_cod_grupo,	cu3.des_grupo as cu3_des_grupo,
ci3.cod_ciiu3 as ci3_cod_ciiu3,	des_ciiu3,	cod_categoria,	des_categoria,	cod_division,	des_division,	ci3.cod_grupo as ci3_cod_grupo,	ci3.des_grupo as ci3_des_grupo,
ac.cod_acteco as ac_cod_acteco,	des_acteco,	cod_actividad,	des_actividad
from exportacion_todo et
inner join tiempo t on et.cod_tiempo = t.cod_tiempo
inner join departamento d on d.cod_departamento = et.cod_departamento
inner join pais p on et.cod_pais = p.cod_pais
inner join medio m on et.cod_medio = m.cod_medio
inner join via v on v.cod_via = et.cod_via
inner join nandina n on n.cod_nandina = et.cod_nandina
inner join gce3 g3 on g3.cod_gce3 = et.cod_gce3
inner join tnt tnt on tnt.cod_tnt = et.cod_tnt
inner join cuci3 cu3 on cu3.cod_cuci3 = et.cod_cuci3
inner join ciiu3 ci3 on ci3.cod_ciiu3 = et.cod_ciiu3
inner join acteco ac on ac.cod_acteco  = et.cod_acteco;




-------------procedimiento desglozado


CREATE PROCEDURE ConsultaDinamica
    @var1 NVARCHAR(MAX),
    @var2 NVARCHAR(MAX),
    @var3 NVARCHAR(MAX)
AS
BEGIN
    DECLARE @sqlQuery NVARCHAR(MAX)

     SET @sqlQuery = '
        SELECT ' + @var1 + ', ' + @var2 + '
        FROM exportacion_todo_view
        WHERE ' + @var3 + '
        GROUP BY ' + @var1 + '
        ORDER BY ' + @var1 + '
    '
    EXEC(@sqlQuery)
END;


---procedimiento totales

CREATE PROCEDURE ConsultaDinamicaTotales
    @var1 NVARCHAR(MAX),
    @var2 NVARCHAR(MAX),
    @var3 NVARCHAR(MAX)
AS
BEGIN
    DECLARE @sqlQuery NVARCHAR(MAX)

     SET @sqlQuery = '
        SELECT ' + @var1 + ', ' + @var2 + '
        FROM exportacion_todo_view
        WHERE ' + @var3 + '
    '
    EXEC(@sqlQuery)
END;

