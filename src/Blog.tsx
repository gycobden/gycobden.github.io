import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="blog-section" id="blog">
      <h1>Blog</h1>
      <p>I put a bunch of my thoughts here. Read them if you'd like!</p>
      <div className = "featured-articles">
        <h2>Most Recent</h2>
        {/* <div className="featured-article">
          <h3>Data and You</h3>
          <p>Data is a collection of information that describes things.</p>
          <a href="#/blog/data-and-you">Read More</a>
        </div> */}
        <div className="featured-article">
        <article>
          <img src="https://www.aclu-mn.org/sites/default/files/styles/featured_image_580x386/public/field_image/facial_recognition_2_1.png?itok=aphSHq33" alt="Data and You" />
          <h2>Data and You</h2>
          <figcaption>
            <p>5/2/2025</p>
          </figcaption>
          <p>In a broad sense, data is a collection of information that describes things. One way to describe it is the four main types: administrative, observational, survey/response data, and experimental data, which have differing face validity, internal validity, and external validity, broadly and within each category.</p>

<p>Big data is the recent explosion in the availability of data in every avenue. According to the NIH, there are billions of additional microdata records describing the individual-level population data of over 100 countries, which will vastly transform research on demographic, economic, and social change.</p>

<p>You send your location, preferences, and identity to media apps that aggregate data from millions of users to create their recommendations for advertisers. Facebook uses intimate data from its vast user base for unbelievably large studies into human behavior and response to algorithmic decisions.</p>

<p>On the flip side, its disaster maps aggregate population-wide data that is greatly helpful to humanitarian organizations. From NBA teams to companies to our media, the world is increasingly driven by the collection and analysis of data.</p>

<p>Since data can be applied to every avenue of study and commerce, building the skillset to manage, understand, and communicate about data is incredibly useful. More and more, reliance is placed upon data and people who can understand and inform decisions based on it.</p>

<p>The ASA Statement points out that big data has made spectacular contributions in a broad range of commercial endeavors and scholarly disciplines, and the interdisciplinary nature means that collaboration and communication are key.</p>

<p>Scientists need to be able to work with others in different disciplines and effectively convey the importance of data so that changes can be made. At its core, data science is a collaboration between statistics, databases, distributed systems, and machine learning, and communication is necessary for experts in these fields to synthesize their work.</p>

<p>While data is powerful, decisions made based on data need to take into account several factors: the who, what, where, and why, and how of data collection. Data is not created equal – in many cases, it is primarily taken from affluent communities that reflect the demographics of data collectors.</p>

<p>The who and where of data collection can cause underrepresentation and bias in major data sets. According to a BBC article, there is a vast underrepresentation of gene data from groups outside affluent whites. This creates a lack of understanding of how outside ethnic groups will respond to treatments or what specific genes should be labeled harmful or benign.</p>

<p>A case was cited about babies being aborted for certain genes that end up being false positives or not even harmful in the way they might be in certain demographics.</p>

<p>Another example is that while global data on gender has grown, the data tends to leave out nonbinary people, lesbians, and older women. Facebook was lauded for being progressive for allowing different gender inputs, while Rena Bivans showed beneath the surface, Facebook continued to reduce users' genders to a binary that it presented to advertisers.</p>

<p>Gender is one of the most widespread classification systems in the world, but it is a conceptual structure that confines ideas and individuals to a non-existent binary. Our data and analysis reflect the social and societal norms of the time, and that is not always broadly or rightly applicable to everyone.</p>

<p>A quick third example is the impact of the census's data privacy algorithm, which had a disproportionate effect on the representation of smaller communities, and in turn had vast consequences for the people there.</p>

<p>In conclusion, our world is increasingly data-driven. Role and skill requirements are beginning to reflect that. Although data is a powerful tool for most disciplines, it has a large room for misuse, and it is important to understand its many possible pitfalls. The impact will almost always disproportionately fall on minorities and unrepresented groups.</p>

        </article>
        </div>
      </div>
      <footer>
        <p><a href = "https://github.com/gycobden">&copy; 2025 Graham Cobden</a></p>
      </footer>
    </div>
  );
};

export default Blog;