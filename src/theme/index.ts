import { createStitches } from '@stitches/react';

import colors from './colors';
import sizes from './sizes';
import radii from './radii';
import shadows from './shadows';
import media from './media';
import utils from './utils';

const theme = createStitches({
  theme: {
    colors,
    sizes,
    radii,
    shadows,
  },
  media,
  utils,
});

export default theme;
