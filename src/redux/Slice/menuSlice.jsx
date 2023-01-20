import { createSlice, current } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuState: false,
    menuOption: [],
    openKey: [],
    openKeyHystory: [],
  },
  reducers: {
    //Abrir y cerrar menu
    eventoMenuOpen: (state, action) => {
      state["openKey"] = action["payload"] ? current(state)["openKeyHystory"] : [];
      state["menuState"] = action["payload"];
    },
    //Cambiar menu
    eventoMenuChange: (state, action) => {
      state["openKey"] = [];
      state["menuOption"] = action["payload"];
    },
    eventoSetKeys: (state, accion) => {
      state["openKey"] = [...accion["payload"]];
    },
    eventoMenuHistoryKey: (state, accion) => {
      state["openKeyHystory"] = [...accion["payload"]];
    },
  },
});

// Action creators are generated for each case reducer function
export const { eventoMenuOpen, eventoMenuChange, eventoSubMenu, eventoSetKeys, eventoMenuHistoryKey } =
  menuSlice.actions;

export default menuSlice.reducer;
