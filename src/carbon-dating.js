const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let val;
  if (typeof sampleActivity == 'string')
  {
    val = parseFloat(sampleActivity);
  }
  else return false;

  if (val > 0 && val < MODERN_ACTIVITY){
    return Math.ceil(Math.log(MODERN_ACTIVITY / val) /(0.693 / HALF_LIFE_PERIOD))
  }
  else return false;
};
