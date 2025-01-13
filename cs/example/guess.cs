using System;

namespace guess {
////
class Program {

static void Main(string[] args) {

Console.WriteLine("The Guessing Game");
Console.WriteLine("try to win hehe Loser ");

string secretWord="game";
string guess="";
int guessCount=5;
string msg="you lose nothin spicel ik loser always lose!";


do{


if(guessCount <= 0) return;

Console.Write("enter a guess u have "+guessCount + " Chancies : ");
guess=Console.ReadLine();

if(guess != "") guessCount--;
else guessCount-=2;

if(guess != secretWord && guessCount < 1){
Console.WriteLine(msg);
}
else if(guess == secretWord){
msg="you won!";
Console.WriteLine(msg);
}



} while(guess != secretWord);




}

}
}