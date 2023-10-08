import {useState, useEffect} from 'react';
import BlogCard from './BlogCard';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [displayCount, setDisplayCount] = useState(15);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div data-aos="fade-right" className='w-11/12 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
                {
                    blogs.slice(0,displayCount).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
            {   
            blogs.length !== displayCount?
                    <div className="flex justify-center my-6">
                    <button onClick={()=> setDisplayCount(blogs.length)} className='my-3 px-3 py-2 rounded-md bg-accent hover:bg-secondery transition duration-200 font-semibold text-contrast'>Show All</button>
                    </div>
                    :
                    <div className="flex justify-center my-6">
                    <button onClick={()=> setDisplayCount(12)} className='my-3 px-3 py-2 rounded-md bg-accent hover:bg-secondery transition duration-200 font-semibold text-contrast'>Show Less</button>
                    </div>
            }
        </div>
    );
};

export default Blogs;