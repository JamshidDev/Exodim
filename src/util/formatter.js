const interDateFormatter = function (time) {
  let newFormatDate = new Date(time);
  return newFormatDate;
};

const outDateFormatter = function (time) {
  let newFormatDate = new Date(time).toLocaleDateString("en-CA");
  return newFormatDate;
};

const textDateFormat = function (time){
  let textFormat = new Date(time).toLocaleDateString("en-GB")
  return textFormat
}

export default { interDateFormatter, outDateFormatter,textDateFormat };
