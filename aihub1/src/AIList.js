import React from 'react'
import ListItems from './ListItems'

const AIList = ({search}) => {
    const openAI=[
                  {name:'ChatGPT',link:'https://chat.openai.com/',description:'ChatGPT is an artificial intelligence (AI) chatbot that uses natural language processing to create humanlike conversational dialogue. The language model can respond to questions and compose various written content, including articles, social media posts, essays, code and emails.',path:'./images/chatgpt-logo.jpg'},
                  {name:'Bard',link:'https://bard.google.com/chat',description:'Google Bard is an AI-powered chatbot tool designed by Google to simulate human conversations using natural language processing and machine learning.',path:'./images/bard-logo.jpg'},
                  {name:'Bing',link:'https://www.bing.com/?/ai',description:'Bing Chat is an in-browser AI-powered chatbot. It can respond to diverse prompts effectively, concisely, and conversationally. It works just like ChatGPT, but can provide more up-to-date information. The generative AI model behind Bing Chat uses the same training data as older ChatGPT models.',path:'./images/bing-logo.jpg'},
                  {name:'Copy.ai',link:'https://www.copy.ai/',description:'Copy AI is an artificial intelligence writing tool that uses machine learning to generate various types of content, including blog headlines, emails, social media content, web copy, and more. Built on top of OpenAIs GPT-3 large language model (LLM), Copy AI is designed to help users with the copywriting process.',path:'./images/copyai-logo.jpg'},
                  {name:'Grammarly',link:'https://www.grammarly.com/',description:'Grammarly is a writing assistant that job seekers, writers, and other professionals can use to proofread and edit their documents. It checks for spelling, grammar, and punctuation errors, and it enhances vocabulary usage.',path:'./images/grammerly-logo.jpg'},
                  {name:'Quillbot',link:'https://quillbot.com/',description:'QuillBot can instantly improve your writing, cut out unnecessary words, and help you deliver a clear message. Find the Right Synonym QuillBot helps you find the perfect word every time with a built-in thesaurus function to easily change individual words.',path:'./images/quillbot-logo.jpg'},
                  {name:'Chatpdf',link:'https://www.chatpdf.com/',description:'ChatPDF is an AI-powered app that will make reading journal articles easier and faster. Simply upload a PDF and start asking it questions. Its like ChatGPT, but for research papers.',path:'./images/chatpdf-logo.jpg'},
                  {name:'UpWord',link:'https://upword.co/',description:'Upword helps you search, retrieve and surface all your textual data. Its like having a personalized ChatGPT for your knowledge. Convert your work into online documents like blogs, reports or essays. Share and collaborate with ease.',path:'./images/upword-logo.jpg'},
                  {name:'YouChat',link:'https://you.com/search?q=who+are+you&tbm=youchat&cfr=chat',description:'Offered by You.com, YouChat provides a prompt where you can submit a request, question, or search query. In return, it displays an AI-generated response along with website links for you to investigate the results. Beyond looking for general information, you can search for images, videos, news, maps, and more.',path:'./images/youchat-logo.jpg'},
                  {name:'Doctrina AI',link:'https://www.doctrina.ai/',description:'Doctrina AI: A Powerful Tool for Enhanced Learning Doctrina ai, powered by OpenAI GPT-3, a natural language processing model, uses AI technology to transform the learning process. This AI-powered learning tool provides a personalized learning experience, adapting to each students individual learning style and pace.',path:'./images/doctrina-logo.jpg'},
                  {name:'Tutor',link:'https://www.tutorai.me/',description:'With Tutor AI, you can now ask students questions within your course content, and an intelligent AI-powered assistant will chat with them in real time to provide guidance and help them arrive at the correct answer. One challenge of online courses is that students lack the immediate support of a teacher or instructor.',path:'./images/tutorai-logo.jpg'}
                ]
                const a=openAI.filter((singleAI)=>(singleAI.name.toLowerCase().includes(search.toLowerCase())))
  return (
    <div>
        <h3 className='listHeading'>OPEN AI AND TEXT AI TOOLS</h3>
        <ul>
        {
      search ? 
              (
                a.length ? a.map((singleAI)=><ListItems singleAI={singleAI}/>) 
                        : (<p style={{fontSize:'150%',textAlign:'center',marginTop:'1rem',marginLeft:'13rem',textTransform:'capitalize'}}>"Sorry, your we couldn't find the AI tool that you are looking for.<br /> Please Let us know what you are looking for in the 'SUGGESTIONS' tap" </p>) 
              ) 
              
              : 
              
              (
                openAI.map((singleAI)=><ListItems singleAI={singleAI}/>)
              )
    }
        </ul>
    </div>
  )
}

export default AIList