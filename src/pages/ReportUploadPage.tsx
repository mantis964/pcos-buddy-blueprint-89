
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Upload, X, File, ArrowRight, FilePlus } from "lucide-react";
import PageContainer from "@/components/PageContainer";

interface UploadedFile {
  name: string;
  size: string;
  type: string;
}

const ReportUploadPage: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([
    { name: "hormone_panel.pdf", size: "2.4 MB", type: "application/pdf" },
    { name: "ultrasound_results.jpg", size: "1.8 MB", type: "image/jpeg" }
  ]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // In a real app, we would handle the file upload here
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
          Upload Your Health Reports
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Share your lab reports, ultrasound results, or any medical documents 
          to help us provide more accurate insights and recommendations.
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Drag & Drop Upload Area */}
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center mb-8 transition-colors ${
              isDragging
                ? "border-lavender bg-lavender/5"
                : "border-lavender/30 hover:border-lavender/60"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload
              size={40}
              className={`mx-auto mb-4 ${isDragging ? "text-lavender" : "text-muted-foreground"}`}
            />
            <h3 className="font-display text-xl font-medium mb-2">
              Drag & Drop Your Files Here
            </h3>
            <p className="text-muted-foreground mb-6">
              Supported formats: PDF, JPG, PNG (max 10MB)
            </p>
            <button className="pcos-button-primary inline-flex items-center gap-2">
              <FilePlus size={18} />
              Upload File
            </button>
          </div>

          {/* Uploaded Files */}
          {files.length > 0 && (
            <div className="space-y-4 mb-8">
              <h3 className="font-display text-lg font-medium">Uploaded Files</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {files.map((file, index) => (
                  <div 
                    key={index} 
                    className="pcos-card flex items-center gap-3 hover:shadow-md transition-shadow"
                  >
                    <div className={`rounded-lg p-2 ${file.type.includes('pdf') ? 'bg-pink/20' : 'bg-blue/20'}`}>
                      <File size={24} className={file.type.includes('pdf') ? 'text-pink-dark' : 'text-blue-dark'} />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size}</p>
                    </div>
                    <button 
                      onClick={() => removeFile(index)}
                      className="text-muted-foreground hover:text-pink rounded-full p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="text-center">
            <Link 
              to="/insight" 
              className={`pcos-button-primary inline-flex items-center gap-2 ${files.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Analyze Reports
              <ArrowRight size={18} />
            </Link>
            {files.length === 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Please upload at least one file to continue
              </p>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ReportUploadPage;
