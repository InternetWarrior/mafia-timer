
  const minuteHtml = document.getElementById('minute')
  const secondHtml = document.getElementById('second')
  const timeHtml = document.querySelector('.time')

class Timer{


    constructor(){
        this.leftTime=0
        this.second = 10
        this.minute = 6000
        this.twenty = 2000
        this.thirty = 3000



    }
    

    cleanTimer(){
        this.leftTime=0
    }

    techPause(){
        this.cleanTimer()
        this.leftTime = this.minute
        return 'time is added!'
    }
    
    addThirty(){
        this.leftTime = this.leftTime+this.thirty
        return 'time is added!'
    }
    
    startSpeach(){
        this.cleanTimer()
        this.leftTime = this.minute
        return 'time is added!'
    }
    
    startTwenty(){
        this.cleanTimer()
        this.leftTime = this.twenty
        return 'time is added!'
    }

    renderTime(){
      
        let minutes = Math.floor(this.leftTime/6000)
        let seconds = Math.floor((this.leftTime -(minutes*6000))/100)
        
        if(minutes>=10){
            minuteHtml.innerText = minutes
        }else if(minutes>=1){
            minuteHtml.innerText = '0'+ minutes
        }else{
            minuteHtml.innerText = '0'+minutes
        }
        if(seconds<10){
            secondHtml.innerText ='0'+seconds
        }else{
            secondHtml.innerText = seconds
        }



        if(seconds<=2&&minutes==0){
            timeHtml.style.color = 'red'
        }else if (seconds<=10&&minutes==0){
            timeHtml.style.color = 'yellow'

            
        }else{
            timeHtml.style.color = 'white'

        }

        
    }


    
        


    update(){
        setInterval(() => {
            if(this.leftTime!==0){
                this.leftTime-=this.second
                this.renderTime()
            }
        }, 100)
    }
}

const time = new Timer()
time.update()