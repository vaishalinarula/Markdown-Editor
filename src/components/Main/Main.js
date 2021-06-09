import React from "react";
import { useReducer, useEffect } from "react";
import stateReducer from "../../reducer/stateReducer";
import string from "../../strings";
import MDEditor from "@uiw/react-md-editor";

const Main = () => {
  const initialState = {
    value: "",
    output: [],
    finalOutput: "",
  };
  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <div class="flex p-6">
        <div class="sections w-80" style={{ height: "70vh" }}>
          <div
            class="px-3 pr-4 overflow-y-auto full-screen"
            style={{ height: "70vh" }}
          >
            <ul class="mt-4 mb-12 space-y-3">
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.acknowledgements,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    class="w-3/4"
                  >
                    Acknowledgements
                  </span>
                  if(output.indexOf((string.acknowledgements) !== -1))
                  {
                    <button
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: state.value,
                        });
                      }}
                    >
                      Delete
                    </button>
                  }
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.apireference,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /* dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    API Reference
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.appendix,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Appendix
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.badges,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Badges
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.contact,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Contact
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.contributing,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Contributing
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.contributors,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Contributors
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.documentation,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Documentation
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.features,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Features
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.installation,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Installation
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.license,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    License
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.logos,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Logo
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.screenshots,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /* dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Screenshots
                  </span>
                </div>
              </li>
              <li>
                <div class="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateValue",
                        payload: string.title,
                      });
                      dispatch({
                        type: "updateSection",
                      });
                      dispatch({
                        type: "updateOutput",
                      });
                      /*dispatch({
                        type: "removeValue",
                        payload: state.output,
                      });*/
                    }}
                    class="w-3/4"
                  >
                    Title and Description
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-1 w-100">
          <div class="w-1/2 px-3 full-screen">
            <section
              class="rounded-sm border border-gray-500"
              style={{
                display: "flex",
                position: "relative",
                textAlign: "initial",
                width: "100%",
                height: "70vh",
              }}
            >
              <textarea
                class="rounded-sm border border-gray-500 full-screen w-full bg-gray-800 text-white p-4"
                style={{ height: "70vh", width: "100%" }}
                value={state.value}
                onChange={(e) => {
                  dispatch({ type: "updateValue", payload: e.target.value });
                  dispatch({ type: "updateSection" });
                  dispatch({
                    type: "updateOutput",
                  });
                }}
              ></textarea>
            </section>
          </div>
          <div class="px-3 flex-1">
            <div
              class="border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-y-scroll w-full"
              style={{ height: "70vh", width: "100%" }}
            >
              <MDEditor.Markdown
                source={state.finalOutput}
                class="wmde-markdown wmde-markdown-color full-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
