
document.getElementById('btn-player-expenses').addEventListener('click', function () {
    const perPlayerBudget = getInputFieldValueById('per-player-budget');
    const addedPlayersNumber = getTextElementValueById('total-added-players');
    const playerExpenses = perPlayerBudget * addedPlayersNumber;
    setTextElementValueById('total-player-expense', playerExpenses);
})