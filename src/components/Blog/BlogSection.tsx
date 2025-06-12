import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Sustainable Agriculture Investment',
      excerpt: 'Discover how technology is revolutionizing farming and creating new opportunities for investors to support sustainable agriculture.',
      author: 'Dr. Sarah Johnson',
      date: '2024-03-15',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Investment Insights'
    },
    {
      id: '2',
      title: 'Maximizing Returns in Organic Farming',
      excerpt: 'Learn about the growing demand for organic produce and how investors can capitalize on this expanding market.',
      author: 'Michael Chen',
      date: '2024-03-10',
      image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Market Analysis'
    },
    {
      id: '3',
      title: 'Aquaculture: The Blue Revolution',
      excerpt: 'Explore the potential of fish farming and aquaculture investments in meeting global protein demands.',
      author: 'Emma Rodriguez',
      date: '2024-03-05',
      image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Industry Trends'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-emerald-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and opportunities in agricultural investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium group">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;