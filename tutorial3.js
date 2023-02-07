/*Booleans
True ya da false değer döndüren veri tipidir.*/
let isLightOn = true,
    isRaining = false,
    isHungary = true

//Sürekli true olanlar
//tüm negatif ve pozitif sayılar sıfır hariç
//tüm stringler     ("") boş string hariç
//direkt boolean true değeri

//Sürekli false olanlar
//0
//null
//undefined
//Nan
//direkt boolean false değeri
//boş string ("")('')(``)

//Atama Operatörleri
/*
x = x+3         x +=3   şekllinde yazılabilir diğer tüm operatörler için de geçerli*/

/*karşılaştırma operatörleri
== eşitttir(değerleri eşit)
=== denktir(değerleri eşit olsa bile tipleri farklı)
!= eşit değildir
!== denk değildr */

//arttırma operatörü
//++a  önce sayıyı bir arttırır ve onun üzerinden içinde bulundupu işlemi yapar
//++a önce içinde bulunduğu işlemi yapar işlem bittikten sonra sayıyı arttırır
let a =3,b=5
console.log(++a)//burada bir arttırıp ekrana dört basacak
console.log(b++)//olduğu gibi bastıktan sonra değerini arttıracak
console.log(b)//ancak bir sonraki işlemde arttırılmış halini görebiliyoruz

//azaltma operatörü de --a ya da a-- şeklinde aynı mantıkta


//Ternary operatör
//tek satırda koşul yazma işlemi
//koşul ? true ise bunu yap : false ise bunu yap

b>a ? console.log(`b a'dan büyüktür`):console.log(`değildir`)

isRaining ? console.log("şemsiyeni almayı unutma")
:console.log("ceket giymene gerek yok")

//Bazı window metodları
//prompt ekrana veri girmen için pop up çıkartır
/*let number = prompt("bir sayı girin","default")
console.log(number)*/

//confirm()= ondaylama metodu. tıklanan yere göre true ya da false döndürür
/*let con = confirm("silmek istediğine emin misin")
con ? console.log("öğe silindi"):console.log("silme işlemi iptal edildi")*/

//Date object
/*Gerçek zamanlı tarih bilgilerini getirmek için bulunan bir yerleşik
objedir. bu objeden bir nesne oluşturulur ve onun üzerinden tarih
fonksiyonları çağırılarak tarih bilgileri getirilir
getFullYear()seneyi getirir
getMonth()0-11 arasında kaçıncı ayın indexini getirir
getDate()1-31 aralığında günü getirir
getHours()saati
getMinutes()dakikayı
getSeconds()saniyeyi
getMilliseconds()saliseyi
getDay()0-6 arlığında haftanın hangi günü olduğu indexini getirir
*/
//okunabilir tarih yazdırma

const date = new Date//bu şekilde yerleşik objeden bir nesne oluşturuldu
let months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz",
"Ağustos","Eylül","Ekim","Kasım","Aralık"]

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

let tarih = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${days[date.getDay()]}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
console.log(tarih)