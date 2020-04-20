const defaultState={
    focused:false
};

export default (state=defaultState,action)=>{
    if(action.type==="true"){
      return { focused:true}
    }
    if(action.type==="false"){
        return {facosed:false}
    }
    return state;
}
