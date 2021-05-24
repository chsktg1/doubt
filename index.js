const addDays = require("date-fns/addDays");
const format = require("date-fns/format");
function ab(days) {
  return format(addDays(new Date(2020, 7, 22), days), "dd-MM-yyyy");
}

module.exports = ab;
