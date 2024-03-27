import { createSlice } from "@reduxjs/toolkit"

type TQuiz = {
    module: string,
    quiz: string,
    question: string,
    options: string[],
    correctOptions: string[],

}

type TInitialState = {
    quiz:TQuiz[],
}

type TAction = {
    payload: TQuiz,
}

const initialState : TInitialState= {
    quiz: [
        {
            module:"",
            quiz: "",
            question: "",
            options:[],
            correctOptions:[],
        }
    ]
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addQuiz: (state,action:TAction) => {
            state.quiz.push(action.payload);
        }
    }
})

const {
    addQuiz
} = quizSlice.actions;

export default quizSlice.reducer;