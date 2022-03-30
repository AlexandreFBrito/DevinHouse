namespace Ex12_jogo_da_velha
{
    class JogoDaVelha
    {
        //variavel que verifica se o jogo finalizou
        private bool JogoFinalizado;

        //array com as posições do jogo
        private char[] jogo;

        //vez do jogador X ou O
        private char vez;

        //Verifica a quantidade de jogadas, só começa a verificar a partir da 5 jogada
        private int quantidadeJogada;
        //Nome do Primeiro Jogador
        private string Jogador1;
        //Nome do segundo jogador
        private string Jogador2;
        //Jogador que está na vez
        private string JogadorVez;

        public JogoDaVelha(){
            //Inicializo as variáves
            JogoFinalizado = false;
            jogo = new []{ '1', '2', '3', '4', '5', '6', '7', '8', '9'};
            vez = 'X';
            quantidadeJogada = 0;
            Jogador1 = "";
            Jogador2 = "";
            JogadorVez = "";
        }

        //Método para iniciar o jogo
        public void Iniciar()
        {
            //Chamo o método para os nomes dos jogadores
            InformarJogadores();

            //enquanto o jogo não foi finalizado fica em loop até ganhar ou empatar
            while (!JogoFinalizado)
            {                
                //Desenho o jogo na tela
                DesenharTabela();
                //Leio a escolha do jogador
                LerEscolhaDoJogador();
                //Desenho novamente a tabela na tela com a nova jogada
                DesenharTabela();
                //Verifica se o jogo já terminou
                VerificarFimDoJogo();
                //se não terminou muda de jogador
                MudarJogador();
            }
        }

        private void InformarJogadores()
        {
            Console.WriteLine($"Olá Bem Vindos ao famoso jogo da velha!");
            Console.WriteLine("");
            Console.Write("Informe o nome do jogador 1: ");
            Jogador1 = Console.ReadLine();
            Console.Write("Informe o nome do jogador 2: ");
            Jogador2 = Console.ReadLine();
            
        }

        private void MudarJogador()
        {
            vez = vez == 'X' ? 'O' : 'X';
        }

        private void VerificarFimDoJogo()
        {
            if (quantidadeJogada < 5)
                return;

            if (VitoriaDiagonal() || VitoriaNaHorizontal() || VitoriaVertical())
            {
                JogoFinalizado = true;
                Console.WriteLine($"Fim de Jogo!! Vitória de {JogadorVez} - {vez}");
                return;
            }

            if (quantidadeJogada is 9)
            {
                JogoFinalizado = true;
                Console.WriteLine("Fim de Jogo!! Ninguém venceu!!!");
            }
        }

        private bool VitoriaNaHorizontal()
        {
            bool linha1 = jogo[0] == jogo[1] && jogo[0] == jogo[2];
            bool linha2 = jogo[3] == jogo[4] && jogo[3] == jogo[5];
            bool linha3 = jogo[6] == jogo[7] && jogo[6] == jogo[8];

            return linha1 || linha2 || linha3;  
        }
        private bool VitoriaVertical()
        {
            bool coluna1 = jogo[0] == jogo[3] && jogo[0] == jogo[6];
            bool coluna2 = jogo[1] == jogo[4] && jogo[1] == jogo[7];
            bool coluna3 = jogo[2] == jogo[5] && jogo[2] == jogo[8];

            return coluna1 || coluna2 || coluna3;
        }
        private bool VitoriaDiagonal()
        {
            bool diagonal1 = jogo[0] == jogo[4] && jogo[0] == jogo[8];
            bool diagonal2 = jogo[2] == jogo[4] && jogo[2] == jogo[6];

            return diagonal1 || diagonal2;
        }
        private void LerEscolhaDoJogador()
        {
            if (vez == 'X')
            {
                JogadorVez = Jogador1;
            }
            else
            {
                JogadorVez = Jogador2;
            }

            Console.WriteLine($"Agora é a vez de {JogadorVez}, entre uma posição de 1 a 9 disponivél");
            //verifica se o usuário digitou um número ou se a posição já foi escolhida
            bool verificarNumero = int.TryParse(Console.ReadLine(), out int posicaoEscolhida);
            while (!verificarNumero || ValidarEscolhaDoJogador(posicaoEscolhida))
            {
                Console.WriteLine("Número digitado é inválido, digite um número entre 1 e 9 que esteja disponível na tablea");
                verificarNumero = int.TryParse(Console.ReadLine(), out posicaoEscolhida);
            }
            //----//

            PreencherEscolha(posicaoEscolhida);

        }

        private void PreencherEscolha(int posicao)
        {
            //pega o indice que o jogado digitou
            int indice = posicao - 1;
            //Passa a vez, O ou X
            jogo[indice] = vez;
            quantidadeJogada++;
        }

        private bool ValidarEscolhaDoJogador(int posicao)
        {
            //pega o indice que o jogado digitou
            int indice = posicao -1;
            //verifica se já tem O ou X na posição
            return jogo[indice] == 'O' || jogo[indice] == 'X';
        }
        private void DesenharTabela()
        {
            //Limpar a tela ´para desenhar tabela
            Console.Clear();
            //renderiza tabela
            Console.WriteLine(ObterTabela());
        }

        private string ObterTabela()
        {
            return "     |     |      \n"
            + $"  {jogo[0]}  |  {jogo[1]}  |  {jogo[2]}\n"
            + "_____|_____|_____ \n"
            + "     |     |      \n"
            + $"  {jogo[3]}  |  {jogo[4]}  |  {jogo[5]}\n"
            + "_____|_____|_____ \n"
            + "     |     |      \n"
            + $"  {jogo[6]}  |  {jogo[7]}  |  {jogo[8]}\n"
            + "     |     |      \n\n";
        }
    }
}
