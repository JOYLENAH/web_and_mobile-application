class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.players = [];
    }

    // Method to add players to the team
    addPlayer(player) {
        this.players.push(player);
    }

    // Method to calculate the total goals scored by the team
    totalGoals() {
        return this.players.reduce((total, player) => total + player.goalsScored, 0);
    }
}







