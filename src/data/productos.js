

export const productos = [
    {
        id: 'proteina-vegetal',
        nombre: 'Proteína vegetal 1 kg',
        tipo: 'Producto',
        precio: 18990,
        unidad: 'envase',
        resumen: 'Mezcla de arveja y arroz integral con 24 g de proteína por porción. Sabor vainilla, sin azúcar añadida.',
        imagenes: [
            {
                archivo: '/img/Image_proteina.jpg',
                texto: 'Tarro de proteína vegetal de 1 kilo'
            },
            {
                archivo: '/img/detalle-scoop.svg',
                texto: 'Medidor incluido en el envase'
            },
            {
                archivo: '/img/detalle-etiqueta.svg',
                texto: 'Tabla de información nutricional'
            }
        ],
        descripcion: 'Mezcla de proteína de arveja y arroz integral germinado que aporta 24 g de proteína por porción de 30 g, con perfil completo de aminoácidos. Sabor vainilla natural, sin azúcar añadida ni colorantes. El envase rinde aproximadamente 33 porciones.',
        beneficios: [
            'Despacho en 24 horas hábiles dentro de La Araucanía',
            'Envases sellados con lote y fecha de vencimiento visibles.',
            'Devolución sin costo dentro de 10 días si el producto llega dañado.'
        ],
        ficha: [
            [
                'Formato',
                'Bolsa resellable de 1 kg'
            ],
            [
                'Porciones por envase',
                '33 porciones de 30 g'
            ],
            [
                'Proteína por porción',
                '24 g'
            ],
            [
                'Origen',
                'Elaborado en Chile con insumos importados'
            ],
            [
                'Conservación',
                'Lugar fresco y seco, lejos del sol directo'
            ],
            [
                'Duración',
                '18 meses desde la fecha de elaboración'
            ]
        ]
    },
    {
        id: 'pack-snacks',
        nombre: 'Pack snacks saludables',
        tipo: 'Producto',
        precio: 12500,
        unidad: 'pack',
        resumen: '12 unidades surtidas entre barras de cereal, frutos secos y garbanzos tostados para la colación.',
        imagenes: [
            {
                archivo: '/img/Image_snack.jpg',
                texto: 'Caja con barras y snacks saludables surtidos'
            },
            {
                archivo: '/img/detalle-etiqueta.svg',
                texto: 'Tabla de información nutricional'
            },
            {
                archivo: '/img/detalle-scoop.svg',
                texto: 'Porción de referencia'
            }
        ],
        descripcion: 'Doce colaciones listas para llevar: cuatro barras de cereal con quinoa, cuatro bolsitas de frutos secos sin sal y cuatro de garbanzos tostados. Todas bajo 180 calorías por unidad y sin sellos de advertencia.',
        beneficios: [
            'Ideal para colación de media mañana o media tarde.',
            'Empaques individuales, fáciles de llevar en la mochila.',
            'Surtido rotativo según temporada, siempre 12 unidades.'
        ],
        ficha: [
            [
                'Contenido',
                '12 unidades surtidas'
            ],
            [
                'Calorías por unidad',
                'Entre 120 y 180 kcal'
            ],
            [
                'Sellos de advertencia',
                'Ninguno'
            ],
            [
                'Apto para',
                'Dieta vegetariana'
            ],
            [
                'Conservación',
                'Ambiente seco, no refrigerar'
            ],
            [
                'Duración',
                '6 meses desde la fecha de envasado'
            ]
        ]
    },
    {
        id: 'multivitaminico',
        nombre: 'Multivitamínico 60 cáps',
        tipo: 'Producto',
        precio: 9990,
        unidad: 'frasco',
        resumen: 'Complejo de vitaminas A, C, D, E y grupo B más zinc. Dos meses de aporte diario en una toma.',
        imagenes: [
            {
                archivo: '/img/Image_multivitaminico.jpg',
                texto: 'Frasco de multivitamínico de 60 cápsulas'
            },
            {
                archivo: '/img/detalle-etiqueta.svg',
                texto: 'Tabla de información nutricional'
            },
            {
                archivo: '/img/detalle-scoop.svg',
                texto: 'Toma diaria recomendada'
            }
        ],
        descripcion: 'Complejo diario con vitaminas A, C, D, E y del grupo B, más zinc y magnesio. Una cápsula al día cubre el 100% de la ingesta diaria recomendada para personas adultas. Cápsula vegetal, sin gluten ni lactosa.',
        beneficios: [
            'Dos meses de aporte diario en un solo frasco.',
            'Cápsula vegetal, apta para dieta vegana.',
            'Sin gluten, lactosa ni azúcares añadidos.'
        ],
        ficha: [
            [
                'Formato',
                'Frasco con 60 cápsulas'
            ],
            [
                'Dosis sugerida',
                '1 cápsula diaria con el desayuno'
            ],
            [
                'Duración del envase',
                '60 días'
            ],
            [
                'Cápsula',
                'Vegetal (HPMC)'
            ],
            [
                'Registro',
                'Alimento de uso especial, resolución sanitaria vigente'
            ],
            [
                'Advertencia',
                'No reemplaza una alimentación equilibrada'
            ]
        ]
    },
    {
        id: 'plan-alimenticio',
        nombre: 'Plan alimenticio descargable',
        tipo: 'Servicio',
        precio: 7990,
        unidad: 'plan',
        resumen: 'Minuta de 4 semanas en PDF con lista de compras, equivalencias y recetas para el día a día.',
        imagenes: [
            {
                archivo: '/img/Image_planAlimenticio.jpg',
                texto: 'Plan alimenticio en formato descargable'
            },
            {
                archivo: '/img/detalle-seguimiento.svg',
                texto: 'Registro de avances del plan'
            },
            {
                archivo: '/img/detalle-agenda.svg',
                texto: 'Organización semanal del plan'
            }
        ],
        descripcion: 'Minuta de cuatro semanas en formato PDF, preparada por nuestro equipo de nutricionistas. Incluye desayunos, almuerzos, cenas y colaciones, lista de compras semanal, tabla de equivalencias para intercambiar alimentos y 20 recetas explicadas paso a paso.',
        beneficios: [
            'Descarga inmediata después de la compra.',
            'Versión para imprimir y versión para el celular.',
            'Incluye alternativas vegetarianas para cada preparación.'
        ],
        ficha: [
            [
                'Formato',
                'Archivo PDF de 48 páginas'
            ],
            [
                'Cobertura',
                '4 semanas de minuta completa'
            ],
            [
                'Incluye',
                'Lista de compras, equivalencias y 20 recetas'
            ],
            [
                'Elaborado por',
                'Nutricionistas colegiados de NutriVida'
            ],
            [
                'Entrega',
                'Enlace de descarga inmediato'
            ],
            [
                'Actualizaciones',
                'Acceso a nuevas versiones por 12 meses'
            ]
        ]
    },
    {
        id: 'consulta-online',
        nombre: 'Consulta nutricional online',
        tipo: 'Servicio',
        precio: 24990,
        unidad: 'sesión',
        resumen: '50 minutos por videollamada con una nutricionista colegiada, más un informe escrito con las indicaciones.',
        imagenes: [
            {
                archivo: '/img/Image_consulta.jpg',
                texto: 'Consulta nutricional por videollamada'
            },
            {
                archivo: '/img/detalle-agenda.svg',
                texto: 'Agenda de horarios disponibles'
            },
            {
                archivo: '/img/detalle-seguimiento.svg',
                texto: 'Informe de seguimiento'
            }
        ],
        descripcion: 'Sesión de 50 minutos por videollamada con una nutricionista colegiada. Revisamos tus hábitos, antecedentes de salud y objetivos, y al terminar recibes un informe escrito con las indicaciones acordadas y una minuta base para la primera semana.',
        beneficios: [
            'Horarios de lunes a sábado, incluso después de las 18:00.',
            'Informe escrito enviado dentro de las 24 horas siguientes.',
            'Puedes reagendar sin costo hasta 12 horas antes.'
        ],
        ficha: [
            [
                'Duración',
                '50 minutos'
            ],
            [
                'Modalidad',
                'Videollamada (enlace enviado por correo)'
            ],
            [
                'Profesional',
                'Nutricionista con registro vigente'
            ],
            [
                'Incluye',
                'Informe escrito y minuta base de 7 días'
            ],
            [
                'Agenda',
                'Lunes a sábado, 09:00 a 20:00'
            ],
            [
                'Reagendamiento',
                'Sin costo hasta 12 horas antes'
            ]
        ]
    },
    {
        id: 'pack-sesiones',
        nombre: 'Pack 4 sesiones de control',
        tipo: 'Servicio',
        precio: 79990,
        unidad: 'pack',
        resumen: 'Acompañamiento de tres meses: cuatro controles quincenales con ajustes del plan según tus avances.',
        imagenes: [
            {
                archivo: '/img/Image_control.jpg',
                texto: 'Calendario con cuatro sesiones de control agendadas'
            },
            {
                archivo: '/img/detalle-seguimiento.svg',
                texto: 'Gráfico de avances del acompañamiento'
            },
            {
                archivo: '/img/detalle-agenda.svg',
                texto: 'Agenda de los controles quincenales'
            }
        ],
        descripcion: 'Acompañamiento de tres meses con cuatro controles quincenales de 30 minutos cada uno. En cada control revisamos adherencia, energía, digestión y medidas, y ajustamos el plan según cómo te esté resultando. Incluye mensajería con tu nutricionista entre sesiones.',
        beneficios: [
            'Ahorro de $19.970 frente a comprar las sesiones por separado.',
            'Mensajería directa con tu nutricionista entre controles.',
            'Ajustes del plan en cada sesión, sin costo adicional.'
        ],
        ficha: [
            [
                'Sesiones',
                '4 controles de 30 minutos'
            ],
            [
                'Frecuencia',
                'Cada dos semanas'
            ],
            [
                'Vigencia',
                '3 meses desde la primera sesión'
            ],
            [
                'Modalidad',
                'Videollamada'
            ],
            [
                'Incluye',
                'Ajustes del plan y mensajería entre sesiones'
            ],
            [
                'Valor por sesión',
                'Equivale a $19.998 cada control'
            ]
        ]
    }
]   