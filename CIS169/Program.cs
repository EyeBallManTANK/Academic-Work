using System;

namespace Module4
{
    public class Program
    {
        public static void Main()
        {
            Console.Write("What day is it? ");
            string day = Console.ReadLine().Trim();

            Console.Write("What time meal is it? (lunch/dinner) ");
            string mealTime = Console.ReadLine().Trim();

            string mealString = DecideMeal(day, mealTime);
            Console.WriteLine($"{day} is {mealString} for {mealTime}.");
        }

        public static string DecideMeal(string day, string mealTime)
        {
            day = day.ToLower();
            mealTime = mealTime.ToLower();

            if (day == "monday")
            {
                if (mealTime == "lunch") return "VeggieBurger and Fries";
                else if (mealTime == "dinner") return "Lasagna";
            }
            else if (day == "tuesday")
            {
                if (mealTime == "lunch") return "Chili and cornbread";
                else if (mealTime == "dinner") return "Pizza";
            }
            else if (day == "wednesday")
            {
                if (mealTime == "lunch") return "Pad Thai";
                else if (mealTime == "dinner") return "Soup and Salad";
            }
            else if (day == "thursday")
            {
                if (mealTime == "lunch") return "Baked Potato";
                else if (mealTime == "dinner") return "Spaghetti";
            }

            return "Ice Cream!";
        }
    }
}
