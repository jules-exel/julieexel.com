// Draws original 16x16 block textures on a canvas and exposes them as CSS variables.
// Everything is procedural, so there are no image assets to ship.

const SIZE = 16;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function make(seed, paint) {
  const c = document.createElement('canvas');
  c.width = SIZE;
  c.height = SIZE;
  const ctx = c.getContext('2d');
  const r = rng(seed);
  const px = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  };
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  paint({ px, pick, r, ctx });
  return c.toDataURL();
}

const noise = (palette) => ({ px, pick }) => {
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) px(x, y, pick(palette));
};

const DIRT = ['#866043', '#79553a', '#96704c', '#6b4a2f', '#8b6545', '#5d3f26'];
const STONE = ['#7f7f7f', '#878787', '#747474', '#8f8f8f', '#6c6c6c', '#7a7a7a'];
const DEEP = ['#4a4a50', '#3f3f45', '#55555b', '#46464c', '#38383d'];
const GRASS = ['#5fa83a', '#6bb944', '#559a33', '#79c05a', '#4e8f2e'];
const BEDROCK = ['#565656', '#2f2f2f', '#7a7a7a', '#1e1e1e', '#444444', '#999999'];

const ORES = {
  diamond: ['#5decf5', '#a1fbe8', '#1aaaa7'],
  emerald: ['#17dd62', '#82f6ad', '#00852e'],
  gold: ['#fcee4b', '#fffda8', '#c99a1e'],
  redstone: ['#ff1a1a', '#ff7575', '#9a0000'],
  lapis: ['#345ec3', '#6d93f0', '#1c3a8c'],
  iron: ['#d8af93', '#f1d3bd', '#a07a62'],
  coal: ['#2b2b2b', '#444444', '#111111'],
};

function ore(seed, base, colors) {
  return make(seed, (t) => {
    noise(base)(t);
    const { px, pick, r } = t;
    for (let k = 0; k < 4; k++) {
      const cx = 2 + Math.floor(r() * 11);
      const cy = 2 + Math.floor(r() * 11);
      for (let i = 0; i < 4; i++) {
        const x = cx + Math.floor(r() * 3) - 1;
        const y = cy + Math.floor(r() * 3) - 1;
        px(x, y, pick(colors));
      }
    }
  });
}

export function installTextures() {
  const tex = {
    dirt: make(11, noise(DIRT)),
    stone: make(23, noise(STONE)),
    deepslate: make(37, ({ px, pick }) => {
      for (let y = 0; y < SIZE; y++)
        for (let x = 0; x < SIZE; x++) px(x, y, y % 4 === 3 ? '#333338' : pick(DEEP));
    }),
    bedrock: make(41, noise(BEDROCK)),
    grassTop: make(53, noise(GRASS)),
    grassSide: make(67, ({ px, pick, r }) => {
      for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) px(x, y, pick(DIRT));
      for (let x = 0; x < SIZE; x++) {
        const depth = 3 + Math.floor(r() * 3);
        for (let y = 0; y < depth; y++) px(x, y, pick(GRASS));
      }
    }),
    planks: make(79, ({ px, pick, r }) => {
      const P = ['#a2824e', '#b18f58', '#9a7a48', '#bc995f'];
      for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
          if (y % 4 === 3) px(x, y, '#6e5530');
          else px(x, y, pick(P));
        }
        if (y % 4 === 0) px(Math.floor(r() * 16), y + 1, '#6e5530');
      }
    }),
    cobble: make(97, ({ px, pick }) => {
      noise(STONE)({ px, pick });
      const cracks = [[0,4],[1,4],[2,5],[3,5],[4,4],[5,3],[6,3],[7,4],[8,4],[9,5],[10,5],[11,4],[12,4],[13,5],[14,5],[15,4],
        [4,5],[4,6],[4,7],[3,8],[3,9],[3,10],[2,11],[0,11],[1,11],[11,6],[11,7],[11,8],[12,9],[12,10],[13,11],[14,11],[15,11],
        [6,11],[7,11],[7,12],[8,13],[9,13],[9,14],[9,15],[5,0],[5,1],[5,2]];
      cracks.forEach(([x, y]) => px(x, y, '#555555'));
    }),
    obsidian: make(113, noise(['#140f1f', '#1d1530', '#251b3c', '#0f0b18', '#3b2a5c'])),
  };
  Object.entries(ORES).forEach(([name, colors], i) => {
    tex[`ore-${name}`] = ore(200 + i * 7, STONE, colors);
  });

  const root = document.documentElement.style;
  Object.entries(tex).forEach(([name, url]) => root.setProperty(`--tex-${name}`, `url(${url})`));
  return tex;
}
