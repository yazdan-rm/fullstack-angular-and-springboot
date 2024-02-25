let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// Let's use the easier for loop
for(let tempSport of sportsOne){
    if(tempSport == "Cricket")
        console.log(tempSport + " << my Favorite!")
    else{
        console.log(tempSport);
    }
}