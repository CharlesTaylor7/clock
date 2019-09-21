export default () =>
  fetch(
    'https://world-clock.p.rapidapi.com/json/utc/now',
    {
      headers: {
        "x-rapidapi-host": "world-clock.p.rapidapi.com",
        "x-rapidapi-key": "e9d0ac9d9bmsh10f31b0dfd5c1efp1691a7jsnccfcbe76871e",
      }
    }
  )
  .then(res => res.json())
  .then(json => new Date(json.currentDateTime));
