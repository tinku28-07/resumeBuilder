

import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ResumeForm from './components/resumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
 
  const [formData, setFormData] = useState({
    name: 'Tinku Rana',
    email: 'tinku@example.com',
    phone: '1234567890',
    skills: 'React, JavaScript, Tailwind CSS, Node.js',
    summary: 'Enthusiastic frontend developer looking for opportunities.',
    experience: 'Frontend Intern at TechCorp (6 Months) - Built responsive UIs.',
    education: 'B.Tech in Electronics and Communication Engineering - University College of Engineering and Technology Hazaribagh (2026)',
  });

  const [themeColor, setThemeColor] = useState('#1e3a8a'); 
  const componentRef = useRef(null);

  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${formData.name}_Resume`,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="mb-6 flex flex-col md:flex-row justify-between items-center bg-white p-4 shadow rounded-lg gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Live Resume Builder</h1>
        <div className="flex items-center gap-4">
         
          <label className="font-medium text-gray-600">Theme:</label>
          <input 
            type="color" 
            value={themeColor} 
            onChange={(e) => setThemeColor(e.target.value)}
            className="w-10 h-10 border cursor-pointer rounded"
          />
     
          <button 
            onClick={handlePrint}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow transition"
          >
            Download PDF
          </button>
        </div>
      </header>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Enter Details</h2>
          <ResumeForm formData={formData} setFormData={setFormData} />
        </div>
        <div className="bg-gray-200 p-4 shadow rounded-lg flex justify-center items-start overflow-auto">
        
          <div ref={componentRef} className="w-full max-w-[210mm]">
            <ResumePreview formData={formData} themeColor={themeColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
