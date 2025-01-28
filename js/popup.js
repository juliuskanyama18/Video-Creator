




        let backgroundMain=document.getElementById("background")


        // let popupplace=document.createElement('div')
        // popupplace.style.id='popupplace'
        // popupplace.style.className='popupplace'
        // popupplace.style.width='407%'
        // popupplace.style.height='140%'
        // popupplace.style.marginLeft='-113%'
        // popupplace.style.marginTop='123%'
        // popupplace.textContent='hellllll'
        // popupplace.style.backgroundColor='black'
        // popupplace.style.position='fixed'
        // popupplace.style.zIndex='1'


        // backgroundMain.appendChild(popupplace)


        let popup =document.createElement("div")
        popup.className="popup"
        popup.id="popup"
       
        popup.style.width='200px'
        popup.style.height='250px'
        popup.style.border='0'
        popup.style.boxShadow = '1px 8px 24px 0px rgba(66, 68, 90, 1)'
        popup.style.borderRadius='15px'
        popup.style.zIndex='999'
        popup.style.transition = 'opacity 1s ease, visibility 1s ease';

        backgroundMain.appendChild(popup)



        let popupheader=document.createElement("div")
        popupheader.className="popupheader"
        popupheader.style.width='100%'
        popup.style.display='none'
        popupheader.style.height='30px'
     
           
        popupheader.style.display='grid'


        // popupheader.style.gridRow='1fr'
        //  popupheader.style.gridGap='14px'
         popupheader.style.gridTemplateColumns='1fr 1fr'


        popupheader.style.placeItems='end'

        
        
        


        // popupheader.innerHTML="<h5>Popup header</h5>"
        let headertext=document.createElement('span')
        headertext.style.fontSize='18px'
        headertext.style.fontWeight='bold'
        headertext.style.color='#000'
        // headertext.innerHTML='STYLE'
        popupheader.appendChild(headertext)

        
        popupheader.style.borderBottom='2px solid #f7f2f6'
        popupheader.fontSize='17px'
   
        popup.appendChild(popupheader)

        let closepopup=document.createElement("div")
        closepopup.className="closepopup"
        closepopup.innerHTML='X'
 
       
        closepopup.style.fontSize='12px'
        closepopup.style.cursor='pointer'
        closepopup.style.backgroundColor='white'
        closepopup.style.borderRadius='80%'
           popup.style.boxShadow = '1px 8px 24px 0px rgba(66, 68, 90, 1)'
        closepopup.style.color='#000'
        closepopup.style.position='relative'
        closepopup.style.top='-10px'
        closepopup.style.right='-10px'
        closepopup.style.padding='4px'


        let popupBody=document.createElement('div')
        popupBody.className="popupbody"
        popupBody.style.width='100%'
        popupBody.style.height='80%'
        popupBody.style.display='grid'
        popupBody.style.gridTemplateColumns='1fr 1fr  '
        popupBody.style.gridTemplateRows='1fr 1fr 1fr 1fr 1fr '

       
        // popupBody.style.gridGap='5px'
        popupBody.style.placeItems='start'
        

        popup.appendChild(popupBody)

        // let firtstcontainer=document.createElement('p')
        // firtstcontainer.className='first'
        // firtstcontainer.style.width='100%'
        // firtstcontainer.style.display

        
        

        const firstdiv=document.createElement("div")
        firstdiv.className="firstdiv"
        firstdiv.id='firstdiv'
        firstdiv.style.gridColumn = '-1 / -3';
        firstdiv.style.gridRow = '-6 / -1';
        firstdiv.style.display='grid'
        firstdiv.style.gridGap='50px'
        firstdiv.style.gridTemplateColumns='auto 1fr auto'
        firstdiv.style.alignItems='center'
        firstdiv.style.margin='5px'
        firstdiv.style.padding='10px'
        firstdiv.style.marginLeft='9px'
        // firstdiv.style.backgroundColor='red'
        firstdiv.style.cursor='pointer'

        firstdiv.addEventListener('mouseover',function(){

            firstdiv.style.transform='scale(0.96)'
            firstdiv.style.transition='transform 0.5s ease'
        })

        firstdiv.addEventListener('mouseout',function(){

            firstdiv.style.transform='scale(1)'
            firstdiv.style.transition='transform 0.5s ease'
        })
    //     grid-column: -1 / -3;
    // grid-row: -5 / -1;
    // width: 100%;
        
        // firstdiv.style.backgroundColor='red'
        firstdiv.style.width='85%'
        // firstdiv.style.height='30%'

        firstdiv.style.borderBottom='2px solid #f7f2f6'
        popupBody.appendChild(firstdiv)

        // -1 / -3 / -5 / -1

        // -5 / -1 / -1 / -3


        let textcolor1=document.createElement('span')
        textcolor1.className='textcolor1'
        textcolor1.id='textcolor1'
        textcolor1.className='textcolor1'
        textcolor1.innerHTML=''
        textcolor1.style.borderRadius='80%'
        textcolor1.style.padding='10px'
        textcolor1.style.color='#f7f2f6'
        textcolor1.style.fontSize='18px'
        textcolor1.style.backgroundColor='black'
        
        firstdiv.appendChild(textcolor1)

        // let TextColorimage=document.createElement('img')
        // TextColorimage.src='images/icon/color.png' 
        // TextColorimage.style.width='4px'
        // TextColorimage.style.height='4px'
            
        // firstdiv.appendChild(TextColorimage)

        let spanColor=document.createElement('span')

        spanColor.innerHTML='Color'
        spanColor.className='spancolor'
        spanColor.id='spanColor'
        spanColor.innerHTML='Color'
        spanColor.style.fontSize='16px'

      

        firstdiv.appendChild(spanColor)


        let arrowicon=document.createElement("img")
        arrowicon.src="images/icon/fi-rr-angle-small-right.svg"
        arrowicon.style.width='20px'
        arrowicon.style.height='20px'
       
     
        
       


        firstdiv.appendChild(arrowicon)



        let seconddiv=document.createElement('div')
        seconddiv.className='seconddiv'
        seconddiv.id='seconddiv'
        seconddiv.style.display='grid'
        seconddiv.style.gridTemplateColumns='auto 1fr auto'
      
        seconddiv.style.borderBottom='2px solid #f7f2f6'
        seconddiv.style.alignItems='center'
        seconddiv.style.gridColumn = '-1 / -3';
        seconddiv.style.gridRow = '-5 / -1';
        seconddiv.style.gridGap='38px'
        seconddiv.style.alignItems='center'
        seconddiv.style.padding='5px'
        seconddiv.style.cursor='pointer'
        seconddiv.style.marginLeft='7px'
          seconddiv.style.alignContent='start'
          
          

          seconddiv.addEventListener('mouseover', function () {
   seconddiv.style.transform='scale(0.96)'
   seconddiv.style.transition='transform 0.5s ease'
});

