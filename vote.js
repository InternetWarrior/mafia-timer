


class VotePrgocess{
    constructor(){
        this.voted = []
        this.votedText = ''
        this.noVote ='Никто не выставлен!'
    }



    updateList(){
        this.votedText=''
        this.voted.map(val=>{
            if(this.votedText==''){
                if(val!=='10'){
                    this.votedText = this.votedText + '0'+val
                    
                }else this.votedText = this.votedText + val
            }else if(this.vote!==''&&val!=='10'){
                this.votedText = this.votedText + '|0'+val
            }else{
                this.votedText = this.votedText + '|'+val
            }
        })
        if(this.votedText==''){
            document.querySelector('.result').innerText = this.noVote
        }else{
            document.querySelector('.result').innerText =this.votedText 
            
        }
        

    }




    cleanList(){
        for(let i=1; i<=10; i++){
            document.getElementById(i).value = 'false'
        }
       this.voted = []
       this.updateList()
    }



    copyList(){
        navigator.clipboard.writeText(this.votedText);
    }
    
    copyKill(){
        navigator.clipboard.writeText('+kill 00 check 00');
    }


    
    stop(){
        navigator.clipboard.writeText(':white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark: :white_check_mark:');
    }



    
    voting(event){
        if(event.value=='true'){
            this.voted.map((value,index) =>{
                if(value==event.id){
                    this.voted.splice(index,1)
                }
            })
            document.getElementById(event.id).value = 'false'
            
            this.updateList()
        }else{
            this.voted.push(event.id)
            document.getElementById(event.id).value = 'true'
            
            this.updateList()
            
        }
    }
} 


const vote = new VotePrgocess()
