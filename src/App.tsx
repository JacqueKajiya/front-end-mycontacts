import GlobalStyle from "./styles/GlobalStyle";
import { RoutesMain } from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./providers/authProvider";
import { UserProvider } from "./contexts/UserContext";
import { ContactsProvider } from "./contexts/ContactsContext";

function App() {

  return (
    <>
    <UserProvider>
      <ContactsProvider>
        <GlobalStyle />
        <ToastContainer/>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
      </ContactsProvider>
    </UserProvider>
   
    </>
  )
}

export default App
