using System;

namespace ifelse {
////
class Program {

static void Main(string[] args) {



Console.WriteLine("start ");

checkedProg();

Console.WriteLine("end ");

}

//

static void checkedProg(){
bool isProg=false;
bool isLoveChoffy=false;

if(isProg && isLoveChoffy){

Console.WriteLine("u r Programer");
Console.WriteLine("and u like coppy");
}
else if(!isProg && isLoveChoffy){

Console.WriteLine("u r not Programer");
Console.WriteLine("but u like coppy");
}
else if(isProg && !isLoveChoffy){

Console.WriteLine("u r Programer");
Console.WriteLine("but u don't like coppy");
}

else{

Console.WriteLine("u r not Programer");
Console.WriteLine("and u don't like coppy");
}

}


//
/*
static int GetMax(int n1,int n2,int n3){
int result;

if(n1 >= n2 && n3 <= n1){
result=n1;
}

else if(n2 >= n1 && n3 <= n2){
result=n2;
}

else{
result=n3;
}

return result;
}
*/

//
/*
static int GetMax(int n1,int n2){
int result;

if(n1 > n2){
result=n1;
}else{
result=n2;
}

return result;
}
*/
}

}