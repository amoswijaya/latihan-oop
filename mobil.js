class Roda {
    constructor(){
        this.rodaDepanKanan = 1
        this.rodaDepanKiri = 1
        this.rodaBelakangKanan = 1
        this.rodaBelakangKiri = 1
    }
}


class Car {
    constructor(id , nama, warna,tahun, cc, harga){
        this.id = id
        this.nama = nama
        this.warna = warna
        this.tahun = tahun
        this.cc = cc
        this.harga = harga
        this.roda = new Roda()
    }
     
    klackson(){
        console.log('TINNNN!!!!');
    }

}

class Sedan  extends Car{
    constructor(id ,nama, warna,tahun, cc, harga){
        super(id ,nama, warna, tahun,cc, harga)
        
    }

    klackson(){
        console.log('PIIINN!!!');
    }
}

class Lcgc extends Car {
    constructor(id ,nama, warna,tahun, cc, harga){
        super(id ,nama, warna, tahun, cc, harga)
    
    }

    klackson(){
        console.log('ENTINN!!!');
    }
}

class SuperCar extends Car {
    constructor(id ,nama, warna,tahun, cc, harga){
        super(id ,nama, warna, tahun,cc, harga)
        
    }

    klackson(){
        console.log('BIPPPPP!!!');
    }
}

module.exports = {
   Roda,
   Car,
   Lcgc,
   SuperCar,
   Sedan
}
