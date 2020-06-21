const API_URL = "http://pb-api.herokuapp.com/bars";

const getAppDataService = () =>
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const buttonValues = data.buttons.sort((a, b) => a - b);
      const barLimit = data.limit;
      const barValues = data.bars.map(x => Math.round((x * 100) / barLimit));

      // console.log(data);
      return { buttonValues, barValues, barLimit };
    });
export default getAppDataService;
