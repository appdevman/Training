using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoLotWebService_Client
{
    class Program
    {
        static void Main(string[] args)
        {
            AutoLotService.AutoLotServiceClient ac = new AutoLotService.AutoLotServiceClient();
            var cars  = ac.GetInventory();
            foreach (var car in cars)
            {
                Console.WriteLine(car.ID.ToString() + ", " +  car.Make + ", " + car.PetName);
            }
            Console.ReadLine();
        }
    }
}
