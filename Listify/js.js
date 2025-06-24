// Función para mostrar/ocultar el menú
function toggleMenu() {
  var container = document.querySelector(".menu-container");
  container.classList.toggle("show");
}

// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function (event) {
  if (
    !event.target.matches(".menu-icon") &&
    !event.target.closest(".dropdown-content")
  ) {
    var container = document.querySelector(".menu-container");
    if (container.classList.contains("show")) {
      container.classList.remove("show");
    }
  }
};

/* Guardar checkboxes */

// Función para guardar el estado de un checkbox en localStorage
function saveCheckboxState(id) {
  const checkbox = document.getElementById(id);
  if (checkbox) {
    localStorage.setItem(id, checkbox.checked);
  }
}

// Función para cargar el estado de los checkboxes desde localStorage
function loadCheckboxState(id) {
  const checkbox = document.getElementById(id);
  if (checkbox) {
    const savedState = localStorage.getItem(id);
    if (savedState !== null) {
      checkbox.checked = JSON.parse(savedState);
    }
  }
}

// Función para cambiar el color del título según el estado del checkbox
function toggleTitleColor(id) {
  const checkbox = document.getElementById(id);
  if (!checkbox) return;
  const title = document.getElementById(id + "-title");
  if (!title) return;

  if (checkbox.checked) {
    title.style.color = "gray";
  } else {
    title.style.color = "";
  }
}

// IDs de todos los checkboxes (unificados en un solo array)
const checkboxIds = [
  "ironman1", "ironman2", "thor", "hulk",
  "blackpanther", "capitanamerica", "capitanamarvel", "infinitywar", "endgame",
  "antman", "ironman3", "doctorstrange", "deadpool", "civilwar", "spiderman", "logan", "eternals", "avengers", "batmaninicia", "caballerodelanoche", "caballeroaciende", "thebatman", "joker",
  "avesdepresa", "theflash", "batsup",
  "justicia", "escuadrons", "elescuadrons", "hombredeacero", "blackadam", "linternaverde", "mujermaravilla", "shazam", "shazamf",
  "pinocchio", "fantasia", "dumbo", "bambi", "cenicienta",
  "peterPan", "aladdin", "elReyLeon", "frozen", "frozen2", "valiente",
  "tarzan", "zootopia", "up", "toyStory", "moana", "libroSelva",
  "princesaSapo", "enredados", "sherk1", "sherk2", "sherk3", "sherk4", "panda1", "panda2", "panda3", "panda4",
  "espantat", "monsal", "croods", "entdragon", "vecin", "bee", "megamente", "home", "trols", "gato", "dragon2", "dragon3",
  "monsters", "luca", "toystory", "up", "soul", "cars", "ratatouille", "coco", "bichos", "red", "walle", "unidos", "elementos", "grandesheroes", "encanto", "aviones", "bolt", "ralph", "valiente",
  "it1", "it2", "resplandor", "exorcista", "rec", "consjuro", "conjuro2", "conjuro3", "monja1", "monja2", "saw", "payasomal", "terrifier", "bruja", "mina", "huye", "us", "smile",
  "diario", "ultimoverano", "lalaland", "malheridos", "orgullo", "atraves", "cuestion", "yoantesdeti", "ghost", "joeblack", "entrela", "ideadeti", "10cosas", "nace", "after1", "after2", "after3", "after4", "after5",
  "clubpoe", "buscadelafe", "forest", "unsueñop", "caden", "juegodehonor", "invictus", "guerreropacifico", "apruebade", "karate", "rocky", "despertares", "lavidaes", "siempreatu", "teoriadeltodo", "comeramar", "vidasdepapel", "enigma",
  "jobs", "stevejobs", "redsocial", "hambrepoder", "buscadelafe", "teoriadeltodo", "mentebrillante", "juegofortuna", "rapsodi", "enigma", "lobow", "atrapame", "listasc", "rocketman", "fordferrari", "granapuesta", "hombreluna", "sueñoposible", "ultimohombre", "aviador", "elvis",
  "scarface", "casagucci", "padrino1", "padrino2", "padrino3", "irlandes", "ahorcado", "unavezenhollywood", "nuncaestarde", "domingocualquiera", "tiposduros", "perfumemujer", "tardedeperros", "abogadodiablo", "informante", "fuegocontra", "manglehorn", "sombraac", "88minutos", 
  "blinders", "lucesrojas", "exterminio", "silencio2", "origen", "vuelonocurno", "openhaimer", "preciomañana", "dunkerque", "cosasestas", "anna", "trascender", "corazonmar", "dadoculta", "despluton", "anth", "broken", "party", 
  "taxi", "muchachos", "luzinfierno", "fuegocontra", "foker", "pasante", "asesluna", "abuelopeligro", "casino", "unavezamerica", "hombredehonor",  "juegosdestino", "frenteafrente", "ultvegas", "ronin", 
  "titanic", "revenant", "romeoj", "islasinisetra", "gatsby", "jango", "jimcarrol", "laplaya", "diamntesangre", "vivnoche", "richardjewel", "noarriba", 
  "picparque", "atardecermirador", "cenavelas", "maratpeli", "biciciudad", "museogaler", "clascocina", "caminnatu", "juegosmesa", "fotosju", "parqueatr", "tourgastro", "conci", "pintumanua", "pasbot", "visitacu", "visitzoo", "obsestre", "explociudad", "fogata",
   "tomano", "besosol", "susurro", "riejunt", "sentbanca", "acosces", "mirojos", "cargan", "ventanabr", "temabeb", 
  "paredgraf", "tomacintu", "sosglobos", "cocjuntos", "bajomant", "saltsimb", "horizespald", "azotciu", "lanzagua", "bajolluv", 
  "cocijuntos", "spa", "librjuntos", "centatem", "ejercjun", "playlistjunt", "pintumanua", "fotrecord", "postrgall", "cartamor", "picnsal", "nuevojunt", "albumfotos", "sesfotos", "sueñmet", "romp", "huert",
   "muspra", "bernabeu", "plazmayo", "jardbota", "almudcatedr", "comtap", "showflamenco", "cervloc", "mercsanmig", "plazesp", "churr", "plazcibe","plazori","parqoes","puertsol","puertalcal","callgrvia","mercelrs","restbot","callcav","v1","v2","v3","v4","v5","v6","","v7","v8","v9","v10","v11","v12","v13","v14","v15","v16",
   "v17","v18","v19","v20","v21","v22","v23","v24","v25","v26","v27","v28","v29","v30","v31","v32","v33","v34","v35","v36","v37","v38","v39","v40","v41","v42","v43","v44","v45","v46","v47","v48","v49","v50","v51","v52","v53","v54", 
   "v55","v56","v57","v58","v59","v60","v61","v62","v63","v64","v65","v66","v67","v68","v69","v70","v71","v72","v73","v74","v75","v76","v77","v78","v79","v80","v81","v82","v83","v84","v85","v86","v87","v88","v89","v90","v91","v92","v93","v94","v95","v96","v97","v98","v99","v100", "v101","v102","v103","v104","v105","v106","v107","v108","v109","v110","v111","v112","v113","v114","v115","v116","v117",
];

// Cargar los estados de todos los checkboxes al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  checkboxIds.forEach((id) => {
    loadCheckboxState(id);  // Cargar estado del checkbox
    toggleTitleColor(id);   // Aplicar color según estado
    const checkbox = document.getElementById(id);
    if (checkbox) {
      checkbox.addEventListener("change", () => {
        saveCheckboxState(id); 
        toggleTitleColor(id);
      });
    }
  });
});