seconddiv.addEventListener('mouseout', function () {
    seconddiv.style.transform = 'scale(1)'; 

});

seconddiv.addEventListener('click',function(){
    seconddivrange.style.display='block'
})

       
        seconddiv.style.cursor='pointer'
        seconddiv.style.width='85%'


        let seconddivicon=document.createElement('img')
        seconddivicon.src="images/icon/opacity.png"
        seconddivicon.style.width='35px'
        seconddivicon.style.height='35px'
     

        seconddiv.appendChild(seconddivicon)
        

        let seconddivtext=document.createElement('span')
        seconddivtext.className='seconddivtext'
        seconddivtext.id='seconddivtext'
     
          seconddivtext.innerHTML='Opacity'
          seconddivtext.style.fontSize='16px'
        //   seconddivtext.style.marginLeft='34%'
         
      


        seconddiv.appendChild(seconddivtext)

        let seconddivarrow=document.createElement('img')
        seconddivarrow.src="images/icon/fi-rr-angle-small-right.svg"
        seconddivarrow.style.width='20px'
        seconddivarrow.style.height='20px'
     
      
        seconddivarrow.style.cursor='pointer'
        seconddiv.appendChild(seconddivarrow)


       let thirdDivLayer=document.createElement('div')

       thirdDivLayer.id='thirdDivLayer'
       thirdDivLayer.className='thirdDivLayer'
       thirdDivLayer.style.display='grid'
       thirdDivLayer.style.gridColumn='-1 /-3'
       thirdDivLayer.style.gridRow='-4 / -1'
       thirdDivLayer.style.gridTemplateColumns='1fr auto 1fr'
       thirdDivLayer.style.borderBottom='2px solid #f7f2f6'
       thirdDivLayer.style.gridGap='47px'
        thirdDivLayer.style.alignItems='center'
        thirdDivLayer.style.padding='10px'
        thirdDivLayer.style.cursor='pointer'
        thirdDivLayer.style.marginLeft='6px'
          thirdDivLayer.style.alignContent='start'
          thirdDivLayer.style.width='86%'

          popupBody.appendChild(thirdDivLayer)

          thirdDivLayer.addEventListener('mouseover',function(){

            thirdDivLayer.style.transform='scale(0.96)'
            thirdDivLayer.style.transition='transform 0.4s ease'

          })

          thirdDivLayer.addEventListener('mouseout',function(){

            thirdDivLayer.style.transform='scale(1)'
            thirdDivLayer.style.transition='transform 0.4s ease'

            })

            thirdDivLayer.addEventListener('click',function(){

                thirdpopup.style.display='block'
                secondpopup.style.display='none'
              

                setTimeout(() => {
                    thirdpopup.style.opacity='1'

                }, 200);
            })

          let thirdDivLayericon=document.createElement('img')

          thirdDivLayericon.src='images/icon/Layer.png'
          thirdDivLayericon.style.width='25px'
          thirdDivLayericon.style.heigt='25px'
          thirdDivLayericon.style.cursor='pointer'

          thirdDivLayer.appendChild(thirdDivLayericon)



          let thirdDivLayerText=document.createElement('span')
          thirdDivLayerText.id='thirdDivLayerText'
          thirdDivLayerText.className='thirdDivLayerText'
          thirdDivLayerText.innerHTML='Layer'
        
          thirdDivLayer.appendChild(thirdDivLayerText)



          let thirdDivLayerArrow=document.createElement('img')
        thirdDivLayerArrow.id='thirdivarrow'
        thirdDivLayerArrow.className='thirdivarrow'
        thirdDivLayerArrow.innerHTML='color'
        thirdDivLayerArrow.src='images/icon/fi-rr-angle-small-right.svg'
        thirdDivLayerArrow.style.width='25px'
        thirdDivLayerArrow.style.height='20px'
     

        thirdDivLayer.appendChild(thirdDivLayerArrow)
          

        let thirdpopup =document.createElement('div')
        thirdpopup.className='thirdpopup'
        thirdpopup.id='thirdpopup'
        thirdpopup.style.width='189px'
        thirdpopup.style.height='100px'
            thirdpopup.style.borderRadius='10px'
        thirdpopup.style.borde='none'
        thirdpopup.style.boxShadow = '2px 4px 10px rgba(0, 0, 0, 0.5)'
        thirdpopup.style.zIndex='9999'
        thirdpopup.style.display='grid'
        thirdpopup.style.gridTemplateColumns='1fr auto 1fr'
        thirdpopup.style.gridTemplateRows='1fr 1fr 1fr'
        thirdpopup.style.display='none'
        thirdpopup.style.opacity='0.6'
        thirdpopup.style.backgroundColor='white'
       
        
        
        backgroundMain.appendChild(thirdpopup)

        thirdpopup.addEventListener('mouseenter',function(){
popup.style.opacity='0.6'


setTimeout(()=>{


    popup.style.opacity='0'
   

},400)
})



        thirdpopup.addEventListener('mouseleave',function(){

            thirdpopup.style.opacity='0.6'

            setTimeout(()=>{


                thirdpopup.style.opacity='0'
                popup.style.display='block'
                popup.style.opacity='1'

                thirdpopup.style.display='none'

            },400)
        })

    

        let thirdpopupHText=document.createElement('span')
        thirdpopupHText.id='thirdpopupHText'
        thirdpopupHText.className='thirdpopupHText'
        thirdpopupHText.innerHTML='Send To'
        thirdpopupHText.style.fontSize='16px'
        thirdpopupHText.style.marginLeft='40%'
        thirdpopupHText.style.gridColumn='-1 /-4'
        thirdpopupHText.style.gridRow='-4 /-1'
        // thirdpopupHText.style.borderBottom='2px solid #f7f2f6'
        // thirdpopupHText.style.width='86%'


        thirdpopup.appendChild(thirdpopupHText)
        
        let thirdpopupdiv1=document.createElement('div')
        thirdpopupdiv1.className='thirdpopupdiv1'
        thirdpopupdiv1.id='thirdpopupdiv1'
        thirdpopupdiv1.style.display='grid'
        thirdpopupdiv1.style.gridTemplateColumns='auto 1fr auto'
      
        thirdpopupdiv1.style.borderBottom='2px solid #f7f2f6'
        thirdpopupdiv1.style.alignItems='center'
        thirdpopupdiv1.style.gridColumn = '-1 / -4';
        thirdpopupdiv1.style.gridRow = '-3 / -1';
        thirdpopupdiv1.style.gridGap='30px'
        thirdpopupdiv1.style.alignItems='center'
        thirdpopupdiv1.style.padding='5px'
        thirdpopupdiv1.style.cursor='pointer'
        thirdpopupdiv1.style.marginLeft='1px'
          thirdpopupdiv1.style.alignContent='start'
          
          thirdpopup.appendChild(thirdpopupdiv1)

          thirdpopupdiv1.addEventListener('mouseover',function(){
            thirdpopupdiv1.style.transform='scale(0.96)'
            thirdpopupdiv1.style.transition='transform 0.4s ease'

          })
          thirdpopup.appendChild(thirdpopupdiv1)

          thirdpopupdiv1.addEventListener('mouseout',function(){
            thirdpopupdiv1.style.transform='scale(1)'
            thirdpopupdiv1.style.transition='transform 0.4s ease'

          })
        
          thirdpopupdiv1.addEventListener('click',function(){

            selectedElement.style.transform='scale(0.9)'
            selectedElement.style.transition='transform 0.4s ease'
            selectedElement.style.opacity='0.8'
           
            setTimeout(()=>{

                 selectedElement.style.zIndex='999'
                 
                 
                  selectedElement.style.transform='scale(1)'
                 selectedElement.style.opacity='1'


                 if (selectedElement && selectedElement.tagName === 'IMG') {
                    selectedElement.style.position = 'relative';
                } else {
                    
                }
                

            },900
        
        )

            

          })
        let thirdpopupicon=document.createElement('img')
        thirdpopupicon.id='thirdpopupicon'
        thirdpopupicon.className='thirdpopupicon'
        thirdpopupicon.src='images/icon/Layer.png'
        thirdpopupicon.style.widht='25px'
        thirdpopupicon.style.height='25px'


        thirdpopupdiv1.appendChild(thirdpopupicon)


        let thirdpopupText=document.createElement('span')
        thirdpopupText.id='secondpopupText'
        thirdpopupText.className='secondpopupText'
        thirdpopupText.innerHTML=' Font'
        thirdpopupText.style.fontSize='16px'
        thirdpopupText.style.marginLeft='13px'

        
       
        thirdpopupdiv1.appendChild(thirdpopupText)

        

        

        
       
        let thirdpopuparrow=document.createElement('img')
        thirdpopuparrow.id='thirdpopuparrow'
        thirdpopuparrow.className='thirdpopuparrow'
        thirdpopuparrow.src='images/icon/fi-rr-angle-small-right.svg'
        thirdpopuparrow.style.widht='25px'
        thirdpopuparrow.style.height='25px'
        thirdpopuparrow .style.marginLeft='30px'


        thirdpopupdiv1.appendChild(thirdpopuparrow)



             let thirdpopupdiv2=document.createElement('div')
            thirdpopupdiv2.className='thirdpopupdiv2'
            thirdpopupdiv2.id='thirdpopupdiv2'
            thirdpopupdiv2.style.display='grid'
            thirdpopupdiv2.style.gridTemplateColumns='auto 1fr auto'

            thirdpopupdiv2.style.borderBottom='2px solid #f7f2f6'
            thirdpopupdiv2.style.alignItems='center'
            thirdpopupdiv2.style.gridColumn = '-1 / -4';
            thirdpopupdiv2.style.gridRow = '-2 / -1';
            thirdpopupdiv2.style.gridGap='1px'
            thirdpopupdiv2.style.alignItems='center'
            thirdpopupdiv2.style.padding='px'
            thirdpopupdiv2.style.cursor='pointer'
            thirdpopupdiv2.style.marginLeft='3px'
            thirdpopupdiv2.style.alignContent='start'

            thirdpopup.appendChild(thirdpopupdiv2)
            


            thirdpopupdiv2.addEventListener('mouseover',function(){
            thirdpopupdiv2.style.transform='scale(0.96)'
            thirdpopupdiv2.style.transition='transform 0.4s ease'

          });


        thirdpopupdiv2.addEventListener('mouseout',function(){
        thirdpopupdiv2.style.transform='scale(1)'
        thirdpopupdiv2.style.transition='transform 0.4s ease'

        });

        thirdpopupdiv2.addEventListener('click',function(){

            selectedElement.style.transform='scale(0.9)'
            selectedElement.style.transition='transform 0.4s ease'
            selectedElement.style.opacity='0.8'
           
            setTimeout(()=>{

                 selectedElement.style.zIndex='0'
                  selectedElement.style.transform='scale(1)'
                 selectedElement.style.opacity='1'

            },900
        
        )

            

          })

            let thirddiv2icon=document.createElement('img')
            thirddiv2icon.id='thirddiv2icon'
            thirddiv2icon.className='thirddiv2icon'
            thirddiv2icon.src='images/icon/Layer Down.png'
            thirddiv2icon.style.widht='25px'
            thirddiv2icon.style.height='25px'


            thirdpopupdiv2.appendChild(thirddiv2icon)


            let thirddiv2Text=document.createElement('span')
            thirddiv2Text.id='secondpopupText'
            thirddiv2Text.className='secondpopupText'
            thirddiv2Text.innerHTML='Backward'
            thirddiv2Text.style.fontSize='14px'
            thirddiv2Text.style.marginLeft='43px'



            thirdpopupdiv2.appendChild(thirddiv2Text)







            let thirddiv2arrow=document.createElement('img')
            thirddiv2arrow.id='thirddiv2arrow'
            thirddiv2arrow.className='thirddiv2arrow'
            thirddiv2arrow.src='images/icon/fi-rr-angle-small-right.svg'
            thirddiv2arrow.style.widht='25px'
            thirddiv2arrow.style.height='25px'


            thirdpopupdiv2.appendChild(thirddiv2arrow)


        

        //third Div
        let thriddiv=document.createElement('div')
        thriddiv.id='thriddiv'
        thriddiv.className='thriddiv'
        thriddiv.style.display='grid'
        thriddiv.style.gridTemplateColumns='auto 1fr auto'

        thriddiv.style.borderBottom='2px solid #f7f2f6'
        seconddiv.style.alignItems='center'


        thriddiv.style.gridColumn='-1 /-3'
        thriddiv.style.gridRow='-3 /-1'
        
        thriddiv.style.gridGap='34px'
        thriddiv.style.width='86%'
        thriddiv.style.padding='6px'
        thriddiv.style.cursor='pointer'
        thriddiv.style.marginLeft='14px'

        
       
        thriddiv.addEventListener('mouseover',function(){

            thriddiv.style.transform='scale(0.95)'
            thriddiv.style.transition='transform 0.5s ease'
        })

        thriddiv.addEventListener('mouseout',function(){

            thriddiv.style.transform='scale(1)'
            thriddiv.style.transition='transform 0.5s ease'
        })
        popupBody.appendChild(thriddiv)

       

        let thirddicon=document.createElement('img')
         thirddicon.src='images/icon/Dublicate.png'
        thirddicon.style.width='25px'
        thirddicon.style.height='20px'
    

        
        thriddiv.appendChild(thirddicon)

        let thirddivtext=document.createElement('span')
        thirddivtext.id='thirddivtext'
        thirddivtext.className='thirddivtext'
        thirddivtext.innerHTML='Dublicate'
       

        thriddiv.appendChild(thirddivtext)

        let thirdivarrow=document.createElement('img')
        thirdivarrow.id='thirdivarrow'
        thirdivarrow.className='thirdivarrow'
        thirdivarrow.innerHTML='color'
        thirdivarrow.src='images/icon/fi-rr-angle-small-right.svg'
        thirdivarrow.style.width='25px'
        thirdivarrow.style.height='20px'
     

        thriddiv.appendChild(thirdivarrow)



        thriddiv.addEventListener('click', function(e) {
    e.preventDefault();

    if (selectedElement) {
        // Set hoveredElement to the selectedElement
        hoveredElement = selectedElement;

        // Call the DublicateElement function
        DublicateElement();

        // Log the action for debugging
        console.log("Element Dublicated:", selectedElement);
    } else {
        console.log("No element selected to Dublicate");
    }
});

    



        let fourthdiv=document.createElement('div')
        fourthdiv.id='fourthdiv'
        fourthdiv.className='fourthdiv'
        fourthdiv.style.display='block'
        fourthdiv.style.display='grid'
        fourthdiv.style.gridTemplateColumns='1fr auto 1fr'
        fourthdiv.style.gridColumn='-1 /-3'
        fourthdiv.style.gridRow='-2 / -1'
        fourthdiv.style.gridGap='45px'
        fourthdiv.style.width='86%'
        fourthdiv.style.borderBottom='2px solid #f7f2f6'
        fourthdiv.style.padding='1px'
        fourthdiv.style.cursor='pointer'
        fourthdiv.style.marginLeft='14px'
        





        fourthdiv.addEventListener('mouseover',function(){

            fourthdiv.style.transform='scale(0.96)'
            fourthdiv.style.transition='transform 0.3s ease'
        })

      


 fourthdiv.addEventListener('mouseout',function(){

            fourthdiv.style.transform='scale(1)'
            fourthdiv.style.transition='all 0.3s ease'
        })


       


        popupBody.appendChild(fourthdiv)

        fourthdiv.addEventListener('click', function() {
            
            console.log(selectedElementId)
            
            if (selectedElementId !== "background" || selectedElementId !=='thirdpopup') {
              
            
        selectedElement.remove();
        popup.style.opacity='0.3'
        popup.style.transform='scale(0.98)'
        popup.style.transition='transform 0.3s ease'

        setTimeout(()=>{

            popup.style.display='none'
           
        },300)

      
            }
    }
);





        let fourthdivicon=document.createElement('img')
        fourthdivicon.src='images/icon/Delete.png'
        fourthdivicon.style.width='24px'
        fourthdivicon.style.height='24px'
        fourthdivicon.style.gridColumn='-3/-1 -3/-1'



        fourthdiv.appendChild(fourthdivicon)

        let fourthdivText=document.createElement('span')
        fourthdivText.innerHTML='Delete'
        fourthdivText.fontSize='16'
        fourthdiv.appendChild(fourthdivText)

        let fourthdivarrow=document.createElement('img')
    
        fourthdivarrow.src='images/icon/fi-rr-angle-small-right.svg'
        fourthdivarrow.style.width='25px'
        fourthdivarrow.style.height='20px'
        

        fourthdiv.appendChild(fourthdivarrow)

        let secondpopup=document.createElement("div")
        secondpopup.id='secondpopup'
        secondpopup.className='secondpopup'


        secondpopup.style.display='grid'
        secondpopup.style.gridTemplateColumns='auto 1fr '
          secondpopup.style.gridTemplateRows='1fr 1fr'
        // secondpopup.style.gridGap='55%'
        secondpopup.style.backgroundColor='white'
        secondpopup.style.width='193px'
        secondpopup.style.height='73px'
        secondpopup.style.border='0'
        secondpopup.style.boxShadow = '2px 4px 10px rgba(0, 0, 0, 0.5)';
        secondpopup.style.borderRadius='15px'
        secondpopup.style.zIndex='999999'
        secondpopup.style.transition = 'opacity 1s ease, visibility 1s ease';
        secondpopup.style.transition=' opacity 0.3s ease; '


        secondpopup.style.display='none'

        backgroundMain.appendChild(secondpopup)


        let secondpopupText=document.createElement('span')
        secondpopupText.id='secondpopupText'
        secondpopupText.className='secondpopupText'
        secondpopupText.innerHTML='Opacity'
        secondpopupText.style.fontSize='13px'
        
        
       
        secondpopup.appendChild(secondpopupText)

        let secondpopupPer=document.createElement('input')
        secondpopupPer.id='secondpopupPer'
        secondpopupPer.className='secondpopupPer'
        secondpopupPer.type='text'
        secondpopupPer.value='100%'
        secondpopupPer.style.border='none'
        
        secondpopupPer.style.width='100%'
        secondpopupPer.style.height='20px'
        secondpopupPer.style.borderRadius='20%'
        secondpopupPer.readOnly=true
      
        // secondpopup.style.position='absolute'
       
        

    
        

        secondpopupPer.addEventListener('mouseover',function(){


            secondpopupPer.style.border='none'

            
        });
        secondpopupPer.addEventListener('focus',function(){
            secondpopupPer.style.border='none'
            secondpopupPer.style.outline='none'
           
        });

        

       
        
        

        let seconddivrange=document.createElement('input')
        seconddivrange.id='seconddivrange'
        seconddivrange.className='seconddivrange'
        seconddivrange.type='range'
        seconddivrange.min='10'
        seconddivrange.max='100'
        seconddivrange.value='100'
        seconddivrange.style.width='130%'
        seconddivrange.style.color='#6b055a'
        seconddivrange.style.cursor='grab'
        seconddivrange.style.display='none'

        

      
        secondpopup.appendChild(secondpopupPer)
        secondpopup.appendChild(seconddivrange)

