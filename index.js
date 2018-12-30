var unirest = require("unirest");

exports.teddy = function teddy(req, res) {
  sleepHours    = req.body.queryResult.parameters.sleepHours;
  exerciseHours = req.body.queryResult.parameters.exerciseHours;

  let sleepSent = false;
  let exerciseSent = false;


    var sleep = unirest("POST", "http://canwetalk.tk/api/sleep/create");
    sleep.headers({
      "Accept": "application/json",
      "Content-Type": "application/json"
    })
    .type('json')
    .send({
      "userId": "teddy2018",
      "hours": sleepHours
    })
    .end((res) => {
      sleepSent = true;
      if (res.error) throw new Error(res.error);
      console.error(res.body);
    });



    var exercise = unirest("POST", "http://canwetalk.tk/api/exercise/create");
    exercise.headers({
      "Accept": "application/json",
      "Content-Type": "application/json"
    })
    .type('json')
    .send({
      "userId": "teddy2018",
      "hours": exerciseHours
    })
    .end(function(res) {
      exerciseSent = true;
      if (res.error) throw new Error(res.error);
      console.error(res.body);
    });

}
