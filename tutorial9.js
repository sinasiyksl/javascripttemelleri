/*Higher Order Function:
Parametre olarak fonksiyon alan ya da geriye fonksiyon döndüren 
fonksiyonlara higher order function denir. Parametre olarak alınan 
fonksiyona da callback fonksiyon denir.*/

const sqr = function(n){
    return n ** 2
}

const carpiAFonk = function(callback,a){
    return callback*a
}

console.log(carpiAFonk(sqr(3),5))
/*örnekte de görüldüğü gibi çağırırken hem callback fonksiyonun hem de
higher order fonksiyonun parametresini giriyoruz.*/

//sonuç olarak fonksiyon döndüre Higher order func

const func1 = function(s1){
    const func2 = function(s2){
        const func3 = function(s3){
            return s1+s2+s3
        }
    return func3
    }
    return func2
}

console.log(func1(3)(6)(9))
/*burada en dıştaki fonksiyon bir içteki fonksyionu o da bir içteki 
fonksiyonu döndürüyor ve böylece iç içe yazılı üç fonksiyon da çalışıyor.
çağırıken en dıştakini çağırmak yetiyor çünkü tetikle döndürerek diğerlerini
de çalıştırıyor ama diğerlerinin ihtiyacı olan parametreleri de sırayla
girmemiz gerekiyor.*/


//Setting time Metodları
//setInterval(callback,ms)
/*ilk paramtertesi olan callback fonksiyonu ikinci parametresi olan 
milisaniye cinsinden zaman parametresi aralıklarında döndüren higher order
function*/
const isimYazdir = function(){ console.log("şinasi") }
const duzenliIsimYazdir = setInterval((isimYazdir),2000)
//5 saniyede bir isim yazdırma fonksiyonunu çalıştıracak
//callbackin parametresi olunca kafayı yiyor

//setTimeout(callback,ms)
/*İkinci parametrede belirlenen süre milisaniye kadar bekleyip sonra 
birinci parametre callback fonksiyonunu çalıştırır.*/

function sayHello(){
    console.log("hello")
}
setTimeout(sayHello,7000)

/*setInterval i durdurma metodu clearInterval. 
setTimoutu durdurma metodu clearTimeout.*/
const durdurucu = setTimeout(clearInterval(duzenliIsimYazdir),20000)
setTimeout(clearTimeout(durdurucu),30000)


//Functional Programming
/*Geleneksel looplar yerine javascriptin son sürümlerinde döngü özelliği 
gösteren yerleşik higher order fonksiyonlar geldi.*/

/*forEach((element,index) => {kod bloğu})
ilk eleman diziye özel looptaki gibi sırayla dizi elamanlarını alıyor
ikincisi de elemanın indexini*/
const country = ["Türkiye","Danimarka","Hollanda","ABD","Birleşik Krallik","Rusya","Ukrayna"]
const buyukUlke = []
country.forEach((ulke,index) => {buyukUlke[index] = ulke.toUpperCase()})
console.log(buyukUlke)

/*map: yukarıda görüldüğü gibi forEach modifiyeye daha az uygun bu mapi direkt
bi değişkene eşleyip değişiklikleri alabiliriz*/
const buyukUlke2 = country.map(eleman => eleman.toUpperCase())
console.log(buyukUlke2)

/*filter: içinde döndüğü dizide belirlenen şartı ya da şartları sağlayan
elemanları alıp onları yeni bir dizide getiren higher order fonksiyon.*/
const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const scoreBiggerE = scores.filter((score) => score.score>80)
  console.log(scoreBiggerE)

//Every()
/*dizinin tüm elemanları belirlenen şartı sağlıyorsa true döndürür*/
console.log(scores.every(score => score.name == "Asabeneh"))

//Some()
/*dizinin en az bir elemanında aranan şart sağlanıyorsa true döndürür*/
console.log(scores.some(score => score.name == "Asabeneh"))

//find
/*koşulla eşleşen ilk elementi getirir.*/
const names = ["şinasi","ahmet","aslı","fırat"]
const arananName = names.find(name => name.length==5)
console.log(arananName)

//findIndex
/*koşulu sağlayan ilk elmanın indexini getirir.*/
const arananIndex = names.findIndex(name => name.length==5)
console.log(arananIndex)

/*sort : düz haliyle a dan zye kelime sıralar
.sort(function(a,b){return a-b})//küçükten büyüğe sayı
.sort(function(a,b){return b-a})//büyükten küçüğe  sayı sıralar
*/
names.sort()
console.log(names)
names.reverse()
console.log(names)//burada da adan zye olanı reversle zden aya yaptık

const numberss = [1,17,3,2.2,6,60,20,7,9.3]
numberss.sort(function(a,b){return a-b})
console.log(numberss)
numberss.sort(function(a,b){return b-a})
console.log(numberss)