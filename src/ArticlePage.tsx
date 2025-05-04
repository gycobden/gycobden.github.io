import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const articles = [
  {
    name: "big-data-and-you",
    image: "https://media.discordapp.net/attachments/1202762265065947209/1368124866623963156/LIBERTY-FB-MATRIX-v2-Image2.png?ex=68171512&is=6815c392&hm=0e1668af18af86dd659663f8c032068c647d70438e1af8db2fd213eeaee94b0e&=&format=webp&quality=lossless&width=1645&height=856",
    date: "2025-04-04",
    title: "Big Data and You",
    description: "Is data really the end all be all?",
    content: "In a broad sense, data is a collection of information that describes things." +
"Big data is the recent explosion in the availability of data in every avenue. According to the NIH, there are billions of additional microdata records describing the individual-level population data of over 100 countries, which will vastly transform research on demographic, economic, and social change.\nYou send your location, preferences, and identity to media apps that aggregate data from millions of users to create their recommendations for advertisers. Facebook uses intimate data from its vast user base for unbelievably large studies into human behavior and response to algorithmic decisions. On the flip side, its disaster maps aggregate population-wide data that is greatly helpful to humanitarian organizations.\nFrom NBA teams to companies to our media, the world is increasingly driven by the collection and analysis of data." +
" Since data can be applied to every avenue of study and commerce, building the skillset to manage, understand, and communicate about data is incredibly useful. More and more, reliance is placed upon data and people who can understand and inform decisions based on it. \n" +
"While data is powerful, decisions made based on data need to take into account several factors: the who, what, where, and why, and how of data collection. Data is not created equal – in many cases, it is primarily taken from affluent communities that reflect the demographics of data collectors. \nThe who and where of data collection can cause underrepresentation and bias in major data sets. According to a BBC article, there is a vast underrepresentation of gene data from groups outside affluent whites. This creates a lack of understanding of how outside ethnic groups will respond to treatments or what specific genes should be labeled harmful or benign. A case was cited about babies being aborted for certain genes that end up being false positives or not even harmful in the way they might be in certain demographics.\n" +
"Another example is that while global data on gender has grown, the data tends to leave out nonbinary people, lesbians, and older women. Facebook was lauded for being progressive for allowing different gender inputs, while Rena Bivans showed beneath the surface, Facebook continued to reduce users' genders to a binary that it presented to advertisers. \nGender is one of the most widespread classification systems in the world, but it is a conceptual structure that confines ideas and individuals to a non-existent binary. Our data and analysis reflect the social and societal norms of the time, and that is not always broadly or rightly applicable to everyone. \n" +
"In conclusion, our world is increasingly data-driven. Role and skill requirements are beginning to reflect that. Although data is a powerful tool for most disciplines, it has a large room for misuse, and it is important to understand its many possible pitfalls. The impact will almost always disproportionately fall on minorities and unrepresented groups.",
  },
  {
    name: "another-article",
    image: "https://example.com/another-image.jpg",
    date: "2025-05-01",
    title: "Another Article",
    description: "This is another article.",
    content: "This is the full content of another article.",
  },
];

const ArticlePage: React.FC = () => {
  const { articleName } = useParams<{ articleName: string }>(); // Get the articleName from the URL

  // Find the article that matches the articleName
  const article = articles.find((a) => a.name === articleName);

  if (!article) {
    return <h2>Article not found</h2>; // Handle case where article doesn't exist
  }

  const lines = article.content.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  return (
    <div className="article-page">
      <img src={article.image} alt={article.title} className="article-image" />
      <h1>{article.title}</h1>
      <h2 className="article-description">{article.description}</h2>
      {lines.map((line, index) => (
        <p key={index}>
          {line}
        </p>
      ))}
      <footer className="article-footer">
        <p>Graham Cobden {article.date}</p>
        <Link to="/blog">Back to blog page</Link>
      </footer>
    </div>
  );
};

export default ArticlePage;