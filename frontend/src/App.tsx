import Header from "./components/Header/Header"
import NotificationButton from "./components/NotificationButton/NotificationButton"
import SalesCard from "./components/SalesCard/SalesCard"

function App() {
  return(
    <>
      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>

      <NotificationButton />
    </>
  )
}

export default App
