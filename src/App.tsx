import GlobalStyle from "./styles/GlobalStyle";
import { RoutesMain } from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserProvider } from "./contexts/UserContext";
import { ContactsProvider } from "./contexts/ContactsContext";

function App() {

  return (
    <>
    <UserProvider>
      <ContactsProvider>
        <GlobalStyle />
        <ToastContainer/>
        <RoutesMain />
      </ContactsProvider>
    </UserProvider>
    </>
  )
}

export default App
