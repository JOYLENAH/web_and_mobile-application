// Model a Ugandan football team using objects. Each player should have properties like
// name, position, and goalsScored, and the team should have a method to calculate
// the total goals scored by all players.


class Player {
    constructor(name, position, goalsScored) {
        this.name = name;
        this.position = position;
        this.goalsScored = goalsScored;
        this.introduce=function(){
            return `l go ${this.name}and it is located in ${this.position}`;
        
        }
        }
    }

let player1=Player("Jake","34","1");
let player2=Player("Lsah","15","4")

console.log(player1.introduce());
console.log(player2.introduce());
class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.players = [];
    }

    // Method to add players to the team
    addPlayer(player) {
        this.players.push(player);
    }
}