using Microsoft.EntityFrameworkCore;
using PruebaNexos.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaNexos.Data
{
    public class NexosDBContext : DbContext
    {
        public NexosDBContext(DbContextOptions<NexosDBContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
            "Data Source=.;Initial Catalog=DBNexos;Integrated Security=true"

             );
            base.OnConfiguring(optionsBuilder);
            //Primer Migracion   Add-Migration InitialCreate
            //Despues de la primera migracion se utiliza  Update-Database

          
    }

        public DbSet<Libro> Libros { get; set; }
        public DbSet<Autor> Autores { get; set; }
        public DbSet<Editorial> Editoriales { get; set; }
    }
}
