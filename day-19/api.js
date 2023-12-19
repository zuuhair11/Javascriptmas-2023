'use strict';


class WordAPI {
    constructor() {
        this.getWord();
        this.word;
    }

    async getWord() {
        const data = await fetch('https://random-word-api.herokuapp.com/word?length=5');
        const [word] = await data.json();

        return word;
    }
}


export default WordAPI;
