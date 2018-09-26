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

            PrintAllInventory();

            Console.ReadLine();
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