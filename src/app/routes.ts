import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import SummaryPage from "./pages/summary-page";
import CompanyDetailPage from "./pages/company-detail-page";
import NewHomePage from "./pages/new-home-page";
import NetscanPage from "./pages/netscan-page";
import IndividualRiskPage from "./pages/individual-risk-page";
import BsaSummaryPage from "./pages/bsa-summary-page";
import CrimeCheckOverview from "./pages/crime-check-overview";
import CrimeCheckDetails from "./pages/crime-check-details";
import VehiclearPage from "./pages/vehiclear-page";
import AmlCheckPage from "./pages/aml-check-page";
import NetworkDemoPage from "./pages/network-demo-page";
import RiskTriangulationPage from "./pages/risk-triangulation-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: SummaryPage },
      { path: "new-home", Component: NewHomePage },
      { path: "netscan", Component: NetscanPage },
      { path: "company/:companyId", Component: CompanyDetailPage },
      { path: "individual-risk", Component: IndividualRiskPage },
      { path: "bsa", Component: BsaSummaryPage },
      { path: "crime-check", Component: CrimeCheckOverview },
      { path: "crime-check/details", Component: CrimeCheckDetails },
      { path: "vehiclear", Component: VehiclearPage },
      { path: "aml-check", Component: AmlCheckPage },
      { path: "network-demo", Component: NetworkDemoPage },
      { path: "risk-triangulation", Component: RiskTriangulationPage },
    ],
  },
]);