namespace RegistroFuncionario
{
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Quantos funcionários serão registrados? ");                   
            int n = int.Parse(Console.ReadLine());

            List<Funcionario> list = new List<Funcionario>();

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Funcinário #"+ i);
                Console.Write("Id: ");
                int id = int.Parse(Console.ReadLine());
                Console.Write("Nome: ");
                string nome = Console.ReadLine();
                Console.Write("Salário: ");
                double salario = double.Parse(Console.ReadLine());
                list.Add(new Funcionario(id, nome, salario));
                Console.WriteLine("");

            }

            Console.Write("Qual o id do funcionário que terá o aumento salarial? ");
            int idFunc = int.Parse(Console.ReadLine());

            Funcionario func = list.Find(x => x.Id == idFunc);
            if (func != null)
            {
                Console.Write("Entre com a porcentagem de aumento: ");
                double porcentagem = double.Parse(Console.ReadLine());
                func.IncrementarSalario(porcentagem);
            }
            else
            {
                Console.WriteLine("Id do funcionário não existe");
            }

            Console.WriteLine("");
            Console.WriteLine("Lista de funcionários atualizada");

            foreach (var item in list)
            {
                Console.WriteLine(item);
            }

        }
    }

}