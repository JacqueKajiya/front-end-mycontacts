import { AuthProvider } from "./providers/authProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"

function App() {

  return (
    <>
    <GlobalStyle />
    <AuthProvider>
      <RoutesMain />
    </AuthProvider>
    </>
  )
}

export default App
