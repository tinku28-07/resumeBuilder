

function ResumeForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputStyle = "w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none";

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-600">Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputStyle} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputStyle} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={inputStyle} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Professional Summary</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange} rows="3" className={inputStyle}></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Skills (Comma separated)</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} className={inputStyle} placeholder="e.g. React, CSS, HTML" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Work Experience</label>
        <textarea name="experience" value={formData.experience} onChange={handleChange} rows="3" className={inputStyle}></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Education</label>
        <textarea name="education" value={formData.education} onChange={handleChange} rows="2" className={inputStyle}></textarea>
      </div>
    </div>
  );
}

export default ResumeForm;
