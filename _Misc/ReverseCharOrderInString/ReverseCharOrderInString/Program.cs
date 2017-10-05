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
            string input = "xof kciuq";
            StringBuilder sb = new StringBuilder();
            Stack<char> worker = new Stack<char>();
            
            foreach(char c in input)
            {
                worker.Push(c);                
            }
            while (worker.Count > 0)
            {
                sb.Append(worker.Pop());
            }
            Console.WriteLine(sb.ToString());
        }
    }
}
