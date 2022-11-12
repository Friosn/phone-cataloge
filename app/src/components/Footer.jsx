import React from 'react';

import FooterStyled from '../ui/FooterStyled';

const Footer = () => {
  return (
    <FooterStyled>
      <p>Developed by Franz Ríos Niño</p>
      <div className="icons">
        <a href="https://github.com/Friosn" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1668169251/Icon-set/Social/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBkYXRhLXZpZXctY29tcG9uZW50PSJ0cnVlIiBjbGFzcz0i_jnt6oi.svg"
            alt="GitHub"
            id="git"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-r%C3%ADos-ni%C3%B1o/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1668169370/Icon-set/Social/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOCIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJkLWJsb2NrIiBoZWlnaHQ9IjE4Ij48cGF0aCBkPSJNMy45NCAyQTIgMiAwIDEgMSAyIDBhMiAyIDAgMCAxIDEu_bbibxq.svg"
            alt="Linkedin"
            id="Linkedin"
          />
        </a>
        <a href="https://twitter.com/Frriosn" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1668169251/Icon-set/Social/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzMuNSAyMjIuMyIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48dGl0bGU_VHdpdHRlcjwvdGl0bGU_PHBhdGggZD0iTTI3My41IDI2LjNhMTA5Ljc3IDEwOS43NyAwIDAg_fsyht1.svg"
            alt="Twitter"
            id="Twitter"
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
