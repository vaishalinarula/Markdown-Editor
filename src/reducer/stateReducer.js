export default function stateReducer(state, actionType) {
  switch (actionType.type) {
    case "updateValue":
      return { ...state, value: actionType.payload };
    case "updateSection":
      return { ...state, output: [...state.output, state.value] };
    case "updateOutput":
      return { ...state, finalOutput: state.output.join("\n") };
    case "removeValue":
      return {
        ...state,
        output: state.output.filter((e) => e !== actionType.payload),
      };
  }
}
