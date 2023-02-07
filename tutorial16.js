/*JSON: JavaScript Object Notation. Verilerin depolanması ve aktarılması için
kullanılan, tüm diller ile erişimi olan, syntaxı JavasCript Objesinin syntaxıyla
hemen hemen aynı olan veri formatıdır. .json uzantılı dosylarda saklanır ve
dil fark etmeksizin import edilir. JSON tüm veriyi bir string olarak tutar.
Tranfer edip kullanmak istediğimiz zaman stringten objeye dönüştürerek işlem
yapabiliriz. Aslında bir tür kullanımı kolay ve yeni nesil XML alternatifi
diyebiliriz. JavaScript objesinden farklı olarak keylerin de tırnak içinde
yazılması zorunludur ve amacı gereği fonksiyon depolayamaz.*/
let sampleJSON = `[
    {
        "name": "Tayfun",
        "surName": "Erbilen"
    },
    {
        "name": "Şinasi",
        "surName": "Yüksel"
    },
    {
        "name": "Ali",
        "surName": "Desidero"
    }

]`


console.log(sampleJSON)
/*Görüldüğü gibi JSON baştan sona bir string ve keyleri de string formatta
yazılıyor. Bu objeyi bir JS objesi olarak kullanabilmek için stringten
objeye dönüştürmeliyiz. Ayrıca örnekteki gibi birden fazla objeyi 
saklayacaksak bir dizinin içine gömmeliyiz*/
let users = JSON.parse(sampleJSON)
console.log(users)
/*Dizi olarak saklanını dizi olarak getiriyor tabi ama tekli haliyle direkt 
obje olarak saklanabilir.*/
let sampleJson1 = `{
    "name": "Ananı Siken",
    "surname": "Kovboy"
}`
let users1 = JSON.parse(sampleJson1)
console.log(users1)

/*Aynı şekilde dizi içinde objeler ya da direkt obje de stringleştirilerek
 JSON yapılabilir.*/

let categories = [
    {
        name: "css",
        count: 5
    },
    {
        name: "js",
        count: 16
    },
    {
        name: "Html",
        count: 7
    }
]

let categoriesJSON = JSON.stringify(categories)
console.log(categoriesJSON)

/*JSONı javascript objesine parse ile dönüştürürken ikinci parametre olarak
(key, value) alıp işlem yapabiliriz.*/
let userOBJ = JSON.parse(sampleJSON, (key,value) => {
    console.log(key)
})

/*JSONa çevirirken de sadece çevirmek istediğimiz keyleri filtreleyebiliriz*/
let JSONcategories = JSON.stringify(categories, ["name"])
console.log(JSONcategories)
/*örnekte tüm objelerin sadece name porpertilerini dahil ederek JSONA
çevirdi.*/
