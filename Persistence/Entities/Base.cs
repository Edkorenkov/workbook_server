using System;
using System.ComponentModel.DataAnnotations;

namespace Workbook_server.Persistence.Entities
{

    public class Base 
    {

        [Key]
        public int Id { get; set; }    
        public bool IsActive { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }  


        public Base()
        {
            IsActive = true;

            DateCreated = DateModified = DateTime.Now;          
        }

    }

}