// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 65, 48 };

var getTheNumbers = from number in numbers where number < 5 select number;

foreach (var n in getTheNumbers) Console.WriteLine(n);

