import React, { forwardRef } from 'react';

const Template1 = forwardRef(({ resumeInfo }, ref) => {
    if (!resumeInfo) return null;

    return (
        <div ref={ref} className='max-w-4xl mx-auto p-8 bg-white shadow-lg'>
            {/* Header */}
            <header className='text-center border-b pb-4 mb-4'>
                <h1 className='text-3xl font-bold'>
                    {resumeInfo?.firstName} {resumeInfo?.lastName}
                </h1>
                <p className='text-gray-600'>
                    {resumeInfo?.jobTitle}
                </p>
                <p className='text-gray-500 text-sm'>
                    {resumeInfo?.email} | {resumeInfo?.phone} | {resumeInfo?.address}
                </p>
            </header>

            {/* Summary */}
            <section className='mb-6'>
                <h2 className='text-xl font-semibold border-b mb-2'>Professional Summary</h2>
                <p>{resumeInfo?.summery || 'A dedicated professional with extensive experience...'}</p>
            </section>

            {/* Work Experience */}
            <section className='mb-6'>
                <h2 className='text-xl font-semibold border-b mb-2'>Work Experience</h2>
                {resumeInfo?.Experience?.map((exp, index) => (
                    <div key={index} className='mb-4'>
                        <h3 className='font-medium text-lg'>{exp?.title}</h3>
                        <p className='text-gray-600'>
                            {exp?.companyName}, {exp?.city}, {exp?.state} | {exp?.startDate} - {exp?.endDate}
                        </p>
                        <div
                            className='text-sm mt-2'
                            dangerouslySetInnerHTML={{ __html: exp?.workSummery }}
                        />
                    </div>
                ))}
            </section>

            {/* Education */}
            <section className='mb-6'>
                <h2 className='text-xl font-semibold border-b mb-2'>Education</h2>
                {resumeInfo?.education?.map((edu, index) => (
                    <div key={index} className='mb-2'>
                        <h3 className='font-medium'>{edu?.degree} in {edu?.major}</h3>
                        <p className='text-gray-600'>
                            {edu?.universityName} | {edu?.startDate} - {edu?.endDate}
                        </p>
                        <p className='text-sm'>{edu?.description}</p>
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section>
                <h2 className='text-xl font-semibold border-b mb-2'>Skills</h2>
                <ul className='space-y-2'>
                    {resumeInfo?.skills?.map((skill, index) => (
                        <li key={index} className='flex justify-between items-center'>
                            <span>{skill?.name}</span>
                            <div className='flex gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-2 w-2 rounded-full ${
                                            i < skill?.rating ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    ></span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
});

export default Template1;
