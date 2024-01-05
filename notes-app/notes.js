// const getNotes = function () {
//   return "Your notes...";
// };

// module.exports = getNotes;

const extractTitle = function (arg) {
  let title = null;
  console.log(arg)
  title = arg.slice(0);
  console.log(title);
  return title;
  
};

module.exports = extractTitle;
