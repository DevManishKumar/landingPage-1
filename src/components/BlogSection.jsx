import "../styles/BlogSection.css";

function BlogSection() {
  const blogPosts = [
    {
      category: "RESOURCES",
      title: "Refreshing Designs",
      description: "Quench satisfying designs to help you stir up emotion and tell a story.",
      image: "images/automated.jpg"
    },
    {
      category: "U TESTILE",
      title: "Healthier Lifestyle",
      description: "Living a healthier lifestyle will help with your productivity and your mind-set.",
      image: "images/automated.jpg"
    },
    {
      category: "ENTERTAINMENT",
      title: "Gaming Evolution",
      description: "Learn about the evolution of gaming and how it started a revolution.",
      image: "images/automated.jpg"
    },
    {
      category: "PROTECTION",
      title: "Best Workstations of the Year",
      description: "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
      image: "images/automated.jpg"
    },
    {
      category: "PROX",
      title: "Eating for Productivity",
      description: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
      image: "images/automated.jpg"
    },
    {
      category: "CHANGE DESIGN",
      title: "Eating for Productivity",
      description: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
      image: "images/automated.jpg"
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2>The Project Blog</h2>
        <p className="blog-subtitle">Designs and layouts to help you with your app.</p>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            {post.image && (
              <div className="blog-image">
                <img src={post.image} alt={post.title || post.category} />
              </div>
            )}
            {post.title ? (
              <>
                <span className="category-tag">{post.category}</span>
                <div className="divider"></div>
                <h3>{post.title}</h3>
                <p className="post-description">{post.description}</p>
              </>
            ) : (
              <span className="category-tag">{post.category}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;