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
            axios.post(`${this.url}/users/login/`, loginData)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                });
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

    updateEmail(username, email){
        console.log("RIGHT BEFORE UPDATE EMAIL")
        console.log(username, email)
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/users/update_email/${username}`, {email})
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    updateAbout(username, about_me){
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/users/update_aboutme/${username}`, {about_me})
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    getUserType(username){
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/users/get_type/${username}`)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);  
            })
        })
    }

    postUserRole(username, role_id){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/user_roles/post/${username}`, {role_id})
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    updateUserRole(username, role_name){
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user_roles/update_roles/${username}`, {role_name})
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    deleteUser(username){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/users/delete/${username}`)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }
    
}