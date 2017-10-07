using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReverseCharOrderInString
{
    class Program
    {
        static void Main(string[] args)
        {
            //FullReverse("xof kciuq");
            //WordSequenceNotReversed("kciuq xof depmuj raf yawa");   
            //LoopingUsingImplicitType();
        }
        private static void FullReverse(string input)
        {
            
            StringBuilder sb = new StringBuilder();
            Stack<char> worker = new Stack<char>();

            foreach (char c in input)
            {
                worker.Push(c);
            }
            while (worker.Count > 0)
            {
                sb.Append(worker.Pop());
            }
            Console.WriteLine(sb.ToString());
        }

        private static void WordSequenceNotReversed(string InputString)
        {
            char[] delimiter = { ' ' };
            string[] words = InputString.Split(delimiter);
            StringBuilder sb = new StringBuilder();
            Stack<char> worker = new Stack<char>();

            for (int i = 0; i < words.Length; i++)
            {
                string wordInput = words[i];
                foreach(char c in wordInput)
                {
                    worker.Push(c);
                }

                while (worker.Count > 0)
                {
                    sb.Append(worker.Pop());
                }

                if (i != (words.Length-1))
                {
                    sb.Append(" ");
                }
            }
            Console.WriteLine(sb.ToString());
        }
        private static void LoopingUsingImplicitType()
        {
            int[] numbas = { 1, 2, 3, 4, 5 };
            var stickumIn = from i in numbas where i == 2 select i; // LINQ results to implicit var
            foreach (var i in stickumIn) // implicit var interator against the var collectino
            {
                Console.Write("{0} ", i); // now we can see each value.  NOTE: need to do this, even if one cell!  This is ienumerable var.
            }
        }

    }
}
