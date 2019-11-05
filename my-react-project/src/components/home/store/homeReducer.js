const defaultState = {
    listA:[],
    listB:[],
    listC:[],
    listD:[]
};
export default (state = defaultState ,action)=>{
    console.log(action);
    if (action.type==='init_home_data'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.listA = action.data.listA;
        newState.listB = action.data.listB;
        newState.listC = action.data.listC;
        newState.listD = action.data.listD;
        return newState;
    }
    return state;
}
