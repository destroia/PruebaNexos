using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaNexos.Models
{
    public class Libro
    {
        public Guid Id { get; set; }
        public Guid EditorialId { get; set; }
        public Guid AutorId { get; set; }
        public string Titulo { get; set; }
        public int Year { get; set; }
        public string Genero  { get; set; }
        public int NumPaginas { get; set; }
        
    }
}
