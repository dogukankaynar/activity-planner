import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  value: DataType[];
}
type DeleteType = {
  id: number;
  itemId: number;
  columnId?: number;
};
type EditType = {
  columnId: number;
  itemId: number;
  element: ElementType;
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
      const { id, itemId } = action.payload;
      const column = state.value.find((column) => column.id === id);

      if (column) {
        const updatedElements = column.elements.filter(
          (item) => item.id !== itemId
        );
        column.elements = updatedElements;
      }
    },
    editTodo: (state, action: PayloadAction<EditType>) => {
      const { columnId, itemId, element } = action.payload;
      const column = state.value.find((column) => column.id === columnId);
      if (column) {
        let lastElemnt = column.elements.filter(
          (item) => item.id !== itemId
        );
        column.elements = [
          ...lastElemnt,
          { id: element.id, title: element.title, desc: element.desc },
        ];
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
