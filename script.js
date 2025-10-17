const elementsData = [
  { Z: 1,  symbol: "H",  name: "Hydrogen",     mass: 1.008,   category: "nonmetal",   x: 1,  y: 1 },
  { Z: 2,  symbol: "He", name: "Helium",       mass: 4.0026,  category: "noble",      x: 18, y: 1 },
  { Z: 3,  symbol: "Li", name: "Lithium",      mass: 6.94,    category: "alkali",     x: 1,  y: 2 },
  { Z: 4,  symbol: "Be", name: "Beryllium",    mass: 9.0122,  category: "alkaline",   x: 2,  y: 2 },
  { Z: 5,  symbol: "B",  name: "Boron",        mass: 10.81,   category: "metalloid",  x: 13, y: 2 },
  { Z: 6,  symbol: "C",  name: "Carbon",       mass: 12.011,  category: "nonmetal",   x: 14, y: 2 },
  { Z: 7,  symbol: "N",  name: "Nitrogen",     mass: 14.007,  category: "nonmetal",   x: 15, y: 2 },
  { Z: 8,  symbol: "O",  name: "Oxygen",       mass: 15.999,  category: "nonmetal",   x: 16, y: 2 },
  { Z: 9,  symbol: "F",  name: "Fluorine",     mass: 18.998,  category: "halogen",    x: 17, y: 2 },
  { Z: 10, symbol: "Ne", name: "Neon",         mass: 20.180,  category: "noble",      x: 18, y: 2 },
  { Z: 11, symbol: "Na", name: "Sodium",       mass: 22.990,  category: "alkali",     x: 1,  y: 3 },
  { Z: 12, symbol: "Mg", name: "Magnesium",    mass: 24.305,  category: "alkaline",   x: 2,  y: 3 },
  { Z: 13, symbol: "Al", name: "Aluminium",    mass: 26.982,  category: "posttrans",  x: 13, y: 3 },
  { Z: 14, symbol: "Si", name: "Silicon",      mass: 28.085,  category: "metalloid",  x: 14, y: 3 },
  { Z: 15, symbol: "P",  name: "Phosphorus",   mass: 30.974,  category: "nonmetal",   x: 15, y: 3 },
  { Z: 16, symbol: "S",  name: "Sulfur",       mass: 32.06,   category: "nonmetal",   x: 16, y: 3 },
  { Z: 17, symbol: "Cl", name: "Chlorine",     mass: 35.45,   category: "halogen",    x: 17, y: 3 },
  { Z: 18, symbol: "Ar", name: "Argon",        mass: 39.95,   category: "noble",      x: 18, y: 3 },
  { Z: 19, symbol: "K",  name: "Potassium",    mass: 39.098,  category: "alkali",     x: 1, y: 4 },
  { Z: 20, symbol: "Ca", name: "Calcium",      mass: 40.078,  category: "alkaline",   x: 2, y: 4 },
  { Z: 21, symbol: "Sc", name: "Scandium",     mass: 44.956,  category: "transition", x: 3, y: 4 },
  { Z: 22, symbol: "Ti", name: "Titanium",     mass: 47.867,  category: "transition", x: 4, y: 4 },
  { Z: 23, symbol: "V",  name: "Vanadium",     mass: 50.942,  category: "transition", x: 5, y: 4 },
  { Z: 24, symbol: "Cr", name: "Chromium",     mass: 51.996,  category: "transition", x: 6, y: 4 },
  { Z: 25, symbol: "Mn", name: "Manganese",    mass: 54.938,  category: "transition", x: 7, y: 4 },
  { Z: 26, symbol: "Fe", name: "Iron",         mass: 55.845,  category: "transition", x: 8, y: 4 },
  { Z: 27, symbol: "Co", name: "Cobalt",       mass: 58.933,  category: "transition", x: 9, y: 4 },
  { Z: 28, symbol: "Ni", name: "Nickel",       mass: 58.693,  category: "transition", x: 10, y: 4 },
  { Z: 29, symbol: "Cu", name: "Copper",       mass: 63.546,  category: "transition", x: 11, y: 4 },
  { Z: 30, symbol: "Zn", name: "Zinc",         mass: 65.38,   category: "transition", x: 12, y: 4 },
  { Z: 31, symbol: "Ga", name: "Gallium",      mass: 69.723,  category: "posttrans",  x: 13, y: 4 },
  { Z: 32, symbol: "Ge", name: "Germanium",    mass: 72.630,  category: "metalloid",  x: 14, y: 4 },
  { Z: 33, symbol: "As", name: "Arsenic",      mass: 74.922,  category: "metalloid",  x: 15, y: 4 },
  { Z: 34, symbol: "Se", name: "Selenium",     mass: 78.971,  category: "nonmetal",   x: 16, y: 4 },
  { Z: 35, symbol: "Br", name: "Bromine",      mass: 79.904,  category: "halogen",    x: 17, y: 4 },
  { Z: 36, symbol: "Kr", name: "Krypton",      mass: 83.798,  category: "noble",      x: 18, y: 4 },
  { Z: 37, symbol: "Rb", name: "Rubidium",     mass: 85.468,  category: "alkali",     x: 1, y: 5 },
  { Z: 38, symbol: "Sr", name: "Strontium",    mass: 87.62,   category: "alkaline",   x: 2, y: 5 },
  { Z: 39, symbol: "Y",  name: "Yttrium",      mass: 88.906,  category: "transition", x: 3, y: 5 },
  { Z: 40, symbol: "Zr", name: "Zirconium",    mass: 91.224,  category: "transition", x: 4, y: 5 },
  { Z: 41, symbol: "Nb", name: "Niobium",      mass: 92.906,  category: "transition", x: 5, y: 5 },
  { Z: 42, symbol: "Mo", name: "Molybdenum",   mass: 95.95,   category: "transition", x: 6, y: 5 },
  { Z: 43, symbol: "Tc", name: "Technetium",   mass: "[97]",  category: "transition", x: 7, y: 5 },
  { Z: 44, symbol: "Ru", name: "Ruthenium",    mass: 101.07,  category: "transition", x: 8, y: 5 },
  { Z: 45, symbol: "Rh", name: "Rhodium",      mass: 102.91,  category: "transition", x: 9, y: 5 },
  { Z: 46, symbol: "Pd", name: "Palladium",    mass: 106.42,  category: "transition", x: 10, y: 5 },
  { Z: 47, symbol: "Ag", name: "Silver",       mass: 107.868, category: "transition", x: 11, y: 5 },
  { Z: 48, symbol: "Cd", name: "Cadmium",      mass: 112.414, category: "transition", x: 12, y: 5 },
  { Z: 49, symbol: "In", name: "Indium",       mass: 114.818, category: "posttrans",  x: 13, y: 5 },
  { Z: 50, symbol: "Sn", name: "Tin",          mass: 118.710, category: "posttrans",  x: 14, y: 5 },
  { Z: 51, symbol: "Sb", name: "Antimony",     mass: 121.760, category: "metalloid",  x: 15, y: 5 },
  { Z: 52, symbol: "Te", name: "Tellurium",    mass: 127.60,  category: "metalloid",  x: 16, y: 5 },
  { Z: 53, symbol: "I",  name: "Iodine",       mass: 126.904, category: "halogen",    x: 17, y: 5 },
  { Z: 54, symbol: "Xe", name: "Xenon",        mass: 131.293, category: "noble",      x: 18, y: 5 },
  { Z: 55, symbol: "Cs", name: "Caesium",      mass: 132.905, category: "alkali",     x: 1, y: 6 },
  { Z: 56, symbol: "Ba", name: "Barium",       mass: 137.327, category: "alkaline",   x: 2, y: 6 },
  { Z: 71, symbol: "Lu", name: "Lutetium",     mass: 174.967, category: "transition", x: 3, y: 6 },
  { Z: 72, symbol: "Hf", name: "Hafnium",      mass: 178.49,  category: "transition", x: 4, y: 6 },
  { Z: 73, symbol: "Ta", name: "Tantalum",     mass: 180.948, category: "transition", x: 5, y: 6 },
  { Z: 74, symbol: "W",  name: "Tungsten",     mass: 183.84,  category: "transition", x: 6, y: 6 },
  { Z: 75, symbol: "Re", name: "Rhenium",      mass: 186.207, category: "transition", x: 7, y: 6 },
  { Z: 76, symbol: "Os", name: "Osmium",       mass: 190.23,  category: "transition", x: 8, y: 6 },
  { Z: 77, symbol: "Ir", name: "Iridium",      mass: 192.217, category: "transition", x: 9, y: 6 },
  { Z: 78, symbol: "Pt", name: "Platinum",     mass: 195.084, category: "transition", x: 10, y: 6 },
  { Z: 79, symbol: "Au", name: "Gold",         mass: 196.967, category: "transition", x: 11, y: 6 },
  { Z: 80, symbol: "Hg", name: "Mercury",      mass: 200.592, category: "transition", x: 12, y: 6 },
  { Z: 81, symbol: "Tl", name: "Thallium",     mass: 204.38,  category: "posttrans",  x: 13, y: 6 },
  { Z: 82, symbol: "Pb", name: "Lead",         mass: 207.2,   category: "posttrans",  x: 14, y: 6 },
  { Z: 83, symbol: "Bi", name: "Bismuth",      mass: 208.980, category: "posttrans",  x: 15, y: 6 },
  { Z: 84, symbol: "Po", name: "Polonium",     mass: "[209]", category: "posttrans",  x: 16, y: 6 },
  { Z: 85, symbol: "At", name: "Astatine",     mass: "[210]", category: "halogen",    x: 17, y: 6 },
  { Z: 86, symbol: "Rn", name: "Radon",        mass: "[222]", category: "noble",      x: 18, y: 6 },
  { Z: 87, symbol: "Fr", name: "Francium",     mass: "[223]", category: "alkali",     x: 1, y: 7 },
  { Z: 88, symbol: "Ra", name: "Radium",       mass: "[226]", category: "alkaline",   x: 2, y: 7 },
  { Z: 103, symbol: "Lr", name: "Lawrencium",  mass: "[266]", category: "transition", x: 3, y: 7 },
  { Z: 104, symbol: "Rf", name: "Rutherfordium", mass: "[267]", category: "transition", x: 4, y: 7 },
  { Z: 105, symbol: "Db", name: "Dubnium",     mass: "[268]", category: "transition", x: 5, y: 7 },
  { Z: 106, symbol: "Sg", name: "Seaborgium",  mass: "[269]", category: "transition", x: 6, y: 7 },
  { Z: 107, symbol: "Bh", name: "Bohrium",     mass: "[270]", category: "transition", x: 7, y: 7 },
  { Z: 108, symbol: "Hs", name: "Hassium",     mass: "[269]", category: "transition", x: 8, y: 7 },
  { Z: 109, symbol: "Mt", name: "Meitnerium",  mass: "[278]", category: "transition", x: 9, y: 7 },
  { Z: 110, symbol: "Ds", name: "Darmstadtium",mass: "[281]", category: "transition", x: 10, y: 7 },
  { Z: 111, symbol: "Rg", name: "Roentgenium", mass: "[282]", category: "transition", x: 11, y: 7 },
  { Z: 112, symbol: "Cn", name: "Copernicium", mass: "[285]", category: "transition", x: 12, y: 7 },
  { Z: 113, symbol: "Nh", name: "Nihonium",    mass: "[286]", category: "posttrans",  x: 13, y: 7 },
  { Z: 114, symbol: "Fl", name: "Flerovium",   mass: "[289]", category: "posttrans",  x: 14, y: 7 },
  { Z: 115, symbol: "Mc", name: "Moscovium",   mass: "[290]", category: "posttrans",  x: 15, y: 7 },
  { Z: 116, symbol: "Lv", name: "Livermorium", mass: "[293]", category: "posttrans",  x: 16, y: 7 },
  { Z: 117, symbol: "Ts", name: "Tennessine",  mass: "[294]", category: "halogen",    x: 17, y: 7 },
  { Z: 118, symbol: "Og", name: "Oganesson",   mass: "[294]", category: "noble",      x: 18, y: 7 },
  { Z: 57, symbol: "La", name: "Lanthanum",    mass: 138.905, category: "lanthanoid", x: 4,  y: 9 },
  { Z: 58, symbol: "Ce", name: "Cerium",       mass: 140.116, category: "lanthanoid", x: 5,  y: 9 },
  { Z: 59, symbol: "Pr", name: "Praseodymium", mass: 140.908, category: "lanthanoid", x: 6,  y: 9 },
  { Z: 60, symbol: "Nd", name: "Neodymium",    mass: 144.242, category: "lanthanoid", x: 7,  y: 9 },
  { Z: 61, symbol: "Pm", name: "Promethium",   mass: "[145]", category: "lanthanoid", x: 8,  y: 9 },
  { Z: 62, symbol: "Sm", name: "Samarium",     mass: 150.36,  category: "lanthanoid", x: 9,  y: 9 },
  { Z: 63, symbol: "Eu", name: "Europium",     mass: 151.964, category: "lanthanoid", x: 10, y: 9 },
  { Z: 64, symbol: "Gd", name: "Gadolinium",   mass: 157.25,  category: "lanthanoid", x: 11, y: 9 },
  { Z: 65, symbol: "Tb", name: "Terbium",      mass: 158.925, category: "lanthanoid", x: 12, y: 9 },
  { Z: 66, symbol: "Dy", name: "Dysprosium",   mass: 162.500, category: "lanthanoid", x: 13, y: 9 },
  { Z: 67, symbol: "Ho", name: "Holmium",      mass: 164.930, category: "lanthanoid", x: 14, y: 9 },
  { Z: 68, symbol: "Er", name: "Erbium",       mass: 167.259, category: "lanthanoid", x: 15, y: 9 },
  { Z: 69, symbol: "Tm", name: "Thulium",      mass: 168.934, category: "lanthanoid", x: 16, y: 9 },
  { Z: 70, symbol: "Yb", name: "Ytterbium",    mass: 173.045, category: "lanthanoid", x: 17, y: 9 },
  { Z: 89, symbol: "Ac", name: "Actinium",     mass: "[227]", category: "actinoid",   x: 4,  y: 10 },
  { Z: 90, symbol: "Th", name: "Thorium",      mass: 232.037, category: "actinoid",   x: 5,  y: 10 },
  { Z: 91, symbol: "Pa", name: "Protactinium", mass: 231.036, category: "actinoid",   x: 6,  y: 10 },
  { Z: 92, symbol: "U",  name: "Uranium",      mass: 238.029, category: "actinoid",   x: 7,  y: 10 },
  { Z: 93, symbol: "Np", name: "Neptunium",    mass: "[237]", category: "actinoid",   x: 8,  y: 10 },
  { Z: 94, symbol: "Pu", name: "Plutonium",    mass: "[244]", category: "actinoid",   x: 9,  y: 10 },
  { Z: 95, symbol: "Am", name: "Americium",    mass: "[243]", category: "actinoid",   x: 10, y: 10 },
  { Z: 96, symbol: "Cm", name: "Curium",       mass: "[247]", category: "actinoid",   x: 11, y: 10 },
  { Z: 97, symbol: "Bk", name: "Berkelium",    mass: "[247]", category: "actinoid",   x: 12, y: 10 },
  { Z: 98, symbol: "Cf", name: "Californium",  mass: "[251]", category: "actinoid",   x: 13, y: 10 },
  { Z: 99, symbol: "Es", name: "Einsteinium",  mass: "[252]", category: "actinoid",   x: 14, y: 10 },
  { Z: 100, symbol: "Fm", name: "Fermium",     mass: "[257]", category: "actinoid",   x: 15, y: 10 },
  { Z: 101, symbol: "Md", name: "Mendelevium", mass: "[258]", category: "actinoid",   x: 16, y: 10 },
  { Z: 102, symbol: "No", name: "Nobelium",    mass: "[259]", category: "actinoid",   x: 17, y: 10 },
];
function renderTable(data) {
  const table = document.querySelector(".table");
  if (!table) return;
  table.innerHTML = "";

  for (const e of data) {
    const el = document.createElement("div");
    el.className = "el";
    el.dataset.cat = e.category || "unknown";
    el.dataset.z = String(e.Z);
    el.style.gridColumn = String(e.x);
    el.style.gridRow = String(e.y);

    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `${e.name}, atomic number ${e.Z}, category ${e.category || "unknown"}`);

    el.innerHTML = `
      <div class="num">${e.Z}</div>
      <div class="sym">${e.symbol}</div>
      <div class="name">${e.name}</div>
      <div class="mass">${formatMass(e.mass)}</div>
    `;

    el.addEventListener("click", () => { setSelected(el); openModal(e); });

    table.appendChild(el);
  }
}

