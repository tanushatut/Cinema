/**
 * Created by iMac on 29.01.17.
 */
function onClick() {
    var userName = "Пользователь";
    userName = prompt ("Ваше имя" , "Пользователь");
    if (userName == undefined) {
        alert("До свидания, пользователь!");
    } else {
        if(userName == "") {
            userName = "Пользователь";
        }
        alert("Здравствуйте, " + userName);
        var nameCinema = prompt("Укажите название фильма", "");
        var dataItem = prompt("Введите дату кинопросмотра", "12.01.2017");
        var timeItem = prompt("Введите время кинопросмотра", "21.00");
        if(nameCinema == "" || nameCinema == undefined ||
            dataItem == "" || dataItem == undefined ||
            timeItem == "" || timeItem == undefined) {
            alert("Вы ввели не все данные киносеанса.");
        } else {
            var isPopcorn = confirm("Не хотите ли попкорна?");
            var order = confirm ("Ваш сеанс " + nameCinema + " в " +timeItem + "," + dataItem + ". Cпасибо, " + userName +".")
            if (order) {
                var popcorn;
                if(isPopcorn) {
                    popcorn = "\nПопкорн вас будет ожидать в фое перед сеансом.";
                } else {
                    popcorn = "";
                }
                alert ("Спасибо, что выбрали наш Кинотеатр." + popcorn);
            } else {
                alert ("Вы отказались от кинопросмотра");
            }
        }
    }
}
