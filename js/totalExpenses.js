
document.getElementById('btn-total-calculation').addEventListener('click', function () {
    const totalPlayerExpenses = getTextElementValueById('total-player-expense');
    const managerBudget = getInputFieldValueById('manager-budget');
    const coachBudget = getInputFieldValueById('coach-budget');
    const totalExpenses = totalPlayerExpenses + managerBudget + coachBudget;
    setTextElementValueById('total-expenses', totalExpenses);
})