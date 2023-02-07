/*Closure iç içe bulunan fonksiyonlarda içteki fonksiyon dıştaki fonksiyondan
data çekip kullanıyorsa bu iç fonksiyona closure denir. bir değer 
üzerine birbirinden farklı işlemler uygulanan ve bunun seçimlere 
bırakıldığı fonksiyon blokları en uygun kullanım lanıdır. Mesela
bir sayıyı arttıran ya da azaltan bir fonksiyonda arttırma bir iç fonk
azaltma da ayrı bir iç fonk ve bizim .seçilifonk() tercihimize göre
çalışır.*/

function outerFunction(){
    let count = 0
    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}

const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
/*bir closure örneği yaptık ama bunu bir değişkene atadık. Aslında bu 
örnekte atamasak da olurdu fakat bu closureun genel kullanım amacaı 
tercihli fonksiyonlarda olduğundan nokta ile ulaşmak için obje gibi
fonksiyonu da bir değişken isminde tutuyoruz.*/

function toplaCikar(){
    let count = 0
    function plusOne(){
        count++
        return count
    }
    function minusOne(){
        count--
        return count
    }
    return {
        arttir : plusOne,
        azalt : minusOne
    }
}

const innerFuncs = toplaCikar()

console.log(innerFuncs.arttir())
console.log(innerFuncs.arttir())
console.log(innerFuncs.arttir())
console.log(innerFuncs.azalt())
/*Örnekte farkedildiği üzere dış fonksiyonun birden fazla değer döndürme 
ihtimalini yazmamız gerektiği için obje şeklinde yazdık ve dışardan 
ulaşabileceğimiz bir key değere fonksiyon isimlerini eşitledik.*/
