using System;

namespace mycalcu {

class Program {

static void Main(string[] args) {

Console.Write("enter a number :");
double n1=Convert.ToDouble(Console.ReadLine());
Console.Write("enter another number :");
double n2=Convert.ToDouble(Console.ReadLine());

Console.WriteLine(n2 + n1);
Console.WriteLine(n2 - n1);
Console.WriteLine(n2 * n1);
Console.WriteLine(n2 / n1);

Console.WriteLine("end");



Console.ReadLine();


}

}

}
