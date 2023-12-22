'use strict';


class Storage {
    constructor() {
        this._people = [];
    }

    setPeople(people) {
        localStorage.setItem('people', JSON.stringify(people));
    }

    getPeople() {
        if(localStorage.getItem('people') !== null) {
            return JSON.parse(localStorage.getItem('people'));

        } else {
            return this._people;
        }
    }
}


export default Storage;
