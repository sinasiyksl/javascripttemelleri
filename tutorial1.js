/*
Javascript kodunu web sayfasında çalıştırmak için kodu sayfanın html
dosyasına yerleştirmek gerekir. Bunun üç yolu vardır.

1.inline script
Bu yol html içinde doğrudan javascript koduyla şekillendirmeyi sağlar.
İki tırnak içinde javascript kurallarına uygun şekilde kod yazılır ve 
çalıştırılır.

<body>
<button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
</body>


2.internal script
Bu yol html dosyası içine javascript için ayrı bir tag açıp tüm js
kodlarını o bölüme yazıp çalıştırmakla olur. bu tag script tagidir.

<script>
      console.log('Welcome to 30DaysOfJavaScript')
</script>

3.external script
Bu yol javascript kodlarını js uzantılı ayrı bir dosyada yazdıktan sonra
bu dosyayı web sayfasının htmline dosya uzantısıyla çağırma işlemidir.

<script src="./tutorial.js"></script>
(başında ./ olmadan doğrudan da çağrılabilirdi fakat aynı dosay dizin
içindeyse bu arama için de işleri kolaylaştırır)

Not:Bir html dosyasına birden fazla js dosyası eklenebilir

Not:Html'de önce head sonra body bölümü yukardan aşağı okunduğu için
ve web motorunun DOM ağacı oluşturması biraz süre alabildiği için
javascript kodları ya da uzantıları body bölümünün sonuna eklenir.
Ayrıca birden fazla js dosyası varsa en genel ve en son değişiklikleri 
veren en sona yazılır(main.js)

*/


/*
Veri Tiplerine Giriş
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

//Veri Türünü Kontrol Etme
console.log(typeof "Şinasi")
//typeof veriAdı ya da direkt değeri yazarak veri tipini elde edebiliriz. Örnekteki string mesela.

/*Değişkenler
Değişkenler verilerin kapsayıcılarıdırlar. Değişkenler onlara atanan değeri
hafızada kendine aydılan bölümün içinde saklar. Bir değişken tanımlandığında
hafızada onun için bir yer açılır ve ne zaman bu değişkene bir değer 
atanırsa değişkene ayrılan hafıza bölümünde b udeğer muhafaza edilir.
*/

/*Değişken Tanımlama
Eğer değişken ortalama bir değişken gibi sonradan değer değiştirme ihtimali
bulunduruyorsa
let degiskenAdi= value şeklinde tanımlanır
Eğer Pİ gibi yerçekimi sabiti gibi sabit sonradan değişmeyecek bir değerse
const degiskenAdi= value şeklinde tanımlanır

Eğer eşittir bir value değeri girilmezse değişken sadece oluşturulup bir değer 
verilmediği için çağrıldığı durumlarda undefined döndürür işlem yapılamaz
*/

/*Doğru Değişken İsimlendirilmesi

1.Sayı ile başlayamaz.
2.Dolar işareti ve altçizgi haricinde özel karakter bulunduramaz.
3.Boşluk bulunduramaz.
4.Türkçe karakter bulunduramaz.
5.CamelCase metodu ile yazılır.
(CamelCase yani ilk kelimenin ilk harfi küçük sonraki kelimelerin ilk harfleri büyük)
degiskenAdi
kullaniciAdi
ogrenciKullaniciAdi
*/
//Aynı let ya da const ile araya virgül atarak birden çok değişken tanımlanabilir
let firstName = "Şinasi",
    lastName = "Yüksel"
    age= 23
    isMarried = false

console.log(firstName, lastName, age, isMarried)

const PI = 3.14
const GRAVITY = 9.81
//const sabitlerini büyük harfle tanımlıyorum

console.log(PI, GRAVITY)


