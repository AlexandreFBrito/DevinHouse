using DevInHouse.EFCoreApi.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DevInHouse.EFCoreApi.Core.Data.Mappings
{
    public class AutorMap : IEntityTypeConfiguration<Autor>
    {
        public void Configure(EntityTypeBuilder<Autor> builder)
        {
            builder.ToTable("Autores");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Nome).HasMaxLength(150).IsUnicode(false).IsRequired();
            builder.Property(p => p.Sobrenome).HasMaxLength(150).IsUnicode(false).IsRequired();
        }
    }
}