import React from 'react'
import ListItems from './ListItems'
const VoiceAIList = ({search}) => {
    const voiceAI=[
        {name:'Lovo.ai',link:'https://lovo.ai/',path:'./images/lovo-logo.jpg',description:'LOVOs powerful text-to-speech tool generates professional-grade voiceovers that can be used for any kind of content that requires a voiceover. This AI voice generator is also a video editor that lets you create custom voices and add subtitles, music and sound effects to create high-quality videos.'},
        {name:'11-Labs',link:'https://elevenlabs.io/',path:'./images/elevenlabs-logo.jpg',description:'ElevenLabs is a voice AI research & deployment company with a mission to make content universally accessible in any language & voice. ElevenLabs creates the most realistic, versatile and contextually-aware AI audio, providing the ability to generate speech in hundreds of new and existing voices in over 20 languages.'},
        {name:'Speechify',link:'https://speechify.com/?source=fb-for-mobile&gclid=Cj0KCQjwm66pBhDQARIsALIR2zD_ygQIvTxH9r_v5D9r8wT4n18txOf-2ddC2pLBwVuYJmqbJ2AKSnAaAk-6EALw_wcB&via=okokok',path:'./images/speechify-logo.jpg',description:'Speechify is the #1 AI Voice Over Generator. Create human quality voice over recordings in real time. Narrate text, videos, explainers – anything you have – in any style. Download Now for free for a play button like this on every website you visit.'},
        {name:'Murf',link:'https://murf.ai/',path:'./images/murfai-logo.jpg',description:'Murf is a great tool with the ability to sync high quality voice overs to video. The library of pre-recorded voice options, screen recording is just what you need to help you create a slick video quickly.'},
        {name:'Listnr',link:'https://listnr.ai/',path:'./images/listnr-logo.jpg',description:'Built on advanced AI and NLP functionality, it automatically scans and analyses the free-text answers to provide an immediate overview.'},
        {name:'Wellsaid Labs',link:'https://wellsaidlabs.com/',path:'./images/wellsaidlabs-logo.jpg',description:'WellSaid Labs is a developer of art text-to-speech technology that creates life-like synthetic voices, from the voices of real people.'},
        {name:'Neural Voice-Azure',link:'https://learn.microsoft.com/en-us/azure/ai-services/speech-service/custom-neural-voice',path:'./images/azure-logo.jpg',description:'Custom Neural Voice is a text to speech feature that lets you create a one-of-a-kind, customized, synthetic voice for your applications. With Custom Neural Voice, you can build a highly natural-sounding voice for your brand or characters by providing human speech samples as training data'},
        {name:'PlayHt',link:'https://play.ht/',path:'./images/playht-logo.jpg',description:'Play.ht offers state-of-the-art Ai Voices to help you create engaging voiceovers for your projects. We at Play.ht strive to make make creating voiceovers from text simple, hassle-free and affordable by using Ai and Machine Learning to build ultra-realistic voices and simple user interfaces.'},
        {name:'Sonantic',link:'https://app.sonantic.io/user/login?redirect=%2F',path:'./images/sonantic-logo.jpg',description:'This AI is a TTS software that has become popular among content creators over the last two years. It uses machine learning technology and artificial intelligence to create synthetic voices for various applications such as explainer videos, YouTube videos, and other types of content that need a natural-sounding speech.'},
        {name:'Amazon polly',link:'https://aws.amazon.com/polly/',path:'./images/amazonpolly-logo.jpg',description:'Amazon Polly is a text-to-speech service within the Amazon Web Services cloud platform. It uses deep learning technology to allow applications to speak with a human-like voice. Amazon Polly is primarily for software developers, who use the service to speech-enable their applications.'},
        {name:'Respeecher',link:'https://www.respeecher.com/',path:'./images/respeecher-logo.jpg',description:'Respeecher is a remarkable tool for Sound Editors. It delivers very high-fidelity recreations of a target voice, with transparent performance-matching of its source. It blows text-to-speech out of the water! The effect is uncanny and incredibly effective and I can imagine a whole slew of uses going forward.'},
        {name:'Resemble AI',link:'https://www.resemble.ai/',path:'./images/resembleai-logo.jpg',description:'Resemble Localize: AI Voices With Multilingual AccentsIn the oft-evolving world of artificial intelligence, at Resemble AI we continuously push the boundaries of AI voice technology. A dynamic feature of Resemble Localize is the seamless integration of accents into English AI voices.'},
        {name:'Animaker Voice',link:'https://www.animaker.com/voice',path:'./images/animakervoice-logo.jpg',description:'“Animaker Voice is the real deal in TTS tools. Voices are unbelievably realistic! My clients were so happy and satisfied with how the voiceover matched the video and how swiftly it brought out the essence of the video to their audiences. “'},
        {name:'Descript Overdub',link:'https://www.descript.com/overdub',path:'./images/descriptoverdub-logo.jpg',description:'Descripts Overdub allows you, and only you, to train the software to speak in your voice, so you can add speech audio without re-recording, or even without recording at all. Click Overdub in Descripts Drive view, then drag in an audio file thats at least 10 minutes long — ideally at least 30 minutes.'},
      ]
      const a=voiceAI.filter((singleAI)=>(singleAI.name.toLowerCase().includes(search.toLowerCase())))
return (
<div>
<h3 className='listHeading'>VOICE RELATED AI TOOLS</h3>
<div className='ul'>
<ul>
    {
      search ? 
              (
                a.length ? a.map((singleAI)=><ListItems singleAI={singleAI}/>) 
                        : (<p style={{fontSize:'150%',textAlign:'center',marginTop:'1rem',marginLeft:'13rem',textTransform:'capitalize'}}>"Sorry, your we couldn't find the AI tool that you are looking for.<br /> Please Let us know what you are looking for in the 'SUGGESTIONS' tap" </p>) 
              ) 
              
              : 
              
              (
                voiceAI.map((singleAI)=><ListItems singleAI={singleAI}/>)
              )
    }
</ul>
</div>
</div>)

}


export default VoiceAIList