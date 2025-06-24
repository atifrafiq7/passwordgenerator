               var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

 var password = ""

               var text = document.getElementById('text')


               function generate(){
                 for(var i = 1;i<=8;i++){
                     var randomNumber = Math.floor(Math.random()*value.length)
                      password += value[randomNumber]
                 }

                 text.value = password

                password = ""



              }

           