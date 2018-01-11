using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nelibur.ObjectMapper;
using Workbook_server.Models;
using Workbook_server.Persistence.Entities;
using Workbook_server.Persistence.Repositories;

namespace Workbook_server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class BooksController : Controller
    {

        private readonly IUserRepository _userRepository;
        private readonly IBookRepository _bookRepository;

        public BooksController(IUserRepository userRepository, IBookRepository bookRepository)
        {
            _userRepository = userRepository;
            _bookRepository = bookRepository;
        }

        private int GetAuthorizeUserId() 
        {

            var userClaim = this.User.FindFirst(ClaimTypes.NameIdentifier);

            var user = this._userRepository.GetUserByEmail(userClaim.Value);

            return user.Id;

        }

        [HttpGet]
        public IActionResult Get()
        {

            var userId = this.GetAuthorizeUserId();

            var books = this._bookRepository.GetBooksByUserId(userId);

            var userBooks = books.Select(x => TinyMapper.Map<BookModel>(x)).ToList();

            return Ok(userBooks);
        }

        [HttpPost]
        public IActionResult Post([FromBody]CreateBookModel model) 
        {

            var userId = this.GetAuthorizeUserId();

            var book = TinyMapper.Map<Book>(model);

            var bookId = this._bookRepository.AddBook(userId, book);

            return Created(string.Format("/api/books/{0}", book.Id), TinyMapper.Map<BookModel>(book));

        }

        [HttpDelete("{bookId}")]
        public IActionResult Delete(int bookId) 
        {

            var userId = this.GetAuthorizeUserId();

            var removedBookId = this._bookRepository.RemoveBook(userId, bookId);

            return new NoContentResult();

        }

    }
}