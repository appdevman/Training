using System;
using System.IO;
using System.Runtime.Remoting.Messaging;
using System.Collections.Specialized;

// 1.  start from command line example:
// ASyncResultsWithCompletedNotification.exe /S "C:\_temp\*.txt"
// folder and at least one txt file should exist
// 2.  to debug, uncomment the manual args in MAIN, and change the method siggy to:
// "Main(string[] argss)"

public class FindFiles
{
    delegate string[] GetFilesHandler(
        string searchPattern, bool recurseSubdirectories);

    public static void Main(string[] argss)
    {
        string[] args;
        args = new string[2];
        args[0] = @"c:\_temp\*.txt";
        args[1] = "/S";
        bool recurseSubdirectories = true;
        IAsyncResult[] result = new IAsyncResult[args.Length];
        int count = 0;

        foreach(string arg in args)
        {
            if (arg.Trim().ToUpper() == "/S")
            {
                recurseSubdirectories = true;
                break;
            }
        }
        GetFilesHandler asyncGetFilesHandler = GetFiles;
            
        Console.WriteLine("Searching: {0}", string.Join(", ", args));
        if (recurseSubdirectories)
        {
            Console.WriteLine("\trecursive...");
        }
        Console.WriteLine("Push ENTER to cancel/exit...");

        foreach (string arg in args)
        {
            if (arg.Trim().ToUpper() != "/S")
            {
                result[count] = asyncGetFilesHandler.BeginInvoke(
                    arg, recurseSubdirectories,
                    SearchCompleted, arg);
            }
        }
        count++;
        Console.ReadLine();    /// GUESS THAT THIS GOES HERE, BOOK IS WRONG??
    }
       
    public static string[] GetFiles (string searchPattern, bool recurseSubDirectories)
    {
        string[] results = null;
        StringCollection files = new StringCollection();
        string directory;
        directory = Path.GetDirectoryName(searchPattern);
        if((directory == null || (directory.Trim().Length == 0)))
        {
            directory = Directory.GetCurrentDirectory();
        }

        files.AddRange(GetFiles(searchPattern));

        if (recurseSubDirectories)
        {
            foreach (string subDirectory in Directory.GetDirectories(directory))
            {
                files.AddRange(GetFiles(
                  Path.Combine(
                      subDirectory,
                      Path.GetFileName(searchPattern)),
                  true));            
             }
        }

        results = new string[files.Count];
        files.CopyTo(results, 0);

        return results;
    }

    public static string[] GetFiles(string searchPattern)
    {
        string[] filenames;
        string directory;

        // set directory, default to the current one if there is none specified in the searchpattern
        directory = Path.GetDirectoryName(searchPattern);
        if ((directory == null || (directory.Trim().Length ==0 )))
        {
            directory = Directory.GetCurrentDirectory();
        }

        filenames = Directory.GetFiles(
            Path.GetFullPath(directory),
            Path.GetFileName(searchPattern));

        return filenames;
    }

    private static void SearchCompleted(IAsyncResult result)
    {
        string searchPattern = (string)result.AsyncState;
        Console.WriteLine("{0}:", searchPattern);
        AsyncResult asyncresult = (AsyncResult)result;
        GetFilesHandler handler = (GetFilesHandler)asyncresult.AsyncDelegate;
        string[] files = handler.EndInvoke(result);
        foreach (string file in files)
        {
            Console.WriteLine("\t" + Path.GetFileName(file));
        }
    }
} //class