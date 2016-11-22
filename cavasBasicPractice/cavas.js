function draw26(id) {
            //同一个圆心画球型
           /* var canvas = document.getElementById(id);
            if (canvas == null)
                return false;
            var context = canvas.getContext('2d');
            var g1 = context.createRadialGradient(200, 150, 0, 200, 150, 100);
            g1.addColorStop(0.1, 'rgb(255,0,0)');  
            g1.addColorStop(1, 'rgb(50,0,0)');
            context.fillStyle = g1;
            context.beginPath();
            context.arc(200, 150, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();*/
          
            //不同圆心看径向渐变模型
            var canvas = document.getElementById(id);
            if (canvas == null)
            return false;
            var context = canvas.getContext('2d');
            var g1 = context.createRadialGradient(100, 150, 10, 300, 150, 50);
            g1.addColorStop(0.1, 'rgb(255,0,0)');
            g1.addColorStop(0.5, 'rgb(0,255,0)');
            g1.addColorStop(1, 'rgb(0,0,255)');
            context.fillStyle = g1;
            context.fillRect(0, 0, 400, 300);
   
        }
        draw26("myCanvas_one");

function draw27(id) {
            var canvas = document.getElementById(id);
            if (canvas == null)
                return false;
            var context = canvas.getContext('2d');
            context.shadowOffsetX = 10;
            context.shadowOffsetY = 10;
            context.shadowColor = 'rgba(100,100,100,0.5)';
            context.shadowBlur = 1.5;
            context.fillStyle = 'rgba(255,0,0,0.5)';
            context.fillRect(100, 100, 200, 100);
            context.strokeText("Hello",10,50);
        }
        draw27("myCanvas_two");

function drawRec(id){
            var canvas=document.getElementById(id);
            if(canvas.getContext('2d')){
                  var context=canvas.getContext('2d');
                  // context.strokeStyle='blue';
                  context.fillStyle='#f00';
                  context.fillRect(50,50,50,50);

                  context.fillStyle='rgba(0,0,255,0.5)';
                  context.fillRect(75,75,50,50);

                  context.strokeStyle='black';
                  context.lineWidth='3';
                  context.lineJoin='round';
                  context.strokeRect(50,50,50,50);

                  context.clearRect(85,85,5,5);
            }
      
      }
      drawRec("myCanvas_rec");

function drawClock(id){
            var canvas=document.getElementById(id);
            if(canvas.getContext('2d')){
                  var context=canvas.getContext('2d');
                  context.beginPath();
                  context.arc(150,150,100,0,Math.PI*2,false);
                  context.moveTo(245,150);
                  context.arc(150,150,95,0,Math.PI*2,false);

                  context.moveTo(150,150);
                  context.lineTo(150,80);

                  context.moveTo(150,150);
                  context.lineTo(100,150);

                  context.stroke();
            }
      
      }
      drawClock('myCanvas_clock');