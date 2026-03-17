import React from 'react'
import User from './components/User'
import Card from './components/card';
const App = () => {

const jobs = [
  {
    brandLogo: "https://th.bing.com/th?q=Google+Logo+App+Icon&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?w=137&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://th.bing.com/th?q=Microsoft+Windows+7+Logo&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    company: "IBM",
    datePosted: "3 weeks ago",
    post: "AI Research Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    company: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    company: "Oracle",
    datePosted: "12 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Bangalore, India"
  }
];
  // console.log(jobs);
  return (
    <div className='parent'>
      {jobs.map((job,index) => {
        return <div key={index} >
          <Card  logo={job.brandLogo} company={job.company} dateposted={job.datePosted} post={job.post}
        tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>
        </div>
      })}
    </div>
  )
}

export default App