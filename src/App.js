import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import QuoteAdd from "./pages/QuoteAdd";
import QuoteDetail from "./pages/QuoteDetail";
import QuotesAll from "./pages/QuotesAll";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <QuotesAll />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <QuoteAdd />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
