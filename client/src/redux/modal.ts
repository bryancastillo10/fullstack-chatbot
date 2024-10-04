import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalStateProps {
    isOpen: boolean;
    modalType: string | null;
};

const initialState: ModalStateProps = {
    isOpen: false,
    modalType:null
};

export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        openModal: (state,action: PayloadAction<string>) => {
            state.isOpen = true;
            state.modalType = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
        }
    }
});

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;