using System;

namespace sw {
////
class Program {

static void Main(string[] args) {

string[] colorName={"red", "tan","orange","blue"};

Console.WriteLine("start");






Console.WriteLine("while loop");
int j=0;
while (j<colorName.Length){
Console.WriteLine(colorName[j]);
j++;
}

Console.WriteLine("do while loop");
int i=0;
do{
Console.WriteLine(colorName[i]);
i++;
} while (i<colorName.Length);


Console.WriteLine("for loop");
for (int t=0;t<colorName.Length;t++){
Console.WriteLine(colorName[t]);
}


Console.WriteLine("end");

//

}

}
}