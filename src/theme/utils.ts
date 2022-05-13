type Space = number | string;

const utils = {
  marginHorizontal: (value: Space) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginVertical: (value: Space) => ({
    marginTop: value,
    marginBottom: value,
  }),
  paddingHorizontal: (value: Space) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  paddingVertical: (value: Space) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};

export default utils;
