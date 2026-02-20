import { AddCardButton } from "./components/AddCardButton";
import "./App.css";
import CardList from "./components/CardList";
import { Sidebar } from "./components/Sidebar";
import SmartPickView from "./components/SmartPickView";
import WalletView from "./components/WalletView";

const TABS = { WALLET: "wallet", CHECK: "check" };

export default function App() {
  const [tab, setTab] = useState<string>(TABS.WALLET);

  return (
    <div className="flex">
      <Sidebar tab={tab} onSelect={setTab} />
      <main className="relative items-center p-4 w-full">
        {tab === TABS.WALLET ? (
          <>
            <WalletView />
          </>
        ) : (
          <SmartPickView />
        )}
      </main>
    </div>
  );
}
