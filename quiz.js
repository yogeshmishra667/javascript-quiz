   function quizQuestions(question, aneswer, crtAnswer){
                this.question = question ;
                this.aneswer = aneswer ;
                this.crtAnswer = crtAnswer ;
   }
 
 
      quizQuestions.prototype.correctAns = function(){
           console.log(this.question);
          for (var i = 0; i < this.aneswer.lenght; i++) {
              console.log(i +  ': ' + this.aneswer[i]);
              
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

   var quizOne = new quizQuestions('what is your name', ['yogi', 'japesh', 'dev'], 1);
   var quizSecond = new quizQuestions('what is your fav programming language', ['java', 'php', 'c++'], 2);
   var quizThree = new quizQuestions('what is your  pet name', ['dog', 'rabbit', 'mouse'], 2);
var quizFour = new quizQuestions('what is your  puppy name', ['blacky', 'rocki', 'luci'], 1);


       var quizAns = [quizOne, quizSecond, quizThree, quizFour];
//console.log(answer);i + ':' + this.aneswer[i]
var ans = Math.floor(Math.random() * quizAns.length);
      quizAns[ans].correctAns();
    
    
var correct = parseInt(prompt('this is the main answer'));
quizAns[ans].checkAnswer();
