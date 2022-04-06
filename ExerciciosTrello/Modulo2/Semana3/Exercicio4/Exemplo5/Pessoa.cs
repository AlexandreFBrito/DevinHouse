namespace Exemplo5
{
    internal class Pessoa
    {
        public string Nome { get; set; }
        public int Idade { get; set; }

        public Pessoa(string nome, int idade)
        {
            Nome = nome;
            Idade = idade;
        }

        public string ExibirPessoa()
        {
            return $"Nome: {Nome}, Idade: {Idade}";
        }
    }
}
