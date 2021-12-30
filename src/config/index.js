export const requestBaseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8899'
    : location.protocol + '//cshouse.api.xinyuexclusive.top'
