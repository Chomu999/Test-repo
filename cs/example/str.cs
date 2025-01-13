using System;

namespace str {

class Program {

static void Main(string[] args) {

string fn="Biswajit";
string ln="Bhowmick";
string fullName= fn+" "+ln;

string adderess = "i m live in west bengal "+ fullName;

Console.WriteLine(adderess);
Console.WriteLine(adderess.ToUpper());
Console.WriteLine(adderess.ToLower());

Console.WriteLine(adderess[0]);
Console.WriteLine(adderess[2]);

Console.WriteLine( adderess.IndexOf("west"));


Console.WriteLine( adderess.Substring(4));
Console.WriteLine( adderess.Substring(4, 5));
Console.WriteLine( adderess.Substring(adderess.IndexOf("west"),
adderess.IndexOf("Biswajit") - adderess.IndexOf("west")
)
);

Console.WriteLine(adderess.Contains("Bhowmick") );

adderess+="\n \t adding a \" new line \"";
Console.WriteLine(adderess);
Console.WriteLine("end ");

}

}

}