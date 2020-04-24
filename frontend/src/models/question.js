export default class Question {
    constructor(id, user_id, date, tags, question){
        this.id = id;
        this.user_id = user_id;
        this.date = date;
        this.tags = tags;
        this.question = question;
    }
}