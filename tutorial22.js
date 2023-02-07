/*DOM sadece hazırda bulunan elementlerle etkileşime girmez direkt dom
üzerinden element eklenip silinebilir de.*/

/*createElement(): element yaratır ama sadece taslak olarak html dosyası
üstünde yerini de belli etmek de gerekir. DOM metordları ile bu taslağın
özellikleri de tanımlanabilir. parantez içine tırnak içinde tagi yazılır.*/

let subTitle = document.createElement("h2")
subTitle.classList.add("title","even","subTitle")
subTitle.id = "subTitle1"
subTitle.textContent = "vaaay"

console.log(subTitle)

/*appendChild():
Dom ile oluşturulan elementin html sayfasına yerleştirilmesini sağlar.
document.body.appendChild şeklinde yazılır burada body de görünürlüğünü
sağlayan nokta. Bodynin sonuna ekler
*/
document.body.appendChild(subTitle)

//document.ul.appendChild desek de meselea ul içine oluşturacaktı

/*removeChild(): 
oluşturulanı silmek için. ama hangi blok içineyse oradan siler.*/
document.body.removeChild(subTitle)


