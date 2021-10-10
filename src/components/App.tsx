import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import { GlobalStyle } from "../styles/Global";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "../styles/Theme";
import styled, { ThemeProvider } from "styled-components";

const Editor = lazy(() => import("./Editor"));

const Container = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  height: 100vh;
  width: 100%;
`;

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={AppTheme}>
        <Container>
          <Suspense fallback={<span>Loading...</span>}>
            <Switch>
              <Route path="/" exact component={Editor} />
              <Redirect from="/" to="/" />
            </Switch>
          </Suspense>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
