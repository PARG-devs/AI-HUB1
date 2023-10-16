import React from 'react'
import AIList from './AIList'
import ImageAIList from './ImageAIList'
import VideoAIList from './VideoAIlist'
import VoiceAIList from './VoiceAIList'
import AnimationAIList from './AnimationAIList'
import StoryAIList from './StoryAIList'
const Main = ({search2,search}) => {
  return (
    <div className='Main'>
      {(search2) ? (
                      search2.toLowerCase().includes('image') || search2.toLowerCase().includes('text to image') ? <ImageAIList search={search} /> :
                        search2.toLowerCase().includes('video') || search2.toLowerCase().includes('text to video') || search2.toLowerCase().includes('image to video')? <VideoAIList search={search} /> :
                          search2.toLowerCase().includes('voice') || search2.toLowerCase().includes('text to voice') || search2.toLowerCase().includes('speech') ? <VoiceAIList search={search} /> :
                            search2.toLowerCase().includes('animation') || search2.toLowerCase().includes('text to animation') || search2.toLowerCase().includes('cartoon') || search2.toLowerCase().includes('anime') ? <AnimationAIList search={search} /> :
                              search2.toLowerCase().includes('script') || search2.toLowerCase().includes('dialog') || search2.toLowerCase().includes('story') || search2.toLowerCase().includes('narration') ? <StoryAIList search={search} /> :
                                search2.toLowerCase().includes('open') || search2.toLowerCase().includes('text') ? <AIList search={search} /> :
                                  <p style={{fontSize:'150%',textAlign:'center',marginTop:'5rem',marginLeft:'3rem',textTransform:'capitalize'}}>"Sorry, your we couldn't find the category you are looking for.<br /> Please Let us know what you are looking for in the 'SUGGESTIONS' tap" </p>
                  ) :  (
                    <>
                        <AIList search={search}/>
                        <ImageAIList search={search} />
                        <VideoAIList search={search} />
                        <VoiceAIList search={search}  />
                        <AnimationAIList search={search} />
                        <StoryAIList search={search} />
                    </>
                  )}
    </div>
  )
}

export default Main