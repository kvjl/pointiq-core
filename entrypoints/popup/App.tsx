import { AddCardButton } from "./components/AddCardButton";
import "./App.css";
import CardList from "./components/CardList";
import { Sidebar } from "./components/Sidebar";
import SmartPickView from "./components/SmartPickView";

const TABS = { WALLET: "wallet", CHECK: "check" };

export default function App() {
  const [tab, setTab] = useState<string>(TABS.WALLET);

  return (
    <div className="flex">
      <Sidebar tab={tab} onSelect={setTab} />
      <main className="relative flex-col items-center p-4 w-full">
        {tab === TABS.WALLET ? (
          <>
            <CardList />
            <AddCardButton />
          </>
        ) : (
          <SmartPickView />
        )}
      </main>
    </div>
  );
}