//         seconddiv.style.gridColumn='-1 /-3 '
//         seconddiv.style.gridRow=-'-4/-1'

//   seconddiv.style.width='85%'
//         seconddiv.style.padding='10px'
//          seconddiv.style.alignItems='center'
//             seconddiv.style.margin='5px'
      

        
        



        // seconddiv.style.display='grid'
        // seconddiv.style.gridTemplateColumns='auto 1fr auto'



        popupBody.appendChild(seconddiv)

    

        

       
        seconddiv.addEventListener('click',function(){
            secondpopup.style.opacity='1'
               secondpopup.style.display='grid'
              thirdpopup.style.opacity='0'
           
        })
        secondpopup.style.opacity='0'

        //     if (!popup.contains(event.target)) {
//         popup.style.display = 'none'; // Hide the popup
//     }

// document.addEventListener("click", (e) => {
//         if (!popup.contains(e.target)) {
//             popup.style.display = 'none';
//         }
//     });
//         document.addEventListener('click',(e)=>{
//             if(!secondpopup.contains(e.target)){

// secondpopup.style.opacity='0'
// }
            
//         })
      

        closepopup.addEventListener('click',()=>{

              // Add a scale effect and fade out the button
    popup.style.transform = 'scale(1)'; // Scale down the button
    popup.style.opacity = '0.2'; // Fade out the button
 


    // Optionally, you can also add a timeout to hide the popup after a short delay
    setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup after the transition
    }, 200);

        })

        popupheader.appendChild(closepopup)


        //popup handles

                let backgroundcheck = document.getElementById("background");
                let selectedElement=null

        document.addEventListener("contextmenu", (e) => {
            // Check if the clicked element is inside the background div
            if (backgroundcheck.contains(e.target)) {
                e.preventDefault(); // Prevent the default right-click menu
                const clickedElement = e.target; // Element that was right-clicked

                
                selectedElement=clickedElement
                selectedElementId=selectedElement.id

                if (selectedElementId == "background") {
                    return

                }
                // if (selectedElement && selectedElement.tagName === 'IMG') {
                //     popup.style.position = 'absolute';
                // } else {
                    
                // }

               
                let checkid=   selectedElement=clickedElement
            //   let checkid=  selectedElement.event.srcElement.id
              
            seconddivrange.value = (selectedElement.style.opacity || 1) * 100;
            secondpopupPer.value = seconddivrange.value + '%';

                // Show the popup at the cursor position
                popup.style.opacity='1'
                popup.style.left = `${e.pageX}px`;
                popup.style.top = `${e.pageY}px`;
                popup.style.display = 'block';
            } else {
                // Allow default browser context menu for clicks outside background
                popup.style.display = 'none'; // Hide the popup if it is visible
            }
        });


       function moverange() {
    // Update the range display value
    secondpopupPer.value = seconddivrange.value + '%';

    // Update the opacity of the selected element
    if (selectedElement) {
        selectedElement.style.opacity = seconddivrange.value / 100;
    }
}

