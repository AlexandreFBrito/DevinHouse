using System.Globalization;

namespace ContaBancaria
{
    class DadosBancarios
    {
        public int NumeroConta { get; private set; }
        public string Titular { get; set; }
        public double Saldo { get; private set; }

        public DadosBancarios(int numero, string titular)
        {
            NumeroConta = numero;
            Titular = titular;
        }
        public DadosBancarios(int numero, string titular, double depositoInicial): this(numero, titular)
        {
            DepositarValor(depositoInicial);

        }
        public double DepositarValor(double quantia)
        {
            return Saldo += quantia;
        }

        public double SacarValor(double saque)
        {
            Saldo -= saque;
            return Saldo -= 5.0;
        }

        public override string ToString()
        {
            return "Conta "+NumeroConta.ToString()+ ", Titular: "+ Titular+ ", "+ " Saldo: $ "+ Saldo.ToString("F2", CultureInfo.InvariantCulture);
        }

    }
}
