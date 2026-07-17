import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router';
import App from './App.tsx';
import { CaseStudyPage } from './components/render-case-study.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/casestudy' element={<CaseStudyPage />} />
    </Routes>
  </BrowserRouter>
)
