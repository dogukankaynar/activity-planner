import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  value: DataType[];
}

export type ElementType = {
  id: number;
  title: string;
  desc: string;
  itemId?: number;
  parentId?: number;
};
export type DataType = {
  name: string;
  id: number;
  elements: ElementType[];
};

const initialState: TodoState = {
  value: [
    {
      name: "Yapılacaklar",
      id: 1,
      elements: [],
    },
    {
      name: "Devam Ediyor",
      id: 2,
      elements: [],
    },
    {
      name: "Tamamlandı",
      id: 3,
      elements: [],
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ElementType>) => {
      const currentPayload = action.payload;
      const column = state.value.find(
        (column) => column.id === currentPayload.parentId
      );
      if (column) {
        column.elements = [...column.elements, currentPayload];
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      console.log(state.value);
      const currentState = current(state)
      

      // const column = state.value.find(
      //   (column) => column.id === currentPayload.itemId
      // )
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
