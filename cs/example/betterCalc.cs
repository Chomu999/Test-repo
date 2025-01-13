using System;

namespace betterCalc {
////
class Program {

static void Main(string[] args) {



Console.Write("enter f number :");
double n1=Convert.ToDouble(Console.ReadLine());

Console.Write("enter operation number :");
double op=Convert.ToChar(Console.ReadLine());

Console.Write("enter s number :");
double n2=Convert.ToDouble(Console.ReadLine());


if(op == '+'){
Console.WriteLine(n1 + n2);
}
else if(op == '-'){
Console.WriteLine(n1 - n2);
}
else if(op == '*'){
Console.WriteLine(n1 * n2);
}
else if(op == '/'){
Console.WriteLine(n1 / n2);
}
else{
Console.WriteLine("error");
}



}

//

}

}