const fs = require('fs')
const factoryCar = require('./factoryCar.js')



class Showroom {
    constructor(){
      this.isi = []
    }

    showNameCar(){
        for (let i = 0; i < this.isi.length; i++) {
          console.log(this.isi[i].nama);
        }
    }
 
    inputCar(id,nama, warna, tahun, cc, harga){
      this.isi.push(factoryCar.creadCar(id,nama, warna, tahun, cc, harga))
      let input = this.isi
      let inputData = JSON.stringify(input)

      fs.writeFileSync('./data.json', inputData)
    }
    
    save(){
      let input = this.isi
      let inputData = JSON.stringify(input)

      fs.writeFileSync('./data.json', inputData)
      
    }

    buy(idCar){

      let newData = []
      
      for (let i = 0; i < this.isi.length; i++) {
        if(this.isi[i].id === idCar){
          console.log(`anda membeli mobil ${this.isi[i].nama} seharga ${this.isi[i].harga}`);
          
        }
        
        if(this.isi[i].id !== idCar){
          newData.push(this.isi[i])
        }

      }
      
       this.isi = newData
       let input = this.isi
       let inputData = JSON.stringify(input)

       fs.writeFileSync('./data.json', inputData)
       
       
    }

    searchCar(carName){
      let search = this.isi.filter(a => a.nama === carName) 
      if(search.length === 0){
        console.log('mobil yang anda cari tidak ada');
      }else{
        console.log(search);

      }
    }
}




module.exports = Showroom