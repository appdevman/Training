using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console1
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Collections.Generic.Stack<int> stack =
            new System.Collections.Generic.Stack<int>();           

            PopulateStack(ref stack);
            PrintToConsole(ref stack);
            PullFromStack(ref stack);
            PrintToConsole(ref stack);
        }

        private static void PullFromStack(ref Stack<int> stack)
        {
            for (int x=2; x > 0; x--)
            {
                stack.Pop();
            }
        }

        private static void PopulateStack(ref Stack<int> Stack)
        {
            for (int x = 1; x <= 3; x++)
            {
                Stack.Push(x);
            }
        }

        private static void PrintToConsole(ref Stack<int> Stack)
        {
            int number = 0;
            using (Stack<int>.Enumerator enumerator = Stack.GetEnumerator())
            {
                while (enumerator.MoveNext())
                {
                    number = enumerator.Current;
                    Console.WriteLine(number);
                }
            }

        }
    }
}
