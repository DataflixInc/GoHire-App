import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { JobPost } from '../types/job';

interface JobListProps {
  jobs: JobPost[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const navigate = useNavigate();

  return (
    <div className="job-list">
      <div className="job-list-header">
        <h2>Posted Jobs</h2>
        <button 
          className="btn-primary"
          onClick={() => navigate('/new')}
        >
          New Job Post
        </button>
      </div>

      <div>
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <Link to={`/jobs/${job.id}`} className="job-title-link">
              <h3 className="job-title">{job.title}</h3>
            </Link>
            <div className="job-detail">
              <div className="job-detail-label">{job.jobLocation}, {job.officeLocation}</div>
              <div className="job-detail-value">Posted {job.createdAt.toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList; 