using System;

namespace methods {

class Program {

static void Main(string[] args) {





Console.WriteLine("main method");


Console.WriteLine("main method");


Sayhi("bis");

Console.WriteLine(Cube(3));



Sayhi("anurag");

Console.WriteLine("end");



}

////////////Sayhi 0// sayhi -1

static void Sayhi(string name="user"){
Console.WriteLine("hello "+ name);
Console.WriteLine("have a nice day " + name);
Console.WriteLine("6^3 is : "+Cube(6));
}

static int Cube(int num=2){
return num*num*num;
}

}

}
