import axios from 'axios';

export class AnswerRepository{
    url = 'http://localhost:8000';

    getAnswers(){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/answers/get`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    getUsersAnswers(user_id){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/answers/get/${user_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    getAnswerForQuestion(post_id){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/answers/get/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }
    
}