import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  value: DataType[];
}
type DeleteType = {
  id: number;
  itemId: number;
};

export type ElementType = {
  id: number;
  title: string;
  desc: string;
  itemId?: number;
  parentId?: number | undefined;
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
    deleteTodo: (state, action: PayloadAction<DeleteType>) => {
      const currentState = current(state.value);
      console.log("currentState: ", currentState);
      const currentPayload = action.payload;
      console.log("currentPayload", currentPayload);

      const column = state.value.find((column) => column.id === currentPayload.id);

      if (column) {
        const filteredElements = currentState.map((item) => {
          if (item.id === currentPayload.id) {
            const updatedElements = item.elements.filter((innerItem) => innerItem.id !== currentPayload.itemId);
            return { ...item, elements: updatedElements };
          }
          return item;
        });
      
        column.elements = filteredElements.find((item) => item.id === currentPayload.id)?.elements || [];
      }
      
      
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
