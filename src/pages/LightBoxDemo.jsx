import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const LightBoxDemo = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: "/images/dummy1.png" },
            { src: "/images/dummy2.jpg" },
            { src: "/images/dummy3.jpg" },
          ]}
          plugins={[Thumbnails]}
        />
      </>
    );
}

export default LightBoxDemo;
