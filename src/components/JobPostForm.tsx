import React, { useState } from 'react';
import { JobPost, EmploymentType } from '../types/job';

interface JobPostFormProps {
  onSubmit: (jobPost: Omit<JobPost, 'id' | 'createdAt'>) => void;
}

const JobPostForm: React.FC<JobPostFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    employmentType: 'Full-time' as EmploymentType,
    jobLocation: '',
    officeLocation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      salary: '',
      employmentType: 'Full-time',
      jobLocation: '',
      officeLocation: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">Job Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Job Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-input"
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="salary" className="form-label">Salary</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="employmentType" className="form-label">Employment Type</label>
        <select
          id="employmentType"
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="jobLocation" className="form-label">Job Location</label>
        <input
          type="text"
          id="jobLocation"
          name="jobLocation"
          value={formData.jobLocation}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="officeLocation" className="form-label">Office Location</label>
        <input
          type="text"
          id="officeLocation"
          name="officeLocation"
          value={formData.officeLocation}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
      >
        Post Job
      </button>
    </form>
  );
};

export default JobPostForm; 