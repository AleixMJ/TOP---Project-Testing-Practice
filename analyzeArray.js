export default function analyzeArray(a) {
    let average = (a.reduce((total, item,) => {return total + item;}, 0)) / a.length;
      return { 
            'average': average,
            'min': Math.min(...a),
            'max': Math.max(...a),
            'length': a.length
        }
}