const initialState = {
    helloText: 'Hello!',
    loading: false  
};

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}