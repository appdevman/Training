using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoLotDAL.EF;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using AutoLotDAL.Models;

namespace AutoLotDAL.Repos
{
    public class CustomerRepo : BaseRepo<Customer>, IRepo<Customer>
    {
        public CustomerRepo()
        {
            Table = Context.Customers;
        }

        public int Delete(int id)
        {
            Context.Entry(new Customer() { CustId = id }).State = EntityState.Deleted;
            return SaveChanges();
        }
        public Task<int> DeleteAsync(int id)
        {
            Context.Entry(new Customer() { CustId = id }).State = EntityState.Deleted;
            return SaveChangesAsync();
        }


    }
}
