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
    [Route("api/books/{bookId}/[controller]")]
    public class PagesController : Controller
    {

        private readonly IUserRepository _userRepository;
        private readonly IPageRepository _pageRepository;
        private readonly IBookRepository _bookRepository;

        public PagesController(IUserRepository userRepository, IPageRepository pageRepository, IBookRepository bookRepository)
        {
            _userRepository = userRepository;
            _pageRepository = pageRepository;
            _bookRepository = bookRepository;
        }

        private int GetAuthorizeUserId() 
        {

            var userClaim = this.User.FindFirst(ClaimTypes.NameIdentifier);

            var user = this._userRepository.GetUserByEmail(userClaim.Value);

            return user.Id;

        }

        [HttpGet]
        public IActionResult Get(int bookId)
        {

            var userId = this.GetAuthorizeUserId();

            var pages = this._pageRepository.GetPagesByBookId(bookId);

            var userBookPages = pages.Select(x => TinyMapper.Map<PageModel>(x)).ToList();

            return Ok(userBookPages);
        }

        [HttpGet("{pageOrder}")]
        public IActionResult GetPage(int pageOrder)
        {

            var userId = this.GetAuthorizeUserId();

            var page = this._pageRepository.GetPageByOrder(pageOrder);

            return Ok(TinyMapper.Map<PageModel>(page));
        }

        [HttpPost]
        public IActionResult Post([FromBody]CreatePageModel model)
        {

            var userId = this.GetAuthorizeUserId();

            var book = this._bookRepository.GetBookById(model.BookId);

            if (book == null) 
            {
                throw new ArgumentNullException("Book was not fount.");
            };

            var page = TinyMapper.Map<Page>(model);

            var pageId = this._pageRepository.AddPage(page);

            return Created(string.Format("/api/books/{0}/pages/{1}", book.Id, pageId), TinyMapper.Map<PageModel>(page));

        }

        [HttpPut("{pageOrder}")]
        public IActionResult Update([FromRoute]int pageOrder, [FromBody]UpdatePageModel model)
        {

            var userId = this.GetAuthorizeUserId();

            this._pageRepository.EditPageByOrder(pageOrder, model.Title, model.Text);

            return new NoContentResult();

        }

        [HttpDelete("{pageOrder}")]
        public IActionResult Delete([FromRoute]int pageOrder)
        {

            var userId = this.GetAuthorizeUserId();

            this._pageRepository.DeletePageByOrder(pageOrder);

            return new NoContentResult();

        }

    }
}