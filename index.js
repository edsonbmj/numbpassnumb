function enter(){
  let txtnum1 = document.querySelector('input#txtnum1')
  let txtnum2 = document.querySelector('input#txtnum2')
  let txtpass = document.querySelector('input#txtpass')
  let num1 = Number(txtnum1.value)
  let num2 = Number(txtnum2.value)
  let numpass = Number(txtpass.value)
  let resp = document.querySelector('div#resp')  
  if( txtnum1.value.length == 0 || txtnum2.value.length == 0 || txtpass.value.length == 0){
    alert(`[ERRO] Faltam dados!`)
  }else{
    for(let i=num1; i <= num2; i+=numpass)
      resp.innerHTML += `${i}; `
  }
}
