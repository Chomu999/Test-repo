using System;

namespace num {
////
class Program {

static void Main(string[] args) {

int a,b;
a= 2;
b= 8;

a++;
b--;

Console.WriteLine(a +" Math between "+ b +"\n");
//right to left
Console.WriteLine(a + b);
Console.WriteLine((a - b) + (b + a));
Console.WriteLine((a * b) * a);
Console.WriteLine((a / b) + a);



Console.WriteLine("Math mothed's \n");
Console.WriteLine("Math Pow");
Console.WriteLine(Math.Pow(3, 2));

Console.WriteLine("Math min and max ");
Console.WriteLine(Math.Min(50, 100));
Console.WriteLine(Math.Max(50, 100));

Console.WriteLine("Math Round");
Console.WriteLine(Math.Round(4.5));
Console.WriteLine(Math.Round(4.49));
Console.WriteLine(Math.Round(4.48));
/*
Console.WriteLine("Math Floor");
Console.WriteLine(Math.floor(4.1));
Console.WriteLine(Math.floor(4.9));


Console.WriteLine("Math Ceil");
Console.WriteLine(Math.ceil(4.01));
Console.WriteLine(Math.ceil(4.49));
Console.WriteLine(Math.ceil(4.5));
*/


Console.WriteLine("end ");

}

}

}