function formatMass(mass) {
  if (mass == null) return "???";
  const num = Number(mass);
  if (Number.isNaN(num)) return String(mass);
  const s = num.toPrecision(10);
  return s.replace(/\.?0+$/, "");
}

let currentSelected = null;
function setSelected(el) {
  if (currentSelected && currentSelected !== el) {
    currentSelected.classList.remove("selected");
    currentSelected.removeAttribute("aria-current");
  }
  currentSelected = el;
  if (currentSelected) {
    currentSelected.classList.add("selected");
    currentSelected.setAttribute("aria-current", "true");
  }
}

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
let lastFocused = null;

function computeStats(e) {
  const group = computeGroup(e);
  const period = computePeriod(e);
  const block = computeBlock(e, group);
  const config = computeElectronConfig(e.Z);
  return { group, period, block, config };
}
function computeGroup(e) {
  if (e.y === 9 || e.y === 10) return "N/A";
  return e.x;
}
function computePeriod(e) {
  if (e.y <= 7) return e.y;
  if (e.y === 9) return 6;
  if (e.y === 10) return 7;
  return "N/A";
}
function inRange(n, a, b){ return n >= a && n <= b; }
function computeBlock(e, group) {
  if ((e.Z >= 57 && e.Z <= 70) || (e.Z >= 89 && e.Z <= 102)) return "f";
  if (group !== "N/A" && (group === 1 || group === 2)) return "s";
  if (e.symbol === "H" || e.symbol === "He") return "s";
  if (group !== "N/A" && inRange(group, 13, 18)) return "p";
  return "d";
}
function computeElectronConfig(Z) {
  const orbitals = [
    [1, "s", 2], [2, "s", 2], [2, "p", 6], [3, "s", 2], [3, "p", 6],
    [4, "s", 2], [3, "d", 10], [4, "p", 6], [5, "s", 2], [4, "d", 10],
    [5, "p", 6], [6, "s", 2], [4, "f", 14], [5, "d", 10], [6, "p", 6],
    [7, "s", 2], [5, "f", 14], [6, "d", 10], [7, "p", 6]
  ];

  const exceptions = {
    24: "[Ar] 3d5 4s1",       // Cr
    29: "[Ar] 3d10 4s1",      // Cu
    41: "[Kr] 4d4 5s1",       // Nb
    42: "[Kr] 4d5 5s1",       // Mo
    44: "[Kr] 4d7 5s1",       // Ru
    45: "[Kr] 4d8 5s1",       // Rh
    46: "[Kr] 4d10",          // Pd
    47: "[Kr] 4d10 5s1",      // Ag
    57: "[Xe] 5d1 6s2",       // La
    58: "[Xe] 4f1 5d1 6s2",   // Ce
    64: "[Xe] 4f7 5d1 6s2",   // Gd
    78: "[Xe] 4f14 5d9 6s1",  // Pt
    79: "[Xe] 4f14 5d10 6s1", // Au
    92: "[Rn] 5f3 6d1 7s2"    // U
  };

  const nobleGases = [
    [2, "He"], [10, "Ne"], [18, "Ar"], [36, "Kr"], [54, "Xe"], [86, "Rn"]
  ];

  if (exceptions[Z]) return exceptions[Z];

  let remaining = Z;
  const configParts = [];
  for (const [n, l, cap] of orbitals) {
    if (remaining <= 0) break;
    const fill = Math.min(cap, remaining);
    configParts.push(`${n}${l}${fill}`);
    remaining -= fill;
  }
  const full = configParts.join(" ");
    let result = makeNobleGasNotation(Z, full);

    result = result.replace(
      /\[([A-Za-z]+)\](.*)/,
      (_, noble, rest) => {
        const parts = rest.trim().split(/\s+/);
        const order = { s: 1, p: 2, d: 3, f: 4 };
        parts.sort((a, b) => {
          const ma = a.match(/(\d+)([spdf])/);
          const mb = b.match(/(\d+)([spdf])/);
          if (!ma || !mb) return 0;
          const na = parseInt(ma[1]);
          const nb = parseInt(mb[1]);
          if (na !== nb) return na - nb;
          return order[ma[2]] - order[mb[2]];
        });
        return `[${noble}] ${parts.join(" ")}`;
      }
    );

return result.trim();

  function makeNobleGasNotation(Z, full) {
    const nearest = nobleGases.filter(([num]) => num < Z)
                              .sort((a, b) => b[0] - a[0])[0];
    if (!nearest) return full;
    const baseFull = computeElectronConfigFull(nearest[0]);
    const remainder = full.replace(baseFull, "").trim();
    return `[${nearest[1]}] ${remainder}`.replace(/\s+/g, " ").trim();
  }

  function computeElectronConfigFull(Zn) {
    let rem = Zn;
    const parts = [];
    for (const [n, l, cap] of orbitals) {
      if (rem <= 0) break;
      const fill = Math.min(cap, rem);
      parts.push(`${n}${l}${fill}`);
      rem -= fill;
    }
    return parts.join(" ");
  }
}


