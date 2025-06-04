import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobPostForm from './JobPostForm';
import { JobPost } from '../types/job';

interface NewJobPostProps {
  onSubmit: (job: Omit<JobPost, 'id' | 'createdAt'>) => void;
}

const NewJobPost: React.FC<NewJobPostProps> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (job: Omit<JobPost, 'id' | 'createdAt'>) => {
    onSubmit(job);
    navigate('/');
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Create New Job Post</h2>
        <button 
          className="btn-secondary"
          onClick={() => navigate('/')}
        >
          Back to Jobs
        </button>
      </div>
      <JobPostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewJobPost; 