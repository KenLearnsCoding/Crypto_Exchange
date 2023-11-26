const fs = require('fs').promises; 
const path = require('path');


class learnData {
    async setUp() {
        this.rawData  = JSON.parse(fs.readFileSync('../../learn.json'));
        
    }
}

