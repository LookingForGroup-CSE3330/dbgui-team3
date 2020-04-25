export default class Question {
    constructor(user_id, creation_date, viewCount, answer_count, question){
        this.user_id = user_id;
        this.creation_date = creation_date;
        this.viewCount = viewCount;
        this.answer_count = answer_count;
        this.question = question;
    }
}