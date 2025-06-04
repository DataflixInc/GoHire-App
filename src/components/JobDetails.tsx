import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { JobPost } from '../types/job';

interface JobDetailsProps {
  jobs: JobPost[];
}

const JobDetails: React.FC<JobDetailsProps> = ({ jobs }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="job-details-page">
      <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>
        ← Back to Jobs
      </button>
      <h1>{job.title}</h1>
      <p className="job-details-date">Posted on {job.createdAt.toLocaleDateString()}</p>
      <section className="job-details-section">
        <h2>Description</h2>
        <p>{job.description}</p>
      </section>
      <section className="job-details-section">
        <h2>Details</h2>
        <ul>
          <li><strong>Salary:</strong> {job.salary}</li>
          <li><strong>Employment Type:</strong> {job.employmentType}</li>
          <li><strong>Job Location:</strong> {job.jobLocation}</li>
          <li><strong>Office Location:</strong> {job.officeLocation}</li>
        </ul>
      </section>
    </div>
  );
};

export default JobDetails; 