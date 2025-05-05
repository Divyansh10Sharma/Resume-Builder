import React, { forwardRef } from 'react';

const Template5 = forwardRef(({ resumeInfo }, ref) => {
    if (!resumeInfo) return null;

    return (
        <div ref={ref} className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-100 to-teal-50 shadow-xl rounded-xl">
            {/* Header */}
            <header className="bg-teal-600 text-white p-6 rounded-t-xl mb-6 text-center">
                <h1 className="text-3xl font-bold tracking-wide">
                    {resumeInfo?.firstName} {resumeInfo?.lastName}
                </h1>
                <p className="text-lg font-medium mt-1">{resumeInfo?.jobTitle}</p>
                <p className="text-sm mt-2 opacity-90">
                    {resumeInfo?.email} | {resumeInfo?.phone} | {resumeInfo?.address}
                </p>
            </header>

            {/* Summary */}
            <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
                    About Me
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    {resumeInfo?.summery || 'Results-driven professional pursuing excellence in developing robust applications.'}
                </p>
            </section>

            {/* Education */}
            <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
                    Education
                </h2>
                {resumeInfo?.education?.map((edu, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <h3 className="font-semibold text-gray-800">
                            {edu?.degree} {edu?.major && `in ${edu?.major}`}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {edu?.universityName} | {edu?.startDate} - {edu?.endDate}
                        </p>
                        {edu?.description && <p className="text-sm text-gray-700">{edu?.description}</p>}
                    </div>
                ))}
            </section>

            {/* Skills */}
            <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
                    Skills
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {resumeInfo?.skills?.map((skill, index) => (
                        <li
                            key={index}
                            className="flex items-center bg-teal-50 p-3 rounded-md"
                        >
                            <span className="text-gray-800 font-medium">{skill?.name}</span>
                            <div className="flex gap-1 ml-auto">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-2 w-2 rounded-full ${
                                            i < skill?.rating ? 'bg-teal-500' : 'bg-gray-200'
                                        }`}
                                    ></span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Academic Projects */}
            <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
                    Academic Projects
                </h2>
                {resumeInfo?.Experience?.map((exp, index) => (
                    <div key={index} className="mb-5 last:mb-0">
                        <h3 className="font-semibold text-lg text-gray-800">{exp?.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {exp?.companyName}
                            {(exp?.city || exp?.state) && `, ${exp?.city}${exp?.state ? `, ${exp?.state}` : ''}`}
                            {(exp?.startDate || exp?.endDate) && ` | ${exp?.startDate} - ${exp?.endDate}`}
                        </p>
                        <div
                            className="text-sm text-gray-700 mt-2 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: exp?.workSummery }}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
});

export default Template5;