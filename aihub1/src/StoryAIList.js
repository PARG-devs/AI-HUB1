import React from 'react'
import ListItems from './ListItems'
const StoryAIList = ({search}) => {
    const storyAI=[]
    const a=storyAI.filter((singleAI)=>(singleAI.name.toLowerCase().includes(search.toLowerCase())))
    return (
        <div>
        <h3 className='listHeading'>STORY RELATED AI TOOLS</h3>
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
                storyAI.map((singleAI)=><ListItems singleAI={singleAI}/>)
              )
    }
        
        </ul>
        </div>
        </div>
        )
        }
        export default StoryAIList