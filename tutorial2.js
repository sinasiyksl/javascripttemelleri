/*
Veri Tipleri
İki ana tip veri türü vardır.

1.primitive
Primitive yani temel veri türleri, birbirleri içinde değerlerine göre
kıyaslanabilen ama sonradan modifiye ve değişiklik yapılamayan ana veri
türleridir.
Numbers(integer ya da float)
Strings(iki tırnak arasındaki tüm karakterler ya da karakter dizinleri)
Booleans(true-false)
Undefined(Değeri atanmamış değişken)
Null(boş değer)

2.non-primitive
birbirleri içinde değerlerine göre kıyaslanamayan sadece ve sadece 
referanslarına göre kıyaslanabilen ve üzerinde sonrana modifiye,değişiklik
yapılabilen veri türleridir.
Array(dizi)
Object(nesne)
Function(metod)
*/

//Modifiye nedir primitive üstünde modifiye denemesi
let word = "Javascript"
word[0]="Y"
console.log(word)
/*Yukarda stringin sıfırıncı indexini yani birinci harfini değiştirmeye 
çalıştık ama sonuç olduğu gibi aynı. İşte bu bir modifikasyon örneğidir ve 
örnekteki veri tipi primitive olduğu için gerçekleşmemiştir.*/

//Nonprimitive üstünde modifikasyon
let chars = ['J','a','v','a','s','c','r','i','p','t']
chars[0]="Y"
console.log(chars)
/*Bu örnekte de tamamen aynı işlemi yaptık ama bu sefer işlem gerçekleşti
ve değişken modifiye oldu. Bunun sebebi eldeki değişkenin bir array yani
nonprimitive tür bir değişken olmasıdır.*/

//Değerine göre karşılaştırma referansına göre karşılaştırma
let numOne = 3, numTwo = 3, benimAd = "Alp", seninAd = "Alp"
console.log(numOne==numTwo,benimAd==seninAd)
/*Burada iki değer de true döndürecek. Çünkü yukarıda değerleri aynı olan
primitive değişkenler var ve primitive değişkenler değerlerine göre 
karşılaştırlabildikleri için aynı değere sahip değişkenler eşitlik karşı-
laştırmasına da true dönderecektir.*/
let dizOne = [1, 2, 3]
let dizTwo = [1, 2, 3]
console.log(dizOne==dizTwo)
/*Yukarda değerleri tamamen aynı olan iki dizi karşılaştırıldı fakat eşitliğe
false döndürdü. Bunun sebebi tamamen aynı değerleri döndürseler de nonprimitive
değişkenler (burada bir dizi) değerlerine göre karşılaştırılamayacağı için
eşitlik sağlanamadı.*/
let dizThree = ["7", 8, "Ali"]
let dizFour = dizThree
console.log(dizThree==dizFour)
/*nonprimitivelerdeki referansına göre karşılaştırma da bu şekilde olur.
iki değer ancak aynı nesneden, diziden üretildiyse o zaman kıyaslama yapılıp
eşitlik görülebilir.*/


//Math Object
//roun = yuvarlama (sayı .5 ve üstüyse üsste altıysa alta yuvarlar)
console.log(Math.round(7.5), Math.round(6.8), Math.round(3.2))

//ceil = yukarı yuvarlama (nokta sonrası farketmeden yukarı yuvarlar)
console.log(Math.ceil(5.5), Math.ceil(5.8),Math.ceil(3.2))

//floor = aşağı yuvarlama (nokta sonrası farketmeden aşağı yuvarlar)
console.log(Math.floor(3.8),Math.floor(7.8),Math.floor(78.9))

//min = seçili sayılar arasında en küçüğü getirir
console.log(Math.min(-5,7,57,0))

//max = seçili sayılar arasında en büyüğü getirir
console.log(Math.max(12,-5,27,6))

//random = 0 ile 1 arasında random bir sayı getirir
console.log(Math.random())

//Seçili aralıkta random bir sayı seçme. 

//0-10 arası random sayı
let randNum1 = Math.floor(Math.random()*11)
console.log(randNum1)
//1-100 arası random sayı
let randNum2 = Math.floor(Math.random()*100+1)
console.log(randNum2)
//10-50 arası random sayı
let randNum3 = Math.floor(Math.random()*(50 -10))+10
console.log(randNum3)
//parantez için (maxdeğer - min değer yazıp aralığı belirledik) (50-10)


/*Strings
Çift tırnaklar, tektırnaklar ya da ters tırnaklar arasındaki karakter ya da 
karakterlerden oluşan textlerdir.*/
/*Stringler üzerinde tüm eylemleri ters tırnaklar arasında yap kafan rahat
etsin.*/

let name = "Şinasi"
let surName = "Yüksel"
let fullName = `${name} ${surName}`
/*bu şekilde aradaki boşluk adedini satır atlamayı içerdeki tırnağı özel karakterleri
algılar ve dışardan içeri değişken enjekte etmek ${} şunun içine yazarak hemen
mümkün olur*/
console.log(fullName)

//String Metodları
//length = stringin boşluklar dahil kaç karakterden oluştuğunu geitirir.
let isimUzunlugu = fullName.length
console.log(`${fullName}'in uzunluğu ${isimUzunlugu} karakterdir`)

//String içinde seçili karaktere erişme
/*her karakter sıralı bir sayı ile muhafaza edilir. bu sayıya index denir.
index her zaman sıfırdan başlar bu yüzden ilk karakter index 0dır (a[0])
sıfırdan başladığı için de son karakter stringin uzunluğu eksi birdir
(a[a.length-1])*/
console.log(fullName[0])
console.log(fullName[fullName.length-1])

