// import { read } from 'fs';
import React from 'react';
import BlogCard from './components/BlogCard';
import { Link } from 'react-router-dom';
// import { text } from 'stream/consumers';

const featuredArticles = [
  {
    title: "Big Data and You",
    description: "Is data really the end all be all?",
    date: "5/2/2025",
    image: "https://media.discordapp.net/attachments/1202762265065947209/1368124866623963156/LIBERTY-FB-MATRIX-v2-Image2.png?ex=68171512&is=6815c392&hm=0e1668af18af86dd659663f8c032068c647d70438e1af8db2fd213eeaee94b0e&=&format=webp&quality=lossless&width=1645&height=856",
    text: "In a broad sense, data is a collection of information that describes things. One way to describe it is the four main types: administrative, observational, survey/response data, and experimental data, which have differing face validity, internal validity, and external validity, broadly and within each category.\n\n Big data is the recent explosion in the availability of data in every avenue. According to the NIH, there are billions of additional microdata records describing the individual-level population data of over 100 countries, which will vastly transform research on demographic, economic, and social change.\n\nYou send your location, preferences, and identity to media apps that aggregate data from millions of users to create their recommendations for advertisers. Facebook uses intimate data from its vast user base for unbelievably large studies into human behavior and response to algorithmic decisions.\n\nOn the flip side, its disaster maps aggregate population-wide data that is greatly helpful to humanitarian organizations. From NBA teams to companies to our media, the world is increasingly driven by the collection and analysis of data.\n\nSince data can be applied to every avenue of study and commerce, building the skillset to manage, understand, and communicate about data is incredibly useful. More and more, reliance is placed upon data and people who can understand and inform decisions based on it.\n\nWhile data is powerful, decisions made based on data need to take into account several factors: the who, what, where, and why, and how of data collection. Data is not created equal – in many cases, it is primarily taken from affluent communities that reflect the demographics of data collectors.\n\nThe who and where of data collection can cause underrepresentation and bias in major data sets. According to a BBC article, there is a vast underrepresentation of gene data from groups outside affluent whites. This creates a lack of understanding of",
    link: "/blog/big-data-and-you",
  },
]

function featuredArticle(article: { title: string, description: string, 
    date: string, image: string, text: string, link: string }) {
  const lines = article.text.substring(0,1000).split('\n').map(line => line.trim()).filter(line => line.length > 0);
  return (
    <div className="featured-article">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {/* <figcaption>
        <p>{article.date}</p>
      </figcaption> */}
      {lines.map((line, index) => (
        <p key={index}>
          {line}
          {index === lines.length - 1 && '...'}
        </p>
      ))}
      <Link to={article.link}>Read More</Link>
    </div>
  );
}

const articles = [
  {
    title: "Big Data and You",
    description: "Is data really the end all be all?",
    date: "5/2/2025",
    image: "https://media.discordapp.net/attachments/1202762265065947209/1368124866623963156/LIBERTY-FB-MATRIX-v2-Image2.png?ex=68171512&is=6815c392&hm=0e1668af18af86dd659663f8c032068c647d70438e1af8db2fd213eeaee94b0e&=&format=webp&quality=lossless&width=1645&height=856",
    readMoreURL: "/blog/big-data-and-you",
  },
  {
    title: "Privacy is the New Dollar",
    description: "When everything is free, you are the product.",
    date: "5/2/2025",
    image: "https://dataprivacymanager.net/wp-content/uploads/2019/10/Data-Privacy-vs.-Data-Security.png",
    readMoreURL: "/blog/privacy-is-the-new-dollar",
  }
]

const Blog: React.FC = () => {
  return (
    <div className="blog-section" id="blog">
      <header>
        <hr className="header-line" />
        <h1>Blog</h1>
        <p>I put a bunch of my thoughts here. Read them if you'd like!</p>
        {/* line that seperates the header from the rest of the page */}
        <hr className="header-line" />
      </header>
      <section className = "blog-articles-container">
        <div className = "featured-articles">
          <h2>Featured</h2>
          {featuredArticles.map((article) => (
            featuredArticle(article)
          ))}
        </div>
        <div className="blog-articles">
          <h2>All Articles</h2>
          <div className="blog-cards">
            {articles.map((article, index) => (
              <BlogCard
                key={index}
                title={article.title}
                image={article.image}
                date={article.date}
                description={article.description}
                readMoreURL={article.readMoreURL}
              />
            ))}
          </div>
        </div>
      </section>
      <footer>
        <p><a href = "https://github.com/gycobden">&copy; 2025 Graham Cobden</a></p>
      </footer>
    </div>
  );
};

export default Blog;