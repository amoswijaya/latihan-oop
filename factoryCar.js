const {Roda, Car, Lcgc, SuperCar, Sedan } = require('./mobil.js')






class FactoryCar {
    
    static creadCar(id, nama, warna, tahun, cc, harga){
    //  const arrClass = [new Lcgc(nama, warna, tahun, cc),new SuperCar(nama, warna, tahun, cc), new Sedan(nama, warna, tahun, cc) ]
    //  let random = Math.floor(Math.random()*arrClass.length)

    //  return arrClass[random]
        if( cc > 3500){
            return new SuperCar(id ,nama, warna, tahun, cc, harga)
        }else if(cc > 2000){
            return new Sedan(id ,nama, warna, tahun, cc, harga)
        }else{
            return new Lcgc(id ,nama, warna , tahun, cc, harga)
        }
    

   }
}


module.exports = FactoryCar