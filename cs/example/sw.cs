using System;

namespace sw {
////
class Program {

static void Main(string[] args) {


Console.WriteLine("today day is "+ GetDay(5));
Console.WriteLine("end");

}

static string GetDay(int dayNum=0){
string dayName;

switch (dayNum){
case 0:
dayName="sun";
break;

case 1:
dayName="mon";
break;

case 2:
dayName="tue";
break;

case 3:
dayName="wed";
break;

case 4:
dayName="thu";
break;

case 5:
dayName="fri";
break;

case 6:
dayName="sat";
break;

default:
dayName="error";
break;
}

return dayName;
}

//

}

}