/*Regular expression:
Bir bilinmezi bulma metodudur. Bir veri yığınında belirli motiflerle 
oluşturulmuş desenlerin bulunmasına, işlenmesine, çıkartılmasına ya da 
değiştirilmesine yardımcı olan desen yapısıdır. Tüm dillerde vardır.
Yapısı hepsinde hemen hemen aynıdır.*/
//RegEx parametrleri
/*Pattern. desenin kendisidir.yazılması zorunludur
  Flags. Arama kapsamı parametresidir.yazılması opsiyoneldir

  g:global. veri yığınının her yerinde arar.
  i:incasesensititve. büyük küçük harf duyarını kaldırır. her versiyonu arar.
  m:multiline. bfarklı satırlarda da arar
  flaglerin yazım sırası bir şey etkilemez birden fazla aynı anda kullanılabilir.
  */

//RegExp oluşturmanın iki yolu vardır
//RegExp Constructor(regexp yerleşik sınıfından bir regex oluşturmak)
let pattern = "love"
let flag = "gi"
let regExOrnek = RegExp(pattern) 
let regExOrnek2 = RegExp(pattern,flag)
//flag opsiyonel olduğu için olmasa da bir regexpimiz olur
let regExOrnek3 = RegExp("love","gi")
//değişkenden çekmek yerine direkt parantez içine de yazılabilir
console.log(regExOrnek, regExOrnek2, regExOrnek3)  

//Doğrudan değişkene regex tanımlama
let regExOrnek4 = /love/gi

//RegExp metodları
//test() seçili yığında kullandığımız desen var mı true false döndürür
const str = "I love JavaScript i love react"
const regExOrnek5 = /love/
console.log(regExOrnek5.test(str))

console.log(/love/.test(str))
//değişkendeki regex yerine direkt regexi yazıp oradan da metodu açabiliriz


/*match() seçili deseni seçili yığında arar eşleşeni başladığı indexle
getirir global arama değilse sadece ilkini flagte g varsa global aramaysa
yığında olanların hepsini getirir.*/
console.log(str.match(/love/))
console.log(str.match(/love/gi))

/*search() direkt bulunan ilk desenin ya da globalse hepsinin il indexini
döndürür. hiç yoksa -1 döndürür.*/
console.log(str.search(/love/g))
console.log(str.search(/python/))

/*replace() seçili deseni yığında bulur ikinci parametredeki desenle
değiştirir. global arama değilse sadece ilk bulduğunu değiştirir g flag
varsa bulduklarının hepsini değiştirir.*/
let matchReplaced = str.replace(/love/g,"like")
console.log(matchReplaced)
//string değişikliği tutsun diye değişilmiş halini değişkene atadık
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const txtFixed = txt.replace(/%/g,"")
console.log(txtFixed)
//görüldüğü gibi değişeceği parametreyi boş string verince sadece kaldırmış oldu

/*[] : köşeli parantez içleri bir karakter setidir
    [a-c]: a'dan cye küçük harfler(a,b,c)
    [a-z]: adan zye küçük harfler
    [A-Z]: Adan Zye büyük harfler
    [0-9]: Rakamlar
    [A-Za-z0-9]:Tüm büyük harfler, küçük harfler sayılar

\: ters slaş özel kaçış karakteri
    \d: tüm digitler(rakamlar)
    \D: digit olmayan tüm karkterler
    .: yeni satır harici tüm karakterler
    ^: bununla başlayan(^an(an ile başlayanı getirir mesela))
    &: bununla bite (an&(bu farklı olarak sonuna geliyor tabi))
    *:sıfır ya da çok defa varsa([a]*)
    +:en az bir ya da daha çok olmalı([a]+)
    ?:en fazla bir kere var ya da yok
    \b: kelimeye sınır koyuyor o sınırlar içinde kelimeyi belirliyorsun
    {3}:3 karakterli olacak
    {5,15}: 5 ila 15 arasında karaktere sahip olacak
    | : ya da
    (): gruplamak için

    */

//[Aa]pple şu şekilde de kullanılarak hem ilk harf büyük hem küçük kapsamı verilebilir.
let construct = /[Aa]pple|[Bb]anana/g
/*Örnekte hem köşeli parantez içinde büyük küçük harf kapsamını yaptık hem
de | (ya da)işareti ile ikinci bir ihtimal de ekledik.*/

let dogum = "Ben 23 yaşındayım. 1999 tarihinde doğdum"
let regExOrnek6 = /\d/g
//burası tek tek rakamları getirecek
let regExOrnek7 = /\d+/g
/*+ işareti ile bir ya da daha çok dediğimiz için yan yana olanları sayı
bloğu kabul edip birlikte getirecek.*/ 
console.log(dogum.match(regExOrnek6), dogum.match(regExOrnek7))

const txt2 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'

let regExOrnek8 = /[Ee]-?mail/g
/*Burada tireden sonra soru işareti koyarak olsa da al olmasa da al
demeye getirdik*/
console.log(txt2.match(regExOrnek8))

//sınırlayıcılar
const txt3 = 'This regular expression example was made in December 6,  2019.'
const matches3 = txt3.match(/\b\w{4}\b/g)
/*burada b lerin arasına alarak boşluksuz topluluk kısıtlaması getirdik yani
bir sayı ya da kelime alacak. w harf ya da rakam kapsayıcısı demek.
süslü parantez içinde dört de seçili desenin sadece dört karakterli 
olabileceğini ifade ediyor.*/
console.log(matches3)
/*Olumszunu alma. Starts with için kullandığımız ^ işaretini köşeli parantez
içinde başlangıçta kullanırsak olumsuzunu almış oluruz*/
const txt5 = 'This regular expression example was made in December 6,  2019.'
const pattern5 = /[^A-Za-z,. ]+/g
/*şekildeki pattern "büyük ya da küçük harf olmayacak nokta virgül boşluk
olmayacak diyor.*/
console.log(txt5.match(pattern5))

/*Birebir tanımlama: ^ starts with işaretiyle başlayıp $ ends with ile
bitiyorsa baştan sona tüm karakterleri alan özellik verilir.*/
let pattern6 = /^[A-Z][a-z]{3,12}$/
let name6 = "Sinasi"
console.log(pattern6.test(name6))

