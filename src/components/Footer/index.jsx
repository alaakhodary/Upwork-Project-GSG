import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import {
  CobyRight,
  DivFlexIcon,
  DivFooter,
  DivGridFooter,
  DivOneSocial,
  DivSocial,
  Href,
  IList,
  Ulist,
} from "./style";

const Footer = () => {
  return (
    <DivFooter>
      <DivGridFooter>
        <div>
          <Ulist>
            <IList>
              <Href href="/#">Accessibility</Href>
            </IList>
            <IList>
              <Href href="/#">Feedback</Href>
            </IList>
            <IList>
              <Href href="/#">Community</Href>
            </IList>
          </Ulist>
        </div>
        <div>
          <Ulist>
            <IList>
              <Href href="/#">About Us</Href>
            </IList>
            <IList>
              <Href href="/#">Feedback</Href>
            </IList>
            <IList>
              <Href href="/#">Accessibility</Href>
            </IList>
          </Ulist>
        </div>
        <div>
          <Ulist>
            <IList>
              <Href href="/#">About Us</Href>
            </IList>
            <IList>
              <Href href="/#">Accessibility</Href>
            </IList>
            <IList>
              <Href href="/#">Community</Href>
            </IList>
          </Ulist>
        </div>
        <div>
          <Ulist>
            <IList>
              <Href href="/#">About Us</Href>
            </IList>
            <IList>
              <Href href="/#">Accessibility</Href>
            </IList>
            <IList>
              <Href href="/#">Community</Href>
            </IList>
          </Ulist>
        </div>
      </DivGridFooter>
      <DivSocial>
        <DivFlexIcon>
          <p>Follow Us</p>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
        </DivFlexIcon>
        <DivFlexIcon>
          <p>Mobile app</p>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
          <DivOneSocial>
            <FacebookOutlinedIcon />
          </DivOneSocial>
        </DivFlexIcon>
      </DivSocial>
      <hr style={{ width: "78rem", marginLeft: "16rem" }} />
      <div>
        <CobyRight>© 2015 - 2023 Upwork® Global Inc.</CobyRight>
      </div>
    </DivFooter>
  );
};

export default Footer;
