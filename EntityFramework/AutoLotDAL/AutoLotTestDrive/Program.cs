using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoLotDAL.EF;
using AutoLotDAL.Repos;
using AutoLotDAL.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace AutoLotTestDrive
{
    class Program
    {
        static void Main(string[] args)
        {
            Database.SetInitializer(new DataInitializer());
            Console.WriteLine("***** Fun with ADO.NET EF Code First *****\n");
            

            // adding inventory
            var car1 = new Inventory() { Make = "Yugo", Color = "Brown", PetName = "Brownie" };
            var car2 = new Inventory() { Make = "SmartCar", Color = "Brown", PetName = "Shorty" };
            AddNewRecord(car1);
            AddNewRecord(car2);
            AddNewRecords(new List<Inventory> { car1, car2 });
            UpdateRecord(car1.CarId);

            ShowAllOrdersEagerlyFetched();

            PrintAllInventory();

            Console.WriteLine("***** Fun with ADO.NET EF Code First *****\n");
            PrintAllCustomersAndCreditRisks();
            var customerRepo = new CustomerRepo();
            var customer = customerRepo.GetOne(4);
            customerRepo.Context.Entry(customer).State = EntityState.Detached;
            var risk = MakeCustomerARisk(customer);
            PrintAllCustomersAndCreditRisks();

            Console.ReadLine();
        }

        private static void PrintAllCustomersAndCreditRisks()
        {
            Console.WriteLine("*********** Customers ***********");
            using (var repo = new CustomerRepo())
            {
                foreach (var cust in repo.GetAll())
                {
                    Console.WriteLine($"->{cust.FirstName} {cust.LastName} is a Customer.");
                }
            }
            Console.WriteLine("*********** Credit Risks ***********");
            using (var repo = new CreditRiskRepo())
            {
                foreach (var risk in repo.GetAll())
                {
                    Console.WriteLine($"->{risk.FirstName} {risk.LastName} is a Credit Risk!");
                }
            }
        }

        private static CreditRisk MakeCustomerARisk(Customer customer)
        {
            using (var context = new AutoLotEntities())
            {
                context.Customers.Attach(customer);
                context.Customers.Remove(customer);
                var creditRisk = new CreditRisk()
                {
                    FirstName = customer.FirstName,
                    LastName = customer.LastName
                };
                context.CreditRisks.Add(creditRisk);
                try
                {
                    context.SaveChanges();
                }
                catch (DbUpdateException ex)
                {
                    Console.WriteLine(ex);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
                return creditRisk;
            }
        }

        private static void ShowAllOrdersEagerlyFetched()
        {
            using (var context = new AutoLotEntities())
            {
                Console.WriteLine("*********** Pending Orders ***********");
                var orders = context.Orders
                .Include(x => x.Customer)
                .Include(y => y.Car)
                .ToList();
                foreach (var itm in orders)
                {
                    Console.WriteLine($"->{itm.Customer.FullName} is waiting on {itm.Car.PetName}");
                }
            }
        }

        private static void UpdateRecord(int carID)
        {
            using (var repo = new InventoryRepo())
            {
                //grab the car, change it, save
                var carToUpdate = repo.GetOne(carID);
                if(carToUpdate != null)
                {
                    Console.WriteLine("Before change: " + repo.Context.Entry(carToUpdate).State);
                    carToUpdate.Color = "Blue";
                    Console.WriteLine("After change: " + repo.Context.Entry(carToUpdate).State);
                    repo.Save(carToUpdate);
                    Console.WriteLine("After update: " + repo.Context.Entry(carToUpdate).State);
                }
            }
        }

        private static void ShowAllOrders()
        {
            using(var repo = new OrderRepo())
                {
                Console.WriteLine("********** Pending Orders *********");
                foreach (var itm in repo.GetAll())
                {
                    Console.WriteLine($"->{itm.Customer.FullName} is waiting on {itm.Car.PetName}");
                }
            }
        }

        private static void PrintAllInventory()
        {
            using (var repo = new InventoryRepo())
            {
                foreach (Inventory c in repo.GetAll())
                {
                    Console.WriteLine(c);
                }
            }
        }

        private static void AddNewRecord(Inventory car)
        {
            // Add record to the Inventory table of the AutoLot database.
            using (var repo = new InventoryRepo())
            {
                repo.Add(car);
            }
        }
        private static void AddNewRecords(IList<Inventory> cars)
        {
            // Add record to the Inventory table of the AutoLot database.
            using (var repo = new InventoryRepo())
            {
                repo.AddRange(cars);
            }
        }


    }//class
}//namespace