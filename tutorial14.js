/*Javascript loosly type bir dil. Yani bir değişkenin depoladığı verinin
türünü peşinen tanımlayamıyoruz. Değeri aldıktan sonra program bunu kendi
analiz ediyor. Bu yüzden de referanstan sytaxa, errorlar veriyor*/
/*Genel manada javascriptte hatalrı test etmemiz için bir yolumuz var.
try-catch-finally
try: error vermesinden şüphelendiğimiz kısmı bu bloğa alıyoruz
catch: try içinde bir hata çıkarsa yapılacak işlem
finally: işlem hatalı ya d ahatasız ne olursa olsun yapılacak işlem.
mesela bu işlemle bir loading bar açıldı hata verse de vermese de işlem 
sonunda onun kapanması gerek*/

/*try {
    // incelenecek kod
} catch(err) {
    // hata durumunda çalışacak kod
} finally {
    //her durumda çalışacak kod
}
*/
/*catch içindeki err parametresi programın hatayı nasıl algıladığı 
verisini tutar(syntax error,referance error etc..)*/

try{
    let lastName = "Yüksel"
    let fullName = firstName + " " + lastName
}catch(err) {
    console.log(err)
}
//örnekteki gibi finally opsiyonel olmasa da olur
try{
    let lastName = "Yüksel"
    let fullName = firstName + " " + lastName
}catch(err) {
    console.log(err)
}finally{
    console.log("her halükarda basılacak")
}
/*burada da finally olan versiyonu yaptık. aynı değişkenlerle yapabildik
çünkü try-catch içinde tanımlanan değişkenler block scopeda bulunduğu için
dışardan erişilemiyor yeniden tanımlanabilir.*/


/*throw hata olsa da olmasa da sisteme belli bir sebepten hazır hata 
fırlatmak ve bu sebeple de catchi çalıştırmak için yapılır*/
try{
    let firstName = "Şinasi"
    let lastName = "Yüksel"
    let fullName = firstName + " " + lastName
    throw "türkçe karakter var tehlikeli"
}catch(err) {
    console.log(err)
}finally{
    console.log("her halükarda basılacak")
}
/*burada hatalı bir şey yok ama kodun içine error fırlattık ve geri 
döndüreceği değer hata olarak catchte tutlan değer olacak.*/
let age = prompt("kaç yaşındasın")

try{
    if(age<18){
        throw new Error("Yalan amk")
    }
}catch(err){
    alert(err.message)
}
/*Yukardaki örnekte de belirli bir koşuldu hata döndürüyor*/

/*Error Tipleri

Reference Error: verisi undefined ya da tanımlanmamış değişkenle işlem
yapılmaya çalışıldığında verilen error

Syntax Error: Programlama dilinin yazım kurallarına uymayan bir dizilimde
verilen error

Type Error: Seçili değişkenin tipi yapılmaya çalışılan işleme uygun değilse
mesela bir numbera .tolowerCase gibi bir string metodu uygulanırsa bu hatayı
verir.*/
