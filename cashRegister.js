function checkCashRegister(price, cash, cid) {
    let change = (cash - price).toFixed(2); // change amount up to 2 decimals.
    let tempCid = [...cid]; // to make cid chnages.
    let changes = []; // init: changes from register.
    // total cash in CID.
    let totCid = (cid.reduce((sum, curr) => sum + curr[1], 0)).toFixed(2);
    if (totCid == change) {
        // if total CID cash == change, Close the register.
        changes = [...cid];
        tempCid = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]; // updating tempCid.
        return {status: "CLOSED", change: changes};
    }
    for (var i = 0; i < currencies.length; i++) {
        // Finding which coin/bill to use.
        if (change > currencies[i]) {
            null;
        } else {
            break;
        }
    }
    for (let j = i - 1; j >= 0; j--) {
        // processing changes from register bills and coins.
        if (change != 0) {
            // if change is 0, no processing required.
            // currUnit: num of coin/bill required.
            let currUnit = parseInt(change / currencies[j]);
            while (currUnit > 0) {
                // no processing required, if units required is 0.
                if (currUnit * currencies[j] <= tempCid[j][1]) {
                    // checking if enough coins/bills are abailable.
                    // updating tempCid by deducting required amount.
                    tempCid[j][1] = (tempCid[j][1] - currUnit * currencies[j]).toFixed(2);
                    // updating change.
                    change = (change - currUnit * currencies[j]).toFixed(2);
                    // updating changes to give.
                    changes.push([cid[j][0], currUnit * currencies[j]]);
                    break;
                }
                currUnit--;
            }
        }
    }
    if (change != 0) {
        // if changes are not sufficient.
        tempCid = [...cid]; // reversing tempCid changes.
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    // When changes are available and not equal to total cid cash.
    return {status: "OPEN", change: changes};
}

var currencies = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
console.log(checkCashRegister(19.45, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
