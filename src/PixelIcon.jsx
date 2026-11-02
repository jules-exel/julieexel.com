// Tiny original pixel-art icons drawn from text grids. '.' = transparent.

const ICONS = {
  pickaxe: {
    pal: { c: '#1aaaa7', D: '#5decf5', b: '#6e5530' },
    grid: [
      '..cccccc..',
      '.cDDDDDDc.',
      'cDc.bb.cDc',
      'c...bb...c',
      '....bb....',
      '....bb....',
      '....bb....',
      '....bb....',
      '....bb....',
      '....bb....',
    ],
  },
  redstone: {
    pal: { r: '#b80000', R: '#ff5a5a' },
    grid: [
      '..........',
      '...r..r...',
      '..rRr.....',
      '...r...r..',
      '.....rRr..',
      '..r...r...',
      '.rRr......',
      '..r...r...',
      '.....rRr..',
      '......r...',
    ],
  },
  table: {
    pal: { p: '#6e5530', P: '#b18f58' },
    grid: [
      'pppppppppp',
      'pPPpPPpPPp',
      'pPPpPPpPPp',
      'pppppppppp',
      'pPPpPPpPPp',
      'pPPpPPpPPp',
      'pppppppppp',
      'pPPpPPpPPp',
      'pPPpPPpPPp',
      'pppppppppp',
    ],
  },
  pearl: {
    pal: { k: '#0b3b36', G: '#2aa198', g: '#7fe3d4', w: '#ffffff', H: '#136b63' },
    grid: [
      '...kkkk...',
      '..kGGGGk..',
      '.kGgGGGGk.',
      'kGgwgGGGGk',
      'kGGgGGGGGk',
      'kGGGGGGHGk',
      'kGGGGGGHGk',
      '.kGGGGHHk.',
      '..kGGGGk..',
      '...kkkk...',
    ],
  },
  chest: {
    pal: { k: '#3a2410', B: '#9a6a2a', b: '#b8823a', y: '#e5c84a' },
    grid: [
      'kkkkkkkkkk',
      'kBBBBBBBBk',
      'kBbbbbbbBk',
      'kkkkyykkkk',
      'kBBByyBBBk',
      'kBbbbbbbBk',
      'kBbbbbbbBk',
      'kBbbbbbbBk',
      'kBBBBBBBBk',
      'kkkkkkkkkk',
    ],
  },
  piston: {
    pal: { P: '#b18f58', k: '#333333', s: '#5e5e5e', S: '#8a8a8a', h: '#b18f58' },
    grid: [
      'PPPPPPPPPP',
      'PPPPPPPPPP',
      'kkkkkkkkkk',
      'sSSSSSSSSs',
      'sSSkhhkSSs',
      'sSSkhhkSSs',
      'sSSkhhkSSs',
      'sSSSSSSSSs',
      'sSSSSSSSSs',
      'ssssssssss',
    ],
  },
  map: {
    pal: { y: '#8a6c3e', W: '#e8dcb0', g: '#6bb944', b: '#345ec3', r: '#cc0000' },
    grid: [
      'yyyyyyyyyy',
      'yWWWWWWWWy',
      'yWggWWbbWy',
      'yWgggWbbWy',
      'yWWgWWWbWy',
      'yWWWWrWWWy',
      'yWbWWWWggy',
      'yWbbWWggWy',
      'yWWWWWWWWy',
      'yyyyyyyyyy',
    ],
  },
  heart: {
    pal: { k: '#3a0000', R: '#e0302a', w: '#ffb3b3' },
    grid: [
      '..........',
      '.kk...kk..',
      'kRRk.kRRk.',
      'kRwRkRRRk.',
      'kRRRRRRRk.',
      '.kRRRRRk..',
      '..kRRRk...',
      '...kRk....',
      '....k.....',
      '..........',
    ],
  },
  shield: {
    pal: { k: '#1c2a52', S: '#3a5fbf', l: '#e8e8e8' },
    grid: [
      '.kkkkkkkk.',
      'kSSSSSSSSk',
      'kSllSSllSk',
      'kSllSSllSk',
      'kSSSSSSSSk',
      '.kSSllSSk.',
      '.kSSllSSk.',
      '..kSSSSk..',
      '...kSSk...',
      '....kk....',
    ],
  },
  potion: {
    pal: { k: '#2a1640', g: '#b18f58', p: '#9b3fd6', P: '#d98cff', w: '#ffffff' },
    grid: [
      '....kk....',
      '....gg....',
      '....kk....',
      '...kppk...',
      '..kpPPpk..',
      '.kpPwPPpk.',
      '.kpPPPPpk.',
      '.kpPPPPpk.',
      '..kppppk..',
      '...kkkk...',
    ],
  },
  torch: {
    pal: { y: '#ffb321', O: '#fff4b0', b: '#6e5530' },
    grid: [
      '....yy....',
      '...yOOy...',
      '...yOOy...',
      '....yy....',
      '....bb....',
      '....bb....',
      '....bb....',
      '....bb....',
      '....bb....',
      '....bb....',
    ],
  },
  head: {
    pal: { h: '#f2d16b', s: '#c98b5e', w: '#ffffff', b: '#2f7fd8', m: '#9c4f43' },
    grid: [
      'hhhhhhhhhh',
      'hhhhhhhhhh',
      'hhsssssshh',
      'hswbsswbsh',
      'hssssssssh',
      'hsssmmsssh',
      'hssssssssh',
      'hhsssssshh',
      'hh......hh',
      'hh......hh',
    ],
  },
  book: {
    pal: { k: '#2a1640', R: '#6b3fa0', y: '#e5c84a', W: '#e8dcb0' },
    grid: [
      '.kkkkkkkk.',
      'kRRRRRRRWk',
      'kRyRRRRRWk',
      'kRRRRyRRWk',
      'kRRRRRRRWk',
      'kRRyRRRRWk',
      'kRRRRRRyWk',
      'kRRRRRRRWk',
      'kRRRRRRRWk',
      '.kkkkkkkk.',
    ],
  },
  sign: {
    pal: { k: '#6e5530', P: '#b18f58', d: '#3a2410' },
    grid: [
      'kkkkkkkkkk',
      'kPPPPPPPPk',
      'kPddddddPk',
      'kPPPPPPPPk',
      'kPddddPPPk',
      'kPPPPPPPPk',
      'kkkkkkkkkk',
      '....kk....',
      '....kk....',
      '....kk....',
    ],
  },
};

export default function PixelIcon({ name, size = 32, title }) {
  // The avatar is Julie's own GitHub profile picture.
  if (name === 'head') {
    return (
      <img
        className="pixel-icon avatar-img"
        src="/avatar.png"
        width={size}
        height={size}
        alt={title || ''}
        aria-hidden={title ? undefined : true}
      />
    );
  }
  const icon = ICONS[name];
  if (!icon) return null;
  const rects = [];
  icon.grid.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      const fill = icon.pal[ch];
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />);
    })
  );
  return (
    <svg
      className="pixel-icon"
      width={size}
      height={size}
      viewBox="0 0 10 10"
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {rects}
    </svg>
  );
}
