import React from "react";
import { useReducer, useEffect } from "react";
import stateReducer from "../../reducer/stateReducer";
import string from "../../strings";
import MDEditor from "@uiw/react-md-editor";
import Header from "../Header/Header";
import Section from "../Section/Section";

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
      <Header props={state} />
      <Section />
      <div className="flex p-6">
        <div className="sections w-80" style={{ height: "70vh" }}>
          <div
            className="px-3 pr-4 overflow-y-auto full-screen"
            style={{ height: "70vh" }}
          >
            <ul className="mt-4 mb-12 space-y-3">
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.acknowledgements) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Acknowledgements
                    </span>
                  ) : (
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
                      className="w-3/4"
                    >
                      Acknowledgements
                    </span>
                  )}
                  {state.output.indexOf(string.acknowledgements) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.acknowledgements,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.apireference) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      API Reference
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      API Reference
                    </span>
                  )}
                  {state.output.indexOf(string.apireference) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.apireference,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.appendix) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Appendix
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Appendix
                    </span>
                  )}
                  {state.output.indexOf(string.appendix) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.appendix,
                        });

                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.badges) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Badges
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Badges
                    </span>
                  )}
                  {state.output.indexOf(string.badges) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.badges,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.contact) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Contact
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Contact
                    </span>
                  )}
                  {state.output.indexOf(string.contact) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.contact,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.contributing) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Contributing
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Contributing
                    </span>
                  )}
                  {state.output.indexOf(string.contributing) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.contributing,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.contributors) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Contributors
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Contributors
                    </span>
                  )}
                  {state.output.indexOf(string.contributors) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.contributors,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.documentation) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Documentation
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Documentation
                    </span>
                  )}
                  {state.output.indexOf(string.documentation) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.documentation,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.features) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Features
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Features
                    </span>
                  )}
                  {state.output.indexOf(string.features) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.features,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.installation) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Installation
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Installation
                    </span>
                  )}
                  {state.output.indexOf(string.installation) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.installation,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.license) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      License
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      License
                    </span>
                  )}
                  {state.output.indexOf(string.license) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.license,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.logos) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Logo
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Logo
                    </span>
                  )}
                  {state.output.indexOf(string.logos) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.logos,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.screenshots) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Screenshots
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Screenshots
                    </span>
                  )}
                  {state.output.indexOf(string.screenshots) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.screenshots,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
              <li>
                <div className="flex justify-between block w-full h-full py-2 px-3 bg-white rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  {state.output.indexOf(string.title) !== -1 ? (
                    <span
                      onClick={() => {
                        return false;
                      }}
                      className="w-3/4"
                    >
                      Title and Description
                    </span>
                  ) : (
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
                      }}
                      className="w-3/4"
                    >
                      Title and Description
                    </span>
                  )}
                  {state.output.indexOf(string.title) !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
                          payload: string.title,
                        });
                        dispatch({
                          type: "updateOutput",
                        });
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  ) : null}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 w-100">
          <div className="w-1/2 px-3 full-screen">
            <section
              className="rounded-sm border border-gray-500"
              style={{
                display: "flex",
                position: "relative",
                textAlign: "initial",
                width: "100%",
                height: "70vh",
              }}
            >
              <textarea
                className="rounded-sm border border-gray-500 full-screen w-full bg-gray-800 text-white p-4"
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
          <div className="px-3 flex-1">
            <div
              id="input"
              className="border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-y-scroll w-full"
              style={{ height: "70vh", width: "100%" }}
            >
              {/* <MDEditor value={state} onChange={onChange} /> */}

              <MDEditor.Markdown
                source={state.finalOutput}
                className="wmde-markdown wmde-markdown-color full-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
