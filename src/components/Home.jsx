import React from "react";
import "../CssFiles/Home.css"; // Import the CSS file for styling
import BlogComponent from "./Blog";

const Home = () => {  



  const Blogs =[
    {
      id : 1,
      title : "10 Tips for Boosting Productivity While Working from Home ",
      description: "Working from home can be challenging, but with the right strategies, you can stay productive. Start by creating a dedicated workspace free from distractions. Set a daily schedule and stick to it, just like you would in an office. Use productivity tools like Trello or Asana to manage tasks efficiently. Take regular breaks to avoid burnout, and incorporate physical activity into your routine. Communication is key—stay connected with your team through video calls and messaging apps. Finally, prioritize self-care to maintain a healthy work-life balance.",
      image : "https://plus.unsplash.com/premium_photo-1664199486282-26a251bad513?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id : 2,
      title: "The Ultimate Guide to Starting a Successful Blog in 2023",
      description: "Starting a blog in 2023 is easier than ever, but standing out requires strategy. Choose a niche you’re passionate about and research your target audience. Pick a reliable hosting platform like WordPress or Squarespace. Design your blog with a clean, user-friendly layout. Create high-quality, SEO-optimized content that provides value to your readers. Promote your blog on social media and engage with your audience. Monetize through ads, affiliate marketing, or sponsored posts. Consistency and patience are key to building a successful blog.",
      "image": "https://images.unsplash.com/photo-1676282824041-67dfaa132081?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id :3,
      title: "Top 5 Healthy Breakfast Recipes for Busy Mornings",
      description: "Mornings can be hectic, but a healthy breakfast sets the tone for the day. Try overnight oats with fresh fruits and nuts for a quick, nutritious option. Smoothie bowls packed with spinach, berries, and protein powder are another great choice. Avocado toast on whole-grain bread provides healthy fats and fiber. For a protein-rich option, whip up scrambled eggs with veggies. Finally, Greek yogurt with honey and granola is a simple yet satisfying meal. These recipes take less than 10 minutes to prepare!",
      "image": "https://images.unsplash.com/photo-1561239781-615abe0878db?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:4,
      title: "How to Stay Motivated When Pursuing Long-Term Goals",
      description: "Achieving long-term goals requires consistent motivation. Start by breaking your goal into smaller, manageable tasks. Celebrate small wins to stay encouraged. Surround yourself with supportive people who inspire you. Visualize your success and remind yourself why you started. Keep a journal to track your progress and reflect on your journey. Stay flexible and adapt to challenges without losing sight of your goal. Remember, persistence is key—success doesn’t happen overnight!",
      "image": "https://images.unsplash.com/photo-1617046774731-b2c14cc8c377?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {id:5,
      title: "The Benefits of Meditation for Mental and Physical Health",
      description: "Meditation is a powerful tool for improving mental and physical health. It reduces stress by calming the mind and lowering cortisol levels. Regular practice enhances focus and clarity, making it easier to tackle daily tasks. Meditation also improves sleep quality and boosts immunity. It can help manage anxiety and depression by promoting emotional balance. Even 10 minutes a day can make a significant difference. Start with guided meditations or apps like Headspace to build a consistent practice.",
      "image": "https://images.unsplash.com/photo-1586652321337-28319e1c979e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  {id:6,                              
     
      "title": "5 Must-Visit Travel Destinations for Adventure Enthusiasts",
      "description": "For adventure lovers, the world is full of thrilling destinations. Visit New Zealand for bungee jumping and stunning landscapes. Explore the Amazon rainforest for wildlife and trekking. Head to Iceland for glacier hiking and volcanic tours. Nepal offers the ultimate challenge with Everest Base Camp trekking. Finally, Costa Rica is perfect for zip-lining and surfing. These destinations promise unforgettable experiences for adrenaline junkies!",
      "image": "https://cdn.pixabay.com/photo/2022/03/09/23/52/island-7058873_1280.jpg"
    },
   {id:7,
      "title": "How to Build a Strong Personal Brand in 2023",
      "description": "A strong personal brand sets you apart in today’s competitive world. Start by defining your unique value proposition. Create a professional online presence through LinkedIn and a personal website. Share valuable content that showcases your expertise. Network with industry leaders and engage with your audience consistently. Be authentic and let your personality shine through. A strong personal brand opens doors to new opportunities and career growth.",
      "image": "https://cdn.pixabay.com/photo/2016/03/31/00/09/marketing-1291856_960_720.jpg"
    },
  {id:8,
      "title": "The Science Behind Intermittent Fasting and Weight Loss",
      "description": "Intermittent fasting is a popular weight-loss strategy backed by science. It involves cycling between eating and fasting periods, such as the 16:8 method. This approach helps reduce calorie intake and boosts metabolism. Fasting also triggers autophagy, a process that removes damaged cells. Studies show it can improve insulin sensitivity and reduce inflammation. Always consult a doctor before starting intermittent fasting to ensure it’s right for you.",
      "image": "https://cdn.pixabay.com/photo/2017/08/02/01/34/pocket-watch-2569573_640.jpg"
    },
  {id:9,
      "title": "10 Essential Tools for Remote Team Collaboration",
      "description": "Remote work requires effective collaboration tools. Slack is perfect for team communication, while Zoom handles video meetings. Trello and Asana help manage projects and tasks. Google Drive ensures seamless file sharing and storage. Notion is great for documentation and knowledge sharing. Time-tracking tools like Toggl improve productivity. These tools keep remote teams connected and efficient.",
      "image": "https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg"
    },
 {id:10,
      "title": "The Rise of Sustainable Fashion: Why It Matters",
      "description": "Sustainable fashion is gaining momentum as consumers become more eco-conscious. It focuses on ethical production, fair wages, and eco-friendly materials. Brands like Patagonia and Stella McCartney lead the way. By choosing sustainable fashion, you reduce environmental impact and support ethical practices. Start by buying less and choosing quality over quantity. Small changes in your wardrobe can make a big difference!",
      "image": "https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_960_720.jpg"
    },
 {id:11,
      "title": "How to Create a Budget and Stick to It",
      "description": "Creating a budget is the first step toward financial stability. Start by tracking your income and expenses. Categorize spending into essentials, savings, and discretionary items. Use budgeting apps like Mint or YNAB for easy tracking. Set realistic goals and review your budget regularly. Avoid impulse purchases and prioritize saving. A well-planned budget helps you achieve financial freedom.",
      "image": "https://cdn.pixabay.com/photo/2021/07/07/18/55/money-6395095_640.jpg"
    },
{id:12,
      "title": "The Impact of Social Media on Mental Health",
      "description": "Social media has both positive and negative effects on mental health. While it connects people, excessive use can lead to anxiety and depression. Comparing yourself to others online often fuels insecurity. Set boundaries by limiting screen time and curating your feed. Focus on meaningful interactions rather than likes and followers. Balance online and offline activities for better mental well-being.",
      "image": "https://cdn.pixabay.com/photo/2022/02/17/20/15/smartphone-7019391_1280.jpg"
    },
{id:13,
      "title": "Top 5 Books to Read for Personal Development",
      "description": "Books are a great way to invest in personal growth. 'Atomic Habits' by James Clear teaches the power of small changes. 'The 7 Habits of Highly Effective People' by Stephen Covey offers timeless principles. 'Daring Greatly' by Brené Brown explores vulnerability and courage. 'Mindset' by Carol Dweck highlights the importance of a growth mindset. Finally, 'The Power of Now' by Eckhart Tolle emphasizes living in the present. These books inspire and transform lives.",
      "image": "https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_960_720.jpg"
    },
 {id:14,
      "title": "How to Start Investing in the Stock Market",
      "description": "Investing in the stock market can grow your wealth over time. Start by educating yourself through books and online courses. Choose a reliable brokerage platform to open an account. Diversify your portfolio to minimize risk. Invest in index funds or ETFs for steady returns. Be patient and avoid emotional decisions. Remember, investing is a long-term game!",
      "image": "https://cdn.pixabay.com/photo/2020/11/24/04/13/finance-5771541_1280.jpg"
    },
{id:15,
      "title": "The Benefits of Learning a New Language",
      "description": "Learning a new language has numerous benefits. It improves cognitive abilities and enhances memory. It opens doors to new cultures and career opportunities. Language learning boosts confidence and communication skills. Start with apps like Duolingo or Babbel for structured lessons. Practice regularly and immerse yourself in the language through movies or books. The effort is worth the rewards!",
      "image": "https://cdn.pixabay.com/photo/2018/01/23/13/25/book-3101450_1280.jpg"
    },
{id:16,
      "title": "How to Plan the Perfect Weekend Getaway",
      "description": "A weekend getaway is a great way to recharge. Choose a destination within driving distance to save time. Book accommodations in advance and plan activities based on your interests. Pack light and bring essentials like comfortable shoes and a camera. Disconnect from work and enjoy the moment. A well-planned getaway leaves you refreshed and inspired.",
      "image": "https://cdn.pixabay.com/photo/2018/02/03/17/54/architecture-3128171_960_720.jpg"
    },
 {id:17,
      "title": "The Future of Artificial Intelligence in Everyday Life",
      "description": "Artificial Intelligence (AI) is transforming everyday life. From virtual assistants like Siri to personalized recommendations on Netflix, AI is everywhere. It’s revolutionizing healthcare, finance, and transportation. While AI offers convenience, ethical concerns like data privacy remain. Embrace the benefits but stay informed about its implications. The future of AI is both exciting and challenging.",
      "image": "https://cdn.pixabay.com/photo/2022/04/04/16/42/technology-7111799_960_720.jpg"
    },
{id:18,
      "title": "How to Build a Morning Routine for Success",
      "description": "A morning routine sets the tone for a productive day. Start by waking up early and avoiding your phone. Incorporate activities like meditation, exercise, and journaling. Eat a healthy breakfast and plan your day ahead. A consistent routine boosts energy and focus. Small changes in the morning lead to big results!",
      "image": "https://cdn.pixabay.com/photo/2024/11/11/07/44/woman-9189442_960_720.jpg"
    },
  {id:19,
      "title": "The Importance of Financial Literacy for Young Adults",
      "description": "Financial literacy is crucial for young adults. It involves understanding budgeting, saving, and investing. Start by tracking expenses and setting financial goals. Learn about credit scores and debt management. Explore investment options to grow your wealth. Financial literacy empowers you to make informed decisions and secure your future.",
      "image": "https://cdn.pixabay.com/photo/2017/04/04/18/22/media-literacy-2202670_960_720.jpg"
    },
  {id:20,
      "title": "How to Stay Fit Without a Gym Membership",
      "description": "Staying fit doesn’t require a gym membership. Bodyweight exercises like push-ups and squats are effective. Go for runs or walks in your neighborhood. Use online workout videos for guided sessions. Incorporate yoga or stretching for flexibility. Stay consistent and make fitness a part of your daily routine. A healthy lifestyle is achievable anywhere!",
      "image": "https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg"
    }
  ]
  
  return (
     <div className="home">
      {/* Hero Section */}
      <div className="hero-content">
       {/* className="hero-image" */}
      
       <div className="blog-image "><img  src="https://cdn.pixabay.com/photo/2021/02/09/23/49/study-6000392_960_720.jpg"/></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Blogs</h1>
          <p className="hero-description">
            Discover amazing stories, insights, and ideas from our community.
          </p>
          {/* <button className="hero-button">Explore Blogs</button> */}
          <BlogComponent        blogs={Blogs}  />
        </div>
        
      </div>

      {/* Blog Highlights Section */}
      {/* <div className="blog-highlights">
        <h2 className="section-title">Featured Blogs</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your blog image
              alt="Blog 1"
              className="blog-card-image"
            />
            <h3 className="blog-card-title">Blog Title 1</h3>
            <p className="blog-card-description">
              A short description of the blog post.
            </p>
          </div>
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your blog image
              alt="Blog 2"
              className="blog-card-image"
            />
            <h3 className="blog-card-title">Blog Title 2</h3>
            <p className="blog-card-description">
              A short description of the blog post.
            </p>
          </div>
          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your blog image
              alt="Blog 3"
              className="blog-card-image"
            />
            <h3 className="blog-card-title">Blog Title 3</h3>
            <p className="blog-card-description">
              A short description of the blog post.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;