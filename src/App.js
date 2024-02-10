import "./App.css";
import React, { lazy, Suspense, createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "./components/navber/Navber";
import Feed from "./components/feed/Feed";
import Notification from "./Notifcation/Notification";
import Error from "./components/Error/Error";
const Search = lazy(() => import("./components/feed/search/Search"));
const Shorts = lazy(() => import("./components/feed/Shorts/Shorts"));
const Singlevideo = lazy(() => import("./components/feed/Singlevideo/Singlevideo"));
const Singlechannel = lazy(() => import("./components/feed/singlechannel/Singlechannel"));
export const usercontext = createContext();

function App() {
  const [scroll, setscroll] = useState(false);
  const [menu, setmenu] = useState(false);
  const [searched, setsearched] = useState("");

  function updatemenu(localmenu) {
    setmenu(localmenu);
  }

  function updatescroll(localscroll) {
    setscroll(localscroll);
  }

  function updatesearched(localsearched) {
    setsearched(localsearched);
  }
  return (
    <usercontext.Provider
      value={{
        menu,
        updatemenu,
        scroll,
        updatescroll,
        searched,
        updatesearched,
      }}
    >
      <BrowserRouter>
        <Navber />
        <Suspense fallback={<h1> Loading... </h1>}>
          {" "}
          <Routes>
            <Route path="/" element={<Feed />} />{" "}
            <Route
              path="/video/:id/channel/:channel"
              element={<Singlevideo />}
            />{" "}
            <Route path="/Shorts" element={<Shorts />} />{" "}
            <Route path="/channel/:name" element={<Singlechannel />} />{" "}
            {/* <Route path="/playlist/:playlistId" element={}/> */}
            <Route path="/search/:Searchid" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Routes>{" "}
        </Suspense>{" "}
        <Notification />
      </BrowserRouter>{" "}
    </usercontext.Provider>
  );
}

export default App;
