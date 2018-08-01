using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoLotConsoleApp.EF;
using static System.Console;
using System.Data.Entity.Infrastructure;

namespace AutoLotConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // AddNewRecord test, hard coded vals in method
            int carId = AddNewRecord();
            WriteLine("Added carId:{0}", carId);
            RemoveRecord(carId);
            UpdateRecord(14);
            PrintAllInventory();
            ReadLine();
        }
        private static int AddNewRecord()
        {
            // add record to the inventory table of the AutoLot dbase
            using (var context = new AutoLotEntities())
            {
                try
                {
                    // hard code data for as new record, for testing
                    var car = new Car() { Make = "Yugo", Color = "Brown", CarNickName = "Brownie" };
                    context.Cars.Add(car);
                    context.SaveChanges();
                    // on successful save, EF populates the dbase generated identity field
                    return car.CarId;
                }
                catch(Exception ex)
                {
                    WriteLine(ex.InnerException.Message);
                    return 0;
                }
            }
        }

        private static void PrintAllInventory()
        {
            // select all items from the Inventory table of AutoLot,
            // and print out the data using our custom ToString()
            // of the Car entity class
            using (var context = new AutoLotEntities())
            {
                foreach (Car c in context.Cars)
                {
                    WriteLine(c.ToString());
                }
                foreach (Car c in context.Cars.SqlQuery(
                        "Select CarId,Make,Color,PetName as CarNickName from Inventory where Make=@p0", "BMW"))
                { WriteLine(c.ToString()); }
                foreach (Car c in context.Cars.Where(c => c.Make == "BMW"))
                {
                    WriteLine(c.ToString());
                }

            }
        }

        private static  void RemoveRecord(int carID)//extra round trip to dbase. Use EntityState for more efficiency.
        {
            // find a car to delete by primary key
            using (var context = new AutoLotEntities())
            {
                // see if we have it
                Car carToDelete = context.Cars.Find(carID);
                if (carToDelete != null)
                {
                    context.Cars.Remove(carToDelete);
                    context.SaveChanges();
                    Console.WriteLine("Removed carID:{0}", carID);
                }
            }
        }

        private static void RemoveRecordUsingEntityState(int carId)
        {
            using (var context = new AutoLotEntities())
            {
                Car carToDelete = new Car() { CarId = carId };// create a new car entity, set CarId property with incoming param value
                context.Entry(carToDelete).State = System.Data.Entity.EntityState.Deleted; // set the state for this car in the context to 'deleted'
                try
                {
                    context.SaveChanges();
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    WriteLine(ex);
                }
            }

        }

        private static void UpdateRecord(int carId)
        {
            // find a car to delete by primary key
            using (var context = new AutoLotEntities())
            {
                // grab the car, change it, save!
                Car carToUpdate = context.Cars.Find(carId);
                if(carToUpdate != null)
                {
                    WriteLine(context.Entry(carToUpdate).State);
                    carToUpdate.Color = "Blue";
                    WriteLine(context.Entry(carToUpdate).State);
                    context.SaveChanges();
                }
            }
        }
    }//class
    
}//namespace
