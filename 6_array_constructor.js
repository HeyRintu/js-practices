function game(name,rank){
    this.Name = name;
    this.Rank = rank;
}

let game1 = new game("valo","diamond");
let game2 = new game("apex","no_rank")
console.log(game1)
console.log(game2)