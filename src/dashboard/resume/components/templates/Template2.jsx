import React, { forwardRef } from 'react';

const Template2 = forwardRef(({ resumeInfo }, ref) => {
    if (!resumeInfo) return null;

    return (
        <div ref={ref} className='max-w-4xl mx-auto p-8 bg-white shadow-lg'>
            <div className='flex justify-between border-b pb-4 mb-4'>
                <div>
                    <h1 className='text-3xl font-bold'>{resumeInfo?.personal?.name || 'Your Name'}</h1>
                    <p className='text-gray-600'>
                        {resumeInfo?.personal?.email} | {resumeInfo?.personal?.phone}
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                    <section className='mb-6'>
                        <h2 className='text-lg font-semibold bg-gray-100 p-2 mb-2'>Skills</h2>
                        <ul className='list-none'>
                            {resumeInfo?.skills?.map((skill, index) => (
                                <li key={index} className='mb-1'>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-lg font-semibold bg-gray-100 p-2 mb-2'>Education</h2>
                        {resumeInfo?.education?.map((edu, index) => (
                            <div key={index} className='mb-2'>
                                <h3 className='font-medium'>{edu?.degree}</h3>
                                <p className='text-gray-600 text-sm'>{edu?.institution} | {edu?.year}</p>
                            </div>
                        ))}
                    </section>
                </div>

                <div className='col-span-2'>
                    <section className='mb-6'>
                        <h2 className='text-lg font-semibold bg-gray-100 p-2 mb-2'>Professional Summary</h2>
                        <p>{resumeInfo?.summary || 'A dedicated professional with extensive experience...'}</p>
                    </section>

                    <section>
                        <h2 className='text-lg font-semibold bg-gray-100 p-2 mb-2'>Work Experience</h2>
                        {resumeInfo?.experience?.map((exp, index) => (
                            <div key={index} className='mb-4'>
                                <h3 className='font-medium'>{exp?.title}</h3>
                                <p className='text-gray-600'>{exp?.company} | {exp?.startDate} - {exp?.endDate}</p>
                                <p>{exp?.description}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
});

export default Template2;