let prodHost = 'api.cshouses.top'
if (location.host === '39.108.161.237:8898') {
  prodHost = '39.108.161.237:8899'
}

const prodBaseUrl = location.protocol + '//' + prodHost

export const requestBaseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8899' : prodBaseUrl
