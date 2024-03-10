const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/test",(req,res)=>{
    const nodeEnvValue = process.env.NODE_ENV;
    res.status(200).json({
        msg: `The node env of this container is ${nodeEnvValue}`
    });
})

app.listen(80);
