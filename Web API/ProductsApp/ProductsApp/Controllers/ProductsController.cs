using ProductsApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace ProductsApp.Controllers
{
    public class ProductsController : ApiController
    {
        Product[] products = new Product[]
        {
            new Product {Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
             new Product {Id = 2, Name = "Yo-yo", Category = "Toys", Price = 2 },
              new Product {Id = 3, Name = "Hammer", Category = "Hardware", Price = 3 }
        };

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        private readonly HttpClient _httpClient = new HttpClient();
        [ResponseType(typeof(Product))]
        public async Task<IHttpActionResult> GetDotNetOccurences(bool ok)
        {
            // EX invocation (dynamic port): http://localhost:4879/api/Products?ok=true
            int occurences = 0;
            if (ok)
            {
                var html = await _httpClient.GetStringAsync("http://dotnetfoundation.org");
                occurences = Regex.Matches(html, ".NET").Count;
                
            }
            //responsetype attribute test
            Product test = new Product();
            test.Id = occurences;
            test.Name = "test";
            return Ok(test);            
        }

        //[Route("api/products/{id:int}")]
        //[HttpDelete]
        public IHttpActionResult DeleteProduct(int id)
        {
            //here we would connect to dbase and perform delete.
            //for brevity, i just coded some skeletal code.
            var product = products.FirstOrDefault((p) => p.Id == id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok();
        }

        #region temp util methods with no purpose really
        #endregion

    }
}
