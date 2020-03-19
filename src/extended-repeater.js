module.exports = function repeater(str, options) {
    st = String(str);
    st_result = '';
    let repeatTimes = (options.repeatTimes) ? Number(options.repeatTimes) : 1;
    let separator = (options.separator) ? String(options.separator) : '+';
    let addition = (options.addition === undefined) ? '' : String(options.addition);
    let additionRepeatTimes = (options.additionRepeatTimes) ? Number(options.additionRepeatTimes) : 1;
    let additionSeparator = (options.additionSeparator) ? String(options.additionSeparator) : '|';

    for (let i = 0; i < repeatTimes; i++)
    {
        st_result += st;
        for (let j = 0; j < additionRepeatTimes; j++)
        {
            st_result += addition;
            if (j + 1 < additionRepeatTimes) st_result += additionSeparator;
        }
        if(i + 1< repeatTimes) st_result += separator;
    }

    return st_result;

};
