using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Workbook_server.Persistence.Entities
{

    public class User : Base
    {

        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Token> Tokens { get; set; }

        public User()
        {
            Tokens = new Collection<Token>();
        }

    }

}