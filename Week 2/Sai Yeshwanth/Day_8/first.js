let balance = 0;
let option;
while (true) {
    option = prompt("select one of the options below\n  1.withdraw money \n 2.Deposit money \n 3.Check balance\n 4. Exit ")
    if (option == "1") {
        let amount = prompt("Enter the amount to be withdrawn:");
        if (amount <= balance) {
            balance -= Number(amount);
            alert(amount + " withdrawn successfully !");
        }
        else {
            alert("insufficient amount")
        }
        // break;
    }
    else if (option == "2") {
        let dep_amount = prompt("Enter the amount to be deposited:");
        balance += Number(dep_amount);
        alert(dep_amount + " deposited successfully !");
        // break;

    }
    else if (option == "3") {
        alert("Available amount is: " + balance);
    }
    else if (option == "4") {
        alert("Thank You for Banking");
        break;

    }
    else {
        alert("Enter a valid input");
    }
}