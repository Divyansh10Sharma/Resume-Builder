import React, { forwardRef } from 'react';

const Template4 = forwardRef(({ resumeInfo }, ref) => {
    if (!resumeInfo) return null;

    return (
        <div ref={ref} className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-white to-purple-50 shadow-2xl rounded-xl">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-t-xl mb-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        {resumeInfo?.firstName} {resumeInfo?.lastName}
                    </h1>
                    <p className="text-lg font-medium mt-1">{resumeInfo?.jobTitle}</p>
                    <p className="text-sm mt-2 opacity-90">
                        {resumeInfo?.email} | {resumeInfo?.phone} | {resumeInfo?.address}
                    </p>
                </div>
            </header>

            {/* Summary */}
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-300 pb-2 mb-3">
                    Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    {resumeInfo?.summery || 'A dedicated professional with extensive experience...'}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-300 pb-2 mb-3">
                    Work Experience
                </h2>
                {resumeInfo?.Experience?.map((exp, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800">{exp?.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {exp?.companyName}, {exp?.city}, {exp?.state} | {exp?.startDate} - {exp?.endDate}
                        </p>
                        <div
                            className="text-sm text-gray-700 mt-2 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: exp?.workSummery }}
                        />
                    </div>
                ))}
            </section>

            {/* Education */}
            <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-300 pb-2 mb-3">
                    Education
                </h2>
                {resumeInfo?.education?.map((edu, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800">{edu?.degree} in {edu?.major}</h3>
                        <p className="text-gray-600 text-sm">
                            {edu?.universityName} | {edu?.startDate} - {edu?.endDate}
                        </p>
                        <p className="text-sm text-gray-700">{edu?.description}</p>
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-300 pb-2 mb-3">
                    Skills
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resumeInfo?.skills?.map((skill, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-purple-50 p-3 rounded-md"
                        >
                            <span className="text-gray-800 font-medium">{skill?.name}</span>
                            <div className="flex gap-1.5">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-3 w-3 rounded-full ${
                                            i < skill?.rating ? 'bg-purple-500' : 'bg-gray-200'
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

export default Template4;