import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";

import "./index.css";

import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage";
import ChatGpt from "./pages/chatgpt/ChatGpt";
import OneShot from "./pages/oneshot/OneShot";
import SqlAgent from "./pages/sqlagent/SqlAgent";
import Upload from "./pages/upload/Upload";
import Help from "./pages/help/Help";
import BotChat from "./pages/botchat/BotChat";
import Speech from "./pages/speech/Speech";
import Admin from "./pages/admin/Admin";
import DeveloperTools from "./pages/developertools/DeveloperTools";
import SmartAgent from "./pages/smartagent/SmartAgent";
import Summary from "./pages/summary/Summary";
import Evaluator from "./pages/evaluator/Evaluator";
import PitchBook from "./pages/pitchbook/PitchBook";
import VideoGpt from "./pages/video/VideoGpt";

initializeIcons();

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="upload" element={<Upload />} />
                    <Route path="qa" element={<OneShot />} />
                    <Route path="sql" element={<SqlAgent />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="video" element={<VideoGpt />} />
                    <Route path="smartAgent" element={<SmartAgent />} />
                    <Route path="developer" element={<DeveloperTools />} />
                    <Route path="pitchBook" element={<PitchBook />} />
                    <Route path="evaluator" element={<Evaluator />} />
                    {/* <Route path="botChat" element={<BotChat />} /> */}
                    <Route path="speech" element={<Speech />} />
                    <Route path="admin" element={<Admin />} />
                    <Route index element={<ChatGpt />} />
                    <Route path="help" index element={<Help />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
