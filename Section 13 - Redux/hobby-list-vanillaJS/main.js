
// SETUP REDUX STORE
// 1 - state
// 2 - reducer
// 3 - store

const { createStore } = window.Redux

const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            const newList = [...state];
            newList.push(action.payload)
            return newList
            break;    
        default:
            break;
    }
    return state
}

const store = createStore(hobbyReducer)

// -------------------------

// RENDER REDUX HOBBY LIST

const renderHobbyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return

    const ulElement = document.querySelector('#hobbyListId');
    if(!ulElement) return;

    // reset previous content of ul
    ulElement.innerHTML = ''

    for (const hobby of hobbyList) {
        const liElement = document.createElement('li')
        liElement.textContent = hobby;
        ulElement.appendChild(liElement)
    }
    
}

// RENDER INITIAL HOBBY LIST
const initialHobbyList = store.getState();
renderHobbyList(initialHobbyList)

// HANDLE SUBMIT FORM
const hobbyFormElement = document.querySelector('#hobbyFormId');
if (hobbyFormElement) {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
        if(!hobbyTextElement) return;

        // CREATE ACTION
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElement.value
        }

        store.dispatch(action)
        
        // RESET FORM
        hobbyFormElement.reset()
    }

    hobbyFormElement.addEventListener('submit', handleFormSubmit)
}

store.subscribe(() => {
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList)

    localStorage.setItem('hobby_list', JSON.stringify(newHobbyList))
})