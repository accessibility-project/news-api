const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors()); 

// Data
const newsData = {
    "breaking-news": [
        {
            id: 1,
            title: "Lost Amazon Tribe Makes First Contact with the Modern World",
            description: "After centuries of isolation, an uncontacted Amazonian tribe has emerged, demanding WiFi and avocados."
        },
        {
            id: 2,
            title: "Beauty Heist Shocks the Nation",
            description: "Thieves stole thousands of dollars worth of Botox and fillers. Escaped in a runaway bulldozer."
        },
        {
            id: 3,
            title: "Aliens Demand Citizenship",
            description: "Extraterrestrials land in New York, claim they have been living here for centuries disguised as government officials."
        },
        {
            id: 4,
            title: "Time Traveler Arrested for Insider Trading",
            description: "Man claims to be from the year 2087, caught making suspiciously accurate stock market bets."
        },
        {
            id: 5,
            title: "Florida Man Wins Lawsuit Against Gravity",
            description: "Court rules that gravity 'personally inconvenienced' him after he tripped on a banana peel."
        }
    ],
    "live-feed": [
        {
            id: 1,
            time: "09:13",
            location: "MARS",
            description: "NASA loses contact with Mars rover after it 'joins a union'."
        },
        {
            id: 2,
            time: "08:58",
            location: "VATICAN CITY",
            description: "Pope accidentally tweets 'LOL' after mysterious UFO sighting."
        },
        {
            id: 3,
            time: "08:17",
            location: "ATLANTIS",
            description: "Lost city of Atlantis found—turns out it's just a fancy resort."
        },
        {
            id: 4,
            time: "08:03",
            location: "SPACEX",
            description: "Elon Musk announces mission to send influencers to Pluto—'one-way only'."
        },
        {
            id: 5,
            time: "08:03",
            location: "WORLD CUP",
            description: "Referee sends himself off after controversial VAR decision."
        },
        {
            id: 6,
            time: "08:03",
            location: "HOLLYWOOD",
            description: "Hollywood announces new movie: 'Fast & Furious 47'—this time, in space."
        },
        {
            id: 7,
            time: "08:03",
            location: "SWEDEN",
            description: "Scientists confirm: The Swedish summer actually lasts 17 minutes."
        }
    ],
    "sports": [
        {
            id: 1,
            title: "Football Sensation: Underdogs Stun Champions in Historic Upset",
            description: "The reigning league champions were left in shock as underdogs FC Thunderstorm pulled off a last-minute goal to claim victory."
        },
        {
            id: 2,
            title: "Boxing Showdown Ends in Double Knockout – But Who Wins?",
            description: "In an extremely rare moment in boxing history, both fighters landed knockout punches at the same time, collapsing to the canvas simultaneously."
        },
        {
            id: 3,
            title: "Formula 1 Drama: Championship Leader Crashes on Final Lap",
            description: "With just meters to go, the championship leader lost control, smashing into the barriers and handing the victory to his biggest rival."
        },
        {
            id: 4,
            title: "NBA Star Ejected for Celebrating Too Hard?",
            description: "Fans were left in disbelief as their favorite player received his second technical foul for an ‘over-the-top’ celebration."
        }
    ],
    "direct-sports": [
        {
            id: 1,
            time: "10:42",
            location: "CHAMPIONS LEAGUE",
            description: "Dramatic penalty shootout sends underdog team to the final!"
        },
        {
            id: 2,
            time: "09:58",
            location: "NFL",
            description: 'Quarterback sets new passing record – "I was just in the zone!"'
        },
        {
            id: 3,
            time: "09:30",
            location: "OLYMPICS",
            description: 'Teenager wins gold after shocking comeback – "This is unreal!"'
        },
        {
            id: 4,
            time: "08:45",
            location: "HOCKEY WORLD CUP",
            description: 'Captain ejected after massive brawl – "He went too far!"'
        },
        {
            id: 5,
            time: "08:22",
            location: "FORMULA 1",
            description: 'Rainstorm causes chaos – five cars crash out in turn one!'
        },
        {
            id: 6,
            time: "07:55",
            location: "TENNIS GRAND SLAM",
            description: 'Unknown qualifier knocks out world number one in straight sets!'
        },
        {
            id: 7,
            time: "07:30",
            location: "EXTREME SPORTS",
            description: 'Skateboarder lands never-before-seen trick – judges speechless!'
        }
    ]
};

// API-rutter
app.get('/api/breaking-news', (req, res) => {
    res.json(newsData['breaking-news']);
});

app.get('/api/live-feed', (req, res) => { 
    res.json(newsData['live-feed']);
});

app.get('/api/sports', (req, res) => {
    res.json(newsData['sports']);
});

app.get('/api/direct-sports', (req, res) => {
    res.json(newsData['direct-sports']);
});

// Starta servern
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
