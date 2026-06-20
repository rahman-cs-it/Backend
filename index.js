require('@dotenvx/dotenvx').config()
const express = require('express');
const app = express()

githubData = {
  "login": "rahman-cs-it",
  "id": 89018437,
  "node_id": "MDQ6VXNlcjg5MDE4NDM3",
  "avatar_url": "https://avatars.githubusercontent.com/u/89018437?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rahman-cs-it",
  "html_url": "https://github.com/rahman-cs-it",
  "followers_url": "https://api.github.com/users/rahman-cs-it/followers",
  "following_url": "https://api.github.com/users/rahman-cs-it/following{/other_user}",
  "gists_url": "https://api.github.com/users/rahman-cs-it/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rahman-cs-it/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rahman-cs-it/subscriptions",
  "organizations_url": "https://api.github.com/users/rahman-cs-it/orgs",
  "repos_url": "https://api.github.com/users/rahman-cs-it/repos",
  "events_url": "https://api.github.com/users/rahman-cs-it/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rahman-cs-it/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rahman",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I'm a student at Anjuman-I-Islam's Kalsekar Technical Campus, passionate about ethical hacking and frontend development.",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2021-08-16T11:31:56Z",
  "updated_at": "2026-05-20T12:24:00Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Please Login')

})

app.get('/youtube',(req,res)=>{
    res.send('Subscribe now')

})

app.get('/github',(req,res)=>{
    res.send(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})