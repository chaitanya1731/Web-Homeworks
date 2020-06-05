function Cutoffs(cutoffs) {
    this.cutoffs =
        Object.getOwnPropertyNames(cutoffs)
            .map((n) => Number(n))
            .sort((a, b) => a-b);
    this.categories = this.cutoffs.map((c) => cutoffs[c]);
    console.log(this.cutoffs)
    console.log(this.categories)
}
Cutoffs.prototype.category = function(total) {
    let i;
    for (i = 0; i < this.cutoffs.length; i++) {
        if (total <= this.cutoffs[i]) break;
    }
    console.log(this.categories)
    return this.categories[i];
}
/** Return an object encapsulating behavior for the scores argument
 * which must be an object which maps employee IDs to intermediate
 * objects. Each intermediate object contains a property for each
 * assignment like 'communication' or aggregate like 'total'.
 */
function Scores(scores) {
    this.scores = scores;
    console.log(this.score)
}
Scores.prototype.categories = function(cutoffs) {
    const categories = {};
    for (const id in this.scores) {
        if (this.scores.hasOwnProperty(id)) {
            const idTotal = this.scores[id].total;
            categories[id] = cutoffs.category(idTotal);
        }
    }
    return categories;
}
Scores.prototype.average = function() {
    const ids = Object.getOwnPropertyNames(this.scores);
    const sum =
        ids.reduce((acc, id) => acc + this.scores[id].total, 0);
    return (ids.length === 0) ? 0 : sum/ids.length;
}
const CUTOFFS = {
    5: 'fired',
    6: 'poor',
    7: 'average',
    9: 'good', //note dierent from example in spec
    10: 'outstanding' //note dierent from example in spec
};
const SCORES = new Scores({
    '123-45-6789': {
        name: 'John Smith',
        quality: 8, total: 8.5
    },
    '234-56-7890': {
        name: 'Carol Brown',
        quality: 10, total: 9.7
    },
    '345-67-8901': {
        name: 'Don Tatum',
        quality: 4, total: 4.8
    },
});
console.log(SCORES.categories(new Cutoffs(CUTOFFS)));
console.log(SCORES.average());






