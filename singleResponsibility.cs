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



class Post
{
    void CreatePost(Database db, string postMessage)
    {
        if (postMessage.StartsWith("#"))
        {
            db.AddAsTag(postMessage);
        }
        else
        {
            db.Add(postMessage);
        }

    }
}


// Solution

//Create the base class 'Post' to carry the parent function
class Post
{
    void CreatePost(Database db, string postMessage)
    {
        db.Add(postMessage);
    }
}

//Create a child class and reference it to the base class using ':'
class Tag : Post
{
    override void CreatePost(Database db, string postMessage)
    {
        db.AddAsTag(postMessage);
    }
}

//The override keyword is used is used to method to create a same name method 
//with same signature in a derived class