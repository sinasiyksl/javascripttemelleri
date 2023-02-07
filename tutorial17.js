/*Web storage bir sitenin bir süreliğine ya da hep tutulması gereken kullanıcı
verilerini browser aracılığıyla tuttuğu yapıdır. Yani kısacası cookiesin
HTML5 ile gelen yeni ve daha efektif versiyonudur. En az 5mb veri saklama
kapasitesi olan, browserın performansını etkilemeyen daha güvenlikli bu yapı
iki çeşitte incelenir.

sessionStorage: Sekme ya da browser kapatıldığında kaybolan verilerdir.
İşlem esnasında bilgisayar belleğinde tutulması gereken veeriler için
kullanılır.

localStorage: Bilgisayar ön belleği, browser ön belleği formatlanmadıkça
ya da browser silinmedikçe kalan veri yapısıdır. Kullanıcı adı şifre gibi 
bilgiler için tutulur.

Her browserın web storagı ayrıdır. Chromeda tutulan bir bilgiye firefoxtan
ulaşılamaz.*/
/*veriler string tutulur integer vb bile atılsa stringe çevrilir öyle
saklanır*/

/*Use case kullanımı gerektiren bazı senaryolar
*Geçici olarak bellekte tutulması gereken bir bilgi,foto..
*kullanıcının sepete eklediği ürün
*kullanıcı adı şifre gibi yapılar
*offline modda da getirilmesi gereken veriler
*/
/*HTML webstorage iki obje ile verilerini saklar
window.localStorage
window.sessionStorage

/*webstorage objesinin metodları
localStorage.clear()-tutulan tüm verileri siler
localStorage.setItem()-key value olarak iki parametre alır ve storagea ekler
localStorage.getItem()-key parametresini alır ve tutulan o propertiyi getirir
localStorage.removeItem()-key parametresi alır o propertiyi siler
localStorage.key()-parametre olarak index alır ve o propertiyi getirir
*/
//bu metodların hepsi sessionStorage. için de geçerlidir.

/*Veriler gözlenmek istediğinde konsola da basılabilir ya da hepsini
bir arada tablo olarak görmek adına ya application sekmesinin storage
bölümünde sessionstorage ve localstorage olarak iki ayrı tabda 
görüntülenebilir.*/

localStorage.setItem("kullaniciadi","sinasiyksl")
/*örnekte görüldüğü üzere kullanıcı adı propertiesini değeriyle birlikte
local storagea sakladık.*/

sessionStorage.setItem("kullanicisifre","gamiYa44")
/*Bu veriler genelde koddan sabit gelmek yerine kullanıcıdan geleceği için
sessionStoragetaki de sayfa açık olduğu sürece tutulur.*/

//webstorageta tutulan verileri kullanmak için çekmek istediğimizde de

//key ismiyle getirme
console.log(localStorage.getItem("kullaniciadi"))

//indexi ile getirmek için 
console.log(sessionStorage.key(1))


/*Web storageta bir dizi ya da obje depolamak istiyorsak önce onu JSON
dönüşümüne sokmalıyız yani stringify etmeliyiz.*/
const skill = [
    {tech: "HTML", level:10},
    {tech: "CSS", level:8},
    {tech: "JavaScript", level:6}
]

let skillJSON = JSON.stringify(skill)
localStorage.setItem("skills",skillJSON)

//eklediklerimizden istemediğimizi de keyini girerek silebilriz.
localStorage.removeItem("skills")

//ya da tutulan her şeyi silme için
localStorage.clear()
sessionStorage.clear()
/*

*/
