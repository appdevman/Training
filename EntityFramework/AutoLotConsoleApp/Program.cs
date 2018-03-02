using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoLotConsoleApp.EF;
using static System.Console;

namespace AutoLotConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // AddNewRecord test, hard coded vals in method
            //int carId = AddNewRecord();
           // WriteLine(carId);
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
                //foreach (Car c in context.Cars)
                //{
                //    WriteLine(c.ToString());
                //}
                //foreach (Car c in context.Cars.SqlQuery(
                //        "Select CarId,Make,Color,PetName as CarNickName from Inventory where Make=@p0", "BMW"))
                //{ WriteLine(c.ToString()); }
                //foreach (Car c in context.Cars.Where(c => c.Make == "BMW"))
                //{
                //    WriteLine(c.ToString());
                //}

            }
        }

        
    }//class
    
}//namespace
