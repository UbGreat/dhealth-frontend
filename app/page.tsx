import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import DashboardPage from "./dashboard/page";
import LoginForm from "./components/loginform/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Header />
        <div>
          <p>Welcome to DHealth Digital Healthcare Solution powered by:</p>
          <ul>
            <li>IoT</li>
            <li>Blockchain</li>
            <li>AI</li>
          </ul>
          <ul>
            <li>Electronic Healthcare Records</li>
            <li>Emergency Response</li>
            <li>Realtime Healthcare Monitoring and Telemetry</li>
            <li>Healthcare Data Analytics and Intelligence</li>
            <li>Digital Healthcare Insurance and Interventions</li>
          </ul>
          <div>
            <Link href = '/login'>Login to continue</Link>
          </div>
        </div>
        {/* <Sidebar /> */}
        {/* <DashboardPage /> */}
      </main>
    </div>
  );
}
