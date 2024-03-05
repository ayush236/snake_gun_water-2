let user = prompt("enter `s` as Snake or `w` as water or `g` as Gun");
let com = Math.floor(Math.random()*3);
let com01 = ["s","w","g"][com];

const game = (user,com01) =>{
  if(user===com01){
    return 0;
  }
  else if(user==="s" && com01==="w"){
    return "user"
  }
  else if (user==="w" && com01==="g"){
    return "user"
  }
  else if (user==="g" && com01==="s"){
    return "user"
  }
  else 
    return "com"
}
let result = game(user,com01)
document.write('the winner is :' ${result})