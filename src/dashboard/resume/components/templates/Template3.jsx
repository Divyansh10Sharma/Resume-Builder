import React, { forwardRef } from 'react';

const Template2 = forwardRef(({ resumeInfo }, ref) => {
    if (!resumeInfo) return null;

    return (
        <div ref={ref} className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-blue-50 shadow-xl rounded-lg">
            {/* Header */}
            <header className="flex items-center justify-between bg-blue-600 text-white p-6 rounded-t-lg">
                <div>
                    <h1 className="text-3xl font-bold">
                        {resumeInfo?.firstName} {resumeInfo?.lastName}
                    </h1>
                    <p className="text-lg font-medium">{resumeInfo?.jobTitle}</p>
                </div>
                <div className="text-sm">
                    <p>{resumeInfo?.email}</p>
                    <p>{resumeInfo?.phone}</p>
                    <p>{resumeInfo?.address}</p>
                </div>
            </header>

            {/* Summary */}
            <section className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
                    Professional Summary
                </h2>
                <p className="text-gray-700">
                    {resumeInfo?.summery || 'A dedicated professional with extensive experience...'}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
                    Work Experience
                </h2>
                {resumeInfo?.Experience?.map((exp, index) => (
                    <div key={index} className="mb-5 border-b border-gray-200 pb-4 last:border-b-0">
                        <h3 className="font-semibold text-lg text-gray-800">{exp?.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {exp?.companyName}, {exp?.city}, {exp?.state} | {exp?.startDate} - {exp?.endDate}
                        </p>
                        <div
                            className="text-sm text-gray-700 mt-2"
                            dangerouslySetInnerHTML={{ __html: exp?.workSummery }}
                        />
                    </div>
                ))}
            </section>

            {/* Education */}
            <section className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
                    Education
                </h2>
                {resumeInfo?.education?.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold text-gray-800">{edu?.degree} in {edu?.major}</h3>
                        <p className="text-gray-600 text-sm">
                            {edu?.universityName} | {edu?.startDate} - {edu?.endDate}
                        </p>
                        <p className="text-sm text-gray-700">{edu?.description}</p>
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
                    Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resumeInfo?.skills?.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                            <span className="text-gray-800 font-medium">{skill?.name}</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-3 w-3 rounded-full ${
                                            i < skill?.rating ? 'bg-green-500' : 'bg-gray-300'
                                        }`}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
});

export default Template2;