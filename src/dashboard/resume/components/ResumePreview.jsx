import React, { useContext, forwardRef } from 'react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

const ResumePreview = forwardRef((props, ref) => {
    const { resumeInfo } = useContext(ResumeInfoContext);

    return (
        <div ref={ref} className='shadow-lg h-full p-14 border-t-[20px]'
            style={{ borderColor: resumeInfo?.themeColor }}>
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            <SummeryPreview resumeInfo={resumeInfo} />
            {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
            {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
            {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
        </div>
    );
});

export default ResumePreview;