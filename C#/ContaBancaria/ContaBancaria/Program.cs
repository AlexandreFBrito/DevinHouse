using System;
using System.Globalization;
namespace ContaBancaria
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DadosBancarios dados;
            Console.Write("Entre com o número da conta: ");
            int numero = int.Parse(Console.ReadLine());
            Console.Write("Entre com o titular da conta: ");
            string titular = Console.ReadLine();
            Console.Write("Haverá deposito inicial (s/n)? ");
            var resp = Console.ReadLine();
            
            if (resp == "s" || resp == "S") { 
                Console.Write("Entre com o valor de depósito inicial: ");
                double saldoInicial = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                 dados = new DadosBancarios(numero, titular, saldoInicial);
            }
            else
            {
                 dados = new DadosBancarios(numero, titular);

            }
            

            Console.WriteLine("");
            Console.WriteLine("Dados da conta: ");
            Console.WriteLine(dados);
            Console.WriteLine("");

            Console.Write("Entre com o valor para depósito: ");
            double ValorDeposito = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            dados.DepositarValor(ValorDeposito);

            Console.WriteLine("");
            Console.WriteLine("Dados da conta atualizados");
            Console.WriteLine(dados);
            Console.WriteLine("");

            Console.Write("Entre comum valor para saque ");
            double ValorSaque = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            dados.SacarValor(ValorSaque);

            Console.WriteLine("");
            Console.WriteLine("Dados da conta atualizados");
            Console.WriteLine(dados);
            Console.WriteLine("");

        }
    }
}