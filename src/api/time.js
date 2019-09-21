export default () =>
  fetch('https://worldclockapi.com/api/json/est/now')
    .then(res => res.json())
    .then(json => new Date(json.currentDateTime));
