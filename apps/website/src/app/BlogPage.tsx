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
    <div className="h-full flex justify-center pt-10">
      <img 
      src='/assets/images/pawel-czerwinski-dgJT71cXlC4-unsplash-copy.jpg'
      alt=''
      className='w-full h-full object-cover fixed mix-blend-overlay opacity-90'/>
      {/* <div className='w-full h-full object-cover fixed mix-blend-overlay bg-gray-900 bg-opacity-50'> */}

      {/* </div> */}
      <div> 
        <div className="px-20 py-10">
          {renderArticles()}
        </div>
      </div>
    </div>
  );
};

export default Blog;
