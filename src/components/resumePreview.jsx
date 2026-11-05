

function ResumePreview({ formData, themeColor }) {
  return (
    
    <div className="bg-white p-8 shadow-md mx-auto aspect-[1/1.414] text-gray-800 text-sm font-sans rounded-sm print:shadow-none print:p-0">
      
   
      <div style={{ backgroundColor: themeColor }} className="text-white p-6 rounded-sm text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide">{formData.name || 'Your Name'}</h1>
        <div className="mt-2 text-xs flex justify-center gap-4 flex-wrap">
          <span> {formData.email || 'email@example.com'}</span>
          <span> {formData.phone || 'Phone Number'}</span>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        
        {formData.summary && (
          <div>
            <h2 style={{ color: themeColor }} className="text-lg font-bold border-b-2 pb-1 uppercase tracking-wider mb-2">Summary</h2>
            <p className="text-gray-600 leading-relaxed text-justify">{formData.summary}</p>
          </div>
        )}

        
        {formData.experience && (
          <div>
            <h2 style={{ color: themeColor }} className="text-lg font-bold border-b-2 pb-1 uppercase tracking-wider mb-2">Experience</h2>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">{formData.experience}</p>
          </div>
        )}

  
        {formData.education && (
          <div>
            <h2 style={{ color: themeColor }} className="text-lg font-bold border-b-2 pb-1 uppercase tracking-wider mb-2">Education</h2>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">{formData.education}</p>
          </div>
        )}

       
        {formData.skills && (
          <div>
            <h2 style={{ color: themeColor }} className="text-lg font-bold border-b-2 pb-1 uppercase tracking-wider mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skills.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumePreview;
