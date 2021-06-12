class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide()
    //write code to change the background color here
  background("black")
    //write code to show a heading for showing the result of Quiz
   textSize(30)
   fill ("yellow")
   text("Result Of The Quiz",340,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
   //write condition to check if contestantInfor is not undefined
if(allContestants!=undefined){
  var ba=230
  textSize(20)
  fill ("green")
  text("Contestent who answered correct are highlighted in green colour",130,230)
  for(var plr in allContestants){
    var ca="2"
    if(ca==allContestants[plr].answer)
    fill("green")
    else 
    fill("red")
    ba+=30
    textSize(20)
    text(allContestants[plr].name+":"+allContestants[plr].answer,250,ba)
  }
}
   
    
  }

}
