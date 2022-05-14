const values = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const media = {
  smUp: `(min-width: ${values.sm}px)`,
  mdUp: `(min-width: ${values.md}px)`,
  lgUp: `(min-width: ${values.lg}px)`,
  xlUp: `(min-width: ${values.xl}px)`,
  xxlUp: `(min-width: ${values.xxl}px)`,

  smDown: `(max-width: ${values.sm - 1}px)`,
  mdDown: `(max-width: ${values.md - 1}px)`,
  lgDown: `(max-width: ${values.lg - 1}px)`,
  xlDown: `(max-width: ${values.xl - 1}px)`,
  xxlDown: `(max-width: ${values.xxl - 1}px)`,
};

export default media;
