using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PruebaNexos.Models
{
    public class Editorial
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string  Email { get; set; }
        public int NumLibros { get; set; }
        public int MaxLibros { get; set; }

        [ForeignKey("EditorialId")]
        public ICollection<Libro> Libros { get; set; }

        [ForeignKey("EditorialId")]
        public ICollection<Autor> Autores { get; set; }
    }
}
