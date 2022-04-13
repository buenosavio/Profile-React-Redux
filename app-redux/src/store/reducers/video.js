const INITIAL_STATE = {
    activeVideo: {},
    activeModule: {},
    modules: [
        {id: 1, title: 'Iniciando com Redux', videos: [
            {id:1, title: 'Primeira aula'},
            {id:2, title: 'Segunda aula'}
        ]},
        {id: 2, title: 'Iniciando com React', videos: [
            {id:3, title: 'Terceira aula' },
            {id:4, title: 'Quarta aula'}
        ]}
    ]
}

const videoReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'SET_VIDEO') {
        return {
            ...state, 
            activeVideo: action.video,
            activeModule: action.module
        }
    }
    return state
}

export default videoReducer