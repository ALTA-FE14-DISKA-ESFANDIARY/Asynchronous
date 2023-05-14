function lottery(any: number) {
    return new Promise((resolve, reject) => {
      console.log("undian lotre dimulai..");
      
      setTimeout(() => {
        console.log("sedang mengundi nomor anda.");
        const winningNumber = Math.floor(Math.random() * 1000) + 1;
        
        if (any === winningNumber) {
          resolve("selamat anda mendapatkan hadiah utama berupa mobil");
        } else {
          reject("maaf anda kurang beruntung");
        }
      }, 10000); 
    });
  }
  
  lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("undian lotre telah berakhir.");
    });