import React from 'react'
import ListItems from './ListItems'
const ImageAIList = ({search}) => {
    const imageAI=[
        {name:'Leonardo AI',link:'https://leonardo.ai/',description:'Leonardo.Ai is a tool that uses AI to create stunning game assets, such as items, environments, helmets, buildings, and concept art. It enables users to rapidly ideate, train their own AI models, and create unique production-ready assets with an artist-friendly interface.',path:'./images/leonardoai-logo.jpg'},
        {name:'Dall.E2',link:'https://openai.com/dall-e-2',description:'DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.',path:'./images/dallee2-logo.jpg'},
        {name:'Bing Image Generator',link:'https://www.bing.com/create',description:'Bing Image Creator is powered by an advanced version of OpenAIs DALL.E model which allows users to create an image by using their words to describe the picture they want to see. This new addition enabled users to generate both written and visual content in one place, from within the chat.',path:'./images/bingimgai-logo.jpg'},
        {name:'BlueWillow',link:'https://www.bluewillow.ai/',description:'BlueWillow AI is an image generating AI tool designed to help users create logos, graphics, photo-realistic scenes, and more. The user simply enters a prompt and the tool will generate a wide range of images to be used for any project.',path:'./images/bluewillow-logo.jpg'},
        {name:'Adope Firefly',link:'https://www.adobe.com/in/sensei/generative-ai/firefly.html?gclid=CjwKCAjw-KipBhBtEiwAWjgwrF6_oqrxWDeHfEkUkKw02wYYiSVL8XFAqFL4G8KbbTlBJTjlako-jxoCQ6EQAvD_BwE&sdid=25XLCMPL&mv=search&mv2=paidsearch&ef_id=CjwKCAjw-KipBhBtEiwAWjgwrF6_oqrxWDeHfEkUkKw02wYYiSVL8XFAqFL4G8KbbTlBJTjlako-jxoCQ6EQAvD_BwE:G:s&s_kwcid=AL!3085!3!673705128625!e!!g!!adobe%20firefly!20525418230!154633832113',description:'Adobe Firefly is a new family of creative generative AI models and is accessible as a standalone web application available at firefly.adobe.com and through features powered by Firefly in Adobes flagship apps.',path:'./images/adobefirefly-logo.jpg'},
        {name:'NightCafe',link:'https://creator.nightcafe.studio/',path:'./images/nightcafe-logo.jpg',description:'NightCafe Creator is an AI Art Generator app with multiple methods of AI art generation. Using neural style transfer you can turn your photo into a masterpiece. Using text-to-image AI, you can create an artwork from nothing but words on a page.'},
        {name:'Stable Diffusion Web',link:'https://stablediffusionweb.com/',path:'./images/stablediffusion-logo.jpg',description:'Stable Diffusion XL is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input, cultivates autonomous freedom to produce incredible imagery, empowers billions of people to create stunning art within seconds. Create beautiful AI art using stable diffusion ONLINE for free.'},
        {name:'Craiyon',link:'https://www.craiyon.com/',path:'./images/craiyon-logo.jpg',description:'Craiyon is an artificial intelligence image generator capable of generating images from text prompts. Overview.'}
      ]
      const a=imageAI.filter((singleAI)=>(singleAI.name.toLowerCase().includes(search.toLowerCase())))    
return (
<div>
<h3 className='listHeading'>IMAGE GENERATING AI TOOLS</h3>
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
                imageAI.map((singleAI)=><ListItems singleAI={singleAI}/>)
              )
    }
</ul>
</div>
</div>
)
}

export default ImageAIList