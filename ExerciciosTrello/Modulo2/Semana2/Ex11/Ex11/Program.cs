
Console.Write("Quantos números deseja inserir no array? ");
int qtdNumeros = int.Parse(Console.ReadLine());

int[] numeros = new int[qtdNumeros];

Console.WriteLine("Informe os "+qtdNumeros.ToString()+" números ");

for (int i = 0; i < numeros.Length; i++)
{
	numeros[i] = int.Parse(Console.ReadLine());
}
Console.WriteLine("Ordem Original");
//ordem original
for (int i = 0; i < numeros.Length; i++)
{
	Console.Write(" "+numeros[i].ToString());
}

Array.Reverse(numeros);
Console.WriteLine("");
Console.WriteLine("Ordem reversa");
//ordem reversa
for (int i = 0; i < numeros.Length; i++)
{
	Console.Write(" " + numeros[i].ToString());
}