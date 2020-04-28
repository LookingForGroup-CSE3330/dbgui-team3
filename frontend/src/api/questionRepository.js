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

    getPostByPostId(post_id){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/posts/getbyid/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })       
    }

    postQuestion(question){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/posts/post`, {
                user_id: question.user_id,
                creation_date: question.creation_date,
                viewCount: 0,
                answer_count: 0,
                question: question.question
            })
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    getTagsForQuestion(post_id){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/tags/get/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })    
    }

    addUpvote(post_id){
        return new Promise((resolve, reject) =>{
            axios.put(`${this.url}/posts/update_upvotes/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })      
    }

    deletePost(post_id){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/posts/delete/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }
}