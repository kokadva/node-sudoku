
var id = new URLSearchParams(window.location.search).get("id");

if (!id) {
    startNew();
} else {
    loadExisting(id);
}

var gameUrl;
var cellsUrl;

function startNew() {
    var url = '/api/games';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((game) => window.location.replace(`/?id=${game.id}`));
}

function loadExisting(id) {
    console.log("loding existing");
    gameUrl = `/api/games/${id}`;
    cellsUrl = `${gameUrl}/cells`;
    console.log(cellsUrl);
    fetch(gameUrl)
        .then((res) => res.json())
        .then((game) => createTable())
        .then(()=>fetch(cellsUrl))
        .then((res) => res.json())
        .then((updates) => updates.forEach(onUpdate));
}


function createTable() {
    var table = document.getElementById("main");
    var row = table.rows[0];
    var cell = row.cells[0];
    for (var i = 1; i < 9; i++) {
        row.appendChild(cell.cloneNode(true));
    }
    for (var j = 1; j < 9; j++) {
        table.appendChild(row.cloneNode(true));
    }
}

function onUpdate(update, id) {
    document
        .getElementById("main")
        .rows[update.y]
        .cells[update.x]
        .getElementsByClassName("input")[0].
        value = update.value === -1 ? '': update.value;
}