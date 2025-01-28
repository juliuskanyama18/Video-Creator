let leftPanelMain=document.getElementById('leftPanel')
let ScriptDiv=document.getElementById("ScriptDiv")

const leftPanel=document.createElement("div")
leftPanel.className="leftPanel"
leftPanel.id="leftPanel"
// leftPanel.textContent="animation panel"
leftPanel.style.color="white"

leftPanel.style.boxShadow = '1px 8px 24px 0px rgb(217, 218, 226)'

leftPanel.style.borderRadius='13px'
leftPanel.style.alignItems='top'
leftPanel.style.display='grid'
leftPanel.style.gridTemplateRows='repeat(6, 1fr )'

leftPanel.style.backgroundColor='white'
leftPanel.style.alignItems = 'start'; 
leftPanel.style.zIndex='99999'
leftPanel.style.gridRow='-1 / -7'
leftPanelMain.appendChild(leftPanel)




let divscript=document.createElement("div")
divscript.className="divscript"
divscript.id="divscript"

divscript.style.width='100%'
divscript.style.height='100%'
divscript.style.borderBottom='2px solid #f7f2f6'
// divscript.style.backgroundColor='black'
divscript.style.display='grid'
divscript.style.gap='12px'
divscript.style.borderTop='-webkit-box-shadow: 8px -7px 24px -14px rgba(66, 68, 90, 1)'
divscript.style.gridTemplateRows='1fr 1fr'
divscript.style.alignItems='center'
divscript.style.gridRow='-1/-1'
divscript.style.cursor='pointer'
leftPanel.appendChild(divscript)



let ScriptIcon=document.createElement("img")
ScriptIcon.src="images/icon/fi-rr-notebook.svg"
ScriptIcon.style.width='20px'
ScriptIcon.style.width='20px'


ScriptIcon.id='ScriptIcon'
ScriptIcon.className='ScriptIcon'
ScriptIcon.style.cursor='pointer'
ScriptIcon.style.marginLeft='14px'

ScriptIcon.style.alignItems='centre'

divscript.appendChild(ScriptIcon)


let scriptSpan=document.createElement('span')
scriptSpan.className='scriptSpan'
scriptSpan.id='scriptSpan'
scriptSpan.className='scriptSpan'
scriptSpan.innerHTML='Script'
scriptSpan.style.color='black'

scriptSpan.style.fontSize='10px'
scriptSpan.style.marginLeft='10px'
scriptSpan.style.marginTop='-25px'




divscript.appendChild(scriptSpan)

divscript.addEventListener('click',function(e){

    // if(e.target==ScriptIcon){
            // Initial setup
ScriptDiv.style.width = '0px'; // Start with width 0
ScriptDiv.style.overflow = 'hidden'; // Prevent content overflow
ScriptDiv.style.transition = 'width 0.9s ease-in-out, transform 0.9s ease-in-out';
  Scriptplay.style.display='none'
// Trigger animation
setTimeout(() => {
    ScriptDiv.style.width = '67.2%'; // Grow to its full width
    ScriptDiv.style.transform = 'translateX(0%)'; // Move it out of view
}, 300); 


setTimeout(()=>{

    Scriptplay.style.display='grid'
            },1000)
    

})










document.addEventListener('click',function(event){

    if(!divscript.contains(event.target) && (!ScriptDiv.contains(event.target) && (!Scriptplay.contains(event.target)))){

Scriptplay
        ScriptDiv.style.display='none' 
         Scriptplay.style.display='none'

    }else{

         
        ScriptDiv.style.display='grid'
        mainBar.style.display = 'none';


        setTimeout(()=>{

Scriptplay.style.display='grid'
        },1000)

    }       


})





        ScriptIcon.addEventListener('mouseover',function(){

            ScriptIcon.style.transform='scale(0.8)'
            scriptSpan.style.transform='scale(0.9)'
            ScriptIcon.style.transition='transform 0.4s ease'

          })

          ScriptIcon.addEventListener('mouseout',function(){

            ScriptIcon.style.transform='scale(1)'
             scriptSpan.style.transform='scale(1)'
            ScriptIcon.style.transition='transform 0.4s ease'

            })