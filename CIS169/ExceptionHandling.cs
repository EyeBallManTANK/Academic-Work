/***************************************************************
* Name       : exeptionHandling
* Author      : Tate Lawson
* Created    :  01/29/2025
* Course     : CIS 169 - C#  [#####]
* Version     : 1.0
* OS            : Windows 11
* IDE           : Visual Studio 2022
* Copyright   : This is my own original work based on
*               specifications issued by our instructor
* Description : This program [overall description here]
*               Input:  Number of people and number of cupcakes
*               Output: Output number of cupcakes for professor and everyone else
* Academic Honesty: I attest that this is my original work.
* I have not used unauthorized source code, either modified or
* unmodified. I have not given other fellow student(s) access
* to my program.        
***************************************************************/
//Initialize variables
int people = 0;
int cupcakes = 0;
int cupcakePerPerson = 0;

//Try statements for user input
try
{
    Console.WriteLine("Input how many people are coming to the party: ");
    people = Convert.ToInt32(Console.ReadLine());

}catch (FormatException error)
{
    Console.WriteLine("Error reading number of People: ");
    Console.Write(error.Message);
}

try
{
    Console.WriteLine("Input how many cupcakes were ordered: ");
    cupcakes = Convert.ToInt32(Console.ReadLine());

}catch (FormatException error)
{
    Console.WriteLine("Error reading number of cupcakes: ");
    Console.Write(error.Message);
}

//Makes cupcakes per person
cupcakePerPerson = cupcakes / people;

//Tells how many if 0 then says not enough
Console.WriteLine("This many cupcakes per person");
if (cupcakePerPerson > 0)
{
    Console.WriteLine(cupcakePerPerson);
}
else
{
    Console.WriteLine("Not enough Cupcakes for everyoe to have atleast one");
}

//This is how many cupcakes the profesor gets
int cupcakesForProfesor = cupcakes % people;
Console.WriteLine($"Cupcakes for Profesor: {cupcakesForProfesor}");