//import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//import { authApi, INewLMS } from '../components/Auth/Auth.api'

//interface LMSState {
//  newLMS: INewLMS
//}

//const initialState: LMSState = {
//  newLMS: {
//    name: '',
//    description: '',
//    is_active: true,
//    deadline: '',
//    status: 'В работе',
//    skill_assessment_before: 0,
//    skill_assessment_after: 0,
//  },
//}

//const lmsSlice = createSlice({
//  name: 'lms',
//  initialState,
//  reducers: {
//    // здесь могут быть ваши собственные reducers
//    setNewLMS: (state, action: PayloadAction<INewLMS>) => {
//      state.newLMS = action.payload
//    },
//    resetNewLMS: (state) => {
//      state.newLMS = initialState.newLMS
//    },
//  },
//  extraReducers: (builder) => {
//    builder.addCase(authApi.createLMS.pending, (state) => {
//      // Обработка начала запроса
//      // Можете изменить состояние, если это необходимо
//    })

//    builder.addCase(authApi.createLMS.fulfilled, (state) => {
//      // Обработка успешного выполнения запроса
//      // Можете изменить состояние, если это необходимо
//      state.newLMS = initialState.newLMS
//    })

//    builder.addCase(authApi.createLMS.rejected, (state) => {
//      // Обработка ошибки запроса
//      // Можете изменить состояние, если это необходимо
//    })
//  },
//})

//export const { setNewLMS, resetNewLMS } = lmsSlice.actions
//export default lmsSlice.reducer
