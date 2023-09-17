import { Header } from './components/Header';
import { Main } from './components/Main';
import appContent from './appContent';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Header
        title={appContent.header.title}
        description={appContent.header.description}
      />
      <Main />
      <Footer
        text={appContent.footer.text}
        copyRight={appContent.footer.copyRight}
        githubLink={appContent.footer.githubLink}
      />
    </>
  );
}

export default App;
