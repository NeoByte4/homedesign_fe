import { LoaderCircle } from "lucide-react";
import ContainerLayout from "../layouts/container-layout";

const LoadingSection = ({
  title = "Loading...",
  subtitle = "Please wait while we fetch the latest data.",
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <ContainerLayout className="my-32">
      <div className="flex flex-col items-center text-center">
        <div className="animate-spin text-primary-dark ">
          <LoaderCircle size={48} />
        </div>

        <h1 className="text-2xl font-semibold mb-2 mt-8">{title}</h1>
        {subtitle && <p className="text-text-secondary">{subtitle}</p>}
      </div>
    </ContainerLayout>
  );
};

export default LoadingSection;
