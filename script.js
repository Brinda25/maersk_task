const listElementValue = [
  {
    id: 1,
    color: "#6F98A8",
  },
  {
    id: 2,
    color: "#2B8EAD",
  },
  {
    id: 3,
    color: "#2F454E",
  },
  {
    id: 4,
    color: "#2B8EAD",
  },
  {
    id: 5,
    color: "#2F454E",
  },
  {
    id: 6,
    color: "#BFBFBF",
  },
  {
    id: 7,
    color: "#BFBFBF",
  },
  {
    id: 8,
    color: "#6F98A8",
  },
  {
    id: 9,
    color: "#2F454E",
  },
];

function preLoadList(list) {
  let items = list ? list : listElementValue;
  var app = document.querySelector("#app");
  app.innerHTML =
  '<ul class="grid-container">' +
  items
    .map(function (item) {
      return `<li class='grid-items' style=background-color:${item.color};border-color:${item.color}> ${item.id}</li>`;
    }).join('') + '</ul>';
}

function sortListVal() {
  var sortList = listElementValue.sort();
  this.preLoadList(sortList);
}

function shuffleListVal() {
  const shuffleListValue = listElementValue.slice()
    for (let i = shuffleListValue.length - 1; i > 0; i--) {
        const randomValue = Math.floor(Math.random() * (i + 1));
        [shuffleListValue[i], shuffleListValue[randomValue]] = [shuffleListValue[randomValue], shuffleListValue[i]];
    }
    this.preLoadList(shuffleListValue);
}