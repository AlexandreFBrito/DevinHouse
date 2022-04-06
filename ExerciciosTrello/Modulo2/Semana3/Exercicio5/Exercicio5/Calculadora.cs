
namespace Exercicio5
{
    internal class Calculadora
    {
        public double Valor1 { get; set; }
        public double Valor2 { get; set; }
        public string Operador { get; set; }
        public double Resultado { get; set; }

        public Calculadora()
        {
            
        }

        public double ResultadoFinal()
        {
            if (Operador == "+")
            {
                Resultado =  Valor1 + Valor2;
            }
            else if (Operador == "-")
            {
                Resultado = Valor1 - Valor2;
            }
            else if (Operador == "*")
            {
                Resultado = Valor1 * Valor2;
            }
            else if (Operador == "/")
            {
                Resultado = Valor1 / Valor2;
            }else
            {
                Console.WriteLine("Operador inválido");
            }

            return Resultado;
        }
    }
}
