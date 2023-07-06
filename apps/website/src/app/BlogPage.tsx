import { Card } from '@grace-website/components';
import { useEffect, useState } from 'react';
import articles from '../medium-articles.json';

const Blog = ({ title }: { title: string }) => {
  const [post, setPost] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setPost(articles);
      } catch (e) {}
    }) ();
  },[]);

  const renderArticles = () => {
    return post.map((article) => (
      <Card 
      key={article.id}
      name={article.author}
      date={article.date}
      title={article.title}
      image={article.image}
      description={article.blurb}
      link={article.url}
      />
    ))
  }

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-fit ">
      <img 
      src='/assets/images/annie-spratt-PM4Vu1B0gxk-unsplash.jpg'
      alt=''
      className='w-full h-full object-cover fixed mix-blend-overlay opacity-90'/>
      <div>
        <div className="px-20 py-10">
          {renderArticles()}
        </div>
      </div>
    </div>
  );
};

export default Blog;
