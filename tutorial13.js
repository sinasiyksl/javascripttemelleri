/*console metodlarının ana amacı konsola farklı şekillderde bildirimler
basaarak geliştiriciyi yaptığı işi yaparken temizlerken veya sorunlarını
çözerken geri bildirimler alabilmesini sağlayan metodlardır.*/

/*%d(digit) %s(string) gibi ifadelerle ikinci parametredeki değerleri
sırayla bastırıyor.*/
console.log('%d %s of JavaScript', 30, 'Days')

/*console.log(): verileni düz ekrana basıyor. %c ile seçilip ikinci
parametre olarak css ile stillendirilebiliyor.*/
console.log("%cAman %cDikkat", "font-size:50px","color:blue", "font-size:50px", "color:yellow")

/*console.warn(): Sarı ünlem temasında uyarı çıktısı basıyor*/
console.warn("aman dikkat hocam")

/*console.error(): kırmızı temada hata mesajı basıyor direkt*/
console.error("hata yaptın dikkat et")

/*console.table(): html gibi consolea tablo basıyor.Değer olarak dizi 
alıyor. diziyi tablo şeklinde getiriyor*/
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries)

/*console.time(): console.timeEnd() ile arasına yazılan işlemin milisaniye
cinsinden ne kadar zaman sürdüğünü getiriyor.*/
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')
/*.time ve .timeEnd in parametre stringi aynı olmalı çünkü o isimle süreyi
getiriyor*/

//console.info(): console.log()tan bi farkı yok
console.info("adam ol")

/*console.assert(): birinci parametresi false ise ikinci parametreyi error
 formatında ekrana basan true ise bir şey yapmayan metod.*/
console.assert(5>3,"bi yanlışlık var")//koşul doğru olduğu için bir şey basmayacak
console.assert(3>5,"bir yanlışlık var")//koşul yanlış ikinci parametreyi ekrana basacak

//console.group(): dizilerden elemanları grupluyor

//console.count() içine yazıldığı fonksiyonun kaç kere çalıştığını ekrana getirir.

