const dateOfBirth = Number(prompt("Який Ваш рік народження"));
const placeOfLiving = prompt("В якому місті живете");
const favouriteSport = prompt("Улюблений вид спорту");

let toAlert = '';
  
if(dateOfBirth) {
    let currentYear = 2023;
    let age = currentYear - dateOfBirth;

    toAlert += 'Ваш вік: ' + age + '. ';
} else {
    toAlert += "\nШкода, що Ви не захотіли ввести рік народження.";
}

if(placeOfLiving) {

    if (placeOfLiving == 'Київ') {
        toAlert = toAlert + "Ти живеш у столиці України";
    
    } else if (placeOfLiving == 'Вашингтон') {
        toAlert = toAlert + "Ти живеш у столиці США";
    
    } else if (placeOfLiving == 'Лондон') {
        toAlert = toAlert + "Ти живеш у столиці Великобританії";
    
    } else {
        toAlert = toAlert + "Ти живеш у місті " + placeOfLiving;
    }
} else {
    toAlert += "\nШкода, що Ви не захотіли ввести місто В якому живете.";
}

if(favouriteSport) {

    if (favouriteSport === 'Бокс' || favouriteSport === 'бокс') {
        toAlert = toAlert + "Круто! Хочеш стати Мухаммедом Алі?";
    
    } else if (favouriteSport == 'Футбол' || favouriteSport == 'футбол') {
        toAlert = toAlert + "Круто! Хочеш стати Ліонелем Мессі";
    
    } else if (favouriteSport == 'Плавання' || favouriteSport == 'плавання') {
        toAlert = toAlert + "Круто! Хочеш стати Майклом Фелпсом";
    
    }
} else {
    toAlert += "\nШкода, що Ви не захотіли ввести улюблений вид спорту.";
}



alert(toAlert);