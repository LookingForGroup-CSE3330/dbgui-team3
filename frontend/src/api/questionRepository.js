import axios from 'axios';

export class QuestionRepository{
    url = 'http://localhost:8000';

    getPosts(){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/posts/get`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    getPost(username){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/posts/get/${username}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })       
    }
}