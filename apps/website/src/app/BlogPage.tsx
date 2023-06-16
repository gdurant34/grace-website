import { Card } from '@grace-website/components';
import { useEffect, useState } from 'react';
import articles from '../medium-articles.json';

const Blog = ({ title }: { title: string }) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // This is what we use to fetch things when we want to use the API key
        // const userID = await fetch(
        //   `https://medium2.p.rapidapi.com/user/id_for/${username}`,
        //   { headers: { 'X-RapidAPI-Key': MEDIUM_API_KEY } }
        // )
        //   .then((r) => r.json())
        //   .then((r) => r.id);
        //
        // const articleIDs = await fetch(
        //   `https://medium2.p.rapidapi.com/user/${userID}/articles`,
        //   { headers: { 'X-RapidAPI-Key': MEDIUM_API_KEY } }
        // )
        //   .then((r) => r.json())
        //   .then((r) => r.associated_articles);
        //
        // const getArticle = async (articleId: string) =>
        //   await fetch(`https://medium2.p.rapidapi.com/article/${articleId}`, {
        //     headers: { 'X-RapidAPI-Key': MEDIUM_API_KEY },
        //   })
        //     .then((r) => r.json())
        //     .then((r) => ({
        //       id: r.id,
        //       title: r.title,
        //       date: r.published_at,
        //       url: r.url,
        //       image: r.image_url,
        //     }));
        //
        // const articles = await Promise.all(
        //   articleIDs.map((articleId: string) => getArticle(articleId))
        // );

        setPosts(articles);
      } catch (e) {}
    })();
  }, []);

  const renderArticles = () => {
    return posts.map((article) => (
      <Card
        key={article.id}
        title={article.title}
        name={article.author}
        date={article.date}
        image={article.image}
        link={article.url}
        description={article.blurb + '...'}
      />
    ));
  };

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen p-1.5">
      <img
        src="/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg"
        alt=""
        className="w-full h-full object-cover absolute mix-blend-overlay opacity-90"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>{renderArticles()}</div>
      </div>
    </div>
  );
};

export default Blog;
