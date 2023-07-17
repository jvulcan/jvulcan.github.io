const estructura =
{
    instrucciones: {
        dimensiones: "A continuación, deslice las barras para determinar dicha proporción de importancia del componente sobre la madurez del dominio destacado en amarillo. <b>(Presionar en el círculo `i` para visualizar reseña del dominio)</b>",
        intro_dimensiones: "<ul style='list-style:disc'><li>El propósito de la encuesta es determinar la proporción de impacto que tienen los componentes de un dominio de desempeño sobre la madurez global del mismo.</li><br>\
        <li>Más abajo usted verá que cada componente del dominio a evaluar tiene un resultado esperado, donde el cumplimiento simultáneo de ellos equivale a la madurez máxima del dominio.</li><br>\
        <li>Este ejercicio busca averiguar la proporción de aporte individual de cada componente a la madurez global del dominio de desempeño a evaluar.</li></ul>",
        intro_estrategia: "<ul style='list-style:disc'><li>El propósito de la encuesta es determinar el nivel de impacto que tiene cada uno de los componentes sobre <b>dimensiones genéricas de una estrategia organizacional</b>. (<b>Rentabilidad, Eficiencia & Productividad, Personas, Clientes</b>)</li>\
        <li>Este ejercicio busca averiguar cuál es el impacto que tendría el <b><u>resultado esperado del componente</u></b> en cada dimensión estratégica.</li></ul>",
        estrategia: "A continuación evalué si hay impacto del componente en cada una de las dimensiones estratégicas, eligiendo entre las alternativas; <br>“<b><u><i>muy bajo</b></u></i>”, “<b><u><i>bajo</b></u></i>”, “<b><u><i>medio</b></u></i>”, “<b><u><i>alto</b></u></i>”, “<b><u><i>muy alto</b></u></i>” "
    },
    escala: [
        { nombre: "No Aplica", valor: 0.0 },
        { nombre: "Muy bajo", valor: 0.1 },
        { nombre: "Bajo", valor: 0.15 },
        { nombre: "Medio", valor: 0.3 },
        { nombre: "Medio alto", valor: 0.45 },
        { nombre: "Alto", valor: 1 }
    ],
    estrategia: [
        { id: "E1", nombre:"Rentabilidad", descripcion:"Aumento del márgen de beneficio económico" },
        { id: "E2", nombre:"Eficiencia & Productividad", descripcion:"Optimización de recursos y disminución de costos" },
        { id: "E3", nombre:"Personas", descripcion:"Aumento en los índices de satisfacción global de los empleados" },
        { id: "E4", nombre:"Cliente", descripcion:"Aumento en los índices de satisfacción global de los clientes" }
    ],
    dimensiones: [
        { 
            id: "D1", 
            nombre:"Interesados", 
            descripcion:"Los proyectos son realizados por las personas y para las personas. Este ámbito de desempeño implica trabajar con los interesados para mantener la alineación y colaborar con ellas para fomentar las relaciones positivas y la satisfacción.<br>\
            Los interesados incluyen individuos, grupos y organizaciones. Un proyecto puede tener un pequeño grupo de interesados o, potencialmente, millones de interesados. Puede haber diferentes interesados en diferentes fases del proyecto, y la influencia, el poder o los intereses de los interesados pueden cambiar a medida que se desarrolla el proyecto.", 
            metodos: [
                { 
                    id:"M1", 
                    nombre:"Una relación de trabajo productiva con los interesados a lo largo del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se pueden observar relaciones de trabajo productivas con los interesados a lo largo de los proyectos.",
                    num:1
                },
                { 
                    id:"M2", 
                    nombre:"Acuerdo de los interesados con los objetivos del proyecto.", 
                    descripcion:"<b>Resultado esperado del componente:</b> No se observan cambios significativos en los requisitos y alcance del proyecto o producto. (Siempre considerando que los cambios no tienen relación con un cambio de estrategia u otro).",
                    num:2
                },
                { 
                    id:"M3", 
                    nombre:"Algunos proyectos piden a los interesados del proyecto que firmen el acta de constitución del proyecto, los requisitos del proyecto u otros documentos que indiquen el acuerdo.", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se debe observar que los interesados que son beneficiarios del proyecto brindan apoyo y están satisfechos, y en el caso de tener interesados detractores, estos no ponen en riesgo los resultados del proyecto.",
                    num:3
                }
        ]},
        { 
            id: "D2", 
            nombre:"Equipo", 
            descripcion:"Este dominio de desempeño implica establecer la cultura y el entorno que permita a un conjunto de diversos individuos evolucionar hasta convertirse en un equipo de proyecto de alto rendimiento. Esto incluye el reconocimiento de las actividades necesarias para fomentar el desarrollo del equipo de proyecto y alentar los comportamientos de liderazgo de todos los miembros del mismo.", 
            metodos: [
                { 
                    id:"M4", 
                    nombre:"Propiedad compartida", 
                    descripcion:"<b>Resultado esperado del componente:</b> Evidencia que los Los miembros del equipo de proyecto confían uno en el otro y colaboran.<br>\
                    El equipo de proyecto se adapta a situaciones cambiantes y es resiliente ante los desafíos. El equipo de proyecto se siente empoderado y empodera y además, reconoce a los miembros del equipo de proyecto.",
                    num:1
                },
                { 
                    id:"M5", 
                    nombre:"Un equipo de alto rendimiento",
                    descripcion:"<b>Resultado esperado:</b> Existe evidencia que los miembros del equipo de proyecto aplican pensamiento crítico y habilidades interpersonales. Los estilos de liderazgo de los miembros del equipo de proyecto son apropiados para el contexto y el entorno del proyecto.",
                    num:2
                },
                { 
                    id:"M6", 
                    nombre:"Todos los miembros del equipo de proyecto demuestran liderazgo aplicable y otras habilidades interpersonales", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia que los miembros del equipo de proyecto aplican pensamiento crítico y habilidades interpersonales. Los estilos de liderazgo de los miembros del equipo de proyecto son apropiados para el contexto y el entorno del proyecto.",
                    num:3
                }
        ]},
        { 
            id: "D3", 
            nombre:"Enfoque de desarrollo & Ciclo de Vida", 
            descripcion:"Este dominio de desempeño implica establecer el enfoque de desarrollo, la cadencia de entrega y el ciclo de vida del proyecto necesarios para optimizar los resultados del mismo.", 
            metodos: [
                { 
                    id:"M7", 
                    nombre:"Enfoques de desarrollo que son consistentes con los entregables del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> El enfoque de desarrollo de los entregables del proyecto (predictivo, híbrido, o adaptativo) resulta el apropiado dado el proyecto y las características organizacionales.",
                    num:1
                },
                { 
                    id:"M8", 
                    nombre:"Un ciclo de vida del proyecto que consiste en fases que conectan la entrega del valor del negocio y el valor para los interesados desde el comienzo hasta el final del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> El trabajo del proyecto desde el lanzamiento hasta el cierre está representado en las fases del proyecto. Las fases incluyen criterios de salida apropiados.",
                    num:2
                },
                { 
                    id:"M9", 
                    nombre:"Fases del ciclo de vida del proyecto que facilitan la cadencia de entrega y el enfoque de desarrollo necesarios para producir los entregables del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> La cadencia para el desarrollo, prueba e implementación está claramente representada en las fases del ciclo de vida de los proyectos.<br>\
                    En el caso de proyectos con múltiples entregables con diferentes cadencias de entrega y métodos de desarrollo están representados por fases superpuestas en el ciclo de vida segun sea necesario.",
                    num:3
                }
        ]},
        { 
            id: "D4", 
            nombre:"Planificación", 
            descripcion:"El propósito de la planificación es desarrollar proactivamente un enfoque para crear los entregables del proyecto. Los entregables del proyecto impulsan los resultados para los que se acometió el proyecto. La planificación de alto nivel puede comenzar antes de la autorización del proyecto. El equipo de proyecto elabora progresivamente documentos iniciales del proyecto, como una declaración de visión, un acta de constitución del proyecto, un caso de negocio o documentos similares para identificar o definir una ruta coordinada para lograr los resultados deseados.", 
            metodos: [
                { 
                    id:"M10", 
                    nombre:"El proyecto avanza de manera organizada, coordinada y deliberada", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observa que los resultados del proyecto en comparación con las líneas base del mismo y otras métricas de medición demuestra que el proyecto está progresando según lo planeado. Las variaciones de desempeño están dentro de los umbrales.",
                    num:1
                },
                { 
                    id:"M11", 
                    nombre:"Existe un enfoque holístico para entregar los resultados del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> El cronograma de entrega, el financiamiento, la disponibilidad de recursos, las adquisiciones, etc, son coherentes y demuestran que el proyecto está planificado de manera holística, sin brechas ni áreas de desalineación.",
                    num:2
                },
                { 
                    id:"M12", 
                    nombre:"Se elabora información evolutiva para obtener los entregables y asegurar los resultados para los cuales se emprendió el proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> La información inicial sobre entregables y requisitos en comparación con la información obtenida en un punto de avance se muestra sin mayores cambios lo que demuestra una elaboración inicial apropiada.<br>\
                    La información que se va obteniendo en comparación con el caso de negocio sigue alineada, indicando que el proyecto producirá los entregables y los resultados para los cuales se emprendió.",
                    num:3
                },
                { 
                    id:"M13", 
                    nombre:"El tiempo dedicado a la planificación es apropiado para la situación", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observa que los tiempos asignados para la planificación como elaboración previa o durante la ejecución de los proyectos son adecuados según las caracteristicas de los proyectos.",
                    num:4
                },
                { 
                    id:"M14", 
                    nombre:"La información de planificación es suficiente para gestionar las expectativas de los interesados", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observa la existencia de un plan de gestión de las comunicaciones y la información de los interesados, el cual deja en evidencia una correcta gestión de expectativas de estos últimos.",
                    num:5
                },
                { 
                    id:"M15", 
                    nombre:"Existe un proceso para la adaptación de los planes a lo largo del proyecto basado en las necesidades o condiciones emergentes y cambiantes.", 
                    descripcion:"<b>Resultado esperado del componente:</b> En los proyectos se observan listas de trabajo pendiente con una nueva priorización o que deben se ajustados y adaptados a los planes a lo largo de todo el proyecto.<br>\
                    En los proyectos se ubserva que se utiliza un proceso de control de cambios que cuenta con registros de cambios y documentación de las reuniones del comité de control de cambios que demuestran que se está aplicando el proceso de control de cambios.",
                    num:6
                }
        ]},
        { 
            id: "D5", 
            nombre:"Trabajo de Proyecto", 
            descripcion:"El trabajo de proyecto está asociado con el establecimiento de los procesos y la realización del trabajo para permitir que el equipo de proyecto cumpla con los entregables y resultados esperados.", 
            metodos: [
                { 
                    id:"M16", 
                    nombre:"Desempeño eficiente y efectivo del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia que los informes de estado muestran que el trabajo del proyecto es eficiente y efectivo.",
                    num:1
                },
                { 
                    id:"M17", 
                    nombre:"Procesos del proyecto que son apropiados para el proyecto y el entorno", 
                    descripcion:"<b>Resultado esperado del componente:</b> La evidencia muestra que los procesos del proyecto han sido adaptados para satisfacer las necesidades del proyecto y del entorno del mismo. Existen auditorías de procesos y actividades de aseguramiento de calidad, dejando en evidencia la importancia del cumplimiento y utilización de los procesos de forma efectiva.",
                    num:2
                },
                { 
                    id:"M18", 
                    nombre:"Comunicación e involucramiento adecuados con los interesados", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observa que el plan de comunicación del proyecto y los artefactos de comunicación fueron bien planificados y utilizados y se están entregando a los interesados. Existen pocas solicitudes de aclaraciones de información o malentendidos que puedan indicar que las actividades de involucramiento y comunicación no son efectivas.",
                    num:3
                },
                { 
                    id:"M19", 
                    nombre:"Gestión eficiente de los recursos físicos", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se debe observar que la cantidad de material utilizado, los desechos y la cantidad de trabajo es acorde a una utilización eficiente de los recursos.",
                    num:4
                },
                { 
                    id:"M20", 
                    nombre:"Gestión eficaz de las adquisiciones", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia de auditoría sobre las adquisiciones, la cual demuestra que los procesos utilizados fueron apropiados y suficientes para la adquisición y que el desempeño del contratista está de acuerdo con el plan.",
                    num:5
                },
                { 
                    id:"M21", 
                    nombre:"Manejo efectivo del cambio", 
                    descripcion:"<b>Resultado esperado del componente:</b> Los proyectos que utilizan un enfoque predictivo tienen un registro de cambios que muestra que los cambios están siendo evaluados de manera holística teniendo en cuenta el alcance, el cronograma, el presupuesto, los recursos, los interesados y los impactos del riesgo. Los proyectos que utilizan un enfoque adaptativo tienen una lista de trabajo pendiente que indica la tasa de logro del alcance y la tasa de adición de nuevo alcance.",
                    num:6
                },
                { 
                    id:"M22", 
                    nombre:"Capacidad mejorada gracias al aprendizaje continuo y a la mejora de los procesos", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia de procesos de analisis retrospectivo y accionables de mejora continua sobre procesos o actividades de los proyectos. Los informes de estado del equipo, muestran una disminución de errores, retrabajos, y mejora en tiempos de entrega de los entregables.",
                    num:7
                }
        ]},
        { 
            id: "D6", 
            nombre:"Desempeño de la entrega", 
            descripcion:"Los proyectos apoyan la ejecución de la estrategia y el avance de los objetivos del negocio. La entrega del proyecto se enfoca en cumplir con los requisitos, el alcance y las expectativas de calidad para producir los entregables esperados que impulsarán los resultados previstos.", 
            metodos: [
                {
                    id:"M23", 
                    nombre:"Los proyectos contribuyen a los objetivos del negocio y al avance de la estrategia", 
                    descripcion:"<b>Resultado esperado del componente:</b> El plan de negocio y el plan estratégico de la organización, junto con los documentos de autorización del proyecto, muestran que los entregables del proyecto y los objetivos de negocio están alineados.",
                    num:1
                },
                { 
                    id:"M24", 
                    nombre:"Los proyectos materializan los resultados para los que fueron iniciados", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observa en la entrega que el caso de negocio y los datos subyacentes se mantuvieron o mejoraron los resultados previstos o esperados.",
                    num:2
                },
                { 
                    id:"M25", 
                    nombre:"Los beneficios del proyecto se obtienen en el plazo en que se planificaron", 
                    descripcion:"<b>Resultado esperado del componente:</b> El plan de realización de beneficios, el caso de negocio y/o el cronograma indican que las métricas financieras y las entregas programadas se fueron logrando según lo planeado.",
                    num:3
                },
                {
                    id:"M26", 
                    nombre:"El equipo de proyecto tiene una clara comprensión de los requisitos", 
                    descripcion:"<b>Resultado esperado del componente:</b> En el desarrollo predictivo, pocos cambios en los requisitos iniciales reflejan la comprensión por el equipo. En los proyectos donde los requisitos evolucionan, debe existir evidencia de acciones iterativas que permitan una comprensión clara de los requisitos a medida que avanza el proyecto.",
                    num:4
                },
                { 
                    id:"M27", 
                    nombre:"Los interesados aceptan y están satisfechos con los entregables del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> En entregas parciales y finales de los proyectos se observa la aplicación de actividades investigativas como entrevistas, la observación y la retroalimentación del usuario final para confirmar el nivel de satisfacción de los interesados. Los niveles de quejas y devoluciones también pueden utilizarse para indicar satisfacción.",
                    num:5
                }
        ]},
        { 
            id: "D7", 
            nombre:"Medición", 
            descripcion:"La medición involucra evaluar el desempeño del proyecto e implementar respuestas apropiadas para mantener un desempeño óptimo.", 
            metodos: [
                { 
                    id:"M28", 
                    nombre:"Una comprensión confiable del estado del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia de mediciones e informes de auditoría para demostrar que los datos de los proyectos son confiables.",
                    num:1
                },
                { 
                    id:"M29", 
                    nombre:"Datos procesables para facilitar la toma de decisiones", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se debe ser capaz de obtener datos referentes al desempeño esperado del proyecto en un estado actual o para identificar existencia de variaciones y magnitud de las mismas.",
                    num:2
                },
                { 
                    id:"M30", 
                    nombre:"Acciones oportunas y apropiadas para mantener el desempeño del proyecto bien encaminado", 
                    descripcion:"<b>Resultado esperado del componente:</b> Las mediciones deben proporcionar indicadores del estado actual y de proyección o pronostico para conducir a que las decisiones y acciones sean oportunas.",
                    num:3
                },
                { 
                    id:"M31", 
                    nombre:"Lograr objetivos y generar valor del negocio mediante la toma de decisiones informadas y oportunas basadas en pronósticos y evaluaciones confiables", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observan acciones de revisión de los pronósticos pasados y el desempeño actual para confirmar si se refleja el presente con precisión. La comparación del desempeño real con el desempeño planeado y la evaluación de los documentos de negocio mostrarán la probabilidad de lograr el valor previsto del proyecto.",
                    num:4
                }
        ]},
        { 
            id: "D8", 
            nombre:"Incertidumbre", 
            descripcion:"Los proyectos existen en entornos con diferentes grados de incertidumbre. La incertidumbre presenta amenazas y oportunidades que los equipos de proyecto exploran, evalúan y deciden cómo manejar.", 
            metodos: [
                { 
                    id:"M32", 
                    nombre:"Concientización del entorno en el que se producen los proyectos, incluidos, entre otros, los entornos técnico, social, político, de mercado y económico", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia que el equipo incorpora consideraciones en diversos aspectos de la incertidumbre, riesgo y sus respuestas de acuerdo a la naturaleza del negocio, proyecto, industria etc.",
                    num:1
                },
                { 
                    id:"M33", 
                    nombre:"Exploración proactiva y respuesta a la incertidumbre", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia que el foco a las respuestas o a los riesgos están alineadas con la priorización de las limitaciones del proyecto, como el presupuesto, el cronograma y el desempeño.",
                    num:2
                },
                { 
                    id:"M34", 
                    nombre:"Concientización de la interdependencia de múltiples variables en el proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> Los equipos tienen presente abordar la complejidad, ambigüedad y volatilidad en los proyectos y generar las acciones más apropiadas para ello.",
                    num:3
                },
                { 
                    id:"M35", 
                    nombre:"La capacidad de anticipar amenazas y oportunidades y comprender las consecuencias de los incidentes", 
                    descripcion:"<b>Resultado esperado del componente:</b> Se observan sistemas robustos para identificar, capturar y responder al riesgo  de forma efectiva y adecuada.",
                    num:4
                },
                { 
                    id:"M36", 
                    nombre:"Entrega de proyectos con poco o ningún impacto negativo procedente de eventos o condiciones imprevistas", 
                    descripcion:"<b>Resultado esperado del componente:</b> En el caso de apariciones de eventos o condiciones imprevistas, los proyectos aún cumplen las fechas de entrega programadas y la ejecución del presupuesto está dentro del umbral de variación.",
                    num:5
                },
                { 
                    id:"M37", 
                    nombre:"Oportunidades materializadas para mejorar el desempeño y los resultados del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> Existe evidencia que los equipos cuentan y utilizan mecanismos establecidos para identificar y aprovechar las oportunidades.",
                    num:6
                },
                { 
                    id:"M38", 
                    nombre:"Las reservas de costos y cronograma se utilizan de manera efectiva para mantener la alineación con los objetivos del proyecto", 
                    descripcion:"<b>Resultado esperado del componente:</b> Los equipos toman medidas para prevenir de forma proactiva las amenazas, limitando así el uso de la reserva de costos o tiempos en el cronograma.",
                    num:7
                }
        ]},
    ]
}
