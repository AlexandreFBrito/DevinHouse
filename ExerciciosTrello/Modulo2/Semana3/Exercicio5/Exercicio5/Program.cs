using System;
namespace Exercicio5
{
    public class Program
    {
        public static void Main()
        {
            Calculadora calc = new Calculadora();

            Console.Write("Informe o primeiro valor: ");
            calc.Valor1 = double.Parse(Console.ReadLine());
            Console.Write("Informe o segundo valor: ");
            calc.Valor2 = double.Parse(Console.ReadLine());
            Console.Write("Informe a operação que deseja efetuar '+'; '-', '*', '/' : ");
            calc.Operador =Console.ReadLine();
            Console.WriteLine("");
            Console.Write("O resultado foi: "+calc.ResultadoFinal().ToString("F2"));
        }
    }
}