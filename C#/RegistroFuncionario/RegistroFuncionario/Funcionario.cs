using System.Globalization;

namespace RegistroFuncionario
{
    internal class Funcionario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Salario  {get; private set; }

        public Funcionario(int id, string nome, double salario){
            this.Id = id;
            this.Nome = nome;
            this.Salario = salario;
           }
        public void IncrementarSalario(double porcentagem)
        {
            this.Salario += Salario * (porcentagem / 100.00);
        }

        public override string ToString()
        {
            return Id 
                 + ", "
                 + Nome
                 + ", "
                 +Salario.ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}
