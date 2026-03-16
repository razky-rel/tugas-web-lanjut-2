exports.getGames = (req, res) => {
    const games = [
        { id: 1, nama: "Resident Evil 4", genre: "Action, Horror" },
        { id: 2, nama: "Genshin Impact", genre: "Action, Adventure" },
        { id: 3, nama: "Minecraft", genre: "Sandbox" },
        { id: 4, nama: "Resident Evil Village", genre: "Action, Horror" },
        { id: 5, nama: "Grand Theft Auto V", genre: "Action, Open World" },
        { id: 6, nama: "Valorant", genre: "FPS, Tactical Shooter" },
        { id: 7, nama: "The Witcher 3", genre: "RPG, Open World" },
        { id: 8, nama: "Cyberpunk 2077", genre: "RPG, Open World" },
        { id: 9, nama: "Elden Ring", genre: "Action RPG, Fantasy" },
        { id: 10, nama: "Stardew Valley", genre: "Simulation, Farming" }
    ];
    
    res.json(games); 
}; 