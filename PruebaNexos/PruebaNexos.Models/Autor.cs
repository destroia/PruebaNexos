using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PruebaNexos.Models
{
    public class Autor
    {
        public Guid Id { get; set; }
        public Guid EditorialId { get; set; }
        public string Nombre { get; set; }
        public DateTime Fecha { get; set; }
        public string Ciudad { get; set; }
        public string Email { get; set; }
        

        [ForeignKey("AutorId")]
        public ICollection<Libro> Libros { get; set; }
    }
}
