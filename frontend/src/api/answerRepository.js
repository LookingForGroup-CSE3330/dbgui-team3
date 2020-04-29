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
            axios.get(`${this.url}/answers/get-byname/${user_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    getUserAnswersSorted(user_id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/answers/get_byuser_sort/${user_id}`)
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

    getAnswersForQuestionSortedVote(post_id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/answers/get_bypost_vote/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    getAnswersForQuestionSortedDate(post_id){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/answers/get_bypost_date/${post_id}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    postAnswer(answer, post_id){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/answers/post/post_answer`, {
                post_id: post_id,
                user_id: answer.user_id,
                date: answer.date,
                answer: answer.answer
            })
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })       
    }

    deleteAnswer(answer_id){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/answers/delete/${answer_id}`)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }
    
}