import React from "react";
import HeadingText from "../../ui/heading-text";
import FilterPanel from "../../form/filter-panel";

const SidebarContactForm = () => {
  return (
    <div>
      <HeadingText className="mb-2" level={5} heading={3}>
        Because Ordinary Isn’t Enough
      </HeadingText>
      <p className="text-text-secondary mb-8">
        Your travel story deserves more than the expected. Share your vision,
        and we’ll design an experience as unique as you are.
      </p>
      <FilterPanel />
    </div>
  );
};

export default SidebarContactForm;
