using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MathServiceClient.MathServiceReference;
using System.Threading;

namespace MathServiceClient
{
    class Program
    {
        static void Main(string[] args)
        {
            using (BasicMathClient proxy = new BasicMathClient())
            {
                proxy.Open();

                // add numbers in an async manner, using lambda expression
                IAsyncResult result = proxy.BeginAdd(2, 3,
                    ar =>
                    {
                        Console.WriteLine("2 +3 = {0}", proxy.EndAdd(ar));
                    },
                    null);

                while(!result.IsCompleted)
                {
                    Thread.Sleep(200);
                    Console.WriteLine("Client working...");
                }
            }
            Console.ReadLine();
        }
    }
}
