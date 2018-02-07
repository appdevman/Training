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
            //FullReverseUsingStack("xof kciuq");
            //WordSequenceNotReversedUsingStack("kciuq xof depmuj raf yawa");
            //LINQLoopingUsingImplicitType();
            //ReverseToArrayOfLetters("kciuq xof depmuj raf yawa");  //BEST WAY FOR THIS STRING TYPE
            //ReverseToArrayEntireString("yawa raf depmuj xof kciuq");//BEST WAY FOR THIS STRING TYPE
            //AnotherTest();
            test("ehT xoF");
        }
        #region LINQ
        private static void LINQLoopingUsingImplicitType()
        {
            int[] numbas = { 1, 2, 3, 4, 5 };
            var stickumIn = from i in numbas where i == 2 select i; // LINQ results to implicit var
            foreach (var i in stickumIn) // implicit var interator against the var collectino
            {
                Console.Write("{0} ", i); // now we can see each value.  NOTE: need to do this, even if one cell!  This is ienumerable var.
            }
        }
        #endregion
        #region String-Order Manipulation
        private static void FullReverseUsingStack(string input)
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
        private static void WordSequenceNotReversedUsingStack(string InputString)
        {
            char[] delimiter = { ' ' };
            string[] words = InputString.Split(delimiter);
            StringBuilder sb = new StringBuilder();
            Stack<char> worker = new Stack<char>();

            for (int i = 0; i < (words.Length); i++)
            {
                string wordInput = words[i];
                foreach (char c in wordInput)
                {
                    worker.Push(c);
                }

                while (worker.Count > 0)
                {
                    sb.Append(worker.Pop());
                }

                if (i != (words.Length - 1))
                {
                    sb.Append(" ");
                }
            }
            Console.WriteLine(sb.ToString());
        }        
        private static void ReverseToArrayOfLetters(String input)
        {
            char[] delimiter = { ' ' };
            string[] words = input.Split(delimiter);
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < words.Count(); i++)
            {
                // for this word, reverse the letters & append to StringBuilder
                sb.Append(words[i].Reverse().ToArray());
                if (i != (words.Count() - 1))
                {
                    sb.Append(" ");
                }
            }
            Console.WriteLine(sb.ToString());
        }
        private static void ReverseToArrayEntireString(string input)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(input.Reverse().ToArray());
            Console.WriteLine(sb.ToString());
        }

       private static void test(string input)
        {
            char[] delim = { ' ' };
            string[] words = input.Split(delim);
            StringBuilder sb = new StringBuilder();

            for(int i = 0; i < words.Count(); i++)
            {
                sb.Append(words[i].Reverse().ToArray());
                if(i != (words.Count() -1))
                {
                    sb.Append(" ");
                }
            }
            Console.WriteLine(sb.ToString());
        }
        #endregion
        #region Lambdas
        private static void LambdaExpressionSyntax()
        {
            // Make a list of integers.
            List<int> list = new List<int>();
            list.AddRange(new int[] { 20, 1, 4, 8, 9, 44 });
            // Now process each argument within a group of
            // code statements.
            List<int> evenNumbers = list.FindAll((i) =>
            {
                Console.WriteLine("value of i is currently: {0}", i);
                bool isEven = ((i % 2) == 0);
                return isEven;
            });
            Console.WriteLine("Here are your even numbers:");
            foreach (int evenNumber in evenNumbers)
            {
                Console.Write("{0}\t", evenNumber);
            }
        }
        private static void OneParam()
        {
            List<string> words = new List<string>();
            words.AddRange(new string[] { "Hey", "ManHey", "Whats", "Happening" });
            string criteria = Console.ReadLine();
            Console.WriteLine($"Search criteria entered: {criteria}");
            List<string> found = words.FindAll((s) =>
            {
                bool ifFound = s.Contains(criteria);
                return ifFound;
            });
            foreach(string word in found)
            {
                Console.WriteLine($"Found the following values based on provided criteria: {word}\t");

            }
        }

        #endregion
    }
}
