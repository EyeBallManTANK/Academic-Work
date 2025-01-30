/***************************************************************
* Name         : BillTipTax
* Author       : Tate Lawson
* Created      : 01/20/2025
* Course       : CIS 169 - C#
* Version      : 1.0
* OS           : Windows 11
* IDE          : Visual Studio 2020 Community
* Copyright    : This is my own original work based on
*                      specifications issued by our instructor
* Description  : This program gives a predetirmened meal a bill
*                      Input :  None
*                      Output: Console Writes
* Academic Honesty: I attest that this is my original work.
* I have not used unauthorized source code, either modified or
* unmodified. I have not given other fellow student(s) access
* to my program.        
***************************************************************/

//A simple function to make life easier and code cleaner
static decimal exceptionHandling(int type)
{

    string foodName = null;

    //Tells if it is dessert or meal
    if (type == 1)
    {
        foodName = "meal";
    }
    else
    {
        foodName = "dessert";
    }

    decimal food = 0;

    //A while loop to keep asking until proper number is put in
    while (true)
    {
        try
        {

            Console.WriteLine($"Please input {foodName} amount: ");
            food = Convert.ToDecimal(Console.ReadLine());
            break;
        }
        catch (FormatException)
        {
            Console.WriteLine("That was not correct, try again");
        }
    }
   return food;
}

const decimal taxRate = 0.07m;
const decimal tipRate = 0.20m;

//Just calls the function based on if it is a meal or dessert
decimal meal1 = exceptionHandling(1);
decimal meal2 = exceptionHandling(1);
decimal dessert1 = exceptionHandling(2);
decimal dessert2 = exceptionHandling(2);



    decimal subtotal = meal1 + meal2 + dessert1 + dessert2;
    decimal payedTax = subtotal * taxRate;
    decimal payedTip = subtotal * tipRate;

    decimal overallTotal = subtotal + payedTax + payedTip;
    decimal personTotal = (overallTotal / 2);

    Console.WriteLine("Subtotal: $" + subtotal);
    Console.WriteLine("Tax: $" + payedTax);
    Console.WriteLine("Tip: $" + payedTip);
    Console.WriteLine("Total: $" + overallTotal);
    Console.WriteLine("Per Person: $" + personTotal);
