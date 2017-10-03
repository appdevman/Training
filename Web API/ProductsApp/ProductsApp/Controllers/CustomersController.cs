using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProductsApp.Models;

namespace ProductsApp.Controllers
{
    public class CustomersController : ApiController
    {
        Customer[] customers = new Customer[]
        {
            new Customer {Id = 1, FirstName = "Fritz", LastName = "Schultz", HairColor = "Green" },
            new Customer {Id = 2, FirstName = "Joe", LastName = "Dingy", HairColor = "Brown" },
            new Customer {Id = 3, FirstName = "Sri", LastName = "Karam", HairColor = "Black" }
        };

        public IEnumerable<Customer> GetAllProducts()
        {
            return customers;
        }

        public IHttpActionResult GetCustomer(int id)
        {
            var customer = customers.FirstOrDefault((c) => c.Id == id);
            if(customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }
    }
}
