const defaultState = {
    flag:false
};
export default (state = defaultState ,action)=>{
    // console.log(action);

    //优化↓
   /* if (action.type==='input_focus'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = true;
        return newState;
    }else if (action.type==='input_blur'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = false;
        return newState;
    }
    return state;*/
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'input_focus':
            newState.flag = true;
            return newState;
        case 'input_blur':
            newState.flag = false;
            return newState;
        default:
            return state;
    }
}
