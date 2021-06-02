import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderCours from "./fichiers/headerCours";
import AddBook from "./fichiers/addBook";
import BooksList from "./fichiers/booksList";
import EditBook from "./fichiers/editBook";
import BooksContext from "./context/booksContext";
import useLocalStorage from "./hooks/useLocalStorage";
import EnteteHeader from "../admin/EnteteHeader";
import Footer from "../admin/Footer";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <>
      <EnteteHeader />
      <BrowserRouter>
        <HeaderCours />
        <div className="container main-content content-wrapper">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/headerCours" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route Redirect to="/headerCours" />
            </Switch>
          </BooksContext.Provider>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default AppRouter;
