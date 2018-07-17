using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using MagicEightBallServiceClient.MagicEightBallServiceReference;

namespace MagicEightBallServiceClient
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Ask the Magic 8 ball");

            using (EightBallClient ball = new EightBallClient())
            {
                Console.Write("Your question: ");
                string question = Console.ReadLine();
                string answer =
                    ball.ObtainAnswerToQuestion(question);
                Console.WriteLine("8-ball says: {0}", answer);
            }
            Console.ReadLine();
        }
    }
}
