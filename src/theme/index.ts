import { createStitches } from '@stitches/react';

import colors from './colors';
import sizes from './sizes';
import utils from './utils';
import radii from './radii';

const theme = createStitches({
  theme: {
    colors,
    sizes,
    radii,
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils,
});

export default theme;
