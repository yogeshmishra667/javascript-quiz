   function quizQuestions(question, aneswer, crtAnswer){
                this.question = question ;
                this.aneswer = aneswer ;
                this.crtAnswer = crtAnswer ;
   }
 
 
      quizQuestions.prototype.correctAns = function(){
           console.log(this.question);
          for (var i = 0; i < this.aneswer.lenght; i++) {
              console.log(i +  ':' + this.aneswer[i]);
              
          }
    };

quizQuestions.prototype.checkAnswer = function () {
  if (correct === this.crtAnswer) {
      console.log('congratulations !! this is a correct answer');
  }
  else{
      console.log('so sad !! answer is wrong');
  }
};

   var quizOne = new quizQuestions('whta is your name', ['yogi', 'mukesh', 'dev'], 1);
   var quizSecond = new quizQuestions('whta is your fav programming language', ['java', 'php', 'javascript'], 2);
   var quizThree = new quizQuestions('whta is your  pet name', ['dog', 'rabbit', 'mouse'], 2);
var quizFour = new quizQuestions('whta is your  puppy name', ['max', 'coco', 'luci'], 1);


       var quizAns = [quizOne, quizSecond, quizThree, quizFour];
//console.log(answer);i + ':' + this.aneswer[i]
var ans = Math.floor(Math.random() * quizAns.length);
      quizAns[ans].correctAns();
    
    
var correct = parseInt(prompt('this is a nmain answer'));
quizAns[ans].checkAnswer();
