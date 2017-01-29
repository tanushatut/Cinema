/**
 * Created by Zuzia on 1/27/17.
 */
window.onload = function () {
    var userName;
    var menuItem;
    userName = prompt ("Ваше имя" , "");
    if (userName == "") {
        alert("Здравствуйте, пользователь!");
    } else if (userName == undefined) {
        alert("До свидания, пользователь!");
    } else {
        alert("Здравствуйте, " + userName);
        menuItem = prompt("Введите название пиццы", "Фирменная");

        // if (menuItem == "") {
        //     alert("Вы ничего не заказали!");
        // } else if (menuItem == undefined) {
        //     alert("А зачем тогда заходили?");
        // } else {
        //     alert("Отличный выбор, " + userName);млмл
        // }
        if (menuItem == "" || menuItem == undefined) {
            alert("Удачи в следующий раз!");
        } else if (menuItem == "Фирменная") {
            alert("Вы заказали нашу Фирменную пиццу");
        } else if (menuItem == "Четыре сезона") {
            alert("Вы заказали пиццу Четыре сезона");
        } else if (menuItem == "Домашняя") {
            alert("Вы заказали пиццу Домашняя");
        } else if (menuItem == "Сырная") {
            alert("Вы заказали пиццу Сырная");
        } else if (menuItem == "Божественная") {
            alert("Вы заказали пиццу Божественная");
        } else {
            alert("Данного товара у нас нет в меню");
        }
    }
    var order = confirm ("Ваш заказ - " + menuItem + " пицца"+ ". Cпасибо, " + userName +".")
    if (order) {
        alert ("Ожидайте заказ, курьер выехал.");
    } else {
        alert ("Вы отказались от заказа");
    }


};
