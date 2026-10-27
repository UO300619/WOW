/*
 * Codex de Azeroth — datos del portal.
 * Para añadir o corregir contenido basta con editar este archivo:
 * no hace falta tocar el HTML ni el JavaScript de la aplicación.
 * Última revisión del contenido: 27 de octubre de 2026 (parche 12.1.5).
 */

window.CODEX = {
  actualizado: "27 de octubre de 2026",
  parche: "12.1.5",

  /* ------------------------------------------------------------------ */
  /* Estado actual del juego                                             */
  /* ------------------------------------------------------------------ */
  parches: [
    {
      fecha: "14 oct 2026",
      nombre: "12.1.5",
      resumen:
        "Cierre de la historia de Quel'Thalas y Zul'Aman, banda de un jefe The Unbinding of Kith'ix, el primer Laberinto (megasima de Kindo'jan), Invasiones aqir en Canción Eterna y Zul'Aman, y Piedras de veneno ascendentes para subir nivel de objeto.",
      fuente: "https://gamerant.com/wow-midnight-update-12-1-5-patch-notes-world-of-warcraft/"
    },
    {
      fecha: "12 ago 2026",
      nombre: "12.1 · Curse of Ula'tek",
      resumen:
        "Zona Coiled Isle, campaña, Guaridas, tres simas nuevas y rediseño de interfaz. La temporada 2 empezó el 18 de agosto con la banda Venomous Abyss (8 jefes, final Ula'tek) y más de 22 monturas nuevas.",
      fuente: "https://kami-labs.fr/en/gaming/wow-midnight-saison-2-18-aout/"
    },
    {
      fecha: "16 jun 2026",
      nombre: "12.0.7 · Revelations",
      resumen:
        "Banda de un jefe Sporefall en Harandar, minizonas Val y Naigtal, vuelta de las Turbulent Timeways y el sistema Omnium Folio.",
      fuente: "https://warcraft.wiki.gg/wiki/Patch_12.0.7"
    },
    {
      fecha: "abr 2026",
      nombre: "12.0.5",
      resumen: "Ritual Sites (estilo sima con desafíos), Void Assaults semanales y Decor Duels.",
      fuente: "https://www.method.gg/guides/all-new-mounts-available-in-midnight-patch-12-0-5"
    },
    {
      fecha: "2 mar 2026",
      nombre: "Lanzamiento de Midnight",
      resumen:
        "Nivel máximo 90, Quel'Thalas (Bosque Canción Eterna y Zul'Aman), Harandar, la Tormenta del Vacío, Lunargenta como capital y el sistema de Presa.",
      fuente: "https://en.wikipedia.org/wiki/World_of_Warcraft:_Midnight"
    }
  ],

  proximo: [
    {
      titulo: "12.2 Eclipse",
      cuando: "Principios de 2027",
      texto:
        "Último gran parche de Midnight: zona titánica Mantle Vault, banda The Worldcore de 8 jefes con Xal'atath al final, la daga legendaria Midnight's Edge y tres razas más que podrán ser paladín.",
      fuente: "https://wowvendor.com/media/wow/midnight-patch-12-2/"
    },
    {
      titulo: "The Last Titan",
      cuando: "Siguiente expansión",
      texto: "Cierra la Saga del Alma del Mundo con el despertar del titán Azeroth. Anunciada en la BlizzCon 2026.",
      fuente: "https://massivelyop.com/2026/09/12/blizzcon-2026-retail-world-of-warcraft-teases-the-last-titan-expansion-and-eclipse-update/"
    },
    {
      titulo: "WoW Forever",
      cuando: "4 de noviembre de 2026",
      texto: "Tercera versión permanente tipo «Classic+», con la Azeroth original ampliada. Incluida en la suscripción normal.",
      fuente: "https://tbreak.com/world-of-warcraft-forever-beta-response-17-years/"
    }
  ],

  /* ------------------------------------------------------------------ */
  /* Glosario                                                            */
  /* ------------------------------------------------------------------ */
  glosario: [
    ["Facciones", "Alianza y Horda. Desde hace años se puede agrupar entre facciones en mazmorras, bandas y hermandades."],
    ["Expansión", "Cada gran ampliación del juego (11 hasta hoy). Sube el nivel máximo y añade continente o zonas."],
    ["Parche x.y.z", "Actualización dentro de una expansión: 12.1 es un parche grande, 12.1.5 uno intermedio."],
    ["Temporada", "Ciclo de 4-6 meses con su banda, rotación de mazmorras M+, JcJ puntuado y monturas propias. Las recompensas de temporada desaparecen al acabar."],
    ["Mazmorra y banda", "Instancias de 5 jugadores y de 10-30. Dificultades: Buscador de bandas, Normal, Heroico y Mítico."],
    ["Mítica+ (M+)", "Mazmorras con piedra angular y temporizador; la dificultad sube por niveles."],
    ["Sima", "Instancia corta para 1-5 jugadores con un acompañante. En Midnight también hay Laberintos (megasimas)."],
    ["Reputación y Renombre", "La reputación clásica (Neutral a Exaltado) da acceso a vendedores; el Renombre es el sistema por niveles de las expansiones modernas."],
    ["Banda guerrera", "Todos los personajes de tu cuenta. Muchas reputaciones, logros, monturas y apariencias se comparten."],
    ["Puesto comercial", "Tienda mensual de las capitales. Se paga con Trader's Tender, que se gana con el diario de viajero; cada mes rota monturas y transfiguraciones."],
    ["Vuelo surcacielos", "El vuelo dinámico que llegó con Dragonflight; la mayoría de monturas voladoras pueden usarlo."],
    ["Transfiguración", "Cambiar el aspecto de tu equipo por apariencias ya desbloqueadas. En Midnight se guarda por ranura con atuendos."],
    ["Mercado negro", "Subasta especial en el Templo de la Calavera (Cumbre Kun-Lai) donde a veces salen monturas raras a precios altos."],
    ["Bloqueo (lockout)", "Límite de cuántas veces puedes despojar un jefe: diario en mazmorras heroicas, semanal en bandas. Cada personaje tiene el suyo."],
    ["Reinicio semanal", "En Europa, los miércoles por la mañana. Se renuevan bandas, la cámara semanal y muchas misiones."],
    ["Zidormi", "PNJ que te cambia de versión una zona que ha cambiado con el tiempo (por ejemplo, el Valle de la Flor Eterna)."],
    ["Insignias deformadas en el tiempo", "Moneda del Paseo en el Tiempo, con la que se compran monturas y objetos antiguos."],
    ["Catalizador", "Convierte piezas normales de la temporada en piezas del set de tu clase."]
  ],

  /* ------------------------------------------------------------------ */
  /* Lore                                                                */
  /* ------------------------------------------------------------------ */
  fuerzas: [
    { par: "Luz y Vacío", texto: "Orden y entropía. Los naaru son seres de Luz; los Señores del Vacío y sus Dioses Antiguos (C'Thun, Yogg-Saron, N'Zoth, Y'Shaarj) quieren corromper al titán dormido." },
    { par: "Vida y Muerte", texto: "La Vida es la energía de la naturaleza y el Sueño Esmeralda; la Muerte gobierna las Tierras Sombrías, el más allá." },
    { par: "Orden y Desorden", texto: "El Orden es la magia arcana de los titanes; el Desorden es la magia vil de la Legión Ardiente." }
  ],

  edadAntigua: [
    "Los titanes (el Panteón) recorren el universo ordenando mundos. Descubren a los Dioses Antiguos incrustados en Azeroth, los encierran y crean guardianes, enanos de piedra y otros constructos.",
    "Sargeras, el titán guerrero, enloquece al comprender que el Vacío amenaza la creación. Funda la Legión Ardiente para quemar el universo antes de que el Vacío lo corrompa.",
    "Guerra de los Ancestros (hace unos 10.000 años): la reina Azshara y sus elfos de la noche abren el Pozo de la Eternidad a la Legión. Malfurion, Tyrande e Illidan la frenan; el Pozo implosiona en la Gran Separación, que rompe el continente original.",
    "Los elfos exiliados fundan Quel'Thalas con un vial del Pozo y crean la Fuente del Sol. Para ello se enfrentan a los trolls Amani de Zul'Aman, rencilla que sigue viva hoy.",
    "Primera y Segunda Guerra: Gul'dan corrompe a los orcos de Draenor con magia vil y abre el Portal Oscuro. La Horda arrasa Ventormenta; la Alianza la derrota al final.",
    "Tercera Guerra: Thrall libera a los orcos, la Plaga del Rey Exánime arrasa Lordaeron y Arthas mata a su padre. Invade Quel'Thalas, mata al rey Anasterian y usa la Fuente del Sol para resucitar a Kel'Thuzad, lo que la corrompe. Archimonde cae en el Monte Hyjal.",
    "Arthas se funde con Ner'zhul y se convierte en el Rey Exánime en la Corona de Hielo. Sylvanas se libera y funda los Renegados."
  ],

  expansiones: [
    { nombre: "Midnight", anio: 2026, enemigo: "Xal'atath", texto: "Ataque del Vacío a Quel'Thalas y la Fuente del Sol." },
    { nombre: "The War Within", anio: 2024, enemigo: "Xal'atath, Ansurek", texto: "Khaz Algar, bajo tierra. Xal'atath destruye Dalaran y manipula a los nerubianos; luego Undermine y K'aresh." },
    { nombre: "Dragonflight", anio: 2022, enemigo: "Fyrakk, Raszageth", texto: "Vuelven las Islas Dragón; los Aspectos recuperan sus poderes y se planta Amirdrassil." },
    { nombre: "Shadowlands", anio: 2020, enemigo: "El Carcelero (Zovaal)", texto: "Sylvanas rompe el Yelmo de Dominación y nos lleva a las Tierras Sombrías." },
    { nombre: "Battle for Azeroth", anio: 2018, enemigo: "N'Zoth", texto: "La Espada de Sargeras hiere Azeroth y aflora la azerita; guerra Alianza-Horda; cae N'Zoth." },
    { nombre: "Legion", anio: 2016, enemigo: "Sargeras, Kil'jaeden", texto: "Gran invasión de la Legión; armas artefacto, Tumba de Sargeras y Antorus; Sargeras queda encerrado." },
    { nombre: "Warlords of Draenor", anio: 2014, enemigo: "Archimonde, Gul'dan", texto: "Viaje a un Draenor alternativo y la Horda de Hierro." },
    { nombre: "Mists of Pandaria", anio: 2012, enemigo: "Garrosh, los sha", texto: "Pandaria; Garrosh libera el corazón de Y'Shaarj y es derrocado." },
    { nombre: "Cataclysm", anio: 2010, enemigo: "Alamuerte", texto: "Alamuerte rompe el mundo; se rehace la Azeroth clásica." },
    { nombre: "Wrath of the Lich King", anio: 2008, enemigo: "Arthas", texto: "Rasganorte; Arthas muere y Bolvar se pone el Yelmo." },
    { nombre: "The Burning Crusade", anio: 2007, enemigo: "Illidan, Kil'jaeden", texto: "Terrallende; la Fuente del Sol se purifica con M'uru al final." },
    { nombre: "Clásico", anio: 2004, enemigo: "Ragnaros, Onyxia, C'Thun, Kel'Thuzad", texto: "Azeroth tras la Tercera Guerra." }
  ],

  saga: [
    { titulo: "The War Within", texto: "Los terráneos de Khaz Algar custodian el núcleo de Azeroth. Xal'atath, la Heraldo del Vacío (una antigua daga con conciencia propia), hace que derrotemos a sus rivales mientras ella reúne poder, incluida la energía arcana de Dalaran destruida." },
    { titulo: "Midnight · campaña principal", texto: "Xal'atath y su Hueste Devoradora atacan la Fuente del Sol desde la Tormenta del Vacío. Liadrin reza a la Luz y nos convoca. Seguimos a Arator, hijo de Alleria y Turalyon, buscando reliquias de la Luz. En la Aguja del Vacío, Xal'atath apuñala a Alleria, le arranca el naaru oscuro L'ura y con él convierte la Fuente del Sol en el Pozo Oscuro." },
    { titulo: "March on Quel'Danas", texto: "Final de la temporada 1: los elfos marchan sobre la Meseta de la Fuente del Sol. Xal'atath escapa por el Pozo Oscuro con miles de esbirros, y Alleria y Turalyon desaparecen por el portal." },
    { titulo: "Curse of Ula'tek (12.1)", texto: "Zul'jarra se convierte en hash'ey de los Amani y su hermano Zul'jan, celoso y obsesionado con la gloria antigua, es manipulado por el brujo Malacrass. Descubre que los Amani usaron a Ula'tek, una serpiente surgida de la Grieta de Aln, para derrotar al aqir Kith'ix. Zul'jan libera a Ula'tek." },
    { titulo: "12.1.5", texto: "Cierra la historia de Quel'Thalas y Zul'Aman con la banda de un jefe contra Kith'ix y las invasiones aqir." },
    { titulo: "Eclipse y The Last Titan", texto: "Xal'atath va a por el Alma del Mundo en el núcleo de Azeroth; la siguiente expansión trata del despertar del titán." }
  ],

  /* ------------------------------------------------------------------ */
  /* Vías para conseguir monturas                                        */
  /* ------------------------------------------------------------------ */
  vias: [
    { via: "Reputación y Renombre", como: "Subes una facción y compras la montura a su intendente. En Midnight, la Corte de Lunargenta, la Tribu Amani, los Hara'ti y la Singularidad venden dos monturas cada una a Renombre 17 y 19 por Voidlight Marl." },
    { via: "Bandas antiguas", como: "Bandas de expansiones pasadas que puedes hacer solo. Probabilidades de ~1% y bloqueo semanal por personaje." },
    { via: "Mazmorras", como: "Igual que las bandas pero con bloqueo diario en heroico." },
    { via: "Raros y jefes de mundo", como: "Enemigos que aparecen por el mapa con temporizador o al azar." },
    { via: "Logros", como: "Metalogros de bandas (Gloria del asaltante), de zona o de colección. Los de cantidad solo cuentan monturas que puede usar un mismo personaje: míralo en Logros → Estadísticas." },
    { via: "Vendedores", como: "Precio fijo en oro u otras monedas, sin azar." },
    { via: "Profesiones", como: "Ingeniería, sastrería, joyería, peletería, alquimia o arqueología fabrican monturas." },
    { via: "Puesto comercial", como: "Rotación mensual pagada con Trader's Tender. Si se te pasa, suele volver más adelante." },
    { via: "Eventos de temporada", como: "Festividades anuales con jefes de mazmorra que sueltan monturas." },
    { via: "Paseo en el Tiempo", como: "Insignias deformadas en el tiempo durante las semanas de Paseo en el Tiempo y las Turbulent Timeways." },
    { via: "JcJ", como: "Puntuado de temporada (gladiador, élite) y monturas por honor." },
    { via: "M+ y temporada", como: "Maestro y Leyenda de piedra angular y logros de temporada. Desaparecen al acabar la temporada." },
    { via: "Tienda y promociones", como: "Dinero real, ediciones de coleccionista, Twitch Drops e invitar a un amigo." },
    { via: "Mercado negro", como: "Subasta rotatoria de monturas antiguas o retiradas a precios altos." }
  ],

  logrosColeccion: [
    { n: 50, logro: "Leading the Cavalry", premio: "Draco albino" },
    { n: 100, logro: "Mountain o' Mounts", premio: "Dracohalcón azul (Alianza) / rojo (Horda)" },
    { n: 200, logro: "Mount Parade", premio: "Dracohalcón acorazado azul / rojo" },
    { n: 250, logro: "Mountacular", premio: "Felfire Hawk" },
    { n: 300, logro: "Lord of the Reins", premio: "Dragón nimbo azur celestial" },
    { n: 400, logro: "A Horde of Hoofbeats", premio: "Frenzied Feltalon" },
    { n: 600, logro: "—", premio: "Anu'shalla, Shadow's Guidance" }
  ],

  /*
   * Base de datos de monturas.
   * tipo: "seguro" (sin azar), "azar" (probabilidad de botín) o "temporal" (puede desaparecer o rotar).
   * via: debe coincidir con una de las categorías de filtro de abajo.
   */
  viasFiltro: ["Reputación", "Banda", "Mazmorra", "Raro / jefe de mundo", "Logro", "Misión", "Vendedor", "Profesión", "Puesto comercial", "Temporada"],

  monturas: [
    // Dragones nimbo de Pandaria
    { id: "nimbo-azur", nombre: "Dragón nimbo azur", en: "Azure Cloud Serpent", exp: "Mists of Pandaria", via: "Reputación", tipo: "seguro", donde: "Exaltado con la Orden del Dragón Nimbo; 3.000 de oro (≈2.400 con descuento) a San Redscale, Arboreto (Bosque de Jade)", nimbo: true },
    { id: "nimbo-jade", nombre: "Dragón nimbo de jade", en: "Jade Cloud Serpent", exp: "Mists of Pandaria", via: "Reputación", tipo: "seguro", donde: "Exaltado con la Orden del Dragón Nimbo; 3.000 de oro a San Redscale", nimbo: true },
    { id: "nimbo-dorado", nombre: "Dragón nimbo dorado", en: "Golden Cloud Serpent", exp: "Mists of Pandaria", via: "Reputación", tipo: "seguro", donde: "Exaltado con la Orden del Dragón Nimbo; 3.000 de oro a San Redscale", nimbo: true },
    { id: "nimbo-dorado-celestial", nombre: "Dragón nimbo dorado celestial", en: "Heavenly Golden Cloud Serpent", exp: "Mists of Pandaria", via: "Reputación", tipo: "seguro", donde: "Exaltado con el Emperador Shaohao + 100.000 Monedas intemporales; Mistweaver Ku, Isla Intemporal (/way 42.7 55.7)", nimbo: true },
    { id: "nimbo-trueno-augusto", nombre: "Dragón nimbo trueno augusto", en: "Thundering August Cloud Serpent", exp: "Mists of Pandaria", via: "Reputación", tipo: "seguro", donde: "Exaltado con los Augustos Celestiales; 10.000 de oro en el Santuario de las Dos Lunas / Siete Estrellas", nimbo: true },
    { id: "nimbo-onice", nombre: "Dragón nimbo de ónice", en: "Onyx Cloud Serpent", exp: "Mists of Pandaria", via: "Misión", tipo: "seguro", donde: "Cadena Surprise Attack! en las Estepas de Tong Long tras Exaltado con el Shadopan", nimbo: true },
    { id: "nimbo-trueno-rubi", nombre: "Dragón nimbo trueno rubí", en: "Thundering Ruby Cloud Serpent", exp: "Mists of Pandaria", via: "Raro / jefe de mundo", tipo: "seguro", donde: "Alani, sobre el Valle de la Flor Eterna. 10 Fragmentos celestes → Cristal celeste para quitarle el escudo. Botín garantizado", nimbo: true },
    { id: "nimbo-carmesi", nombre: "Dragón nimbo carmesí", en: "Crimson Cloud Serpent", exp: "Mists of Pandaria", via: "Logro", tipo: "seguro", donde: "Logro Glory of the Pandaria Hero (mazmorras de Pandaria)", nimbo: true },
    { id: "nimbo-carmesi-celestial", nombre: "Dragón nimbo carmesí celestial", en: "Heavenly Crimson Cloud Serpent", exp: "Mists of Pandaria", via: "Logro", tipo: "seguro", donde: "Logro Glory of the Pandaria Raider (bandas de Pandaria)", nimbo: true },
    { id: "nimbo-azur-celestial", nombre: "Dragón nimbo azur celestial", en: "Heavenly Azure Cloud Serpent", exp: "Mists of Pandaria", via: "Logro", tipo: "seguro", donde: "Logro de 300 monturas (Lord of the Reins)", nimbo: true },
    { id: "yulei", nombre: "Yu'lei, Hija de Jade", en: "Yu'lei, Daughter of Jade", exp: "Mists of Pandaria", via: "Vendedor", tipo: "seguro", donde: "5.000 Insignias deformadas en el tiempo a Mistweaver Xia, Isla Intemporal", nimbo: true },
    { id: "nimbo-magenta", nombre: "Dragón nimbo magenta", en: "Magenta Cloud Serpent", exp: "Mists of Pandaria", via: "Puesto comercial", tipo: "temporal", donde: "Puesto comercial, 900 Trader's Tender, cuando esté en rotación", nimbo: true },
    { id: "nimbo-astral", nombre: "Dragón nimbo astral", en: "Astral Cloud Serpent", exp: "Mists of Pandaria", via: "Banda", tipo: "azar", donde: "Elegon, Cámaras Mogu'shan (~1%)", nimbo: true, semanal: true },
    { id: "nimbo-onice-celestial", nombre: "Dragón nimbo ónice celestial", en: "Heavenly Onyx Cloud Serpent", exp: "Mists of Pandaria", via: "Raro / jefe de mundo", tipo: "azar", donde: "Sha de la Ira, jefe de mundo en la Cumbre Kun-Lai", nimbo: true, semanal: true },
    { id: "nimbo-trueno-cobalto", nombre: "Dragón nimbo trueno cobalto", en: "Thundering Cobalt Cloud Serpent", exp: "Mists of Pandaria", via: "Raro / jefe de mundo", tipo: "azar", donde: "Nalak, jefe de mundo en la Isla del Trueno", nimbo: true, semanal: true },
    { id: "nimbo-trueno-onice", nombre: "Dragón nimbo trueno ónice", en: "Thundering Onyx Cloud Serpent", exp: "Mists of Pandaria", via: "Raro / jefe de mundo", tipo: "azar", donde: "Huolon, raro élite sobre el Camino Llameante de la Isla Intemporal", nimbo: true },

    // Otras de Pandaria
    { id: "horridon", nombre: "Engendro de Horridon", en: "Spawn of Horridon", exp: "Mists of Pandaria", via: "Banda", tipo: "azar", donde: "Horridon, Solio del Trueno", semanal: true },
    { id: "jikun", nombre: "Nidada de Ji-Kun", en: "Clutch of Ji-Kun", exp: "Mists of Pandaria", via: "Banda", tipo: "azar", donde: "Ji-Kun, Solio del Trueno", semanal: true },
    { id: "korkron", nombre: "Gigante kor'kron", en: "Kor'kron Juggernaut", exp: "Mists of Pandaria", via: "Banda", tipo: "azar", donde: "Garrosh, Asedio de Orgrimmar (mítico)", semanal: true },

    // Destacadas por expansión
    { id: "star-eater", nombre: "Unbound Star-Eater", en: "Unbound Star-Eater", exp: "The War Within", via: "Banda", tipo: "azar", donde: "Dimensius, Manaforge Omega (mítico)", semanal: true },
    { id: "skyrazor", nombre: "Sureki Skyrazor", en: "Sureki Skyrazor", exp: "The War Within", via: "Banda", tipo: "azar", donde: "Reina Ansurek, Palacio Nerub-ar (mítico)", semanal: true },
    { id: "anurelos", nombre: "Anu'relos, Flame's Guidance", en: "Anu'relos, Flame's Guidance", exp: "Dragonflight", via: "Banda", tipo: "azar", donde: "Fyrakk, Amirdrassil (mítico)", semanal: true },
    { id: "zereth", nombre: "Zereth Overseer", en: "Zereth Overseer", exp: "Shadowlands", via: "Banda", tipo: "azar", donde: "El Carcelero, Sepulcro de los Primeros (mítico)", semanal: true },
    { id: "vengeance", nombre: "Vengeance", en: "Vengeance", exp: "Shadowlands", via: "Banda", tipo: "azar", donde: "Sylvanas, Santuario de Dominación (mítico)", semanal: true },
    { id: "allseer", nombre: "Ny'alotha Allseer", en: "Ny'alotha Allseer", exp: "Battle for Azeroth", via: "Banda", tipo: "azar", donde: "N'Zoth, Ny'alotha (mítico)", semanal: true },
    { id: "tidestorm", nombre: "Glacial Tidestorm", en: "Glacial Tidestorm", exp: "Battle for Azeroth", via: "Banda", tipo: "azar", donde: "Jaina, Batalla de Dazar'alor (mítico)", semanal: true },
    { id: "urzul", nombre: "Shackled Ur'zul", en: "Shackled Ur'zul", exp: "Legion", via: "Banda", tipo: "azar", donde: "Argus, Antorus (mítico)", semanal: true },
    { id: "midnight-kara", nombre: "Midnight", en: "Midnight", exp: "Legion", via: "Mazmorra", tipo: "azar", donde: "Attumen, Regreso a Karazhan (mítico)", semanal: true },
    { id: "ember-wyrm", nombre: "Smoldering Ember Wyrm", en: "Smoldering Ember Wyrm", exp: "Legion", via: "Mazmorra", tipo: "azar", donde: "Nightbane, Regreso a Karazhan (mítico); requiere un evento contrarreloj", semanal: true },
    { id: "felsteel", nombre: "Felsteel Annihilator", en: "Felsteel Annihilator", exp: "Warlords of Draenor", via: "Banda", tipo: "azar", donde: "Archimonde, Ciudadela del Fuego Infernal (mítico)", semanal: true },
    { id: "blazing", nombre: "Draco llameante", en: "Blazing Drake", exp: "Cataclysm", via: "Banda", tipo: "azar", donde: "Locura de Alamuerte, Alma de Dragón", semanal: true },
    { id: "handmaiden", nombre: "Life-Binder's Handmaiden", en: "Life-Binder's Handmaiden", exp: "Cataclysm", via: "Banda", tipo: "azar", donde: "Locura de Alamuerte, Alma de Dragón (heroico)", semanal: true },
    { id: "12b", nombre: "Experimento 12-B", en: "Experiment 12-B", exp: "Cataclysm", via: "Banda", tipo: "azar", donde: "Ultraxion, Alma de Dragón", semanal: true },
    { id: "pureblood", nombre: "Halcón de fuego de sangre pura", en: "Pureblood Fire Hawk", exp: "Cataclysm", via: "Banda", tipo: "azar", donde: "Ragnaros, Tierras de Fuego", semanal: true },
    { id: "invincible", nombre: "Invencible", en: "Invincible", exp: "Wrath of the Lich King", via: "Banda", tipo: "azar", donde: "Rey Exánime, Ciudadela de la Corona de Hielo (25 heroico)", semanal: true, dk: true },
    { id: "mimiron", nombre: "Cabeza de Mimiron", en: "Mimiron's Head", exp: "Wrath of the Lich King", via: "Banda", tipo: "azar", donde: "Yogg-Saron sin ayuda de guardianes, Ulduar (25)", semanal: true },
    { id: "tlpd", nombre: "Protodraco Perdido en el Tiempo", en: "Time-Lost Proto-Drake", exp: "Wrath of the Lich King", via: "Raro / jefe de mundo", tipo: "azar", donde: "Bicho raro en Cumbres Tormentosas" },
    { id: "blue-proto", nombre: "Protodraco azul", en: "Blue Proto-Drake", exp: "Wrath of the Lich King", via: "Mazmorra", tipo: "azar", donde: "Skadi, Pináculo de Utgarde (heroico); bloqueo diario" },
    { id: "alar", nombre: "Cenizas de Al'ar", en: "Ashes of Al'ar", exp: "The Burning Crusade", via: "Banda", tipo: "azar", donde: "Kael'thas, El Ojo (Castillo de la Tempestad)", semanal: true },
    { id: "fiery-warhorse", nombre: "Caballo de guerra ígneo", en: "Fiery Warhorse", exp: "The Burning Crusade", via: "Banda", tipo: "azar", donde: "Attumen, Karazhan", semanal: true },
    { id: "white-hawkstrider", nombre: "Halcón zancudo blanco presto", en: "Swift White Hawkstrider", exp: "The Burning Crusade", via: "Mazmorra", tipo: "azar", donde: "Kael'thas, Bancal del Magister (heroico)" },
    { id: "rivendare", nombre: "Corcel de la muerte de Rivendare", en: "Rivendare's Deathcharger", exp: "Clásico", via: "Mazmorra", tipo: "azar", donde: "Barón Rivendare, Stratholme", dk: true },
    { id: "onyxian", nombre: "Draco de Onyxia", en: "Onyxian Drake", exp: "Clásico", via: "Banda", tipo: "azar", donde: "Onyxia, Guarida de Onyxia", semanal: true },

    // Midnight
    { id: "skyfriend", nombre: "Primeval Skyfriend", en: "Primeval Skyfriend", exp: "Midnight", via: "Banda", tipo: "temporal", donde: "Ula'tek mítico, Venomous Abyss. Caen 3 por muerte, no una por persona" },
    { id: "venomfang", nombre: "Crimson Venomfang", en: "Crimson Venomfang", exp: "Midnight", via: "Logro", tipo: "seguro", donde: "Metalogro Glory of the Venomous Raider" },
    { id: "goredrake", nombre: "Venomous Gladiator's Goredrake", en: "Venomous Gladiator's Goredrake", exp: "Midnight", via: "Temporada", tipo: "temporal", donde: "JcJ puntuado de la temporada 2" },
    { id: "sporeglider", nombre: "Luminous Sporeglider", en: "Luminous Sporeglider", exp: "Midnight", via: "Banda", tipo: "seguro", donde: "Junta 4 Delicious Sporesnacks de Rotmire en Sporefall (una por semana y cuenta, cualquier dificultad)" },
    { id: "vyranoth", nombre: "Spawn of Vyranoth", en: "Spawn of Vyranoth", exp: "Midnight", via: "Temporada", tipo: "temporal", donde: "Logro Master of the Turbulent Timeways V" },
    { id: "fiery-dragonhawk", nombre: "Dracohalcón ígneo", en: "Fiery Dragonhawk", exp: "Midnight", via: "Reputación", tipo: "seguro", donde: "Renombre 19 con la Corte de Lunargenta; 8.000 Voidlight Marl" },
    { id: "crimson-hawkstrider", nombre: "Halcón zancudo carmesí de Lunargenta", en: "Crimson Silvermoon Hawkstrider", exp: "Midnight", via: "Reputación", tipo: "seguro", donde: "Renombre 17 con la Corte de Lunargenta; 6.000 Voidlight Marl" },
    { id: "nether-swept", nombre: "Nether-Swept Drake", en: "Nether-Swept Drake", exp: "Midnight", via: "Profesión", tipo: "azar", donde: "Pesca en los vórtices oceánicos de la Tormenta del Vacío" },
    { id: "chloroceros", nombre: "Vivacious Chloroceros", en: "Vivacious Chloroceros", exp: "Midnight", via: "Logro", tipo: "seguro", donde: "Logro Treasures of Harandar (todos los tesoros de Harandar)" },
    { id: "grimlynx", nombre: "Rootstalker Grimlynx", en: "Rootstalker Grimlynx", exp: "Midnight", via: "Raro / jefe de mundo", tipo: "azar", donde: "Raros de Harandar" },
    { id: "petalwing", nombre: "Vibrant Petalwing", en: "Vibrant Petalwing", exp: "Midnight", via: "Raro / jefe de mundo", tipo: "azar", donde: "Raros de Harandar" },
    { id: "stormray", nombre: "Augmented Stormray", en: "Augmented Stormray", exp: "Midnight", via: "Raro / jefe de mundo", tipo: "azar", donde: "Raros de la Tormenta del Vacío" },
    { id: "harrower", nombre: "Sanguine Harrower", en: "Sanguine Harrower", exp: "Midnight", via: "Raro / jefe de mundo", tipo: "azar", donde: "Raros de la Tormenta del Vacío" },

    // Caballero de la muerte
    { id: "acherus", nombre: "Corcel de la muerte de Acherus", en: "Acherus Deathcharger", exp: "Wrath of the Lich King", via: "Misión", tipo: "seguro", donde: "Zona de inicio del caballero de la muerte", dk: true },
    { id: "vilebrood", nombre: "Deathlord's Vilebrood Vanquisher", en: "Deathlord's Vilebrood Vanquisher", exp: "Legion", via: "Misión", tipo: "seguro", donde: "Campaña de la sede de clase del caballero de la muerte", dk: true }
  ],

  /* ------------------------------------------------------------------ */
  /* Pandaria                                                            */
  /* ------------------------------------------------------------------ */
  planOrden: [
    "De Venerado a Exaltado faltan 21.000 puntos.",
    "Haz las diarias del Arboreto (Bosque de Jade).",
    "Busca Huevos de ónice en la Isla de Barlovento, al este del Bosque de Jade: es la forma más rápida.",
    "En Exaltado, San Redscale (Arboreto, /way 56.6 44.4) vende los tres dragones por 3.000 de oro cada uno, unos 2.400 con el descuento de Exaltado."
  ],
  planShaohao: [
    "Necesitas 42.000 puntos desde Indiferente.",
    "Llega volando al sureste del Bosque de Jade, o con la misión de Cromi en el Valle de la Flor Eterna la primera vez.",
    "Mata yaungol Ordon y elementales de fuego. Mejor zona: Santuario de Ordos (noreste, ~20-25 por muerte), alternando con el Camino Llameante mientras reaparecen.",
    "Haz la diaria The Mistweaver's Way (250) y abre los cofres diarios.",
    "Las Monedas intemporales salen solas mientras farmeas: suelen llegar a 100.000 antes que el Exaltado.",
    "Bonificaciones que se suman: Diplomacia humana (+10%), carrusel de la Feria de la Luna Negra (+10% una hora), estandarte de hermandad (+15%) y objetos de reputación en semanas de Paseo en el Tiempo de Pandaria.",
    "Agrúpate (no en banda: la banda reduce la reputación) y no uses el Incensario de agonía eterna, que anula la reputación.",
    "Estimación: 4-8 horas en varias sesiones. Compra a Mistweaver Ku en la Corte Celestial (/way 42.7 55.7)."
  ],

  /* ------------------------------------------------------------------ */
  /* Armaduras y transfiguración                                         */
  /* ------------------------------------------------------------------ */
  armaduras: [
    ["Placas", "Guerrero, Paladín, Caballero de la muerte"],
    ["Malla", "Cazador, Chamán, Evocador"],
    ["Cuero", "Pícaro, Druida, Monje, Cazador de demonios"],
    ["Tela", "Mago, Sacerdote, Brujo"]
  ],
  transmog: [
    ["Atuendos", "Conjuntos guardados que se aplican a las ranuras. Empiezas con 2 gratis, puedes llegar a 50 y los huecos extra se compran con oro para toda la banda guerrera. Los 20 primeros cuestan unos 162.650 de oro."],
    ["Cambio gratis", "El atuendo se puede poner en la barra de acción y cambiarlo en cualquier sitio, sin ir al transfigurador."],
    ["Situaciones", "Reglas para que un atuendo se ponga solo según lo que hagas (uno para mazmorras, otro para la ciudad)."],
    ["Conjuntos personalizados", "Tus atuendos de antes de Midnight se convirtieron automáticamente en esta pestaña."]
  ],
  origenArmaduras: [
    ["Sets de tier", "Cada temporada trae un set por clase; en la temporada 2 son 13 sets, con fichas de 5 jefes más una ficha universal de Ula'tek. Cada dificultad es una recoloración que se colecciona aparte."],
    ["Catalizador", "Convierte piezas normales de la temporada en piezas del set de tu clase. En Midnight está en Lunargenta y usa cargas que se acumulan con el tiempo."],
    ["Bandas antiguas en solitario", "La forma clásica de coleccionar: cada jefe suelta piezas de su tier y se limpian en minutos."],
    ["JcJ", "Sets de honor, de conquista y de élite (los élite requieren puntuación alta)."],
    ["Puesto comercial", "Cada mes rota sets y piezas sueltas por Trader's Tender."],
    ["Armaduras ancestrales", "Sets propios de cada raza aliada y de varias razas clásicas, por logros de nivel y reputación."],
    ["Misiones, reputaciones y simas", "Muchas piezas de mundo y de facción de cada expansión."]
  ],
  setsDK: [
    ["Scourgelord (tier 10)", "Ciudadela de la Corona de Hielo", "El más icónico de la clase; varias recoloraciones según dificultad."],
    ["Thassarian / Koltira (tier 9)", "Prueba del Cruzado", "Versión Alianza y Horda."],
    ["Darkruned (tier 8)", "Ulduar", ""],
    ["Scourgeborne (tier 7)", "Naxxramas (Rasganorte)", "El primer set de la clase."],
    ["Set de la sede de clase", "Acherus (Legion)", "Set de campaña de clase."],
    ["Apariencias de Apocalipsis", "Arma artefacto profana de Legion", "Las espadas rúnicas de Profano; se desbloquean con logros y retos."]
  ],

  /* ------------------------------------------------------------------ */
  /* Caballero de la muerte profano                                      */
  /* ------------------------------------------------------------------ */
  heroeDK: [
    ["Jinete del Apocalipsis", "Invoca a los Cuatro Jinetes; da Carga de la muerte para moverte.", "Lo recomendado para banda y M+; ~97% de uso en banda."],
    ["San'layn", "Vampírico: Golpe vampírico y más daño de Espiral de muerte y Epidemia.", "Alternativa de plagas; fuerte en pocos objetivos."]
  ],
  cambiosDK: [
    ["12.1", "Los demás jugadores solo ven hasta 3 necrófagos menores tuyos a la vez, y bajaron los daños del Jinete para reducir la cantidad de invocaciones."],
    ["6 oct 2026", "Blizzard volvió a bajar a Profano en un ajuste semanal."],
    ["27 oct 2026", "En JcJ se redujo el daño de Golpe vampírico de San'layn."]
  ],

  /* ------------------------------------------------------------------ */
  /* Fuentes                                                             */
  /* ------------------------------------------------------------------ */
  referencias: [
    ["Wowhead", "https://www.wowhead.com", "Base de datos de objetos, monturas, misiones y noticias."],
    ["Wowhead en español", "https://es.wowhead.com", "Los nombres tal como salen en el cliente español."],
    ["Warcraft Wiki", "https://warcraft.wiki.gg", "Lore y mecánicas."],
    ["Warcraft Mounts", "https://www.warcraftmounts.com", "Monturas por modelo y por parche."],
    ["Icy Veins", "https://www.icy-veins.com/wow/", "Guías de clase y de contenido."],
    ["Method", "https://www.method.gg", "Guías de clase, monturas y parches."],
    ["Archon", "https://www.archon.gg/wow", "Builds más usadas según registros reales."]
  ],
  fuentes: [
    ["Patch 12.0.7 — Warcraft Wiki", "https://warcraft.wiki.gg/wiki/Patch_12.0.7"],
    ["Cloud serpent mounts — Warcraft Wiki", "https://warcraft.wiki.gg/wiki/Cloud_serpent_mounts"],
    ["Xal'atath — Warcraft Wiki", "https://warcraft.wiki.gg/wiki/Xal%27atath"],
    ["World of Warcraft: Midnight — Wikipedia", "https://en.wikipedia.org/wiki/World_of_Warcraft:_Midnight"],
    ["Heavenly Golden Cloud Serpent — wow.gg", "https://wow.gg/guides/heavenly-golden-cloud-serpent-mount-guide"],
    ["Order of the Cloud Serpent — Warcraft Tavern", "https://www.warcrafttavern.com/guides/order-of-the-cloud-serpent-reputation-guide/"],
    ["Midnight Mounts Hub — Icy Veins", "https://www.icy-veins.com/wow/midnight-mounts-hub"],
    ["Transmog Guide — Icy Veins", "https://www.icy-veins.com/wow/transmogrification-guide"],
    ["Dress for Every Situation — Blizzard", "https://worldofwarcraft.blizzard.com/news/24247155/"],
    ["Unholy DK talents — Icy Veins", "https://icy-veins.com/wow/unholy-death-knight-pve-dps-spec-builds-talents"],
    ["Patch 12.1.5 — Gamerant", "https://gamerant.com/wow-midnight-update-12-1-5-patch-notes-world-of-warcraft/"],
    ["Season 2 overview — AccountShark", "https://accountshark.net/blog/wow-midnight-season-2-overview-release-date-rewards"],
    ["Patch 12.2 Eclipse — Wowvendor", "https://wowvendor.com/media/wow/midnight-patch-12-2/"],
    ["WoW Forever — tbreak", "https://tbreak.com/world-of-warcraft-forever-beta-response-17-years/"],
    ["Mount achievements — Blizzard Support", "https://support.blizzard.com/en/article/4738"]
  ]
};
