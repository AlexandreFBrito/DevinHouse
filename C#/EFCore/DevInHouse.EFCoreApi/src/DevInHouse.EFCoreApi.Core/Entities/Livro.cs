namespace DevInHouse.EFCoreApi.Core.Entities
{
    public class Livro : Entity
    {
        public string Titulo { get; private set; }
        public DateTime DataPublicacao { get; private set; }
        public Decimal Preco { get; private set; }
        public int AutorId { get; set; }
        public Autor Autor { get; private set; }
        public int CategoriaId { get; set; }
        public Categoria Categoria { get; set; }
    }

}