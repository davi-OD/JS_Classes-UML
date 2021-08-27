
class Post
{
    void CreatePost(Database db, string postMessage)
    {
        db.Add(postMessage);
    }
}

class TagPost : Post
{
    override void CreatePost(Database db, string postMessage)
    {
        db.AddAsTag(postMessage);
    }
}

class MentionPost : Post
{
    void CreateMentionPost(Database db, string postMessage)
    {
        string user = postMessage.parseUser();

        db.NotifyUser(user);
        db.OverrideExistingMention(user, postMessage);
        base.CreatePost(db, postMessage);
    }
}

class PostHandler
{
    private database = new Database();

    void HandleNewPosts() {
        List<string> newPosts = database.getUnhandledPostsMessages();

        foreach (string postMessage in newPosts)
        {
            Post post;

            if (postMessage.StartsWith("#"))
            {
                post = new TagPost();
            }
            else if (postMessage.StartsWith("@"))
            {
                post = new MentionPost();
            }
            else {
                post = new Post();
            }

            post.CreatePost(database, postMessage);
        }
    }
}

//Solution Using Interfaces
{
interface IPost
{
	void CreatePost(Database db, string postMessage);
} 
}
class Post : IPost
{
	void CreatePost(Database db, string postMessage)
	{
		db.Add(postMessage)
	}
}

class TagPost : Post
{
	void CreatePost(Database db, string postMessage)
	{
		db.AddAsTag(postMessage);
	}
}

class MentionPost : Post
{
	void CreatePost(Database db, string postMessage)
	{
		string user = postMessage.parseUser();
		NotifyUser(user);
		OverrideExistingMention(user, postMessage)
		base.CreatePost(db, postMessage);
	}

	void NotifyUser(string user)
	{
		db.NotifyUser(user);
	}

	void OverrideExistingMention(string user, string postMessage)
	{
		db.OverrideExistingMention(_user, postMessage);
	}
}

class PostHandler
{
	private database =  new Database();
	void HandleNewPosts()
	{
		List<string> newPosts = database.getUnhandledPostsMessages();
		foreach (string postMessage in newPosts)
		{
			Post post;
			if (postMessage.StartsWith("#"))
			{
				post = new TagPost();
			}
			else if (postMessage.StartsWith("@"))
			{
				post = new MentionPost();
			}
			else
			{
				post = new Post();
			}

			post.CreatePost(database, postMessage);
		}
	}
}