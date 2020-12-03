import {FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText} from "./Footer.elements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
            </FooterSubscription>
        </FooterContainer> //TODO: 1.46.37
    );
};

export default Footer;