function prettyCat(cat){
  const map = {
    alkali: "Alkali metal",
    alkaline: "Alkaline earth metal",
    transition: "Transition metal",
    posttrans: "Post-transition metal",
    metalloid: "Metalloid",
    nonmetal: "Reactive nonmetal",
    halogen: "Halogen",
    noble: "Noble gas",
    lanthanoid: "Lanthanide",
    actinoid: "Actinide",
    unknown: "Unknown"
  };
  return map[cat] || cat;
}
function mapCatToVar(cat){
  return (
    cat === "alkali" ? "alkali" :
    cat === "alkaline" ? "alkaline" :
    cat === "transition" ? "transition" :
    cat === "posttrans" ? "posttrans" :
    cat === "metalloid" ? "metalloid" :
    cat === "nonmetal" ? "nonmetal" :
    cat === "halogen" ? "halogen" :
    cat === "noble" ? "noble" :
    cat === "lanthanoid" ? "lanth" :
    cat === "actinoid" ? "act" : "unknown"
  );
}

function openModal(e){
  const { group, period, block, config } = computeStats(e);
  const diagram = createDiagram(250,250,config,e.category);
  lastFocused = document.activeElement;

  modalTitle.textContent = `${e.name}`;
  const catChip = `<span class="chip"><span class="chip-dot" style="background: var(--${mapCatToVar(e.category)})"></span>${prettyCat(e.category)}</span>`;
  modalBody.innerHTML = `
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
      ${catChip}
      <span class="kv">Atomic number <strong class="mono">${e.Z}</strong></span>
      <span class="kv">Atomic mass <strong class="mono">${formatMass(e.mass)}</strong></span>
    </div>
    <div class="modal-grid">
      <div class="kv">Group <strong class="mono">${group}</strong></div>
      <div class="kv">Period <strong class="mono">${period}</strong></div>
      <div class="kv">Block <strong class="mono">${block}</strong></div>
      <div class="kv">Electron Configuration <strong class="mono">${config}</strong></div>
    </div>
    <div style="margin-top:12px"></div>
  `;

  modal.setAttribute("aria-hidden","false");
  modalBody.appendChild(diagram);
  requestAnimationFrame(() => modalClose.focus());
  document.addEventListener("keydown", escToClose);
  modal.addEventListener("click", overlayClick);
}

