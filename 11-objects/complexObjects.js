/*
OBJECTS
*/

let netflix ={
    id: 9,
    name: 'Super Store',
    Season1: {
        Seasoninfo: {
            episodeInfo: [
                {Episode: 1, episodeName: 'Pilot'},
                {Episode: 2, episodeName: 'Magazine Profile'},
                {Episode: 3, episodeName: 'Shots and Salsa'},
                {Episode: 4, episodeName: 'Mannequin'},
                {Episode: 5, episodeName: 'Shoplifter'},
                {Episode: 6, episodeName: 'Secret Shopper'},
                {Episode: 7, episodeName: 'Color Wars'},
                {Episode: 8, episodeName: 'Wedding Day Sale'},
                {Episode: 9, episodeName: 'All-Nighter'},
                {Episode: 10, episodeName: 'Demotion'},
                {Episode: 11, episodeName: 'Labor'},
                
                
                
                
            
            
            ]
        }
    },
    season2: {},
    season3: {},
};

console.log(netflix);
console.log(netflix.Season1.Seasoninfo.episodeInfo[3].episodeName);

//Pick an episode to log in the terminal
//Using dot notation, walk through the object and print off both the episode number
//and the episode name
console.log(netflix.Season1.Seasoninfo.episodeInfo[10].Episode, netflix.Season1.Seasoninfo.episodeInfo[10].episodeName)

//JOSN -> JavaScript Object Notation
