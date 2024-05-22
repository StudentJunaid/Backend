require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "StudentJunaid",
"id": 154225685,
"node_id": "U_kgDOCTFMFQ",
"avatar_url": "https://avatars.githubusercontent.com/u/154225685?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/StudentJunaid",
"html_url": "https://github.com/StudentJunaid",
"followers_url": "https://api.github.com/users/StudentJunaid/followers",
"following_url": "https://api.github.com/users/StudentJunaid/following{/other_user}",
"gists_url": "https://api.github.com/users/StudentJunaid/gists{/gist_id}",
"starred_url": "https://api.github.com/users/StudentJunaid/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/StudentJunaid/subscriptions",
"organizations_url": "https://api.github.com/users/StudentJunaid/orgs",
"repos_url": "https://api.github.com/users/StudentJunaid/repos",
"events_url": "https://api.github.com/users/StudentJunaid/events{/privacy}",
"received_events_url": "https://api.github.com/users/StudentJunaid/received_events",
"type": "User",
"site_admin": false,
"name": "Junaid Noor",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": "I'm [Junaid Noor], a passionate coder and technology enthusiast. My journey in the world of programming began when I discovered the joy of turning ideas ",
"twitter_username": null,
"public_repos": 33,
"public_gists": 0,
"followers": 1,
"following": 0,
"created_at": "2023-12-18T10:51:34Z",
"updated_at": "2024-02-12T17:10:06Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
  res.send('jerryop')
})

app.get('/login',(req,res) => {
  res.send('<h1>Hey jerry berry</h1>')
})

app.get('/insta',(req,res)=>{
  res.send('<b>Opjerry1</b>')
})

app.get('/github',(req,res) =>{
     res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

