
const nameArray = [];

function selectPlayers(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    nameArray.push(playerName);
    if (nameArray.length > 5) {
        alert("You Can't added more than 5 players.")
    }
    else {
        element.setAttribute('disabled', true);
        element.style.backgroundColor = 'gray';
        display(nameArray);
    }

}

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
        document.getElementById('total-added-players').innerText = i + 1;
    }
    clearAllValues();

}


function clearAllValues() {
    document.getElementById('per-player-budget').value = '';
    document.getElementById('total-player-expense').innerText = '0';
    document.getElementById('manager-budget').value = '';
    document.getElementById('coach-budget').value = '';
    document.getElementById('total-expenses').innerText = '0';

}
