import { TriangleAlert } from "lucide-react";
import PageErrorSection from "../components/notifiers/page-error-section";

const NotFound = () => {
  return (
    <PageErrorSection
      icon={TriangleAlert}
      title="Page not found!"
      subtitle="We couldn't find the page you were looking for. It may have been moved or doesn't exist."
    />
  );
};

export default NotFound;
