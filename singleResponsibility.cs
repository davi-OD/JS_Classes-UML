// class User
// {
//     void CreatePost(Database db, string postMessage)
//     {
//         try
//         {
//             db.Add(postMessage);
//         }
//         catch (Exception ex)
//         {
//             db.LogError("An error occured: ", ex.ToString());
//             File.WriteAllText("\LocalErrors.txt", ex.ToString());
//         }
//     }
// }

class User
{
    private ErrorLogger errorFound = new ErrorLogger();

    void CreatePost(Database db, string postMessage)
    {
        try
        {
            db.Add(postMessage);
        }
        catch (Exception ex)
        {
            errorFound.log(ex.ToString())
        }
    }
}

class ErrorLogger
{
    void log(string error)
    {
      db.LogError("An error occured: ", error);
      File.WriteAllText("\LocalErrors.txt", error);
    }
}