import React from 'react'
import ListItems from './ListItems'

const VideoAIList = ({search}) => {
    const videoAI=[
        {name:'invideo AI',link:'https://invideo.io/make/add-text-to-video-online/',path:'./images/invideo-logo.jpg',description:'Invideo AI is a first of its kind AI powered text to video creation tool. You can use to create first cuts for any videos idea by simply entering the idea.'},
        {name:'VideoGen',link:'https://videogen.io/',path:'./images/videogen-logo.jpg',description:' VideoGen is an easy-to-use video creation tool that enables users to generate videos in seconds. VideoGen uses state-of-the-art AI technology to intelligently search and compile relevant clips in the background '},
         {name:'Dream by WOMBO',link:'https://www.w.ai/',description:' WOMBO Dream - AI Art Generator is an art station for you. You can turn text into any image or photo you want. Its like magic: simply type in whatever you want Dream to paint - such as Alien Space Station or Rainbow Forest - pick a style (Realistic, VFX, Anime, Avatar, Street Art etc.)',path:'./images/wombo-logo.jpg'},
        {name:'Yepic AI',link:'https://www.yepic.ai/',path:'./images/yepic-logo.jpg',description:'Yepics API allows you to create video in real-time at scale. Give your video workflow AI Video super powers or use our studio SDK (coming soon) to give your users the capability to create, edit and personalise AI generated videos within your solution.'},
        {name:'pictory',link:'https://pictory.ai/',path:'./images/pictory-logo.jpg',description:'Pictorys AI engine automatically selects the best images and video footage representing the summary sentences. Pictory offers over 3 million visuals which are royalty-free and licensed from various sources. You can easily change these visuals with a single click and even use your own assets.'},
        {name:'Deepbrain AI',link:'https://www.deepbrain.io/#:~:text=The%20platforms%20AI%20avatars%20can,businesses%20reach%20their%20target%20audience.&text=AI%20Studios%20a%20range%20of,saving%20freelancers%20time%20and%20resources.',path:'./images/deepbrain-logo.jpg',description:'The platforms AI avatars can be used to create realistic and engaging videos that can help businesses reach their target audience. AI Studios a range of pre-built models and templates that can be easily customized to meet clients specific needs, saving freelancers time and resources.'},
        {name:'Synthesys',link:'https://synthesys.io/',path:'./images/synthesys-logo.jpg',description:'Synthesys AI Studio is an all-in-one platform that uses advanced artificial intelligence technology to create high-quality human-like voices, videos, and images. It offers over 100 ultra-life-like voices, multi-voice functionality, and text-to-image technology.'},
        {name:'HeyGen',link:'https://www.heygen.com/',path:'./images/heygen-logo.jpg',description:'HeyGen AI Video Generator is an online platform that allows users to create talking avatar videos with the support of HeyGen AI in minutes. With the HeyGen App collection of over 100 AI avatars and over 300 voices available in 40+ languages.'},
        {name:'Neural Frames',link:'https://www.neuralframes.com/',path:'./images/neuralframes-logo.jpg',description:'Neural Frames is an AI animation generation tool that allows users to create stunning digital art using just a few words as prompts. The AI animation generator is based on Stable Diffusion, an artificial neural network that has been trained on 2.7 billion images.'},
        {name:'Veed.io',link:'https://www.veed.io/?utm_source=google&utm_medium=cpc&utm_campaign=Search_PerfomanceMax_Youtube_ROW_ENG_Speaking&utm_content=&utm_term=&gad=1&gclid=CjwKCAjw-KipBhBtEiwAWjgwrJ_ETzbLjduQQ_YRvSb-2WCZCpd_tKwSeKNOyA-wu8gj1Vr_HmoXLRoC2tgQAvD_BwE',path:'./images/veed-logo.jpg',description:'VEED.IO is an AI-powered online video editing platform that makes creating videos easy and accessible to everyone.'},
        {name:'KapWing',link:'https://www.kapwing.com/ai',path:'./images/kapwing-logo.jpg',description:'AI-enhanced editing in Kapwing unlocks one-click automatic subtitles, audio cleaning,silence removal, voice over generation, and text-based video editing: the ability to edit any video just by editing the transcript.'},
        {name:'Steve.AI',link:'https://www.steve.ai/',path:'./images/steveai-logo.jpg',description:'Steve.AI is an AI (Artificial Intelligence)-based online video creation platform that enables brands and businesses to create engaging videos for social media, advertising, storytelling, and more.'},
      ]

 const a= videoAI.filter((singleAI)=>(singleAI.name.toLowerCase().includes(search.toLowerCase())))
return (
<div>
<h3 className='listHeading'>VIDEO RELATED AI TOOLS</h3>
<ul>
{
      search ? 
              (
                a.length ? a.map((singleAI)=><ListItems singleAI={singleAI}/>) 
                        : (<p style={{fontSize:'150%',textAlign:'center',marginTop:'1rem',marginLeft:'13rem',textTransform:'capitalize'}}>"Sorry, your we couldn't find the AI tool that you are looking for.<br /> Please Let us know what you are looking for in the 'SUGGESTIONS' tap" </p>) 
              ) 
              
              : 
              
              (
                videoAI.map((singleAI)=><ListItems singleAI={singleAI}/>)
              )
    }
</ul>
</div>
)
}

export default VideoAIList