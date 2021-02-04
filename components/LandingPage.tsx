import RenderSections from "./RenderSections";

interface LandingPageProps {
  page: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ page = {} }) => {
  const { content = [] } = page;
  return <RenderSections sections={content} />;
};

export default LandingPage;
