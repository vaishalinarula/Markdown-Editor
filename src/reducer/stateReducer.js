/* eslint-disable default-case */
export default function stateReducer(state, actionType) {
  switch (actionType.type) {
    case "updateValue":
      return { ...state, value: actionType.payload };
    case "updateCurrentSection":
      return { ...state, currentSection: actionType.payload };
    case "addSection":
      return {
        ...state,
        nameSection: [...state.nameSection, state.currentSection],
        output: [...state.output, state.value],
      };
    case "updateSection":
      let index = state.nameSection.indexOf(state.currentSection);
      let arr = state.output.slice(0, index);
      arr.push(state.value);
      return {
        ...state,
        output: [...arr, ...state.output.slice(index + 1)],
      };
    case "updateOutput":
      return { ...state, finalOutput: state.output.join("\n") };
    case "removeValue":
      let idx = state.nameSection.indexOf(state.currentSection);
      let ar = state.nameSection.slice(0, idx);
      let ar1 = state.output.slice(0, idx);
      return {
        ...state,
        output: [...ar1, ...state.output.slice(idx + 1)],
        nameSection: [...ar, ...state.nameSection.slice(idx + 1)],
      };
  }
}
