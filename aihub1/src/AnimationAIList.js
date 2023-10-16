import React from 'react'
import ListItems from './ListItems'
const AnimationAIList = ({search}) => {
    const AnimationAI=[ {name:'Vyond',link:'https://www.vyond.com/plans/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=headline&utm_term=vyond&gad=1&gclid=Cj0KCQjwm66pBhDQARIsALIR2zB0hUYWwRF6pS1DHd_o1c2T_wTAVzeq1UANUPMhdCwx1-wIj3w--bAaArpcEALw_wcB',path:'./images/vyond-logo.jpg',description:'Vyond combines an intuitive, powerful video editing platform with training, support, and enterprise-level security to ensure that organizations of any size and individuals of any skill level can make media that moves.'},
                        {name:'Glia Star',link:'https://www.gliastar.com/',path:'./images/gliastar-logo.jpg',description:'GliaStar is an AI-powered video creation tool that can animate mascots through text input. This tool is good for very simple character animation when you want to get a result quickly. All you need to do is to choose a character and type in your message. GliaStar will automatically generate animation in minutes.'},
                        {name:'LeiaPix',link:'https://convert.leiapix.com/',path:'./images/leiapix-logo.jpg',description:'LeiaPix Converter enables instant conversion of 2D images into beautiful 3D Lightfield images. Export to Leia Image Format, Side-By-Side 3D, Depth Map, or Lightfield Animation. Upload an image to upgrade to Lightfield.'},
                        {name:'InstaVerse',link:'https://theinstaverse.com/',path:'./images/instaverse-logo.jpg',description:'instaVerse tool is a 3D world creation tool that uses AI to create a playable 3D world with just one click.'},
                        {name:'RunWayML Gen-2',link:'https://research.runwayml.com/gen2',path:'./images/runwaygen2-logo.jpg',description:'Gen-2: The Next Step. Forward for Generative AI. A multimodal AI system that can generate novel videos with text, images or video clips. No lights.'},
                        {name:'Animation Drawing',link:'https://sketch.metademolab.com/',path:'./images/animateddrawings-logo.jpg',description:'Animated Drawings combines different techniques to reach its goal, including object detection to predict a tight bounding box encompassing the figure; image segmentation to separate pixels belonging to the human figure from those belonging to the background; and pose estimation to identify a series of skeletal joints'}
                       ]
    const a=AnimationAI.filter((singleAI)=>(singleAI.name.toLowerCase().includes(search.toLowerCase())))  
    return (
        <div>
        <h3 className='listHeading'>ANIMATION RELATED AI TOOLS</h3>
        <ul>
        {
      search ? 
              (
                a.length ? a.map((singleAI)=><ListItems singleAI={singleAI}/>) 
                        : (<p style={{fontSize:'150%',textAlign:'center',marginTop:'1rem',marginLeft:'13rem',textTransform:'capitalize'}}>"Sorry, your we couldn't find the AI tool that you are looking for.<br /> Please Let us know what you are looking for in the 'SUGGESTIONS' tap" </p>) 
              ) 
              
              : 
              
              (
                AnimationAI.map((singleAI)=><ListItems singleAI={singleAI}/>)
              )
    }
        </ul>
        </div>
        )
        }
export default AnimationAIList