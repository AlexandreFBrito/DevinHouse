namespace Calculadora.Entities
{
    class Calculos
    {
        public float Memoria1 { get; set; }
        public float Memoria2 { get; set; }
        public string Operacao { get; set; }

        public Calculos()
        {

        }

        public string Somar()
        {
            float result = 0;

            result = Memoria1 + Memoria2;

            return result.ToString();
        }
        public string Subtrair()
        {
            float result = 0;

            result = Memoria1 - Memoria2;

            return result.ToString();
        }
        public string Multipiclar()
        {
            float result = 0;

            result = Memoria1 * Memoria2;

            return result.ToString();
        }
        public string Dividir()
        {
            float result = 0;
            result = Memoria1 / Memoria2;
            return result.ToString();
        }

        public string Resultado()
        {
            float result = 0;
            if (Operacao == "+")
            {
                result = float.Parse(Somar());
            }
            else if (Operacao == "-")
            {
                result = float.Parse(Subtrair());
            }
            else if (Operacao == "x")
            {
                result = float.Parse(Multipiclar());
            }
            else if (Operacao == "÷")
            {
                result = float.Parse(Dividir());
            }
            return result.ToString();
        }

    }
}
