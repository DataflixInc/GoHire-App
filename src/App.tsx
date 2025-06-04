import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import NewJobPost from './components/NewJobPost';
import JobDetails from './components/JobDetails';
import { JobPost } from './types/job';

// Sample job postings
const sampleJobs: JobPost[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    description: 'We are looking for an experienced software engineer to join our team.',
    salary: '$120,000 - $150,000',
    employmentType: 'Full-time',
    jobLocation: 'Remote',
    officeLocation: 'San Francisco, CA',
    createdAt: new Date('2024-03-15')
  },
  {
    id: '2',
    title: 'Product Manager',
    description: 'Join our product team to help shape the future of our platform.',
    salary: '$100,000 - $130,000',
    employmentType: 'Full-time',
    jobLocation: 'Hybrid',
    officeLocation: 'New York, NY',
    createdAt: new Date('2024-03-14')
  },
  {
    id: '3',
    title: 'UX Designer',
    description: 'Create beautiful and intuitive user experiences for our products.',
    salary: '$90,000 - $120,000',
    employmentType: 'Full-time',
    jobLocation: 'On-site',
    officeLocation: 'Seattle, WA',
    createdAt: new Date('2024-03-13')
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    description: 'Help us build and maintain our cloud infrastructure.',
    salary: '$110,000 - $140,000',
    employmentType: 'Full-time',
    jobLocation: 'Remote',
    officeLocation: 'Austin, TX',
    createdAt: new Date('2024-03-12')
  },
  {
    id: '5',
    title: 'Frontend Developer',
    description: 'Build modern web applications using React and TypeScript.',
    salary: '$85,000 - $115,000',
    employmentType: 'Full-time',
    jobLocation: 'Hybrid',
    officeLocation: 'Boston, MA',
    createdAt: new Date('2024-03-11')
  }
];

function App() {
  const [jobPosts, setJobPosts] = useState<JobPost[]>(sampleJobs);

  const handleSubmit = (newJob: Omit<JobPost, 'id' | 'createdAt'>) => {
    const job: JobPost = {
      ...newJob,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setJobPosts(prev => [job, ...prev]);
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1 className="app-title">Jobs at Dataflix</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<JobList jobs={jobPosts} />} />
            <Route path="/new" element={<NewJobPost onSubmit={handleSubmit} />} />
            <Route path="/jobs/:id" element={<JobDetails jobs={jobPosts} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
