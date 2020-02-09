import React from "react";
import PropTypes from "prop-types";

import InfoBlock from "./components/InfoBlock/InfoBlock";

const Content = ({ data }) => {
  const renderContent = () => {
    switch (data.title) {
      case "Main":
        return (
          <>
            <InfoBlock label="Code" text={data.content.code} />
            <InfoBlock
              label="Description"
              text={data.content.description}
              long
            />
          </>
        );
      default:
        return <span>Sorry, no content yet</span>;
    }
  };

  return <>{renderContent()}</>;
};

Content.propTypes = {
  data: PropTypes.object.isRequired
};

export default Content;
