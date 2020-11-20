const express = require('express')
const path = require('path')
const urllib = require('urllib')
const app = express()
app.use(express.static(path.join(__dirname,'dist')))

const port = 3000
app.listen(port,function () {
    console.log(`server is running on port :- ${port}`)
})

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, data){
    const playersObj = JSON.parse(data)
    players = playersObj.league.standard
})

app.get('/teams/:teamName',function (request,response) {
    const teamName = request.params.teamName
    const teamID = teamToIDs[teamName]
    const teams = []
    if(teamID){
        for(let team of players){
        if(team.teamId == teamID && team.isActive == true){
            teams.push({firstName : team.firstName, lastName : team.lastName , jersey : team.jersey , pos : team.pos })
        }
        }
    }
    response.send(teams)
})



