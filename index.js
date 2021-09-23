     // ===================== Allow - Only Numbers ===============================================================
    const  onlyNumbers = (event) => 
     {
          var keycode = (event.which) ? event.which : event.keyCode;
      
          if(event.shiftKey) // Disable SHIFT
          {
             return false;
          } 
          if(event.ctrlKey && event.altKey) // Disable CTRL + ALT
          {
             return false;
          }
          else if (event.ctrlKey && keycode == 65) // CTRL + A
          {
           return true;
          }
          else if(event.ctrlKey && keycode == 67) // CTRL + C
          {
            return true;
          }
          else if(event.ctrlKey && keycode == 86) // CTRL + V
          {
            return true;
          }
          else if(keycode > 105) // All others not numbers
          {
           return false;
           //  event.preventDefault();
          }
          else if ((keycode > 7 && keycode < 16) || (keycode > 34 && keycode < 65) || (keycode > 92 && keycode < 106)) // 8 = backspace & 46 = DEL  || 48-57 = numbers
          {
              console.log(keycode);
              return true;
          } 
          else
           {
              return false;
          }
     }







     
          // ===================== Allow - Only Letters ===============================================================
          
          const onlyLetters = (key) => 
          {
               var keycode = (key.which) ? key.which : key.keyCode;
           
                
               if ((keycode > 7 && keycode < 16) || (keycode > 34 && keycode < 48) || (keycode > 64 && keycode < 91)) 
               {
                   return true;
               }
               else 
               {
                   return false;
               }
           
           }


 