//toUpperCase() = stringin tüm harflerini büyük harf yapar.,
/*Ama bu bir modifikasyon olacağı için bu primitive verinin gerçek değerini
değiştirmez sadece tek anlık tepkidir işlemden sonra eski haline döner.
Ama yeni bir değişkene aktarılırsa yapılan işlemli hali bu yeni veri üstünde
saklanır.*/
let fullNameUpper = fullName.toUpperCase()
console.log(fullNameUpper)

//toLowerCase() = yukardakinin tüm harfleri küçük yapan hali
let fullNameLower = fullNameUpper.toLocaleLowerCase()
console.log(fullNameLower)

/*substr(1, 2) birinci parametre başlangıç indexi ikinci parametre kaç harf
uzunluğunda gidileceğini belirlemek üzere string içinden seçili alanı kesip
getirir.*/
let subName = fullName.substr(0,6)
console.log(subName)

/*substring(1,2) birinci parametre başlangıç indexini ikinci parametre bitiş 
indexini belirtmek üzere string içinden kesip getirir.*/
let subSurName = fullName.substring(7,13)
console.log(subSurName)

/*split() parametre olarak boşluk da dahil bir karakter verilirse o 
karakterlerinden stringi böler, hiçbir şey verilmezse olduğu gibi diziye 
çevirir. boş karakter verilirse yani boşluksuz çift tırnak tüm karaketerleri 
böler ve dizi halinde verir.*/
let ayrikName = fullName.split(" ")//boşluk olan yerden ayıracak
console.log(ayrikName)

let diziName = fullName.split()//ayırmadan dizi getirecek
console.log(diziName)

let karaketerleriName = fullName.split("")/*boşluk dahil tüm karakterleri
bölüp dizi olarak getirecek*/ 
console.log(karaketerleriName)

//trim() = stringin başındaki sonundaki tüm boşlukları siler

/*includes() = parametre olarak girilen karakterin string için olup 
olmadığnı boolean değer olarak GeolocationPositionError(true-false)*/
console.log(fullName.includes("Ş"))
console.log(fullName.includes("ş"))
//büyük küçük harf duyarlı olduğu için ikinciyi false döndürür aman dikkat

/*replace(1,2) string içinde birinci parametreyi bulursa ikinciyle değişir.
ama sadece ilk bulduğunu birden fazla varsa replaceAll() ile hepsi değişebilir*/

let newName = fullName.replace("Şinasi", "Alp")
console.log(newName)

let text = "What is love? I dont know love is pain. It coul be love"
let newText = text.replaceAll("love", "me")
console.log(newText)

//indexOf() parametreyi ilk nerde bulduysa oranın başlangıç indexini getirir
console.log(text.indexOf("love"))

//lastIndexOf() bu da son bulduğu yerin başlangıç indexini getirir
console.log(text.lastIndexOf("love"))

/*startsWith() parametredeki belirtilenle başlıyorsa stirng true başlamıyorsa
false döndürür.*/
console.log(text.startsWith("W"))//true
console.log(text.startsWith("w"))//false(case sensitive)
console.log(text.startsWith("Wh"))//true
console.log(text.startsWith("What"))//true
console.log(text.startsWith("love"))//false

/*endWith() parametredeki ile bitiyorsa true bitmiyorsa false döndürür.*/
console.log(text.endsWith("e"))//true
console.log(text.endsWith("ve"))//true
console.log(text.endsWith("be love"))//true

/*search() indexofun aynısı ama bu parametre olarak regular expression da
alabiliyor*/
console.log(text.search(/what/gi))
/*Burada parametre bir regular expressiondır. reg-ex bir text değil de bir
desendir. tırnakla değil de iki ters slash arasında yazılır. g global arama
yaptırır meseal birden fazla olsa onları da getirir. i de büyük küçük harf
hassaslığını kaldırıyor.*/

/*match() includes()un regular expression parametre alabilen hali ama bu
varsa dizi halinde direkt getiriyor true false döndermiyor*/
console.log(text.match(/love/g))
/*burada g yazdığımız için global yaptı ve ilk olanı değil sadece hepsini
getirdi.*/

let txt = `In 2019, I ran 30 Days of Python.
 Now, in 2020 I am super exited to start this challenge`

let regEx = /\d+/
/*bu örnekte d yani digitler yani sayı olanlar demek regular expression
düzeniyle ve artıda minimum bir tane ya da daha çok gelecek demek
Bu ifadeyle text içinden numaraları çekebiliriz*/
console.log(txt.match(/\d+/))
//bu şekilde ["2","0"...] diye tek tek sayıları getirir
console.log(txt.match(/\d+/g))
/*şöyle global işareti eklersek de ["2019","30"]şeklinde sayı bloklarını 
birleşik getirir.*/

//Veri Tipini Değiştirme
/*Bazen üzerlerinde farklı işlemler yapmak için veri tiplerini birbirine 
dönüştürmemiz gerekebilir.*/

//Stringi integera çevirme
/*parseInt()
  Number()
  başına +() işareti
*/

//Stringi floata
/*parseFloat()
  Number()
  başına +() işareti
*/
/*görüldüğü gibi artıyla ya da number() ile yapmak daha garanti çünkü integer
float farketmeden ihtiyaca göre dönüştürüyor.*/

let num = "10" //görüldüğü gibi bir string ifade
let numNumb = +num //tak float int farketmeden çeviridi

let num2 = "10.82"
let numNumb2 = Number(num2)//bu da string içi floattı tak floata çevirdi başka bir yoluyla

console.log(numNumb+numNumb2)



//float integera
console.log(parseInt(numNumb2))