function createDiagram(maxWidth, maxHeight, c, t) {
  const nucleusRadius = 15;
  const electronRadius = 4;
  const shellSpacing = 15;

  const typeColors = {
    alkali: "var(--alkali)",
    alkaline: "var(--alkaline)",
    transition: "var(--transition)",
    posttrans: "var(--posttrans)",
    metalloid: "var(--metalloid)",
    nonmetal: "var(--nonmetal)",
    halogen: "var(--halogen)",
    noble: "var(--noble)",
    lanthanoid: "var(--lanth)",
    actinoid: "var(--act)",
    unknown: "var(--unknown)",
  };

  const nobleGasConfigs = {
    He: "1s2",
    Ne: "1s2 2s2 2p6",
    Ar: "1s2 2s2 2p6 3s2 3p6",
    Kr: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    Xe: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    Rn: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
  };

  function expandNobleGas(config) {
    return config.replace(/\[([A-Za-z]+)\]/g, (match, gas) => nobleGasConfigs[gas] || "").trim();
  }

  function parseElectronConfig(config) {
    const regex = /(\d)([spdfg])(\d+)/g;
    const shellElectrons = new Map();
    let match;
    while ((match = regex.exec(config.trim())) !== null) {
      const shellNum = parseInt(match[1]);
      const electrons = parseInt(match[3]);
      shellElectrons.set(shellNum, (shellElectrons.get(shellNum) || 0) + electrons);
    }
    return [...shellElectrons.entries()].sort((a, b) => a[0] - b[0]).map(e => e[1]);
  }

  const elementType = t;
  const configString = c;

  const expandedConfig = expandNobleGas(configString);
  const electronConfig = parseElectronConfig(expandedConfig);

  const numShells = electronConfig.length;

  const outerRadius = nucleusRadius + shellSpacing * numShells;

  const padding = 10;
  const neededSize = 2 * (outerRadius + padding);

  const scale = Math.min(maxWidth / neededSize, maxHeight / neededSize, 1);

  const width = neededSize * scale;
  const height = neededSize * scale;

  const viewBox = `0 0 ${neededSize} ${neededSize}`;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", viewBox);

  const cx = neededSize / 2;
  const cy = neededSize / 2;

  function createNucleus(cx, cy, radius, type) {
    const nucleus = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    nucleus.setAttribute("cx", cx);
    nucleus.setAttribute("cy", cy);
    nucleus.setAttribute("r", radius);
    const fillColor = typeColors[type] || "#ff6347";
    nucleus.setAttribute("fill", fillColor);
    return nucleus;
  }

  const nucleus = createNucleus(cx, cy, nucleusRadius, elementType);
  svg.appendChild(nucleus);

  electronConfig.forEach((numElectrons, shellIndex) => {
    const radius = nucleusRadius + shellSpacing * (shellIndex + 1);

    const orbit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    orbit.setAttribute("cx", cx);
    orbit.setAttribute("cy", cy);
    orbit.setAttribute("r", radius);
    orbit.setAttribute("fill", "none");
    orbit.setAttribute("stroke", "#CCC");
    svg.appendChild(orbit);

    const startAngle = Math.random() * 2 * Math.PI;

    for (let i = 0; i < numElectrons; i++) {
      const angle = ((2 * Math.PI) / numElectrons) * i + startAngle;
      const ex = cx + radius * Math.cos(angle);
      const ey = cy + radius * Math.sin(angle);
      const electron = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      electron.setAttribute("cx", ex);
      electron.setAttribute("cy", ey);
      electron.setAttribute("r", electronRadius);
      electron.setAttribute("fill", "#CCC");
      svg.appendChild(electron);
    }
  });

  return svg;
}


function closeModal(){
  modal.setAttribute("aria-hidden","true");
  document.removeEventListener("keydown", escToClose);
  modal.removeEventListener("click", overlayClick);
  setSelected(null);
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}
function escToClose(e){ if (e.key === "Escape") closeModal(); }
function overlayClick(e){ if (e.target === modal) closeModal(); }
modalClose.addEventListener("click", closeModal);

renderTable(elementsData);
