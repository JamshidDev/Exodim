const interDateFormatter = function (time) {
  let newFormatDate = new Date(time);
  return newFormatDate;
};

const outDateFormatter = function (time) {
  let newFormatDate = new Date(time).toLocaleDateString("en-CA");
  return newFormatDate;
};

export default { interDateFormatter, outDateFormatter };
