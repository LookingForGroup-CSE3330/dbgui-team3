import axios from 'axios';

export class AccountRepository{
    url = 'http://localhost:8000';
    config = {};

    getAccounts(){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/users/get`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    getAccount(username){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/users/get/${username}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }


    test(){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    login(loginData){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/users/login`, loginData, this.config)
                .then(x => resolve(x.data))
                .catch(x => resolve({error: "Wrong username or password"}));
        });
    }

    signUp(formData){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/users/signUp/`, formData)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }
    
}