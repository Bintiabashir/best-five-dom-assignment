
const nameArray = [];

function display(selectedPlayersName) {
    const tableBody = document.getElementById('listed-name');
    tableBody.innerHTML = "";
    for (i = 0; i < selectedPlayersName.length; i++) {
        const name = nameArray[i];
        const tr = document.createElement("tr");
        tr.innerHTML = ` 
        <th class="pr-3 text-orange-500">${i + 1} </th>
        <td class="text-zinc-300">${name}</td>
        `;
        tableBody.appendChild(tr);
    }

}

function selectPlayers(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    nameArray.push(playerName);
    document.getElementById('total-added-players').innerText = nameArray.length;
    display(nameArray);
}
