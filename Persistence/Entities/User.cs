using System;

namespace Workbook_server.Persistence.Entities
{

    public class User : Base
    {

        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }

}