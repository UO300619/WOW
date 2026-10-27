/* Codex de Azeroth — lógica del portal (sin dependencias). */
(function () {
  "use strict";

  const D = window.CODEX;
  const main = document.getElementById("contenido");

  /* ---------------------------- utilidades ---------------------------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const normal = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const enlace = (texto, url) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(texto)}</a>`;
  const tabla = (cabeceras, filas) =>
    `<div class="tabla-envoltorio"><table><thead><tr>${cabeceras.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${filas
      .map((f) => `<tr>${f.map((c, i) => `<td${i > 0 ? ' class="secundario"' : ""}>${c}</td>`).join("")}</tr>`)
      .join("")}</tbody></table></div>`;

  // El progreso se guarda en el navegador de cada persona.
  const almacen = {
    leer(clave, defecto) {
      try {
        const v = localStorage.getItem("codex:" + clave);
        return v ? JSON.parse(v) : defecto;
      } catch (e) {
        return defecto;
      }
    },
    guardar(clave, valor) {
      try {
        localStorage.setItem("codex:" + clave, JSON.stringify(valor));
      } catch (e) {
        /* sin almacenamiento: el portal sigue funcionando */
      }
    }
  };

  let conseguidas = new Set(almacen.leer("conseguidas", []));
  const guardarConseguidas = () => almacen.guardar("conseguidas", [...conseguidas]);

  // Reinicio semanal europeo: miércoles a las 04:00 UTC.
  function ultimoReinicio(ahora = new Date()) {
    const d = new Date(Date.UTC(ahora.getUTCFullYear(), ahora.getUTCMonth(), ahora.getUTCDate(), 4, 0, 0));
    let dias = (d.getUTCDay() - 3 + 7) % 7;
    d.setUTCDate(d.getUTCDate() - dias);
    if (d > ahora) d.setUTCDate(d.getUTCDate() - 7);
    return d;
  }
  function rutaSemanal() {
    const clave = ultimoReinicio().toISOString();
    const r = almacen.leer("ruta", { semana: clave, hechas: [] });
    if (r.semana !== clave) return { semana: clave, hechas: [] };
    return r;
  }

  const wowhead = (m) =>
    `<a class="wowhead" href="https://es.wowhead.com/search?q=${encodeURIComponent(m.en)}" target="_blank" rel="noopener">Ver en Wowhead</a>`;

  /* ------------------------------ vistas ------------------------------ */
  const vistas = {
    inicio() {
      const total = D.monturas.length;
      const tengo = D.monturas.filter((m) => conseguidas.has(m.id)).length;
      const ruta = rutaSemanal();
      const semanales = D.monturas.filter((m) => m.semanal && !conseguidas.has(m.id));
      const pendientesRuta = semanales.filter((m) => !ruta.hechas.includes(m.id)).length;
      return `
        <section class="portada">
          <div>
            <h1>Codex de Azeroth</h1>
            <p>Todo lo que hay que saber de World of Warcraft en un solo sitio: la historia, cómo conseguir cada montura, las armaduras y el caballero de la muerte profano.</p>
            <p class="nota">Estamos en Midnight, temporada 2, parche ${esc(D.parche)}. El próximo gran parche, Eclipse, llega a principios de 2027.</p>
          </div>
          <div class="eclipse" aria-hidden="true"></div>
        </section>

        <div class="resumen">
          <a class="bloque" href="#monturas">
            <h3>Tu colección</h3>
            <div class="cifra">${tengo} / ${total}</div>
            <p>Monturas de esta guía marcadas como conseguidas.</p>
          </a>
          <a class="bloque" href="#ruta">
            <h3>Ruta de esta semana</h3>
            <div class="cifra">${pendientesRuta}</div>
            <p>Intentos semanales pendientes hasta el reinicio del miércoles.</p>
          </a>
          <a class="bloque" href="#pandaria">
            <h3>Dragones nimbo</h3>
            <div class="cifra">${D.monturas.filter((m) => m.nimbo && conseguidas.has(m.id)).length} / ${D.monturas.filter((m) => m.nimbo).length}</div>
            <p>El dorado celestial sale del Emperador Shaohao, no de la Orden.</p>
          </a>
        </div>

        <h2>Lo que viene</h2>
        <ol class="linea-tiempo">
          ${D.proximo
            .map(
              (p) => `<li><div class="hito"><strong>${esc(p.titulo)}</strong><span class="fecha">${esc(p.cuando)}</span></div><p>${esc(p.texto)} ${enlace("Fuente", p.fuente)}</p></li>`
            )
            .join("")}
        </ol>`;
    },

    estado() {
      return `
        <h1>Estado del juego</h1>
        <p class="entradilla">El juego está en Midnight, temporada 2, parche ${esc(D.parche)} (en Europa desde el 14 de octubre). Después vienen Eclipse y la expansión The Last Titan.</p>
        <h2>Parches de Midnight</h2>
        <ol class="linea-tiempo">
          ${D.parches
            .map(
              (p) => `<li><div class="hito"><strong>${esc(p.nombre)}</strong><span class="fecha">${esc(p.fecha)}</span></div><p>${esc(p.resumen)} ${enlace("Fuente", p.fuente)}</p></li>`
            )
            .join("")}
        </ol>
        <h2>Lo que viene</h2>
        ${tabla(
          ["Qué", "Cuándo", "Detalle"],
          D.proximo.map((p) => [`<strong>${esc(p.titulo)}</strong>`, esc(p.cuando), `${esc(p.texto)} ${enlace("Fuente", p.fuente)}`])
        )}`;
    },

    glosario() {
      return `
        <h1>Glosario</h1>
        <p class="entradilla">Lo mínimo para entender el resto del portal, con los nombres del cliente en español de España.</p>
        <input class="campo" id="filtro-glosario" type="search" placeholder="Filtrar términos…" aria-label="Filtrar términos del glosario">
        <div id="tabla-glosario">${tablaGlosario("")}</div>`;
    },

    lore() {
      return `
        <h1>Lore</h1>
        <p class="entradilla">Toda la historia gira en torno a una idea: Azeroth es un titán dormido cuya alma está a punto de despertar, y todas las fuerzas del cosmos quieren controlarla.</p>
        <h2>Las fuerzas del cosmos</h2>
        <div class="fuerzas">${D.fuerzas.map((f) => `<div class="fuerza"><h3>${esc(f.par)}</h3><p>${esc(f.texto)}</p></div>`).join("")}</div>
        <h2>De los titanes a la Plaga</h2>
        <ol class="pasos">${D.edadAntigua.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>
        <h2>Las expansiones</h2>
        <ol class="linea-tiempo">
          ${D.expansiones
            .map(
              (e) => `<li><div class="hito"><strong>${esc(e.nombre)}</strong><span class="fecha">${e.anio}</span></div><p><strong>Enemigo:</strong> ${esc(e.enemigo)}. ${esc(e.texto)}</p></li>`
            )
            .join("")}
        </ol>
        <h2>La Saga del Alma del Mundo</h2>
        <ol class="linea-tiempo">
          ${D.saga.map((s) => `<li><div class="hito"><strong>${esc(s.titulo)}</strong></div><p>${esc(s.texto)}</p></li>`).join("")}
        </ol>`;
    },

    monturas(params) {
      const q = params.get("q") || "";
      return `
        <h1>Monturas</h1>
        <p class="entradilla">Las ${D.monturas.length} monturas de la guía con cómo conseguirlas. Marca las que ya tienes: se guarda en este navegador.</p>
        <div class="progreso" id="progreso"></div>
        <div class="filtros">
          <div class="fila-filtros">
            <label class="visualmente-oculto" for="filtro-texto">Buscar</label>
            <input class="campo" id="filtro-texto" type="search" placeholder="Nombre, jefe, zona…" value="${esc(q)}">
            <label class="visualmente-oculto" for="filtro-exp">Expansión</label>
            <select id="filtro-exp">
              <option value="">Todas las expansiones</option>
              ${[...new Set(D.monturas.map((m) => m.exp))].map((e) => `<option>${esc(e)}</option>`).join("")}
            </select>
            <label class="visualmente-oculto" for="filtro-tipo">Tipo</label>
            <select id="filtro-tipo">
              <option value="">Seguras, al azar y temporales</option>
              <option value="seguro">Solo seguras (sin azar)</option>
              <option value="azar">Solo al azar</option>
              <option value="temporal">Solo temporales</option>
            </select>
            <label class="interruptor"><input type="checkbox" id="filtro-faltan"> Solo las que me faltan</label>
          </div>
          <div class="fila-filtros" role="group" aria-label="Vía">
            <span>Vía</span>
            ${D.viasFiltro.map((v) => `<button type="button" class="chip" data-via="${esc(v)}" aria-pressed="false">${esc(v)}</button>`).join("")}
          </div>
        </div>
        <ul class="lista-monturas" id="lista-monturas"></ul>
        <div class="acciones">
          <button class="boton" type="button" id="exportar">Descargar mi progreso</button>
          <label class="boton" for="importar">Cargar progreso</label>
          <input type="file" id="importar" accept="application/json" class="visualmente-oculto">
        </div>
        <p class="nota">El progreso no se comparte entre personas ni dispositivos. Descárgalo para pasarlo a otro navegador.</p>`;
    },

    vias() {
      return `
        <h1>Cómo se consiguen las monturas</h1>
        <p class="entradilla">Con el lanzamiento de Midnight había unas 906 monturas, 642 de ellas para las dos facciones. La colección es de cuenta: lo que consigue un personaje lo tienen todos, salvo restricciones de facción o clase.</p>
        ${tabla(["Vía", "Cómo funciona"], D.vias.map((v) => [`<strong>${esc(v.via)}</strong>`, esc(v.como)]))}
        <h2>Logros de colección</h2>
        <p>Cuentan solo las monturas que puede usar un mismo personaje. El número real está en Logros → Estadísticas.</p>
        ${tabla(["Monturas", "Logro", "Premio"], D.logrosColeccion.map((l) => [`<strong>${l.n}</strong>`, esc(l.logro), esc(l.premio)]))}
        <h2>Consejos de coleccionista</h2>
        <ol class="pasos">
          <li>Prioriza lo temporal (temporada, eventos, Puesto comercial) antes que lo que siempre estará ahí.</li>
          <li>Haz una ruta semanal de bandas antiguas con todos tus personajes: cada uno tiene su propio bloqueo y su propia tirada.</li>
          <li>Usa los addons Rarity (cuenta intentos) y All The Things, o la web Simple Armory, para ver qué te falta.</li>
          <li>Los nombres en el cliente español cambian; en ${enlace("es.wowhead.com", "https://es.wowhead.com")} aparecen traducidos.</li>
        </ol>`;
    },

    ruta() {
      return `
        <h1>Ruta semanal</h1>
        <p class="entradilla">Los intentos con bloqueo semanal que aún no tienes. Se vacía sola cada miércoles con el reinicio europeo.</p>
        <p class="nota" id="ruta-info"></p>
        <ul class="lista-monturas" id="lista-ruta"></ul>
        <p class="nota">Cada personaje tiene su propio bloqueo: con varios personajes de nivel máximo puedes repetir la ruta.</p>`;
    },

    pandaria() {
      const nimbos = D.monturas.filter((m) => m.nimbo);
      return `
        <h1>Pandaria y los dragones nimbo</h1>
        <div class="aviso"><strong>El Dragón nimbo dorado celestial no sale de la Orden del Dragón Nimbo.</strong> Se compra en la Isla Intemporal con Exaltado ante el Emperador Shaohao y 100.000 Monedas intemporales. La Orden te da otros tres dragones (azur, jade y dorado normal). Son dos reputaciones distintas y se pueden subir a la vez.</div>
        <h2>Orden del Dragón Nimbo</h2>
        <ol class="pasos">${D.planOrden.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>
        <h2>Emperador Shaohao e Isla Intemporal</h2>
        <ol class="pasos">${D.planShaohao.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>
        <h2>Todos los dragones nimbo obtenibles</h2>
        <ul class="lista-monturas" data-lista="nimbo">${nimbos.map(filaMontura).join("")}</ul>
        <p class="nota">Si no ves a Alani o a los bichos del Valle de la Flor Eterna, habla con Zidormi junto al Palacio Mogu'shan para cambiar a la otra versión de la zona.</p>`;
    },

    armaduras() {
      return `
        <h1>Armaduras y transfiguración</h1>
        <p class="entradilla">Las apariencias se coleccionan para toda la cuenta y cada personaje usa las de su tipo de armadura. Desde Midnight, la transfiguración se guarda por ranura: cambias de equipo y tu aspecto no se pierde.</p>
        <h2>Tipos de armadura</h2>
        ${tabla(["Armadura", "Clases"], D.armaduras.map(([a, c]) => [`<strong>${esc(a)}</strong>`, esc(c)]))}
        <h2>Transfiguración en Midnight</h2>
        ${tabla(["Función", "Qué hace"], D.transmog.map(([a, b]) => [`<strong>${esc(a)}</strong>`, esc(b)]))}
        <h2>De dónde salen las armaduras</h2>
        ${tabla(["Origen", "Detalle"], D.origenArmaduras.map(([a, b]) => [`<strong>${esc(a)}</strong>`, esc(b)]))}
        <h2>Sets que todo caballero de la muerte persigue</h2>
        ${tabla(["Set", "Origen", "Notas"], D.setsDK.map(([a, b, c]) => [`<strong>${esc(a)}</strong>`, esc(b), esc(c)]))}
        <p class="nota">Para ver qué te falta: Colecciones → Apariencias → Sets en el juego, o el addon All The Things.</p>`;
    },

    dk() {
      const dkMonturas = D.monturas.filter((m) => m.dk);
      return `
        <h1>Caballero de la muerte profano</h1>
        <p class="entradilla">En Midnight, Profano se rediseñó como invocador de la Plaga: el daño gira en torno a necrófagos menores, el ejército y las enfermedades. Esta temporada domina la build de esbirros con Jinete del Apocalipsis.</p>
        <h2>Talentos de héroe</h2>
        ${tabla(["Árbol", "Estilo", "Uso actual"], D.heroeDK.map(([a, b, c]) => [`<strong>${esc(a)}</strong>`, esc(b), esc(c)]))}
        <p>Entre los niveles 80 y 90 se desbloquea el talento ápice Conocimiento prohibido.</p>
        <h2>Cambios recientes</h2>
        ${tabla(["Cuándo", "Cambio"], D.cambiosDK.map(([a, b]) => [`<strong>${esc(a)}</strong>`, esc(b)]))}
        <h2>Lore de la clase</h2>
        <p>Los caballeros de la muerte fueron creados por el Rey Exánime. Se liberaron en Acherus, la necrópolis flotante, y forman la Espada de Ébano, liderada por Darion Mograine.</p>
        <h2>Monturas con sabor a DK</h2>
        <ul class="lista-monturas" data-lista="dk">${dkMonturas.map(filaMontura).join("")}</ul>
        <p class="nota">Builds actualizadas: ${enlace("Icy Veins", "https://icy-veins.com/wow/unholy-death-knight-pve-dps-spec-builds-talents")} y ${enlace("Archon", "https://www.archon.gg/wow")}.</p>`;
    },

    fuentes() {
      return `
        <h1>Fuentes</h1>
        <h2>Para consultar siempre</h2>
        ${tabla(["Web", "Para qué"], D.referencias.map(([n, u, t]) => [enlace(n, u), esc(t)]))}
        <h2>Páginas usadas en esta guía</h2>
        <ul class="limpia">${D.fuentes.map(([n, u]) => `<li>${enlace(n, u)}</li>`).join("")}</ul>
        <p class="nota">Codex de Azeroth es un proyecto de fans. World of Warcraft y sus nombres son marcas de Blizzard Entertainment.</p>`;
    }
  };

  /* ----------------------------- piezas ----------------------------- */
  function tablaGlosario(filtro) {
    const f = normal(filtro);
    const filas = D.glosario.filter(([t, d]) => !f || normal(t + " " + d).includes(f));
    if (!filas.length) return `<p class="vacio-estado">Ningún término coincide con «${esc(filtro)}».</p>`;
    return tabla(["Término", "Qué es"], filas.map(([t, d]) => [`<strong>${esc(t)}</strong>`, esc(d)]));
  }

  const nombreTipo = { seguro: "Segura", azar: "Al azar", temporal: "Temporal" };
  function filaMontura(m) {
    const tiene = conseguidas.has(m.id);
    return `
      <li class="montura${tiene ? " conseguida" : ""}" data-id="${esc(m.id)}">
        <input type="checkbox" ${tiene ? "checked" : ""} aria-label="Marcar ${esc(m.nombre)} como conseguida" data-marcar="${esc(m.id)}">
        <div>
          <div><span class="nombre">${esc(m.nombre)}</span>${m.en !== m.nombre ? `<span class="ingles">${esc(m.en)}</span>` : ""}</div>
          <div class="donde">${esc(m.donde)}</div>
          ${wowhead(m)}
        </div>
        <div class="etiquetas">
          <span class="etiqueta ${esc(m.tipo)}">${nombreTipo[m.tipo]}</span>
          <span class="etiqueta">${esc(m.via)}</span>
          <span class="etiqueta">${esc(m.exp)}</span>
        </div>
      </li>`;
  }

  function filaRuta(m, hecha) {
    return `
      <li class="montura${hecha ? " conseguida" : ""}">
        <input type="checkbox" ${hecha ? "checked" : ""} aria-label="Intento de ${esc(m.nombre)} hecho esta semana" data-ruta="${esc(m.id)}">
        <div>
          <div><span class="nombre">${esc(m.nombre)}</span>${m.en !== m.nombre ? `<span class="ingles">${esc(m.en)}</span>` : ""}</div>
          <div class="donde">${esc(m.donde)}</div>
        </div>
        <div class="etiquetas"><span class="etiqueta">${esc(m.exp)}</span></div>
      </li>`;
  }

  /* --------------------------- interacción --------------------------- */
  const estadoFiltros = { vias: new Set() };

  function pintarMonturas() {
    const lista = document.getElementById("lista-monturas");
    if (!lista) return;
    const texto = normal(document.getElementById("filtro-texto").value);
    const exp = document.getElementById("filtro-exp").value;
    const tipo = document.getElementById("filtro-tipo").value;
    const faltan = document.getElementById("filtro-faltan").checked;

    const visibles = D.monturas.filter(
      (m) =>
        (!texto || normal([m.nombre, m.en, m.donde, m.exp, m.via].join(" ")).includes(texto)) &&
        (!exp || m.exp === exp) &&
        (!tipo || m.tipo === tipo) &&
        (!faltan || !conseguidas.has(m.id)) &&
        (!estadoFiltros.vias.size || estadoFiltros.vias.has(m.via))
    );
    lista.innerHTML = visibles.length
      ? visibles.map(filaMontura).join("")
      : `<li class="vacio-estado">Ninguna montura coincide con estos filtros. Prueba a quitar alguno.</li>`;
    pintarProgreso();
  }

  function pintarProgreso() {
    const caja = document.getElementById("progreso");
    if (!caja) return;
    const total = D.monturas.length;
    const tengo = D.monturas.filter((m) => conseguidas.has(m.id)).length;
    const pct = Math.round((tengo / total) * 100);
    caja.innerHTML = `
      <div class="progreso-texto"><span><strong>${tengo}</strong> de ${total} conseguidas</span><span>${pct}%</span></div>
      <div class="barra" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso de la colección"><span style="width:${pct}%"></span></div>`;
  }

  function pintarRuta() {
    const lista = document.getElementById("lista-ruta");
    if (!lista) return;
    const ruta = rutaSemanal();
    const pendientes = D.monturas.filter((m) => m.semanal && !conseguidas.has(m.id));
    const proximo = new Date(ultimoReinicio().getTime() + 7 * 864e5);
    document.getElementById("ruta-info").textContent =
      `${pendientes.filter((m) => !ruta.hechas.includes(m.id)).length} de ${pendientes.length} pendientes. Próximo reinicio: ` +
      proximo.toLocaleString("es-ES", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }) + ".";
    lista.innerHTML = pendientes.length
      ? pendientes.map((m) => filaRuta(m, ruta.hechas.includes(m.id))).join("")
      : `<li class="vacio-estado">Ya tienes todas las monturas con bloqueo semanal de la guía.</li>`;
  }

  function refrescarFilas(id) {
    document.querySelectorAll(`.montura[data-id="${CSS.escape(id)}"]`).forEach((li) => {
      const tiene = conseguidas.has(id);
      li.classList.toggle("conseguida", tiene);
      const caja = li.querySelector("input[type=checkbox]");
      if (caja) caja.checked = tiene;
    });
  }

  main.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.marcar) {
      t.checked ? conseguidas.add(t.dataset.marcar) : conseguidas.delete(t.dataset.marcar);
      guardarConseguidas();
      refrescarFilas(t.dataset.marcar);
      pintarProgreso();
      if (document.getElementById("filtro-faltan")?.checked) pintarMonturas();
    } else if (t.dataset.ruta) {
      const ruta = rutaSemanal();
      const set = new Set(ruta.hechas);
      t.checked ? set.add(t.dataset.ruta) : set.delete(t.dataset.ruta);
      almacen.guardar("ruta", { semana: ruta.semana, hechas: [...set] });
      pintarRuta();
    } else if (["filtro-exp", "filtro-tipo", "filtro-faltan"].includes(t.id)) {
      pintarMonturas();
    } else if (t.id === "importar" && t.files[0]) {
      t.files[0].text().then((txt) => {
        try {
          const datos = JSON.parse(txt);
          if (!Array.isArray(datos.conseguidas)) throw new Error();
          conseguidas = new Set(datos.conseguidas);
          guardarConseguidas();
          pintarMonturas();
          alert(`Progreso cargado: ${conseguidas.size} monturas marcadas.`);
        } catch (err) {
          alert("Ese archivo no es un progreso del Codex. Usa el que se descarga con «Descargar mi progreso».");
        }
      });
    }
  });

  main.addEventListener("input", (e) => {
    if (e.target.id === "filtro-texto") pintarMonturas();
    if (e.target.id === "filtro-glosario") document.getElementById("tabla-glosario").innerHTML = tablaGlosario(e.target.value);
  });

  main.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) {
      const v = chip.dataset.via;
      estadoFiltros.vias.has(v) ? estadoFiltros.vias.delete(v) : estadoFiltros.vias.add(v);
      chip.setAttribute("aria-pressed", estadoFiltros.vias.has(v));
      pintarMonturas();
    }
    if (e.target.id === "exportar") {
      const blob = new Blob([JSON.stringify({ conseguidas: [...conseguidas], fecha: new Date().toISOString() }, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "codex-azeroth-progreso.json";
      a.click();
      URL.revokeObjectURL(a.href);
    }
  });

  /* ------------------------------ router ------------------------------ */
  function navegar() {
    const [ruta, query] = (location.hash.slice(1) || "inicio").split("?");
    const nombre = vistas[ruta] ? ruta : "inicio";
    const params = new URLSearchParams(query || "");
    estadoFiltros.vias.clear();
    main.innerHTML = `<div class="vista">${vistas[nombre](params)}</div>`;
    document.querySelectorAll(".menu a").forEach((a) => {
      a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + nombre);
      if (a.getAttribute("href") === "#" + nombre) a.setAttribute("aria-current", "page");
    });
    document.title = nombre === "inicio" ? "Codex de Azeroth" : `${document.querySelector(`.menu a[href="#${nombre}"]`)?.textContent} | Codex de Azeroth`;
    pintarMonturas();
    pintarRuta();
    cerrarMenu();
    window.scrollTo(0, 0);
    if (location.hash) main.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", navegar);

  /* Búsqueda de la barra lateral: lleva a Monturas con el texto ya puesto */
  const global = document.getElementById("busqueda-global");
  let espera;
  global.addEventListener("input", () => {
    clearTimeout(espera);
    espera = setTimeout(() => {
      const q = global.value.trim();
      if (location.hash.startsWith("#monturas") && document.getElementById("filtro-texto")) {
        document.getElementById("filtro-texto").value = q;
        // Una búsqueda nueva desde la barra lateral parte sin filtros
        estadoFiltros.vias.clear();
        document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
        document.getElementById("filtro-exp").value = "";
        document.getElementById("filtro-tipo").value = "";
        document.getElementById("filtro-faltan").checked = false;
        pintarMonturas();
        history.replaceState(null, "", "#monturas" + (q ? "?q=" + encodeURIComponent(q) : ""));
      } else if (q) {
        location.hash = "monturas?q=" + encodeURIComponent(q);
        setTimeout(() => global.focus(), 0);
      }
    }, 200);
  });

  /* Menú móvil */
  const lateral = document.getElementById("lateral");
  const botonMenu = document.querySelector(".boton-menu");
  function cerrarMenu() {
    lateral.classList.remove("abierta");
    botonMenu.setAttribute("aria-expanded", "false");
  }
  botonMenu.addEventListener("click", () => {
    const abierta = lateral.classList.toggle("abierta");
    botonMenu.setAttribute("aria-expanded", String(abierta));
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && cerrarMenu());

  document.querySelectorAll("[data-parche]").forEach((n) => (n.textContent = D.parche));
  document.querySelectorAll("[data-actualizado]").forEach((n) => (n.textContent = D.actualizado));
  navegar();
})();
