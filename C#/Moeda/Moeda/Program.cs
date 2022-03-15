using System;
using System.Globalization;
namespace Moeda
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.Write("Qual a cotação do dólar? ");
            double dolar = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.Write("Quantos dólares você vai comprar? ");
            double valor = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            double valorReais = ConversorDeMoeda.Conversor(dolar, valor);

            Console.Write("Valor a ser pago em reais = " + valorReais.ToString("F2", CultureInfo.InvariantCulture));

        } 
    } 
}