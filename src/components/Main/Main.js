/* eslint-disable no-lone-blocks */
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
    nameSection: [],
    currentSection: "",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "acknowledgements",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.acknowledgements,
                      });
                      {
                        state.nameSection.indexOf("acknowledgements") !== -1
                          ? dispatch({
                              type: "updateSection",
                              payload: string.acknowledgements,
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.acknowledgements,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Acknowledgements
                  </span>
                  {state.nameSection.indexOf("acknowledgements") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "acknowledgements",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "apireference",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.apireference,
                      });
                      {
                        state.nameSection.indexOf("apireference") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.apireference,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    API Reference
                  </span>

                  {state.nameSection.indexOf("apireference") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "apireference",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "appendix",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.appendix,
                      });

                      {
                        state.nameSection.indexOf("appendix") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.appendix,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Appendix
                  </span>

                  {state.nameSection.indexOf("appendix") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "appendix",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "badges",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.badges,
                      });
                      {
                        state.nameSection.indexOf("badges") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.badges,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Badges
                  </span>

                  {state.nameSection.indexOf("badges") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "badges",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "contact",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.contact,
                      });
                      {
                        state.nameSection.indexOf("contact") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.contact,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Contact
                  </span>

                  {state.nameSection.indexOf("contact") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "contact",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "contributing",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.contributing,
                      });
                      {
                        state.nameSection.indexOf("contributing") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.contributing,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Contributing
                  </span>

                  {state.nameSection.indexOf("contributing") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "contributing",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "contributors",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.contributors,
                      });
                      {
                        state.nameSection.indexOf("contributors") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.contributors,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Contributors
                  </span>

                  {state.nameSection.indexOf("contributors") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "contributors",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "documentation",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.documentation,
                      });
                      {
                        state.nameSection.indexOf("documentation") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.documentation,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Documentation
                  </span>

                  {state.nameSection.indexOf("documentation") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "documentation",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "features",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.features,
                      });
                      {
                        state.nameSection.indexOf("features") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.features,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Features
                  </span>

                  {state.nameSection.indexOf("features") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "features",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "installation",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.installation,
                      });
                      {
                        state.nameSection.indexOf("installation") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.installation,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Installation
                  </span>

                  {state.nameSection.indexOf("installation") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "installation",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "license",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.license,
                      });
                      {
                        state.nameSection.indexOf("license") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.license,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    License
                  </span>

                  {state.nameSection.indexOf("license") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "license",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "logos",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.logos,
                      });
                      {
                        state.nameSection.indexOf("logos") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.logos,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Logo
                  </span>

                  {state.nameSection.indexOf("logos") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "screenshots",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.screenshots,
                      });
                      {
                        state.nameSection.indexOf("screenshots") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.screenshots,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Screenshots
                  </span>

                  {state.nameSection.indexOf("screenshots") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "screenshots",
                        });
                        dispatch({
                          type: "removeValue",
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
                  <span
                    onClick={() => {
                      dispatch({
                        type: "updateCurrentSection",
                        payload: "title",
                      });
                      dispatch({
                        type: "updateValue",
                        payload: string.title,
                      });
                      {
                        state.nameSection.indexOf("title") !== -1
                          ? dispatch({
                              type: "updateSection",
                            })
                          : dispatch({
                              type: "addSection",
                              payload: string.title,
                            });
                      }

                      dispatch({
                        type: "updateOutput",
                      });
                    }}
                    className="w-3/4"
                  >
                    Title and Description
                  </span>

                  {state.nameSection.indexOf("title") !== -1 ? (
                    <button
                      className="focus:outline-none outline-none w-1/4"
                      onClick={() => {
                        dispatch({
                          type: "updateCurrentSection",
                          payload: "title",
                        });
                        dispatch({
                          type: "removeValue",
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
