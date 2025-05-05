import React, { useEffect, useState, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import GlobalApi from './../../../../../service/GlobalApi';
import Template1 from '../../components/templates/Template1';
import Template2 from '../../components/templates/Template2';
import Template3 from '../../components/templates/Template3';
import Template4 from '../../components/templates/Template4';
import Template5 from '../../components/templates/Template5';
import { useReactToPrint } from 'react-to-print';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';

function EditResume() {
    const {resumeId} = useParams();
    const {resumeInfo, setResumeInfo}=useContext(ResumeInfoContext);

    const [selectedTemplate, setSelectedTemplate] = useState('template1');
    const componentRef = useRef();

    useEffect(() => {
        GetResumeInfo();
    }, []);

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(resp => {
            setResumeInfo(resp.data.data);
        });
    };

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `Resume_${resumeId}`,
        onAfterPrint: () => alert('Resume downloaded successfully!')
    });

    const renderTemplate = () => {
      console.log("RRRRRRRRRRRRRRRRRR : ", resumeInfo)
        switch (selectedTemplate) {
            case 'template1':
                return <Template1 resumeInfo={resumeInfo} ref={componentRef} />;
            case 'template2':
                return <Template2 resumeInfo={resumeInfo} ref={componentRef} />;
            case 'template3':
                return <Template3 resumeInfo={resumeInfo} ref={componentRef} />;
            case 'template4':
                return <Template4 resumeInfo={resumeInfo} ref={componentRef} />;
            case 'template5':
                return <Template5 resumeInfo={resumeInfo} ref={componentRef} />;
            
            default:
                return <Template1 resumeInfo={resumeInfo} ref={componentRef} />;
        }
    };

    return (
            <div className='p-10'>
                <div className='mb-6 flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-bold'>Select Template</h2>
                        <div className='flex gap-4 mt-2'>
                            <button 
                                onClick={() => handleTemplateChange('template1')}
                                className={`px-4 py-2 rounded ${selectedTemplate === 'template1' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Template 1
                            </button>
                            <button 
                                onClick={() => handleTemplateChange('template2')}
                                className={`px-4 py-2 rounded ${selectedTemplate === 'template2' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Template 2
                            </button>
                            <button 
                                onClick={() => handleTemplateChange('template3')}
                                className={`px-4 py-2 rounded ${selectedTemplate === 'template3' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Template 3
                            </button>
                            <button 
                                onClick={() => handleTemplateChange('template4')}
                                className={`px-4 py-2 rounded ${selectedTemplate === 'template4' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Template 4
                            </button>
                            <button 
                                onClick={() => handleTemplateChange('template5')}
                                className={`px-4 py-2 rounded ${selectedTemplate === 'template5' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Template 5
                            </button>
                        </div>
                    </div>
                   
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <FormSection />
                  
                    <div>
                        {renderTemplate()}
                    </div>
                </div>
            </div>
    );
}

export default EditResume;