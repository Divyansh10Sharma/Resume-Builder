import React, { forwardRef } from 'react';

const Template1 = forwardRef(({ resumeInfo }, ref) => {
    if (!resumeInfo) return null;

    return (
        <div ref={ref} className='max-w-4xl mx-auto p-8 bg-white shadow-lg'>
            <header className='text-center border-b pb-4 mb-4'>
                <h1 className='text-3xl font-bold'>{resumeInfo?.personal?.name || 'Your Name'}</h1>
                <p className='text-gray-600'>
                    {resumeInfo?.personal?.email} | {resumeInfo?.personal?.phone}
                </p>
            </header>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold border-b mb-2'>Professional Summary</h2>
                <p>{resumeInfo?.summary || 'A dedicated professional with extensive experience...'}</p>
            </section>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold border-b mb-2'>Work Experience</h2>
                {resumeInfo?.experience?.map((exp, index) => (
                    <div key={index} className='mb-4'>
                        <h3 className='font-medium'>{exp?.title}</h3>
                        <p className='text-gray-600'>{exp?.company} | {exp?.startDate} - {exp?.endDate}</p>
                        <p>{exp?.description}</p>
                    </div>
                ))}
            </section>

            <section className='mb-6'>
                <h2 className='text-xl font-semibold border-b mb-2'>Education</h2>
                {resumeInfo?.education?.map((edu, index) => (
                    <div key={index} className='mb-2'>
                        <h3 className='font-medium'>{edu?.degree}</h3>
                        <p className='text-gray-600'>{edu?.institution} | {edu?.year}</p>
                    </div>
                ))}
            </section>

            <section>
                <h2 className='text-xl font-semibold border-b mb-2'>Skills</h2>
                <ul className='list-disc pl-5'>
                    {resumeInfo?.skills?.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
});

export default Template1;