using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using server.Models;

namespace server.Controllers
{

    public class Tweet
    {
        public string text;
        public int retweet_count;
        public int favorite_count;
        public User user;
        public bool retweeted;
    }

    public class User
    {
        public string name;
        public string screen_name;
        public string banner_picture_url;
        public string profile_picture_url;
        public int follower_count;
        public int following_count;
    }

    public class HomeController : Controller
    {
        private readonly HttpClient _client = new HttpClient();
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "AAAAAAAAAAAAAAAAAAAAACQ9IQEAAAAAEQC%2F0dk3KQz7yMUJ3Mbr9vvWj60%3DRujBeuJWd3oZ7I6iIVqWkclShZib62m4J67Xd3zbIcdzTowhjV");
            _logger = logger;
        }

        public async Task<IActionResult> GetUserDetails(string username)
        {
            string responseBody = await _client.GetStringAsync($"https://api.twitter.com/1.1/users/show.json?screen_name={username}");
            JObject jsonResponse = JObject.Parse(responseBody);
            System.Console.WriteLine(jsonResponse["name"]);
            User user = new User
            {
                name = jsonResponse["name"].ToString(),
                screen_name = jsonResponse["screen_name"].ToString(),
                banner_picture_url = jsonResponse["profile_banner_url"].ToString(),
                profile_picture_url = jsonResponse["profile_image_url"].ToString(),
                follower_count = Int32.Parse(jsonResponse["followers_count"].ToString()),
                following_count = Int32.Parse(jsonResponse["friends_count"].ToString()),
            };
            var SeralizedUser = Newtonsoft.Json.JsonConvert.SerializeObject(user);
            return this.Content(SeralizedUser, "application/json");
        }

        public async Task<IActionResult> GetUserTweets(string username)
        {
            string responseBody = await _client.GetStringAsync($"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={username}&count=20&exclude_replies=true");
            JArray jsonResponse = JArray.Parse(responseBody);

            List<Tweet> TweetList = new List<Tweet>();

            foreach (JObject tweet in jsonResponse)
            {
                if (!tweet.ContainsKey("retweeted_status"))
                {
                    TweetList.Add(new Tweet
                    {
                        retweet_count = Int32.Parse(tweet["retweet_count"].ToString()),
                        favorite_count = Int32.Parse(tweet["favorite_count"].ToString()),
                        text = tweet["text"].ToString(),
                        retweeted = false,
                        user = new User
                        {
                            name = tweet["user"]["name"].ToString(),
                            screen_name = tweet["user"]["screen_name"].ToString(),
                            profile_picture_url = tweet["user"]["profile_image_url"].ToString(),
                            follower_count = Int32.Parse(tweet["user"]["followers_count"].ToString()),
                            following_count = Int32.Parse(tweet["user"]["friends_count"].ToString())
                        }
                    });
                }
                else
                {
                    TweetList.Add(new Tweet
                    {
                        retweet_count = Int32.Parse(tweet["retweet_count"].ToString()),
                        favorite_count = Int32.Parse(tweet["favorite_count"].ToString()),
                        text = tweet["text"].ToString(),
                        retweeted = true,
                        user = new User
                        {
                            name = tweet["retweeted_status"]["user"]["name"].ToString(),
                            screen_name = tweet["retweeted_status"]["user"]["screen_name"].ToString(),
                            profile_picture_url = tweet["retweeted_status"]["user"]["profile_image_url"].ToString(),
                            follower_count = Int32.Parse(tweet["retweeted_status"]["user"]["followers_count"].ToString()),
                            following_count = Int32.Parse(tweet["retweeted_status"]["user"]["friends_count"].ToString())
                        }
                    });
                }
            }

            var what = Newtonsoft.Json.JsonConvert.SerializeObject(TweetList);
            return this.Content(what, "application/json");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
