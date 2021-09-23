     // ===================== Allow - Only Numbers ===============================================================
    var  onlyNumbers = (event) => 
     {
          var keycode = (event.which) ? event.which : event.keyCode;
      
          if(event.shiftKey)
          {
             return false;
          }
          else if (event.ctrlKey && keycode == 65)
          {
           return true;
          }
          else if ((keycode == 8 || keycode == 46) || (keycode > 45 && keycode < 65)) // 8 = backspace & 46 = DEL  || 48-57 = numbers
          {
              console.log(keycode);
              return true;
          }
          else
           {
              return false;
          }
     }



    //  if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) // 8 = backspace & 46 = DEL  || 48-57 = numbers
    //  {
    //      return false;
    //  }
    //  else {
    //      return true;
    //  }