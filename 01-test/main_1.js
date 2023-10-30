const supporter1 = {
  club: 'Milan',
  
  chant() {
    const chants =()=> console.log('"Forza  '+ this.club+'"');
      setTimeout(chants, 2000);

  }
}

const supporter2 = {
  club: 'Inter'
}

supporter1.chant();
supporter1.chant.call(supporter2);
