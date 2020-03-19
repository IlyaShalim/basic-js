module.exports = class DepthCalculator {
    calculateDepth(arr, count = 0, result = []) {
        count++;
        result.push(count);

        for(let i = 0; i < arr.length; i++)
        {
            if (Array.isArray(arr[i]))
            {
                this.calculateDepth(arr[i], count, result)
            }
        }
        return Math.max(...result);
        
    }
};
