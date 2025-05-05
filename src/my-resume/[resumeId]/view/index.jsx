import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { RWebShare } from 'react-web-share';
import html2pdf from 'html2pdf.js';
import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../service/GlobalApi';

import Template1 from '@/dashboard/resume/templates/Template1';
import Template2 from '@/dashboard/resume/templates/Template2';
import Template3 from '@/dashboard/resume/templates/Template3';
import Template4 from '@/dashboard/resume/templates/Template4';

function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();
    const printRef = useRef();

    useEffect(() => {
        GetResumeInfo();
    }, []);

    const GetResumeInfo = async () => {
        try {
            const resp = await GlobalApi.GetResumeById(resumeId);
            setResumeInfo(resp.data.data);
        } catch (error) {
            console.error('Error fetching resume:', error);
        }
    };

    const HandleDownload = () => {
        const element = printRef.current;
        const opt = {
            margin:       0.5,
            filename:     `${resumeInfo.firstName}_${resumeInfo.lastName}_Resume.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    const renderTemplate = () => {
        switch (resumeInfo?.templateId) {
            case 1: return <Template1 resumeInfo={resumeInfo} ref={printRef} />;
            case 2: return <Template2 resumeInfo={resumeInfo} ref={printRef} />;
            case 3: return <Template3 resumeInfo={resumeInfo} ref={printRef} />;
            case 4: return <Template4 resumeInfo={resumeInfo} ref={printRef} />;
            default: return <Template1 resumeInfo={resumeInfo} ref={printRef} />;
        }
    };

    if (!resumeInfo) {
        return <div>Loading...</div>;
    }

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <Header />
                <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                    <h2 className='text-center text-2xl font-medium'>
                        Congrats! Your Ultimate AI generated Resume is ready!
                    </h2>
                    <p className='text-center text-gray-400'>
                        Download or share your resume with a unique link
                    </p>
                    <div className='flex justify-between px-44 my-10'>
                        <Button onClick={HandleDownload}>Download PDF</Button>
                        <RWebShare
                            data={{
                                text: "Hello Everyone, This is my resume. Open the URL to view it.",
                                url: `${import.meta.env.VITE_API_BASE_URL}/my-resume/${resumeId}/view`,
                                title: `${resumeInfo?.firstName} ${resumeInfo?.lastName}'s Resume`,
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <Button>Share</Button>
                        </RWebShare>
                    </div>
                </div>
            </div>
            <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                {renderTemplate()}
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default ViewResume;
