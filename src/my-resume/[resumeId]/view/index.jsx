import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'

function ViewResume() {

     const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const {resumeId}=useParams();

    useEffect(()=>{
        GetResumeInfo();
    },[])
    
    const GetResumeInfo = async () => {
    //     try {
           
    //     } catch (error) {
    //         console.error("Error fetching resume info:", error);
    //     }
    // }
         const resp = await GlobalApi.GetResumeById(resumeId);
            setResumeInfo(resp.data.data);
    }
    
    if (!resumeInfo) {
        return <div>Loading...</div>; // Or a more sophisticated loading component
    }

    const HandleDownload=()=>{
        window.print();
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
        <div id="no-print">
        <Header/>

        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
            <h2 className='text-center text-2xl font-medium'>
                Congrats! Your Ultimate AI generates Resume is ready ! </h2>
                <p className='text-center text-gray-400'>Now you are ready to download your resume and you can share unique 
                    resume url with your friends and family </p>
            <div className='flex justify-between px-44 my-10'>
                <Button onClick={HandleDownload}>Download</Button>
               
                <RWebShare
        data={{
          text: "Hello Everyone, This is my resume please open url to see it",
          url: import.meta.env.VITE_API_BASE_URL+"/my-resume/"+resumeId+"/view",
          title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
        }}
        onClick={() => console.log("shared successfully!")}
      > <Button>Share</Button>
      </RWebShare>
            </div>
        </div>
            
        </div>
        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
        <div id="print-area" >
                <ResumePreview/>
            </div>
            </div>
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume
