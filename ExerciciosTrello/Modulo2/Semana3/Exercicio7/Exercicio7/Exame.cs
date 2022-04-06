namespace Exercicio7
{
    internal class Exame
    {
        public List<Aluno> Alunos { get; set; } = new List<Aluno>();
        public Exame()
        {

        }
        public void AddItem(Aluno alunos)
        {
            Alunos.Add(alunos);
        }
        public void RemoveItem(Aluno alunos)
        {
            Alunos.Remove(alunos);
        }

        public string MaiorNota()
        {
            double maiorValor = 0;
            string nome = "";
            foreach (Aluno alunos in Alunos)
            {
                if (alunos.Nota > maiorValor)
                {
                    maiorValor = alunos.Nota;
                    nome = alunos.Nome;
                }
            }
            return $"Aluno: {nome}, obteve a maior nota: {maiorValor}";
        }
        public string MenorNota()
        {
            double menorValor = 10;
            string nome = "";
            foreach (Aluno alunos in Alunos)
            {
                if (alunos.Nota < menorValor)
                {
                    menorValor = alunos.Nota;
                    nome = alunos.Nome;
                }
            }
            return $"Aluno: {nome}, obteve a menor nota: {menorValor}";
        }
        public string Media()
        {
            double media = 0;
            foreach (Aluno alunos in Alunos)
            {
                media += alunos.Nota;
            }
            media = media / Alunos.Count;
            return $"Media da turma foi: {media.ToString("F2")}";
        }
        public string Reprovados()
        {
            double QTDE = 0;
            foreach (Aluno alunos in Alunos)
            {
                if (alunos.Nota < 7)
                {
                    QTDE++;
                }
            }
            return $"Total de alunos repovados: {QTDE.ToString()}";
        }
    }
}
