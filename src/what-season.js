const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    let season = 'winter';
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) === "[object Date]") {
        try{
            if(!isNaN(date) && date.valueOf){
                let month = date.getMonth()+1;
                if (month > 2 && month < 6) {
                    season = 'spring';
                } else if (month > 5 && month < 9){
                    season = 'summer';
                } else if (month > 8 && month < 12){
                    season = 'autumn';
                }
            }
        }catch(e){
            throw new Error('Invalid date!');
        }
    } else {
        throw new Error('Invalid date!');
    }
    return season;
}

module.exports = {
  getSeason
};