// Add event listeners for range sliding
seconddivrange.addEventListener('mousedown', function () {
    document.addEventListener('mousemove', moverange);
    popup.style.opacity='0'
});

// Stop listening for mousemove on mouseup
document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', moverange);
});

      // Add an event listener for mouse entering the secondpopup
// secondpopup.addEventListener('mouseenter', function () {
//     secondpopup.style.opacity = '1'; // Set opacity to fully visible
// });

// Add an event listener for mouse leaving the secondpopup
secondpopup.addEventListener('mouseleave', function (e) {
    e.preventDefault()

    setTimeout(()=>
{
   
    // popup.style.display = 'block';
    popup.style.opacity = '1';
    secondpopup.style.opacity = '0.6'; // Set opacity to hidden

    
        setTimeout(()=>{
            secondpopup.style.opacity = '0'; // Set opacity to hidden
            seconddivrange.style.display='none'
          
        },400)

        setTimeout(() => {
              secondpopup.style.display='none'
        }, 2000);

   
}, 200)
});


    secondpopup.addEventListener('mouseenter',function(){

        popup.style.opacity='0.6'
        setTimeout(()=>{

            popup.style.opacity='0'
        },400)
     
    })

    // Hide popup if clicking outside of it
    document.addEventListener("click", (e) => {
        if (!popup.contains(e.target) && !secondpopup.contains(e.target) && !thirdpopup.contains(e.target)) {
            popup.style.display = 'none';
        }
    });




   
    const colorPicker = document.getElementById('color-picker');
    const colorDisplay = document.getElementById('spanColor');
    const firstdiv1 = document.getElementById('firstdiv');
   





 



    // firstdiv1.addEventListener("mouseover", function() {
    //     // Programmatically trigger a click on the color picker
    //     colorPicker.click();
    // });

    firstdiv1.addEventListener("mouseout", function() {
        // Programmatically trigger a click on the color picker
        colorPicker.style.opacity='0'
       
    });


    // Add click event listener to the colorDisplay div
    firstdiv1.addEventListener("click", function() {
        // Programmatically trigger a click on the color picker
         popup.style.transition='1 0.7s ease'
        popup.style.opacity='0.3'
        
       popup.style.opacity=0.2

        colorPicker.click();
        console.log("sdfffffffff")
        setTimeout(()=>{
            
            popup.style.display='none'
        },200)
        
        // seconddivrange.style.cursor='default'
    });

  

    colorPicker.addEventListener("input", (event) => {
    if (selectedElement) {
        // Check if the element is contenteditable
        if (selectedElement.hasAttribute("contenteditable") && selectedElement.getAttribute("contenteditable") === "true") {
            // Change text color for contenteditable elements
            selectedElement.style.color = event.target.value;
        } 
        // Check if it's a div and not contenteditable
        else if (selectedElement.nodeName === "DIV" && 
                 (!selectedElement.hasAttribute("contenteditable") || selectedElement.getAttribute("contenteditable") !== "true") || !secondpopup ) {
            // Change background color for divs
            selectedElement.style.backgroundColor = event.target.value;
        }
    }
});


let colorPicker1 = document.querySelector('#color-picker');

// Show `secondpopup` when the color picker gains focus
colorPicker1.addEventListener('focus', function () {
    secondpopup.style.opacity = '1'; // Show the second popup
    secondpopup.style.pointerEvents = 'auto'; // Enable interaction if needed
});

// Hide `secondpopup` when the color picker loses focus
colorPicker1.addEventListener('blur', function () {
    secondpopup.style.opacity = '0'; // Hide the second popup
    secondpopup.style.pointerEvents = 'none'; // Prevent interaction if needed
});




//     document.addEventListener('click', function(event) {
//     // Check if the click was outside the popup
//     if (!popup.contains(event.target)) {
//         popup.style.display = 'none'; // Hide the popup
//     }
// });


// console.log(selectedElement)

 
