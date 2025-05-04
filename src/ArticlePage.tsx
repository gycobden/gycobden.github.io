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
    name: "privacy-is-the-new-dollar",
    image: "https://dataprivacymanager.net/wp-content/uploads/2019/10/Data-Privacy-vs.-Data-Security.png",
    date: "2025-05-03",
    title: "Privacy is the New Dollar",
    description: "When everything is free, you are the product.",
    content: "Privacy in the internet age is a currency. In exchange for certain information about you, you receive powerful services with no monetary cost. By creating a Google account, you gain access to a host of services, from email to documents to photo storage. Engaging with Instagram or YouTube enables you to instantly communicate with friends anywhere and create content that will be seen by hundreds, maybe thousands, or even millions of people in just a couple of days. When you give your location, you can see your distance from any location, an array of ways to get there, and current and future information about the weather. In receiving these services, you deprioritize your privacy and lose control over who sees your information.\nHow one is perceived on the internet is determined by what information is shown to whom. Search engines and social media show a selective picture of a person based on engagement-driven algorithms. Dramaturgy, a term important to \"The Presentation of Self in Everyday Life,\" is different on the internet. Algorithms determine the impact of the information shared, so presentation on the internet revolves around them. People shape their online image to appeal to increasingly large numbers of people and groups. Any information posted online will stay there. The cloud stores everything that has ever been posted, and users on varying platforms can cause information to perpetuate.\nWith the range data can spread and its staying power, its value is heavily underappreciated. The effects of sharing our data can be largely discrete, manifesting in how services and entities appeal to you, whether through ads, accommodations, or other tailored experiences. Entities will use data to make decisions about people in contexts that have varying impacts on different parts of life. This ranges from what content it shows someone to whether they are selected for the position they applied for, whether they receive insurance, and whether they can take loans from the bank. Problematically, many of these decisions are made with misinterpretations of data, and while not viewing the fuller picture of the person behind the numbers. The rise of AI, which amplifies pre-existing bias in its training set as shown by its covert prejudice against AAE, will only accelerate the prevalence of data-based decisions.\nSince our data is so valuable, it must be anonymized properly. The cost of uncovering information from anonymized data must be less than its value. In the case of Netflix, their anonymization was flawed enough that researchers could recover individual watch histories, and that data was powerful enough to influence an election. If a large company with thousands of tech employees made such a drastic mistake, what\'s to say any other company could effectively anonymize the data they share?\nWe need to hold everyone to a high standard of data anonymization, and the information they are allowed to share should be limited. Netflix shared the data for personal gain, which should not be a reason to watch the histories of millions of users. When we exchange data with companies, they need to be held to a high standard of how they use the data and who they share it with.\nWeighing the importance of sharing data and proper anonymization is especially important as more and more data is provided globally. If the data is population-wide, such as COVID-19 testing data, it is arguably worth sharing to sway policy and research. Facebook disaster maps are a usage of location data that debatably outweighs risks because of the positive effect on humanitarian organizations. Still, data should be shared sparingly to maintain individuals\' privacy to the greatest extent possible. COVID-19 status and location are incredibly sensitive to individuals, so ensure that individual data is unreasonably hard to access.\nConsidering that consensually gathered data has so much power, data shared in a specific breach of a privacy statement is incredibly dangerous and risky. In the case of the Apple code, if Apple were forced to use internal tools to share the passcode, that would pave the way for many other \"justified\" invasions of privacy. History has shown that many of the government\'s decisions have had terrible consequences, from Muslim surveillance post 911 to the Japanese Internment. No entity should have access to information initially believed to be private unless it is all but guaranteed to be just, such as in the case of catching child pornography. The risks would outweigh the benefits.\nGrowing up with modern forms of media, I\'ve liberally given my information to many sources with a sense of data doomerism, rooted in the justification that there is so much data on me online already. However, I\'m beginning to understand the power of my data and the way it can be used against me. I\'m increasingly prioritizing my privacy and what data I give off. Although it\'s impossible to completely sign off from the internet, I will limit the information about myself online as much as I can. Privacy is a right, and that is no different in the internet age. If anything, there is even more to fight for with the omnipresent influence of data-based decision-making."
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