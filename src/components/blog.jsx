import React, { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const RSS_URL = "https://johnofpaul.substack.com/feed"; 

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items.slice(0, 3)); // Get top 3 posts
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
        setLoading(false);
      });
  }, []);

  // Helper to strip HTML tags from description for a clean preview
  const getSnippet = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Helper to format date to "YYYY-MM-DD" (nerdier format)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  if (loading) return <div style={{color: '#64ffda', fontFamily: 'Fira Code'}}>LOADING_LOGS...</div>;

  return (
    <>
      {posts.map((post, index) => (
        <a 
          href={post.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="blog-card" 
          key={index}
        >
          <div className="blog-header">
            <span className="blog-date">[{formatDate(post.pubDate)}]</span>
            <span className="blog-id">LOG_ID_{index + 1042}</span>
          </div>
          <h4 className="blog-title">{post.title}</h4>
          <p className="blog-snippet">
            {getSnippet(post.description).substring(0, 120)}...
          </p>
          <div className="blog-footer">
            <span className="read-cmd">{'>'} READ_ENTRY.exe</span>
          </div>
        </a>
      ))}
    </>
  );
};

export default Blog;