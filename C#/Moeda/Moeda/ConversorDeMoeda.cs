using System;

namespace Moeda
{
    class ConversorDeMoeda
    {
        public static double iof = 6.0;

        public static double Conversor(double dolar, double valor)
        {
            
            return ((iof / 100) * valor * dolar) + dolar * valor;
        }
    }
}