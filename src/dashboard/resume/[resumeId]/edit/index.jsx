import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../service/GlobalApi';
import Template1 from '../../components/templates/Template1';
import Template2 from '../../components/templates/Template2';
import { useReactToPrint } from 'react-to-print';

function EditResume() {
    const {resumeId} = useParams();
    const [resumeInfo, setResumeInfo] = useState();
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
        switch (selectedTemplate) {
            case 'template1':
                return <Template1 resumeInfo={resumeInfo} ref={componentRef} />;
            case 'template2':
                return <Template2 resumeInfo={resumeInfo} ref={componentRef} />;
            default:
                return <Template1 resumeInfo={resumeInfo} ref={componentRef} />;
        }
    };

    return (
        <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
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
                        </div>
                    </div>
                    <button 
                        onClick={handlePrint}
                        className='px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                    >
                        Download PDF
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <FormSection />
                    <div>
                        {renderTemplate()}
                    </div>
                </div>
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default EditResume;