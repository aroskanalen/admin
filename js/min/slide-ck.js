function SlideCtrl(t){t.slide={title:"",textColor:"#fff",textBackgroundColor:"#000",backgroundColor:"#ddd",backgroundImage:"",text:"Integer legentibus erat a ante historiarum dapibus. Excepteur sint obcaecat cupiditat non proident culpa. Contra legem facit qui id facit quod lex prohibet."},t.preview={size:"one-quarter"},t.backgroundImages=[{title:"-- Ikke valgt --",src:""},{title:"hill",src:"images/hill.jpg"},{title:"ocean",src:"images/ocean.jpg"}],t.editor={showTextEditor:!1,showBackgroundEditor:!1,toggleShowTextEditor:function(){t.editor.showTextEditor=!t.editor.showTextEditor},toggleShowBackgroundEditor:function(){t.editor.showBackgroundEditor=!t.editor.showBackgroundEditor},saveSlide:function(){$.post("backend.php?req=save",{title:t.slide.title,text:t.slide.text,textcolor:t.slide.textColor,textbgcolor:t.slide.textBackgroundColor,bgcolor:t.slide.backgroundColor,bgimage:t.slide.backgroundImage}).done(function(t){alert("Slide gemt.")})}},t.saveSlide=function(){alert("fisk")}}