using System.ServiceModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MagicEightBallServiceLib
{
    public class MagicEightBallService : IEightBall
    {
        public MagicEightBallService()
        {
            Console.WriteLine("The 8-ball awaits your question...");
        }

        public string ObtainAnswerToQuestion(string userQuestion)
        {
            string[] answers = { "future uncertain", "Yes",
                                  "No", "Hazy", "Ask again later",
                                  "Definitely" };

            //return random response
            Random r = new Random();
            return answers[r.Next(answers.Length)];
        }
    }
}