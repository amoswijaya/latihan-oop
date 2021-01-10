const Showroom = require('./ShowRoom')
const dataCar = require('./dataCar')



const showroom = new Showroom()

for (let i = 0; i < dataCar.length; i++) {
    showroom.inputCar(dataCar[i].id, dataCar[i].name, dataCar[i].color, dataCar[i].year, dataCar[i].cc, dataCar[i].price)
    
}
// showroom.searchCar('Honda')
showroom.buy(1)
showroom.buy(2)
showroom.buy(3)
console.log(showroom);
